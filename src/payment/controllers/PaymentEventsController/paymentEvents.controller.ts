import { Controller, MessageEvent, Param, Sse } from '@nestjs/common';
import { PaymentEventsService } from '../../services/PaymentEventsService/payment.service';
import { Observable } from 'rxjs';
import { PaymentService } from '../../services/PaymentService/payment.service';

@Controller('payments')
export class PaymentEventsController {
  constructor(
    private readonly paymentEventsService: PaymentEventsService,
    private readonly paymentService: PaymentService,
  ) {}

  @Sse(':id/events')
  async events(@Param('id') id: string): Promise<Observable<MessageEvent>> {
    const currentPayment = await this.paymentService.findById(id);
    return new Observable((subscriber) => {
      subscriber.next({
        data: {
          paymentId: currentPayment.id,
          status: currentPayment.status,
          updatedAt: currentPayment.updatedAt,
        },
      });
      const unsubscribe = this.paymentEventsService.subscribe(id, (payload) => {
        subscriber.next({
          data: payload,
        });
      });

      return () => unsubscribe();
    });
  }
}
