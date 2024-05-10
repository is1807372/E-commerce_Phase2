// buyer.js

import prisma from '../path/to/prisma/client';

export async function createBuyer(data) {
  return await prisma.buyer.create({ data });
}

export async function getBuyerById(id) {
  return await prisma.buyer.findUnique({ where: { id } });
}

// Implement other CRUD operations as needed
