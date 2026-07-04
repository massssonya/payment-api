import { Injectable } from '@nestjs/common';
import { Payment } from '../models/payment.model';
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
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.payments.set(id, payment);

    return payment;
  }
}
