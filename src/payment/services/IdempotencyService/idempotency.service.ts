import { Inject } from '@nestjs/common';
import {
  IDEMPOTENCY_REPOSITORY,
  IdempotencyRepository,
} from '../../repositories/Idempotency/idempotency.repository';

export class IdempotencyService {
  constructor(
    @Inject(IDEMPOTENCY_REPOSITORY)
    private readonly idempotencyRepository: IdempotencyRepository,
  ) {}

  execute<T>(key: string, operation: () => Promise<T>) {
    throw new Error('Not implemented');
  }
}
