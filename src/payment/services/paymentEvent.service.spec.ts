import { Test, TestingModule } from '@nestjs/testing';
import { PaymentEventsService } from './paymentEvent.service';

describe('PaymentEventsService', () => {
  let service: PaymentEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentEventsService],
    }).compile();

    service = module.get<PaymentEventsService>(PaymentEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
