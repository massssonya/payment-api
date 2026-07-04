export type PaymentStatus = 'created' | 'pending' | 'approved' | 'declined';

export interface Payment {
  id: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
}
