// product.js

import prisma from '../path/to/prisma/client';

export async function createProduct(data) {
  return await prisma.product.create({ data });
}

// Implement other CRUD operations as needed
