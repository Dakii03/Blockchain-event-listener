# Blockchain event listener

## Overview

This project is a full-stack application that integrates various components of the Ethereum blockchain ecosystem. It includes functionalities to interact with Ethereum smart contracts, monitor blockchain events, store data in a MongoDB database, and expose APIs through an Express.js server.

## Features

- **Alchemy Integration**: Utilizes Alchemy API for blockchain data retrieval and WebSocket connections.
- **Ethereum Interactions**: Implements functions to fetch block numbers, create providers, and sign transactions.
- **MongoDB Integration**: Connects to a MongoDB database to store swap event data.
- **Express.js Server**: Sets up endpoints for handling HTTP requests and interacting with Ethereum contracts.

## Files

- **app.js**: Contains the Express.js server endpoints for fetching balances and managing transactions.
- **contracts.js**: Handles interactions with Ethereum smart contracts and saves swap events to the MongoDB database.
- **script.js**: Configures Alchemy API settings, creates providers, signers, and fetches block numbers.
- **mongodb.js**: Establishes a connection to a MongoDB database and defines a schema for swap events.

## Usage

1. Ensure Node.js, MongoDB, and Ethereum wallets are installed.
2. Set up a MongoDB database and update the connection string in mongodb.js.
3. Configure environment variables for the Alchemy API key and private keys.
4. Run the application using `node app.js` to start the Express server and handle blockchain events or `node contracts.js` for event listener.

## Installation

1. Clone the repository from the main branch.
2. Install dependencies using `yarn add`.
3. Create a `.env` file with your Alchemy API key and private keys.
4. Start the application by running `node app.js or contracts.js`.

## Resources

- Alchemy API Documentation: [Link to Alchemy Docs](https://docs.alchemy.com/)
- Ethereum Developer Resources: [Link to Ethereum Developer Portal](https://ethereum.org/developers/)
- MongoDB Documentation: [Link to MongoDB Docs](https://docs.mongodb.com/)