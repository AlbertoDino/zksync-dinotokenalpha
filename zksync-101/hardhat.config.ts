import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-deploy";

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  zksolc: {
    // By not specifying any options, we are using the default settings of zksolc.
  },
  solidity: {
    version: "0.8.24",
    eraVersion: "1.0.1" //optional. Compile contracts with EraVM compiler
  },
  defaultNetwork: "zkSyncSepoliaTestnet",
  networks: {
    zkSyncSepoliaTestnet: {
      url: "https://sepolia.era.zksync.dev",
      ethNetwork: "sepolia",
      zksync: true,
      //verifyURL: "https://explorer.sepolia.era.zksync.dev/contract_verification",
    },
  },
};
export default config;

