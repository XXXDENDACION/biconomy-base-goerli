import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("Counter");
  const counter = await contract.deploy();

  await counter.deployed();

  console.log("Counter deployed to:", counter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
