import { Injectable } from '@nestjs/common';
import { PaymentService } from '../PaymentService/payment.service';
import { sleep } from '../../../shared/utils/sleep';

@Injectable()
export class PaymentProcessorService {
  constructor(private readonly paymentService: PaymentService) {}

  async process(paymentId: string): Promise<void> {
    try {
      await this.paymentService.markAsPending(paymentId);

      await sleep(5000);

      await this.paymentService.markAsApproved(paymentId);
    } catch (error) {
      console.error(`Ошибка при обработке платежа ${paymentId}:`, error);
    }
  }
}
