import { Test, TestingModule } from '@nestjs/testing';
import { PaymentEvent } from './payment.service';

describe('PaymentEvent', () => {
  let service: PaymentEvent;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentEvent],
    }).compile();

    service = module.get<PaymentEvent>(PaymentEvent);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
