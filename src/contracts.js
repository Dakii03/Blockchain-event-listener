const ethers = require("ethers");
const ABI = require("../abi/abi.json");
const { getBlockNumbers, createSigner, createProvider, createWebSocketProvider } = require("./script.js")
require("dotenv").config();
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || ""


async function getSwap(){
    const usdcAddress = "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852"; // USDC Contract
    const provider = await createWebSocketProvider(ALCHEMY_API_KEY);
    

    const contract = await new ethers.Contract(usdcAddress, ABI, provider);

    contract.on("Swap", (sender, amount0In, amount1In, amount0Out, amount1Out, to) => {
        let swapEvent = {
            from: sender,
            amount0In: amount0In,
            amount1In: amount1In,
            amount0Out: amount0Out,
            amount1Out: amount1Out,
            to: to,
        }
        console.log(swapEvent);
    });

    console.log("Initialized event listener");
}

getSwap()