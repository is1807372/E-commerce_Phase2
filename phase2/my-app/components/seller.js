// seller.js

import prisma from '../path/to/prisma/client';

export async function createSeller(data) {
  return await prisma.seller.create({ data });
}

export async function getSellerById(id) {
  return await prisma.seller.findUnique({ where: { id } });
}

// Implement other CRUD operations as needed
