require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://boldest-wider-layer.ethereum-goerli.discover.quiknode.pro/0447a5232535ba5077476c817766ab32a2cbdde8",
      accounts: ["28f5ea1b74dda607d1b080b28614266cc66176c7c35b9a09c3a0a6e75c284c41"],
}
  },
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
 
}