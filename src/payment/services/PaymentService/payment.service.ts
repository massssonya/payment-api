import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import {
  PAYMENT_REPOSITORY,
  PaymentRepository,
} from '../../repositories/payment.repository';
import { Payment, PaymentStatus } from '../../models/payment.model';
import { PaymentProcessorService } from '../PaymentProcessorService/paymentProcessor.service';

@Injectable()
export class PaymentService {
  constructor(
    @Inject(PAYMENT_REPOSITORY)
    private readonly repository: PaymentRepository,
    private readonly paymentProcessor: PaymentProcessorService,
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

    await this.markAsPending(id);

    void this.paymentProcessor.process(async () => {
      await this.markAsApproved(id);
    });

    return result;
  }

  async findById(id: string): Promise<Payment> {
    const payment = await this.repository.findById(id);
    if (!payment) {
      throw new NotFoundException(`Payment with id ${id} not found`);
    }
    return payment;
  }

  async markAsPending(id: string): Promise<Payment> {
    const payment = await this.repository.findById(id);
    if (!payment) {
      throw new NotFoundException(`Payment with id ${id} not found`);
    }
    if (payment.status !== PaymentStatus.CREATED) {
      throw new NotFoundException(`Payment with id ${id} is not created`);
    }
    return this.repository.update({
      ...payment,
      status: PaymentStatus.PENDING,
      updatedAt: new Date(),
    });
  }

  async markAsApproved(id: string): Promise<Payment> {
    const payment = await this.repository.findById(id);
    if (!payment) {
      throw new NotFoundException(`Payment with id ${id} not found`);
    }
    if (payment.status !== PaymentStatus.PENDING) {
      throw new NotFoundException(`Payment with id ${id} is not pending`);
    }
    return this.repository.update({
      ...payment,
      status: PaymentStatus.APPROVED,
      updatedAt: new Date(),
    });
  }
}
