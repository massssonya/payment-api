import { Module } from '@nestjs/common';
import { PaymentController } from './controllers/payment.controller';
import { PaymentService } from './services/payment.service';
import { PAYMENT_REPOSITORY } from './repositories/payment.repository';
import { InMemoryPaymentRepository } from './repositories/in-memory-payment.repository';

@Module({
  controllers: [PaymentController],
  providers: [
    PaymentService,
    {
      provide: PAYMENT_REPOSITORY,
      useClass: InMemoryPaymentRepository,
    },
  ],
})
export class PaymentModule {}
