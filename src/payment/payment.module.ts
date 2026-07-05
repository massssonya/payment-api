import { Module } from '@nestjs/common';

import { PAYMENT_REPOSITORY } from './repositories/payment.repository';
import { InMemoryPaymentRepository } from './repositories/in-memory-payment.repository';
import { PaymentService } from './services/payment.service';
import { PaymentProcessorService } from './services/paymentProcessor.service';
import { PaymentController } from './controllers/payment.controller';
import { PaymentEventsController } from './controllers/paymentEvents.controller';
import { PaymentEventsService } from './services/paymentEvent.service';
import { IDEMPOTENCY_REPOSITORY } from './repositories/idempotency.repository';
import { IdempotencyService } from './services/idempotency.service';
import { InMemoryIdempotencyRepository } from './repositories/in-memory-idempotency.repository';

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
