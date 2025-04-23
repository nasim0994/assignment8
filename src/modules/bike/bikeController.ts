import { catchAsync } from '../../utils/catchAsync';
import {
  createBikeService,
  getAllBikeService,
  getBikeByIdService,
} from './bikeService';

export const createBikeController = catchAsync(async (req, res) => {
  const result = await createBikeService(req.body);

  res.status(200).json({
    success: true,
    message: 'Bike added successfully',
    data: result,
  });
});

export const getAllBikeController = catchAsync(async (req, res) => {
  const result = await getAllBikeService();

  res.status(200).json({
    success: true,
    message: 'Bikes fetched successfully',
    data: result,
  });
});

export const getBikeByIdController = catchAsync(async (req, res) => {
  const result = await getBikeByIdService(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Bike fetched successfully',
    data: result,
  });
});
