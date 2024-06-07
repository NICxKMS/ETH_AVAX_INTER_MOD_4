require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const FORK_FUJI = false;
const FORK_MAINNET = false;
let forkingData = undefined;

if (FORK_MAINNET) {
  forkingData = {
    url: "https://api.avax.network/ext/bc/C/rpcc",
  };
}
if (FORK_FUJI) {
  forkingData = {
    url: "https://api.avax-test.network/ext/bc/C/rpc",
  };
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: !forkingData ? 43112 : undefined, //Only specify a chainId if we are not forking
      forking: forkingData,
      port: 8546
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: ['18d03350051e2a2b3fa5d163b9c04edb7af9fbedf915196fbb8de13f6f17026d'], // we use a .env file to hide our wallets private key
    },
    mainnet: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: ['18d03350051e2a2b3fa5d163b9c04edb7af9fbedf915196fbb8de13f6f17026d'],
    },
  },
  etherscan: {
    apiKey: 'ZCCMFU3C8K5A9MDNHGXP3YCJWRV5MPJ73S', // we use an .env file to hide our Snowtrace API KEY
  },
};
