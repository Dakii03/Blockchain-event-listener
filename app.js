const { getBlockNumbers, createSigner, createProvider } = require("./script.js")
const express = require('express')
const { ethers } = require("ethers");
const app = express()
const port = 3000
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || ""

app.get('/blocks', async (req, res) => {
  const result = await getBlockNumbers()
  res.send(result)
  //res.send('GET request\n')
})

app.post('/wallet', async (req, res) => {
  try {
      const provider = await createProvider()
      const wallet= await createSigner(PRIVATE_KEY, provider)

      console.log("Wallet Address: ", wallet.address);
      console.log("Provider: ", wallet.provider)

      res.send(`privateKey: ${wallet.privateKey}`)
  } catch (error) {
      res.status(500).send({ error: error.message })
  }
})

app.get('/balance', async (req, res) => {
  try {
    const provider = await createProvider()
    const wallet = await createSigner(PRIVATE_KEY, provider)
    
    const balance = await provider.getBalance(wallet.address)
    console.log(balance.toString())
    
    const newBalance = ethers.formatEther(balance)
    console.log(newBalance)

    res.send({ balance: newBalance });
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
})

app.post('/send', async (req, res) => {
  try {
    const { to, value } = { to: "0x1234567890123456789012345678901234567890", value: "200000000000000000" }
    const wallet = await createSigner(PRIVATE_KEY)
    const transaction = await wallet.sendTransaction({ to, value })
    res.send({ transactionHash: transaction.hash })
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})