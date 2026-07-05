import { IdempotencyRecord } from '../../models/idempotency.model';

export interface IdempotencyRepository {
  tryLock(key: string): Promise<boolean>;
  findByKey(key: string): Promise<IdempotencyRecord | null>;
  markSuccess(
    key: string,
    response: {
      statusCode: number;
      body: unknown;
    },
  ): Promise<void>;
  markFailed(key: string): Promise<void>;
}

export const IDEMPOTENCY_REPOSITORY = 'IDEMPOTENCY_REPOSITORY';
