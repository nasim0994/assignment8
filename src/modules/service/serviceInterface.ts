export type IService = {
  bikeId: string;
  serviceDate: Date;
  completionDate?: Date;
  description: string;
  status: 'pending' | 'in-progress' | 'done';
};
