const hre = require("hardhat");

const main = async () => {
  const dogeFactory = await hre.ethers.getContractFactory('DogeCoin')
  const dogeContract = await dogeFactory.deploy()
  await dogeContract.deployed()
  console.log(`DogeCoin Deployed at ${dogeContract.address}`)

  const linkFactory = await hre.ethers.getContractFactory('Link')
  const linkContract = await linkFactory.deploy()
  await linkContract.deployed()
  console.log(`Link Deployed at ${linkContract.address}`)

  const daiFactory = await hre.ethers.getContractFactory('Dai')
  const daiContact = await daiFactory.deploy()
  await daiContact.deployed()
  console.log(`Dai Deployed at ${daiContact.address}`)

  const usdcFactory = await hre.ethers.getContractFactory('Usdc')
  const usdcContract = await usdcFactory.deploy()
  await usdcContract.deployed()
  console.log(`Usdc Deployed at ${usdcContract.address}`)
}

(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})();