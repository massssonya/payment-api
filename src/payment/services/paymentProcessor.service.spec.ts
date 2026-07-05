import { Test, TestingModule } from '@nestjs/testing';
import { PaymentProcessorService } from './paymentProcessor.service';

describe('PaymentProcessorService', () => {
  let service: PaymentProcessorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentProcessorService],
    }).compile();

    service = module.get<PaymentProcessorService>(PaymentProcessorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
