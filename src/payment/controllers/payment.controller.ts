import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { Payment } from '../models/payment.model';
import { CreatePaymentDto } from '../dto/create-payment.dto/create-payment.dto';
import { PaymentService } from '../services/PaymentService/payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  create(@Body() dto: CreatePaymentDto): Promise<Payment> {
    return this.paymentService.create(dto.amount, dto.currency);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.paymentService.findById(id);
  }
}
