import { PrismaClient } from '@prisma/client';
import { ICustomer } from './customerInterface';
import AppError from '../../errors/AppError';
const prisma = new PrismaClient();
import httpStatus from 'http-status';

export const createCustomerService = async (data: ICustomer) => {
  const result = await prisma.customer.create({
    data: data,
  });

  return result;
};

export const getAllCustomerService = async () => {
  const result = prisma.customer.findMany();
  return result;
};

export const getCustomerByIdService = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: { customerId: id },
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Customer not found');
  }

  return result;
};

export const updateCustomerService = async (
  id: string,
  data: Partial<ICustomer>,
) => {
  const isExist = await prisma.customer.findUnique({
    where: { customerId: id },
  });

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Customer not found');
  }

  const result = await prisma.customer.update({
    where: { customerId: id },
    data: data,
  });
  return result;
};

export const deleteCustomerService = async (id: string) => {
  const isExist = await prisma.customer.findUnique({
    where: { customerId: id },
  });

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Customer not found');
  }

  const result = await prisma.customer.delete({
    where: { customerId: id },
  });
  return result;
};
