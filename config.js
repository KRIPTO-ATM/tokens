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
                        start: 'November 27, 2017 12:00:00 GMT+0000',
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
                        duration: [155, 'days'], // Presale - Until May 1, 2018
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
                            tokens: 700,
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
                },
                thirdparty: {}
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
                        start: 'November 27, 2017 12:00:00 GMT+0000',
                        soft: [1000, 'ether'],
                        hard: [20000, 'ether'],
                        accepted: [500, 'finney']
                    },
                    publicsale: {
                        start: 'January 8, 2018 12:00:00 GMT+0000',
                        soft: [5000, 'ether'],
                        hard: [25000, 'ether'],
                        accepted: [40, 'finney']
                    },
                    phases: [{
                        duration: [39, 'days'], // Presale - until January 5, 2018
                        rate: 500,
                        lockupPeriod: [30, 'days'],
                        usesVolumeMultiplier: true
                    }, {
                        duration: [3, 'days'], // Break - until January 8, 2018
                        rate: 0,
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [1, 'days'], // First day - until January 9, 2018
                        rate: 700, // 40% 
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // First week - until January 16, 2018
                        rate: 625, // 25%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Second week - until January 23, 2018
                        rate: 575, // 15%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Third week - until January 30, 2018
                        rate: 550, // 10%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Last week - until February 6, 2018
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
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }, {
                            account: 2, // Operations, team and bounty
                            tokens: 1200,
                            eth: 0,
                            overwriteReleaseDate: true,
                            fixedReleaseDate: 0
                        }, {
                            account: 3, // Wings.ai community
                            tokens: 200,
                            eth: 0,
                            overwriteReleaseDate: true,
                            fixedReleaseDate: 0
                        }, {
                            account: { // DCORP investors 
                                deployed: {
                                    contract: 'UtilityDcorpCrowdsaleProxy'
                                }
                            },
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
                },
                thirdparty: {
                    dcorp: {
                        proxy: {
                            deploy: [
                                { contract: 'UtilityDcorpCrowdsaleProxy' },
                                { contract: 'DRPSMockToken' },
                                { contract: 'DRPUMockToken' }
                            ],
                            setup: {
                                deployed: {
                                    contract: 'UtilityDcorpCrowdsaleProxy'
                                },
                                tokens: {
                                    drps: {
                                        deployed: {
                                            contract: 'DRPSMockToken'
                                        }
                                    },
                                    drpu: {
                                        deployed: {
                                            contract: 'DRPUMockToken'
                                        }
                                    }
                                },
                                factor: {
                                    weight: 5,
                                    contributed: 6
                                }
                            }
                        }
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
                        start: 'November 27, 2017 12:00:00 GMT+0000',
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
                        duration: [155, 'days'], // Presale - Until May 1, 2018
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
                            account: '0x947507e2ff3afdbe723066518a5154da937d2248', // Beneficiary (multisig)
                            tokens: 0,
                            eth: 10000,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }, {
                            account: '0xb036Db53404c5Ae4519D8d8A28bfA60329D90E5F', // Kripto ATM reserve fund
                            tokens: 2500,
                            eth: 0,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }, {
                            account: 2, // Bounty
                            tokens: 700,
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
                },
                thirdparty: {}
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
                        start: 'November 27, 2017 12:00:00 GMT+0000',
                        soft: [1000, 'ether'],
                        hard: [20000, 'ether'],
                        accepted: [500, 'finney']
                    },
                    publicsale: {
                        start: 'January 8, 2018 12:00:00 GMT+0000',
                        soft: [5000, 'ether'],
                        hard: [25000, 'ether'],
                        accepted: [40, 'finney']
                    },
                    phases: [{
                        duration: [39, 'days'], // Presale - until January 5, 2018
                        rate: 500,
                        lockupPeriod: [30, 'days'],
                        usesVolumeMultiplier: true
                    }, {
                        duration: [3, 'days'], // Break - until January 8, 2018
                        rate: 0,
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [1, 'days'], // First day - until January 9, 2018
                        rate: 700, // 40% 
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // First week - until January 16, 2018
                        rate: 625, // 25%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Second week - until January 23, 2018
                        rate: 575, // 15%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Third week - until January 30, 2018
                        rate: 550, // 10%
                        lockupPeriod: 0,
                        usesVolumeMultiplier: false
                    }, {
                        duration: [7, 'days'], // Last week - until February 6, 2018
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
                            account: '0x947507e2ff3afdbe723066518a5154da937d2248', // Beneficiary (multisig)
                            tokens: 0,
                            eth: 10000,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }, {
                            account: '0x5F7caDf6Dcb63BBb59Bec7a3b107C122b80Db6f6', // Founders
                            tokens: 1000,
                            eth: 0,
                            overwriteReleaseDate: false,
                            fixedReleaseDate: 0
                        }, {
                            account: 2, // Operations, team and bounty
                            tokens: 1200,
                            eth: 0,
                            overwriteReleaseDate: true,
                            fixedReleaseDate: 0
                        }, {
                            account: 3, // Wings.ai community
                            tokens: 200,
                            eth: 0,
                            overwriteReleaseDate: true,
                            fixedReleaseDate: 0
                        }, {
                            account: { // DCORP investors 
                                deployed: {
                                    contract: 'KATXDcorpMemberProxy'
                                }
                            },
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
                },
                thirdparty: {
                    dcorp: {
                        proxy: {
                            deploy: {
                                contract: 'KATXDcorpMemberProxy'
                            },
                            setup: {
                                deployed: {
                                    contract: 'KATXDcorpMemberProxy'
                                },
                                tokens: {
                                    drps: '0x3e250a4f78410c29cfc39463a81f14a226690eb4',
                                    drpu: '0xe30e02f049957e2a5907589e06ba646fb2c321ba'
                                },
                                factor: {
                                    weight: 5,
                                    contributed: 4
                                }
                            }
                        }
                    } 
                }
            }
        }
    }
}
  