import { PaymentStatus } from './payment.model';

export interface PaymentEventPayload {
  paymentId: string;
  status: PaymentStatus;
  updatedAt: Date;
}

export type PaymentEventCallback = (
  payload: PaymentEventPayload,
) => void | Promise<void>;
