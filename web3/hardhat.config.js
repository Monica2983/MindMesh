// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const HOLESKY_RPC_URL = process.env.HOLESKY_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },

    arbitrumSepolia: {
      url: "https://sepolia-rollup.arbitrum.io/rpc",  // Arbitrum Sepolia RPC
      accounts: [PRIVATE_KEY],
      chainId: 421614,
    },
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
