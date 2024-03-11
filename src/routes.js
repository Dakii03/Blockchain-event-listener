const { getBlockNumbers, createSigner, createProvider } = require("./script.js");
const { settings, alchemy } = require('./script.js');
const { ethers } = require("ethers");
const cors = require('cors');
const express = require('express');

const PRIVATE_KEY_1 = process.env.PRIVATE_KEY_1 || "";
const PRIVATE_KEY_2 = process.env.PRIVATE_KEY_2 || "";

const app = express();
app.use(express.json()); // Parse JSON bodies

const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: 'GET,POST', 
};

app.use(cors(corsOptions));;

app.get('/blocks', async (req, res) => {
  const result = await getBlockNumbers();
  res.send(result);
});

app.post('/wallet', async (req, res) => {
  try {
    const provider = await createProvider(settings.apiKey);
    const wallet = await createSigner(PRIVATE_KEY_1, provider);

    console.log("Wallet Address: ", wallet.address);
    console.log("Provider: ", wallet.provider);

    res.send(`privateKey: ${wallet.privateKey}`);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get('/balance', async (req, res) => {
  try {
    const provider = await createProvider(settings.apiKey);
    const wallet = await createSigner(PRIVATE_KEY_1, provider);

    const balance = await provider.getBalance(wallet.address);
    console.log(balance.toString());

    const newBalance = ethers.formatEther(balance);
    console.log(newBalance);

    res.send({ balance: newBalance + ` ${settings.network.toUpperCase()}` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post("/send", async (req, res) => {
  try {
    const { to, amount } = req.body;
    if (!to || !amount) {
      return res.status(400).send({ error: "Missing 'to' or 'amount' in request body" });
    }

    const senderProvider = await createProvider(settings.apiKey);
    const senderWallet = await createSigner(PRIVATE_KEY_1, senderProvider);

    const tx = {
      to: to,
      value: ethers.parseEther(amount.toString()),
    };

    const txResponse = await senderWallet.sendTransaction(tx);
    console.log("Transaction hash:", txResponse.hash);

    res.send({ transactionHash: txResponse.hash });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = app;
