import { PrismaClient } from '@prisma/client';
import AppError from '../../errors/AppError';
const prisma = new PrismaClient();
import httpStatus from 'http-status';

export const getAllServicesService = async () => {
  const result = prisma.serviceRecord.findMany();
  return result;
};

export const getServiceByIdService = async (id: string) => {
  const result = prisma.serviceRecord.findUnique({
    where: { serviceId: id },
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service not found');
  }

  return result;
};

export const createServiceService = async (data: any) => {
  const result = prisma.serviceRecord.create({
    data,
  });
  return result;
};

export const completedServiceService = async (id: string, data: any) => {
  const { completionDate } = data;
  const isExist = await prisma.serviceRecord.findUnique({
    where: { serviceId: id },
  });

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service not found');
  }

  const result = prisma.serviceRecord.update({
    where: { serviceId: id },
    data: {
      status: 'done',
      completionDate: new Date(completionDate),
    },
  });
  return result;
};

export const overdueServicesService = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      status: {
        in: ['pending', 'in-progress'],
      },
      serviceDate: {
        lt: sevenDaysAgo,
      },
    },
    orderBy: {
      serviceDate: 'asc',
    },
  });

  return result;
};
