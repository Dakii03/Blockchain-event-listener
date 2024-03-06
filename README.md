# Blockchain event listener

This is a simple Express.js API server that interacts with the Ethereum blockchain. It allows users to perform basic wallet operations such as checking account balance, sending transactions, and retrieving block numbers.

## Setup

1. Clone the repository:

```bash
git clone https://github.com/Dakii03/Blockchain-event-listener.git
```

2. Navigate into the project directory:

```bash
cd ../Blockchain-event-listener
```

3. Install dependencies:

```bash
yarn add
```

4. Create a `.env` file in the root directory:

```plaintext
Put here your own Alchemy API key and private keys.
```

## Usage

1. Start the server:

```bash
node app.js
```

2. Make requests to the API endpoints:

- `GET /blocks`: Get the latest block numbers.
- `POST /wallet`: Create a new wallet using the provided private key.
- `GET /balance`: Get the balance of the wallet associated with `PRIVATE_KEY_1`.
- `POST /send`: Send Ethereum from the wallet associated with `PRIVATE_KEY_1` to the specified address.

## API Endpoints

### GET /blocks

Returns the latest block numbers from the Ethereum blockchain.

### POST /wallet

Creates a new wallet using the provided private key (`PRIVATE_KEY_1`). Returns the wallet address and private key.

### GET /balance

Gets the balance of the wallet associated with `PRIVATE_KEY_1`.

### POST /send

Sends Ethereum from the wallet associated with `PRIVATE_KEY_1` to the specified address. Requires a JSON payload with `to` (recipient address) and `amount` fields.

## Dependencies

- `express`: Web framework for Node.js.
- `ethers`: Ethereum library for interacting with the Ethereum blockchain.
- `alchemy-sdk`: SDK for interacting with the Alchemy API.
