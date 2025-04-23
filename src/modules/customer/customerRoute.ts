import express from 'express';
import {
  createCustomerController,
  deleteCustomerController,
  getAllCustomerController,
  getCustomerByIdController,
  updateCustomerController,
} from './customerController';
import verifyValidate from '../../middlewares/verifyValidate';
import { customerValidation } from './customerValidation';
const Router = express.Router();

Router.post('/', verifyValidate(customerValidation), createCustomerController);
Router.get('/', getAllCustomerController);
Router.get('/:id', getCustomerByIdController);
Router.put('/:id', updateCustomerController);
Router.delete('/:id', deleteCustomerController);

export const customerRoute = Router;
