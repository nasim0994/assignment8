import express from 'express';
import {
  createBikeController,
  getAllBikeController,
  getBikeByIdController,
} from './bikeController';
const Router = express.Router();

Router.post('/', createBikeController);
Router.get('/', getAllBikeController);
Router.get('/:id', getBikeByIdController);

export const bikeRoute = Router;
