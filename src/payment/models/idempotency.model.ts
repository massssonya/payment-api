export enum IdempotencyStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

export interface IdempotencyRecord {
  key: string;
  status: IdempotencyStatus;
  response?: {
    statusCode: number;
    body: unknown;
  };
  createdAt: Date;
  expiresAt: Date;
}
