var truffle = require('../truffle')
var config = require('../config')
var util = require('../modules/util')
var dcorp = require('../modules/thirdparty/dcorp/deploy')

// Contracts
var Whitelist = artifacts.require('Whitelist')

// Dynamic contracts
var SecurityToken
var SecurityCrowdsale
var UtilityToken
var UtilityCrowdsale
var TokenChanger

// Testing contracts
var Accounts = artifacts.require('Accounts')

// Events
var preDeploy = () => Promise.resolve()
var postDeploy = () => Promise.resolve()

// Deploy
var deploy = async function(deployer, network, accounts, config) {
  
  // Setup
  util.setArtifacts(artifacts)
  util.setAccounts(accounts)
  dcorp.setArtifacts(artifacts)
  dcorp.setDeployer(deployer)

  // Dynamic artifacts
  SecurityToken = artifacts.require(config.security.token.contract)
  UtilityToken = artifacts.require(config.utility.token.contract)
  TokenChanger = artifacts.require(config.tokenChanger.contract)
  SecurityCrowdsale = artifacts.require(config.security.crowdsale.contract)
  UtilityCrowdsale = artifacts.require(config.utility.crowdsale.contract)

  // Events
  if (await util.network.isTestingNetwork(network)) {
    preDeploy = async function () {
      await deployer.deploy(Accounts, accounts)
    }
  } else if (network == 'main') {
    postDeploy = async function () {
      let securityToken = await SecurityToken.deployed()
      let utilityToken = await UtilityToken.deployed()
      await securityToken.removeOwner(deployingAccount)
      await utilityToken.removeOwner(deployingAccount)
    }
  }

  // Before deploying
  await preDeploy()

  // Dcorp
  await dcorp.deploy(config)

  // Deploy Whitelist
  await deployer.deploy(Whitelist)
  let whitelist = await Whitelist.deployed()

  // Deploy tokens
  await deployer.deploy(UtilityToken)
  
  // Deploy security
  await deployer.deploy(SecurityToken)
  await deployer.deploy(SecurityCrowdsale)

  let securityToken = await SecurityToken.deployed()
  let securityCrowdsale = await SecurityCrowdsale.deployed()
  
  await setupCrowdsale(
    securityCrowdsale, 
    securityToken, 
    whitelist, 
    config.precision, 
    config.security.crowdsale, 
    accounts)

  // Deploy utility
  await deployer.deploy(UtilityToken)
  await deployer.deploy(UtilityCrowdsale)

  let utilityToken = await UtilityToken.deployed()
  let utilityCrowdsale = await UtilityCrowdsale.deployed()
  
  await setupCrowdsale(
    utilityCrowdsale, 
    utilityToken, 
    whitelist, 
    config.precision, 
    config.utility.crowdsale, 
    accounts)

  // Deploy token changer
  await deployer.deploy(TokenChanger, securityToken.address, utilityToken.address)
  let tokenChanger = await TokenChanger.deployed()

  // Setup token changer
  if (typeof config.tokenChanger.authentication.whitelist === 'object') {
    await tokenChanger.setupWhitelist(
      typeof config.tokenChanger.authentication.whitelist.address === 'string' ? config.tokenChanger.authentication.whitelist.address : whitelist.address, 
      config.tokenChanger.authentication.whitelist.require)    
  }

  await tokenChanger.deploy()

  // Configure security token
  await securityToken.addOwner(tokenChanger.address)
  await securityToken.addOwner(securityCrowdsale.address)
  await securityToken.registerObserver(tokenChanger.address)

  // Configure utility token
  await utilityToken.addOwner(tokenChanger.address)
  await utilityToken.addOwner(utilityCrowdsale.address)
  await utilityToken.registerObserver(tokenChanger.address)

  // Dcorp
  await dcorp.setup(config)

  // After deploying
  await postDeploy()
}

// Configure crowdsale
var setupCrowdsale = async function(crowdsale, token, whitelist, precision, config, accounts) {
  let tokenDecimals = await token.decimals.call()

  await crowdsale.setup(
    util.config.getTimestampValue(config.presale.start),
    token.address,
    Math.pow(10, tokenDecimals.toNumber()),
    Math.pow(10, precision),
    util.config.getWeiValue(config.presale.soft),
    util.config.getWeiValue(config.presale.hard),
    util.config.getWeiValue(config.presale.accepted),
    util.config.getWeiValue(config.publicsale.soft),
    util.config.getWeiValue(config.publicsale.hard),
    util.config.getWeiValue(config.publicsale.accepted))

  await crowdsale.setupPhases(
    config.baseRate,
    Array.from(config.phases, val => val.rate), 
    Array.from(config.phases, val => util.config.getDurationValue(val.duration)), 
    Array.from(config.phases, val => util.config.getDurationValue(val.lockupPeriod)),
    Array.from(config.phases, val => val.usesVolumeMultiplier))

  await crowdsale.setupVolumeMultipliers(
    Array.from(config.volumeMultipliers, val => val.rate), 
    Array.from(config.volumeMultipliers, val => val.lockupPeriod), 
    Array.from(config.volumeMultipliers, val => util.config.getWeiValue(val.threshold)))

  await crowdsale.setupStakeholders(
    Array.from(config.stakes.stakeholders, val => util.config.getAccountValue(val.account)), 
    Array.from(config.stakes.stakeholders, val => val.eth), 
    Array.from(config.stakes.stakeholders, val => val.tokens),
    Array.from(config.stakes.stakeholders, val => val.overwriteReleaseDate),
    Array.from(config.stakes.stakeholders, val => util.config.getTimestampValue(val.fixedReleaseDate)),
    Array.from(config.stakes.tokenReleasePhases, val => val.percentage),
    Array.from(config.stakes.tokenReleasePhases, val => util.config.getDurationValue(val.vestingPeriod)))

  if (typeof config.authentication.whitelist === 'object') {
    await crowdsale.setupWhitelist(
      typeof config.authentication.whitelist.address === 'string' ? config.authentication.whitelist.address : whitelist.address, 
      config.authentication.whitelist.require)    
  }

  await crowdsale.deploy()
}

module.exports = function(deployer, network, accounts) {
  return deployer.then(async () => await deploy(deployer, network, accounts, config.network[network]))
}