import React, { useState } from 'react';
import axios from 'axios';

function Swap() {
  const [swapData, setSwapData] = useState([]);

  const handleGetSwap = async () => {
    try {
      const response = await axios.get('/swap');
      setSwapData(response.data);
    } catch (error) {
      console.error('Error fetching swap data:', error);
    }
  };

  return (
    <div>
      <h2>Swap</h2>
      <button onClick={handleGetSwap}>Get Swap Data</button>
      <div>
        {swapData.map((swap, index) => (
          <div key={index}>
            <p>From: {swap.from}</p>
            <p>Amount0In: {swap.amount0In}</p>
            <p>Amount1In: {swap.amount1In}</p>
            <p>Amount0Out: {swap.amount0Out}</p>
            <p>Amount1Out: {swap.amount1Out}</p>
            <p>To: {swap.to}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Swap;
