/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "kovan",
  networks: {
    hardhat: {},
    kovan: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
