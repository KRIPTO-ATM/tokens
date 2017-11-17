module.exports = {
    network: {
        test: {
            precision: 4, // Amount of decimals
            tokenChanger: {
                contract: 'SpecializedTokenChangerProxy',
                authentication: {
                    whitelist: {
                        require: true
                    }
                }
            },
            security: {
                token: {
                    contract: 'SecurityTokenProxy'
                },
                crowdsale: {
                    contract: 'SecurityCrowdsaleProxy',
                    baseRate: 500,
                    authentication: {
                        whitelist: {
                            require: true
                        }
                    },
                    presale: {
                        start: 'November 22, 2017 12:00:00 GMT+0000',
                        soft: [1000, 'ether'],
                        hard: [20000, 'ether'],
                        accepted: [500, 'finney']
                    },
                    publicsale: {
                        start: 'May 1, 2018 12:00:00 GMT+0000',
                        soft: [5000, 'ether'],
                        hard: [25000, 'ether'],
                        accepted: [40, 'finney']
                    },
                    phases: [{
                        duration: [160, 'days'], // Presale - Until May 1, 2018
                        rate: 500,
                        lockupPeriod: [30, 'days'],
                        usesVolumeMultiplier: true
                    }, {
                        duration: [1, 'days'], // First day
                        rate: 700, // 40% 
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // First week
                        rate: 625, // 25%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Second week
                        rate: 575, // 15%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Third week
                        rate: 550, // 10%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Last week
                        rate: 525, // 5%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }],
                    volumeMultipliers: [{
                        rate: 4000, // 1:700
                        lockupPeriod: 0,
                        threshold: [1, 'ether']
                    }, {
                        rate: 4500, // 1:725
                        lockupPeriod: 0,
                        threshold: [30, 'ether']
                    }, {
                        rate: 5000, // 1:750
                        lockupPeriod: 5000,
                        threshold: [100, 'ether']
                    }, {
                        rate: 5500, // 1:775
                        lockupPeriod: 10000,
                        threshold: [500, 'ether']
                    }, {
                        rate: 6000, // 1:800
                        lockupPeriod: 15000,
                        threshold: [1000, 'ether']
                    }, {
                        rate: 6500, // 1:825
                        lockupPeriod: 20000,
                        threshold: [2500, 'ether']
                    }],
                    stakes: {
                        stakeholders: [{
                            account: 0, // Beneficiary 
                            tokens: 0,
                            eth: 10000,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }, {
                            account: 1, // Kripto ATM reserve fund
                            tokens: 2500,
                            eth: 0,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }, {
                            account: 2, // Bounty
                            tokens: 500,
                            eth: 0,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }],
                        tokenReleasePhases: [{
                            percentage: 2500,
                            vestingPeriod: [90, 'days']
                        }, {
                            percentage: 2500,
                            vestingPeriod: [180, 'days']
                        }, {
                            percentage: 2500,
                            vestingPeriod: [270, 'days']
                        }, {
                            percentage: 2500,
                            vestingPeriod: [360, 'days']
                        }]
                    }
                }
            },
            utility: {
                token: {
                    contract: 'UtilityTokenProxy'
                },
                crowdsale: {
                    contract: 'UtilityCrowdsaleProxy',
                    baseRate: 500,
                    authentication: {},
                    presale: {
                        start: 'November 22, 2017 12:00:00 GMT+0000',
                        soft: [1000, 'ether'],
                        hard: [20000, 'ether'],
                        accepted: [500, 'finney']
                    },
                    publicsale: {
                        start: 'December 13, 2017 12:00:00 GMT+0000',
                        soft: [5000, 'ether'],
                        hard: [25000, 'ether'],
                        accepted: [40, 'finney']
                    },
                    phases: [{
                        duration: [21, 'days'], // Presale - Until Dec 13, 2017
                        rate: 500,
                        lockupPeriod: [30, 'days'],
                        usesVolumeMultiplier: true
                    }, {
                        duration: [1, 'days'], // First day
                        rate: 700, // 40% 
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // First week
                        rate: 625, // 25%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Second week
                        rate: 575, // 15%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Third week
                        rate: 550, // 10%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Last week
                        rate: 525, // 5%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }],
                    volumeMultipliers: [{
                        rate: 4000, // 1:700
                        lockupPeriod: 0,
                        threshold: [1, 'ether']
                    }, {
                        rate: 4500, // 1:725
                        lockupPeriod: 0,
                        threshold: [30, 'ether']
                    }, {
                        rate: 5000, // 1:750
                        lockupPeriod: 5000,
                        threshold: [100, 'ether']
                    }, {
                        rate: 5500, // 1:775
                        lockupPeriod: 10000,
                        threshold: [500, 'ether']
                    }, {
                        rate: 6000, // 1:800
                        lockupPeriod: 15000,
                        threshold: [1000, 'ether']
                    }, {
                        rate: 6500, // 1:825
                        lockupPeriod: 20000,
                        threshold: [2500, 'ether']
                    }],
                    stakes: {
                        stakeholders: [{
                            account: 0, // Beneficiary 
                            tokens: 0,
                            eth: 10000,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }, {
                            account: 1, // Founders
                            tokens: 1000,
                            eth: 0,
                            overwriteReleaseDate: true,
                            fixedReleaseDate: 'November 22, 2018 12:00:00 GMT+0000'
                        }, {
                            account: 2, // Operations, team and bounty
                            tokens: 1200,
                            eth: 0,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }, {
                            account: 3, // Wings.ai community
                            tokens: 200,
                            eth: 0,
                            overwriteReleaseDate: true,
                            fixedReleaseDate: 0
                        }, {
                            account: 4, // DCORP investors
                            tokens: 100,
                            eth: 0,
                            overwriteReleaseDate: true,
                            fixedReleaseDate: 0
                        }],
                        tokenReleasePhases: [{
                            percentage: 2500,
                            vestingPeriod: [90, 'days']
                        }, {
                            percentage: 2500,
                            vestingPeriod: [180, 'days']
                        }, {
                            percentage: 2500,
                            vestingPeriod: [270, 'days']
                        }, {
                            percentage: 2500,
                            vestingPeriod: [360, 'days']
                        }]
                    }
                }
            }
        }, 
        main: {
            precision: 4, // Amount of decimals
            tokenChanger: {
                contract: 'KATMTokenChanger',
                authentication: {
                    whitelist: {
                        require: true
                    }
                }
            },
            security: {
                token: {
                    contract: 'KATMToken'
                },
                crowdsale: {
                    contract: 'KATMCrowdsale',
                    baseRate: 500,
                    authentication: {
                        whitelist: {
                            require: true
                        }
                    },
                    presale: {
                        start: 'November 22, 2017 12:00:00 GMT+0000',
                        soft: [1000, 'ether'],
                        hard: [20000, 'ether'],
                        accepted: [500, 'finney']
                    },
                    publicsale: {
                        start: 'May 1, 2018 12:00:00 GMT+0000',
                        soft: [5000, 'ether'],
                        hard: [25000, 'ether'],
                        accepted: [40, 'finney']
                    },
                    phases: [{
                        duration: [160, 'days'], // Presale - Until May 1, 2018
                        rate: 500,
                        lockupPeriod: [30, 'days'],
                        usesVolumeMultiplier: true
                    }, {
                        duration: [1, 'days'], // First day
                        rate: 700, // 40% 
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // First week
                        rate: 625, // 25%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Second week
                        rate: 575, // 15%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Third week
                        rate: 550, // 10%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Last week
                        rate: 525, // 5%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }],
                    volumeMultipliers: [{
                        rate: 4000, // 1:700
                        lockupPeriod: 0,
                        threshold: [1, 'ether']
                    }, {
                        rate: 4500, // 1:725
                        lockupPeriod: 0,
                        threshold: [30, 'ether']
                    }, {
                        rate: 5000, // 1:750
                        lockupPeriod: 5000,
                        threshold: [100, 'ether']
                    }, {
                        rate: 5500, // 1:775
                        lockupPeriod: 10000,
                        threshold: [500, 'ether']
                    }, {
                        rate: 6000, // 1:800
                        lockupPeriod: 15000,
                        threshold: [1000, 'ether']
                    }, {
                        rate: 6500, // 1:825
                        lockupPeriod: 20000,
                        threshold: [2500, 'ether']
                    }],
                    stakes: {
                        stakeholders: [{
                            account: 0, // Beneficiary 
                            tokens: 0,
                            eth: 10000,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }, {
                            account: 1, // Kripto ATM reserve fund
                            tokens: 2500,
                            eth: 0,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }, {
                            account: 2, // Bounty
                            tokens: 500,
                            eth: 0,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }],
                        tokenReleasePhases: [{
                            percentage: 2500,
                            vestingPeriod: [90, 'days']
                        }, {
                            percentage: 2500,
                            vestingPeriod: [180, 'days']
                        }, {
                            percentage: 2500,
                            vestingPeriod: [270, 'days']
                        }, {
                            percentage: 2500,
                            vestingPeriod: [360, 'days']
                        }]
                    }
                }
            },
            utility: {
                token: {
                    contract: 'KATXToken'
                },
                crowdsale: {
                    contract: 'KATXCrowdsale',
                    baseRate: 500,
                    authentication: {},
                    presale: {
                        start: 'November 22, 2017 12:00:00 GMT+0000',
                        soft: [1000, 'ether'],
                        hard: [20000, 'ether'],
                        accepted: [500, 'finney']
                    },
                    publicsale: {
                        start: 'December 13, 2017 12:00:00 GMT+0000',
                        soft: [5000, 'ether'],
                        hard: [25000, 'ether'],
                        accepted: [40, 'finney']
                    },
                    phases: [{
                        duration: [21, 'days'], // Presale - Until Dec 13, 2017
                        rate: 500,
                        lockupPeriod: [30, 'days'],
                        usesVolumeMultiplier: true
                    }, {
                        duration: [1, 'days'], // First day
                        rate: 700, // 40% 
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // First week
                        rate: 625, // 25%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Second week
                        rate: 575, // 15%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Third week
                        rate: 550, // 10%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Last week
                        rate: 525, // 5%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }],
                    volumeMultipliers: [{
                        rate: 4000, // 1:700
                        lockupPeriod: 0,
                        threshold: [1, 'ether']
                    }, {
                        rate: 4500, // 1:725
                        lockupPeriod: 0,
                        threshold: [30, 'ether']
                    }, {
                        rate: 5000, // 1:750
                        lockupPeriod: 5000,
                        threshold: [100, 'ether']
                    }, {
                        rate: 5500, // 1:775
                        lockupPeriod: 10000,
                        threshold: [500, 'ether']
                    }, {
                        rate: 6000, // 1:800
                        lockupPeriod: 15000,
                        threshold: [1000, 'ether']
                    }, {
                        rate: 6500, // 1:825
                        lockupPeriod: 20000,
                        threshold: [2500, 'ether']
                    }],
                    stakes: {
                        stakeholders: [{
                            account: 0, // Beneficiary 
                            tokens: 0,
                            eth: 10000,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }, {
                            account: 1, // Founders
                            tokens: 1000,
                            eth: 0,
                            overwriteReleaseDate: true,
                            fixedReleaseDate: 'November 22, 2018 12:00:00 GMT+0000'
                        }, {
                            account: 2, // Operations, team and bounty
                            tokens: 1200,
                            eth: 0,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }, {
                            account: 3, // Wings.ai community
                            tokens: 200,
                            eth: 0,
                            overwriteReleaseDate: true,
                            fixedReleaseDate: 0
                        }, {
                            account: 4, // DCORP investors
                            tokens: 100,
                            eth: 0,
                            overwriteReleaseDate: true,
                            fixedReleaseDate: 0
                        }],
                        tokenReleasePhases: [{
                            percentage: 2500,
                            vestingPeriod: [90, 'days']
                        }, {
                            percentage: 2500,
                            vestingPeriod: [180, 'days']
                        }, {
                            percentage: 2500,
                            vestingPeriod: [270, 'days']
                        }, {
                            percentage: 2500,
                            vestingPeriod: [360, 'days']
                        }]
                    }
                }
            }
        }
    }
}
  