/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

module.exports = {
  networks: {
    hardhat: {
      // For localhost development
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/2258efa14abb4927b7b145fc3ee4f757`, // Replace with your Infura API key
      accounts: [privateKey],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/2258efa14abb4927b7b145fc3ee4f757`, // Replace with your Infura API key
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
