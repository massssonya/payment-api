import { Module } from '@nestjs/common';

import { PAYMENT_REPOSITORY } from './repositories/payment.repository';
import { InMemoryPaymentRepository } from './repositories/in-memory-payment.repository';
import { PaymentService } from './services/PaymentService/payment.service';
import { PaymentProcessorService } from './services/PaymentProcessorService/paymentProcessor.service';
import { PaymentController } from './controllers/PaymentController/payment.controller';
import { PaymentEventsController } from './controllers/PaymentEventsController/paymentEvents.controller';
import { PaymentEventsService } from './services/PaymentEventsService/payment.service';

@Module({
  controllers: [PaymentController, PaymentEventsController],
  providers: [
    PaymentService,
    PaymentProcessorService,
    PaymentEventsService,
    {
      provide: PAYMENT_REPOSITORY,
      useClass: InMemoryPaymentRepository,
    },
  ],
})
export class PaymentModule {}
