import express from 'express';
import {
  completedServiceController,
  createServiceController,
  getAllServicesController,
  getServiceByIdController,
  overdueServicesController,
} from './serviceController';
const Router = express.Router();

Router.post('/', createServiceController);
Router.get('/', getAllServicesController);
Router.get('/status', overdueServicesController);
Router.get('/:id', getServiceByIdController);
Router.put('/:id/complete', completedServiceController);

export const serviceRoute = Router;
