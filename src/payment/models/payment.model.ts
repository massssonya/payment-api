export enum PaymentStatus {
  CREATED = 'created',
  PENDING = 'pending',
  APPROVED = 'approved',
  DECLINED = 'declined',
}

export interface Payment {
  id: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
}
