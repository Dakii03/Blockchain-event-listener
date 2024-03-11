const mongoose = require('mongoose');
const pass = process.env.PASSWORD || "";

async function connect() {
    await mongoose.connect(`mongodb+srv://Damjan:${pass}@testcluster1.l2wbbey.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster1`);
    console.log('Connected to the MongoDB successfully');
}

const swapEventSchema = new mongoose.Schema({
    from: String,
    amount0In: Number,
    amount1In: Number,
    amount0Out: Number,
    amount1Out: Number,
    to: String,
});
const SwapEvent = mongoose.model('SwapEvent', swapEventSchema);

module.exports = {SwapEvent, connect};