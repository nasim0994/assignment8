import { catchAsync } from '../../utils/catchAsync';
import {
  createCustomerService,
  deleteCustomerService,
  getAllCustomerService,
  getCustomerByIdService,
  updateCustomerService,
} from './customerService';

export const createCustomerController = catchAsync(async (req, res) => {
  const result = await createCustomerService(req.body);

  res.status(200).json({
    success: true,
    message: 'Customer created successfully',
    data: result,
  });
});

export const getAllCustomerController = catchAsync(async (req, res) => {
  const result = await getAllCustomerService();

  res.status(200).json({
    success: true,
    message: 'Customers fetched successfully',
    data: result,
  });
});

export const getCustomerByIdController = catchAsync(async (req, res) => {
  const result = await getCustomerByIdService(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Customer fetched successfully',
    data: result,
  });
});

export const updateCustomerController = catchAsync(async (req, res) => {
  const result = await updateCustomerService(req.params.id, req.body);

  res.status(200).json({
    success: true,
    message: 'Customer updated successfully',
    data: result,
  });
});

export const deleteCustomerController = catchAsync(async (req, res) => {
  await deleteCustomerService(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Customer deleted successfully',
  });
});
