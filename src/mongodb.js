// const { MongoClient, ServerApiVersion } = require('mongodb');
// const password = process.env.PASSWORD || ""

// const uri = `mongodb+srv://Damjan:123@testcluster1.l2wbbey.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster1`;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");



//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://Damjan:123@testcluster1.l2wbbey.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster1`);
    console.log("Successfully connected to the MongoDB")

    // const kittySchema = new mongoose.Schema({
    //     from: String,
    //     to: String,
    // });
}