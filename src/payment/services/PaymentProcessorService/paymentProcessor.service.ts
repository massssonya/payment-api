import { Injectable } from '@nestjs/common';
import { sleep } from '../../../shared/utils/sleep';

@Injectable()
export class PaymentProcessorService {
  public async process(task: () => Promise<void>): Promise<void> {
    await sleep(10000);
    await task();
  }
}
