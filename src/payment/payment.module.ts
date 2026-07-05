import { Module } from '@nestjs/common';
import { PaymentController } from './controllers/payment.controller';

import { PAYMENT_REPOSITORY } from './repositories/payment.repository';
import { InMemoryPaymentRepository } from './repositories/in-memory-payment.repository';
import { PaymentService } from './services/PaymentService/payment.service';
import { PaymentProcessorService } from './services/PaymentProcessorService/paymentProcessor.service';

@Module({
  controllers: [PaymentController],
  providers: [
    PaymentService,
    PaymentProcessorService,
    {
      provide: PAYMENT_REPOSITORY,
      useClass: InMemoryPaymentRepository,
    },
  ],
})
export class PaymentModule {}
