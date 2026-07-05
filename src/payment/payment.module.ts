import { Module } from '@nestjs/common';

import { PAYMENT_REPOSITORY } from './repositories/Payment/payment.repository';
import { InMemoryPaymentRepository } from './repositories/Payment/in-memory-payment.repository';
import { PaymentService } from './services/PaymentService/payment.service';
import { PaymentProcessorService } from './services/PaymentProcessorService/paymentProcessor.service';
import { PaymentController } from './controllers/PaymentController/payment.controller';
import { PaymentEventsController } from './controllers/PaymentEventsController/paymentEvents.controller';
import { PaymentEventsService } from './services/PaymentEventsService/payment.service';
import { IDEMPOTENCY_REPOSITORY } from './repositories/Idempotency/idempotency.repository';
import { IdempotencyService } from './services/IdempotencyService/idempotency.service';
import { InMemoryIdempotencyRepository } from './repositories/Idempotency/in-memory-idempotency.repository';

@Module({
  controllers: [PaymentController, PaymentEventsController],
  providers: [
    PaymentService,
    PaymentProcessorService,
    PaymentEventsService,
    IdempotencyService,
    {
      provide: PAYMENT_REPOSITORY,
      useClass: InMemoryPaymentRepository,
    },
    {
      provide: IDEMPOTENCY_REPOSITORY,
      useClass: InMemoryIdempotencyRepository,
    },
  ],
})
export class PaymentModule {}
