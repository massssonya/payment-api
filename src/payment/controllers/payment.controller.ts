import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PaymentService } from '../services/payment.service';
import { CreatePaymentDto } from '../dto/create-payment.dto/create-payment.dto';
import { Payment } from '../models/payment.model';

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
