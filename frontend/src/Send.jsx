// Send.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Send = () => {
  const [transactionHash, setTransactionHash] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = async () => {
    try {
      const response = await axios.post('/send', { to, amount });
      setTransactionHash(response.data.transactionHash);
    } catch (error) {
      console.error('Error sending transaction:', error);
    }
  };

  return (
    <div>
      <h2>Send Component</h2>
      <div>
        <label htmlFor="to">To:</label>
        <input type="text" id="to" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button onClick={handleSend}>Send Transaction</button>
      {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
    </div>
  );
};

export default Send;
