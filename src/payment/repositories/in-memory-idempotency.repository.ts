import { IdempotencyRepository } from './idempotency.repository';

export class InMemoryIdempotencyRepository implements IdempotencyRepository {
  tryLock;
  findByKey;
  markFailed;
  markSuccess;
}
