import { IsIn, IsNumber, IsString, Min } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  @Min(1)
  amount: number;

  @IsString()
  @IsIn(['USD', 'EUR', 'RUB'])
  currency: string;
}
