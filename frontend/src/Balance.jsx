import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Balance() {
  const [balance, setBalance] = useState('');

  useEffect(() => {
    async function fetchBalance() {
      try {
        const response = await axios.get('http://localhost:3000/balance'); 
        setBalance(response.data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    }

    fetchBalance();
  }, []);

  return (
    <div>
      <h2>Balance</h2>
      <p>{balance}</p>
    </div>
  );
}

export default Balance;
