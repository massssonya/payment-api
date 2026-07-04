import { Injectable } from '@nestjs/common';
import { Payment, PaymentStatus } from '../models/payment.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PaymentService {
  private payments = new Map<string, Payment>();

  create(amount: number, currency: string): Payment {
    const id = uuidv4();

    const payment: Payment = {
      id,
      amount,
      currency,
      status: PaymentStatus.CREATED,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.payments.set(id, payment);

    return payment;
  }

  private processPayment(id: string) {
    const payment = this.payments.get(id);
    if (payment) {
      this.updateStatus(payment, PaymentStatus.PENDING);
      setTimeout(() => {
        console.log('Payment processed:', id);
      }, 0);
    }
  }

  private updateStatus(payment: Payment, status: PaymentStatus) {
    payment.status = status;
    payment.updatedAt = new Date();
  }
}
