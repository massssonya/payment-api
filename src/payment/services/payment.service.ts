import { Inject, Injectable } from '@nestjs/common';
import { Payment, PaymentStatus } from '../models/payment.model';
import { v4 as uuidv4 } from 'uuid';
import {
  PAYMENT_REPOSITORY,
  PaymentRepository,
} from '../repositories/payment.repository';

@Injectable()
export class PaymentService {
  constructor(
    @Inject(PAYMENT_REPOSITORY)
    private readonly repository: PaymentRepository,
  ) {}

  async create(amount: number, currency: string): Promise<Payment> {
    const id = uuidv4();

    const payment: Payment = {
      id,
      amount,
      currency,
      status: PaymentStatus.CREATED,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await this.repository.create(payment);

    return result;
  }
}
