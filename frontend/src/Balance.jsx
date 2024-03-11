import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Balance = () => {
  const [balance, setBalance] = useState('');

  useEffect(() => {
    // Fetch balance data when component mounts
    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    try {
      const response = await axios.get('/balance');
      setBalance(response.data.balance);
      
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  return (
    <div>
      <h2>Balance Component</h2>
      <button onClick={fetchBalance}>Fetch Balance</button>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default Balance;
