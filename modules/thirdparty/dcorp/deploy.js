/**
 * Dcorp plugin migration helper
 */
var deployer
var artifacts
var _export = {
    setDeployer: (_deployer) => {
        deployer = _deployer
    },
    setArtifacts: (_artifacts) => {
        artifacts = _artifacts
    },
    proxy: {
        deploy: async (deployer, artifacts, config) => {
            let tasks = []
            config.forEach((i) => {
                let Contract = artifacts.require(i.contract)
                tasks.push(deployer.deploy(Contract))
            })

            await Promise.all(tasks)
        },
        setup: async (crowdsale, token, artifacts, config) => {
            if (typeof config.tokens.drps.deployed === 'object') {
                let DRPSToken = artifacts.require(config.tokens.drps.deployed.contract)
                let drpsToken = await DRPSToken.deployed()
                config.tokens.drps = drpsToken.address
            }
          
            if (typeof config.tokens.drpu.deployed === 'object') {
                let DRPUToken = artifacts.require(config.tokens.drpu.deployed.contract)
                let drpuToken = await DRPUToken.deployed()
                config.tokens.drpu = drpuToken.address
            }
          
            let DcorpProxy = artifacts.require(config.deployed.contract)
            let dcorpProxy = await DcorpProxy.deployed()
          
            await dcorpProxy.setup(
                config.tokens.drps, 
                config.tokens.drpu,
                config.factor.weight,
                config.factor.contributed)
          
            await dcorpProxy.attachCrowdsale(
                crowdsale.address, 
                token.address)
          
            await dcorpProxy.deploy()
        }
    },
    deploy: async (config) => {
        if (typeof config.security.thirdparty.dcorp !== 'undefined') {
            if (typeof config.security.thirdparty.dcorp.proxy !== 'undefined') {
                await _export.proxy.deploy(
                    deployer, artifacts, config.security.thirdparty.dcorp.proxy.deploy)
            }
        }
        
        if (typeof config.utility.thirdparty.dcorp !== 'undefined') {
            if (typeof config.utility.thirdparty.dcorp.proxy !== 'undefined') {
                await _export.proxy.deploy(
                    deployer, artifacts, config.utility.thirdparty.dcorp.proxy.deploy)
            }
        }
    },
    setup: async (config) => {
        if (typeof config.security.thirdparty.dcorp !== 'undefined') {
            if (typeof config.security.thirdparty.dcorp.proxy !== 'undefined') {
                let SecurityToken = artifacts.require(config.security.token.contract)
                let SecurityCrowdsale = artifacts.require(config.security.crowdsale.contract)
                await _export.proxy.setup(
                    await SecurityCrowdsale.deployed(),
                    await SecurityToken.deployed(),
                    artifacts, 
                    config.security.thirdparty.dcorp.proxy.setup)
            }
        }

        if (typeof config.utility.thirdparty.dcorp !== 'undefined') {
            if (typeof config.utility.thirdparty.dcorp.proxy !== 'undefined') {
                let UtilityToken = artifacts.require(config.utility.token.contract)
                let UtilityCrowdsale = artifacts.require(config.utility.crowdsale.contract)
                await _export.proxy.setup(
                    await UtilityCrowdsale.deployed(),
                    await UtilityToken.deployed(),
                    artifacts, 
                    config.utility.thirdparty.dcorp.proxy.setup)
            }
        }
    }
}

module.exports = _export