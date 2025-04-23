import { PrismaClient } from '@prisma/client';
import { IBike } from './bikeInterface';
import AppError from '../../errors/AppError';
const prisma = new PrismaClient();
import httpStatus from 'http-status';

export const createBikeService = async (data: IBike) => {
  const result = await prisma.bike.create({ data: data });
  return result;
};

export const getAllBikeService = async () => {
  const result = prisma.bike.findMany();
  return result;
};

export const getBikeByIdService = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: { bikeId: id },
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Bike not found');
  }
  return result;
};
