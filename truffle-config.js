module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "5",
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.0", // You can adjust the Solidity version
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
