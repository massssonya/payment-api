import { Payment } from '../../models/payment.model';
import { PaymentRepository } from '../Payment/payment.repository';

export class InMemoryPaymentRepository implements PaymentRepository {
  private payments = new Map<string, Payment>();

  create(payment: Payment): Promise<Payment> {
    this.payments.set(payment.id, payment);
    return Promise.resolve(payment);
  }

  findById(id: string): Promise<Payment | null> {
    return Promise.resolve(this.payments.get(id) || null);
  }

  update(payment: Payment): Promise<Payment> {
    this.payments.set(payment.id, payment);
    return Promise.resolve(payment);
  }

  delete(id: string): Promise<void> {
    this.payments.delete(id);
    return Promise.resolve();
  }

  findAll(): Promise<Payment[]> {
    return Promise.resolve(Array.from(this.payments.values()));
  }
}
