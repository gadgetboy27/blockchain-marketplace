// scripts/deploy.js
const { ethers } = require('ethers');

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log('Deploying contracts with the account:', deployer.address);
  
    const Marketplace = await ethers.getContractFactory('Marketplace');
    const marketplace = await Marketplace.deploy();
  
    console.log('Marketplace deployed to:', marketplace.address);
  }
  
  main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
  });
  