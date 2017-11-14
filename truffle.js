module.exports = {
  networks: {
    test: {
      host: "localhost",
      port: 8545,
      gas: 6000000,
      network_id: "*" // Match any network id
    }
  },
  solc: {
		optimizer: {
			enabled: true,
			runs: 200
		}
	}
}
