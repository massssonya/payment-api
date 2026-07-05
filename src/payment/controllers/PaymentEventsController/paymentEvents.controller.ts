import { Controller, MessageEvent, Param, Sse } from '@nestjs/common';
import { PaymentEventsService } from '../../services/PaymentEventsService/payment.service';
import { Observable } from 'rxjs';

@Controller('payments')
export class PaymentEventsController {
  constructor(private readonly paymentEventsService: PaymentEventsService) {}

  @Sse(':id/events')
  events(@Param('id') id: string): Observable<MessageEvent> {
    return new Observable((subscriber) => {
      const unsubscribe = this.paymentEventsService.subscribe(id, (payload) => {
        subscriber.next({
          data: payload,
        });
      });

      return () => unsubscribe();
    });
  }
}
