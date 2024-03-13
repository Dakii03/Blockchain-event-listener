import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Blocks() {
  const [blockData, setBlockData] = useState({ blockNumber: 0, latestBlock: 0 });

  useEffect(() => {
    async function fetchBlockData() {
      try {
        const response = await axios.get('http://localhost:3000/blocks');
        console.log(response.data);
        setBlockData(response.data);
      } catch (error) {
        console.error('Error fetching block data:', error);
      }
    }

    fetchBlockData();
  }, []);

  return (
    <div>
      <h2>Blocks</h2>
      <p>Provider Block Number: {blockData.blockNumber}</p>
      <p>Latest Block Number: {blockData.latestBlock}</p>
    </div>
  );
}

export default Blocks;
