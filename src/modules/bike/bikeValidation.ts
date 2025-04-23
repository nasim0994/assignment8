import { z } from 'zod';

export const bikeValidation = z.object({
  brand: z.string().min(1, 'Brand is required'),
  model: z.string().min(1, 'Model is required'),
  year: z.number().min(1, 'Year is required'),
  customerId: z.string().uuid('Invalid customer ID format'),
});
