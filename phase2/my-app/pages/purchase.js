// purchase.js

import prisma from '../path/to/prisma/client';

export async function createPurchase(data) {
  return await prisma.purchase.create({ data });
}

// Implement other CRUD operations as needed
