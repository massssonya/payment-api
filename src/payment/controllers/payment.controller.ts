import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from '../services/payment.service';
import { Payment } from '../models/payment.model';
import { CreatePaymentDto } from '../dto/create-payment.dto/create-payment.dto';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  create(@Body() dto: CreatePaymentDto): Promise<Payment> {
    return this.paymentService.create(dto.amount, dto.currency);
  }
}
