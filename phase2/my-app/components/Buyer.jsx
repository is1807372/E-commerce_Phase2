import { useState, useEffect } from 'react';
import prisma from '../prisma/client';

const Buyer = () => {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    const fetchBuyers = async () => {
      try {
        const allBuyers = await prisma.buyer.findMany();
        setBuyers(allBuyers);
      } catch (error) {
        console.error('Error fetching buyers:', error);
      }
    };

    fetchBuyers();
  }, []);

  return (
    <div>
      <h1>Buyers</h1>
      <ul>
        {buyers.map((buyer) => (
          <li key={buyer.id}>
            <p>Name: {buyer.name}</p>
            <p>Email: {buyer.email}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buyer;
