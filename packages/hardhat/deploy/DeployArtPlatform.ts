import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys the ArtPlatform contract with an initial reward amount
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployArtPlatform: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Set initial reward amount to 100 tokens (with 18 decimals)
  const initialReward = hre.ethers.parseEther("100");

  await deploy("ArtPlatform", {
    from: deployer,
    // Contract constructor arguments - expects uint256 initialReward
    args: [initialReward],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const artPlatform = await hre.ethers.getContract<Contract>("ArtPlatform", deployer);
  console.log("🎨 ArtPlatform deployed! Initial reward amount:", await artPlatform.rewardAmount());
  console.log("📊 Max NFT Supply:", await artPlatform.MAX_NFT_SUPPLY());
  console.log("💰 Max Token Supply:", await artPlatform.MAX_TOKEN_SUPPLY());
};

export default deployArtPlatform;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags ArtPlatform
deployArtPlatform.tags = ["ArtPlatform"];
