import { Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment } from './models/payment.model';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  create(): Payment {
    return this.paymentService.create(100, 'USD');
  }
}
