import { catchAsync } from '../../utils/catchAsync';
import {
  completedServiceService,
  createServiceService,
  getAllServicesService,
  getServiceByIdService,
  overdueServicesService,
} from './serviceService';

export const getAllServicesController = catchAsync(async (req, res) => {
  const result = await getAllServicesService();

  res.status(200).json({
    success: true,
    message: 'Service records fetched successfully',
    data: result,
  });
});

export const getServiceByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getServiceByIdService(id);

  res.status(200).json({
    success: true,
    message: 'Service record fetched successfully',
    data: result,
  });
});

export const createServiceController = catchAsync(async (req, res) => {
  const result = await createServiceService(req.body);

  res.status(200).json({
    success: true,
    message: 'Service record created successfully',
    data: result,
  });
});

export const completedServiceController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await completedServiceService(id, req.body);

  res.status(200).json({
    success: true,
    message: 'Service marked as completed',
    data: result,
  });
});

export const overdueServicesController = catchAsync(async (req, res) => {
  const result = await overdueServicesService();

  res.status(200).json({
    success: true,
    message: 'Overdue or pending services fetched successfully',
    data: result,
  });
});
