import { Provider, ContractFactory,Contract, types, Wallet } from "zksync-ethers";



async function main(){
    console.log(`Running deploy script to Sepolia`);

    const provider = Provider.getDefaultProvider(types.Network.Sepolia);
    const wallet = new Wallet("<YOUR_PRIVATE_KEY>",provider);

    const conf = require("../artifacts-zk/contracts/DinoTokenAlpha.sol/DinoTokenAlpha.json");
    const abi = conf.abi;
    const bytecode: string = conf.deployedBytecode;

    const factory = new ContractFactory(abi, bytecode, wallet);
    const storage = (await factory.deploy('<ANY_TOKEN_CONSTRUCTION_ARGUMENT>')) as Contract;
    console.log(`Contract address: ${await storage.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
