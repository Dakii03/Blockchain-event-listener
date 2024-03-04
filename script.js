const { Network, Alchemy } = require("alchemy-sdk");
require("dotenv").config();
const { ethers } = require("ethers");

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || ""

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
    apiKey: ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
    network: Network.ETH_MAINNET, // Replace with your network.
};
const alchemy = new Alchemy(settings);

//Initialize provider using HTTP endpoint URL
const providerUrl = `https://eth-mainnet.alchemyapi.io/v2/${settings.apiKey}`;
const provider = new ethers.JsonRpcProvider(providerUrl)

async function main() {
    const latestBlock = await alchemy.core.getBlockNumber();
    console.log("The latest block number is", latestBlock);
    

  const blockNumber = await provider.getBlockNumber();
  console.log("The latest block number using ethers.js provider is", blockNumber);
}

main();