// pages/stats.jsx

import { useState, useEffect } from 'react';
import prisma from '../lib/prisma';

export default function Stats({ products, buyers }) {
  // State to store statistics
  const [stats, setStats] = useState(null);

  // Fetch statistics when component mounts
  useEffect(() => {
    async function fetchStats() {
      try {
        // Example: Calculate total amount of purchases per product and per year
        const statsData = await prisma.purchase.groupBy({
          by: ['productId', { year: { createdAt: true } }],
          _sum: { quantity: true },
        });
        setStats(statsData);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    }
    fetchStats();
  }, []);

  return (
    <div>
      <h1>Statistics</h1>
      {stats ? (
        <div>
          {/* Render statistics */}
          <h2>Total amount of purchases per product and per year:</h2>
          <ul>
            {stats.map((stat, index) => (
              <li key={index}>
                Product ID: {stat.productId}, Year: {stat.year}, Quantity: {stat._sum.quantity}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading statistics...</p>
      )}
    </div>
  );
}

// Fetch data needed for the page
export async function getServerSideProps() {
  // Example: Fetch products and buyers data from the database
  const products = await prisma.product.findMany();
  const buyers = await prisma.buyer.findMany();

  return {
    props: {
      products,
      buyers,
    },
  };
}
