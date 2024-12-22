import { deployContract } from "../../utils";

import { ethers } from "ethers";

// Deploy a Token contract
export default async function () {
  const contractArtifactName = "DinoTokenAlpha";
  const constructorArguments = [ethers.parseEther(".02").toString()];
  await deployContract(contractArtifactName, constructorArguments);
}
