require("dotenv").config();
const { Network, Alchemy } = require("alchemy-sdk");
const { ethers } = require("ethers");

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || "";
const ALCHEMY_MAINNET_API_KEY =  process.env.ALCHEMY_MAINNET_API_KEY || "";

const settings = {
  apiKey: ALCHEMY_API_KEY, 
  apiMainnetKey: ALCHEMY_MAINNET_API_KEY,
  network: Network.ETH_SEPOLIA, 
  networkMainnet: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

async function createProvider(apiKey) {
  const providerUrl = `https://${settings.network}.g.alchemy.com/v2/${apiKey}`
  const provider = new ethers.JsonRpcProvider(providerUrl)

  return provider;
}

async function createWebSocketProvider(apiKey) {
  try {
    const provider = new ethers.WebSocketProvider(`wss://${settings.networkMainnet}.g.alchemy.com/v2/${apiKey}`);
    return provider;
  } catch(err) {
    console.log(err)
  }
}

async function getBlockNumbers() {
  const provider = await createProvider(settings.apiKey)
    
  const latestBlock = await alchemy.core.getBlockNumber()
  const blockNumber = await provider.getBlockNumber()

  return { latestBlock, blockNumber };
}

async function createSigner(privateKey, provider) {
  const wallet = new ethers.Wallet(privateKey, provider);

  return wallet;
}

module.exports = { getBlockNumbers, createSigner, createProvider, createWebSocketProvider, settings, alchemy };