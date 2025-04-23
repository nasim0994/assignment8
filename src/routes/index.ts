import { Router } from 'express';
import { customerRoute } from '../modules/customer/customerRoute';
import { bikeRoute } from '../modules/bike/bikeRoute';
import { serviceRoute } from '../modules/service/serviceRoute';
const router = Router();

const moduleRoutes = [
  {
    path: '/customers',
    route: customerRoute,
  },
  {
    path: '/bikes',
    route: bikeRoute,
  },
  {
    path: '/services',
    route: serviceRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
