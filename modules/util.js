var _ = require('lodash')
var web3 = require('web3')
var time = require('./time.js')

module.exports = {
    network: {
        isTestingNetwork: function (network) {
            return network == 'test' || network == 'develop' || network == 'development'
        }
    },
    config: {
        getAccountValue: function (account, accounts) {
            return typeof account === 'number' ? accounts[account] : account
        },
        getWeiValue: function (params) {
            return web3.utils.toWei(params[0], params[1])
        },
        getDurationValue: function (params) {
            return typeof params === 'number' ? params : params[0] * time[params[1]]
        },
        getTimestampValue: function (param) {
            return typeof param === 'number' ? param : time.convert.toUnixTime(param)
        }
    },
    errors: {
        throws: function(error, message) {
            return new Promise((resolve, reject) => {
                if (error.toString().indexOf("invalid opcode") > -1) {
                    return resolve("Expected evm error")
                    } else {
                        throw Error(message + " (" + error + ")") // Different exeption thrown
                    }
            })
        }
    },
    events: {
        get: function(contract, filter) {
            return new Promise((resolve, reject) => {
                var event = contract[filter.event]()
                event.watch()
                event.get((error, logs) => {
                    var log = _.filter(logs, filter)
                    if (log.length > 0) {
                        resolve(log)
                    } else {
                        throw Error("No logs found for " + filter.event)
                    }
                })
                event.stopWatching()
            })
        },
        assert: function(contract, filter) {
            return new Promise((resolve, reject) => {
                var event = contract[filter.event]()
                event.watch()
                event.get((error, logs) => {
                    var log = _.filter(logs, filter)
                    if (log.length == 1) {
                        resolve(log)
                    } else if (log.length > 0) {
                        throw Error("Multiple events found for " + filter.event)
                    } else {
                        throw Error("Failed to find filtered event for " + filter.event)
                    }
                })
                event.stopWatching()
            })
        }
    }
}