import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blocks = () => {
  const [latestBlock, setLatestBlock] = useState(null);
  const [blockNumber, setBlockNumber] = useState(null);

  useEffect(() => {
    // Fetch latest block data when component mounts
    fetchLatestBlock();
  }, []);

  const fetchLatestBlock = async () => {
    try {
      const response = await axios.get('/blocks');
      const { latestBlock, blockNumber } = response.data; 
      setLatestBlock(latestBlock);
      setBlockNumber(blockNumber);
    } catch (error) {
      console.error('Error fetching latest block:', error);
    }
  };

  return (
    <div>
      <h2>Latest Block Information</h2>
      <button onClick={fetchLatestBlock}>Fetch Latest Block</button>
      <ul>
        {latestBlock && blockNumber && (
          <>
            <li>Latest Block: {latestBlock}</li>
            <li>Block Number: {blockNumber}</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Blocks;
