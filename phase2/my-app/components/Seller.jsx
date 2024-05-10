import { useState, useEffect } from 'react';
import prisma from '../prisma/client';

const Seller = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const allSellers = await prisma.seller.findMany();
        setSellers(allSellers);
      } catch (error) {
        console.error('Error fetching sellers:', error);
      }
    };

    fetchSellers();
  }, []);

  return (
    <div>
      <h1>Sellers</h1>
      <ul>
        {sellers.map((seller) => (
          <li key={seller.id}>
            <p>Name: {seller.name}</p>
            <p>Email: {seller.email}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Seller;
