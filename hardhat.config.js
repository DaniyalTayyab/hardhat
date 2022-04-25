require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY = "E1JbJdqYnE2pC_Y90c6A6RNokBEcE90_";
const ROPSTEN_PRIVATE_KEY =
  "966e19a2bc10d1154601eb65f50bde7611199ca1d8f1349047bc4e27ec62c70a";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    // ehterscan API key, obtain from etherscan.io. allow us to connect with our ether scan account.
    apiKey: "X4U8D269XE4M7QBC7HGZGD3Z5BQCVMUAGJ",
  },
};
