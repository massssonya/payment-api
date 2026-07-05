import {
  PaymentEventCallback,
  PaymentEventPayload,
} from '../../models/paymentEvent.model';

export class PaymentEventsService {
  private readonly events = new Map<string, Set<PaymentEventCallback>>();

  public subscribe(
    paymentId: string,
    callback: PaymentEventCallback,
  ): () => void {
    let callbacks = this.events.get(paymentId);

    if (!callbacks) {
      callbacks = new Set();
      this.events.set(paymentId, callbacks);
    }

    callbacks.add(callback);

    return () => this.unsubscribe(paymentId, callback);
  }

  publish(payload: PaymentEventPayload): void {
    const callbacks = this.events.get(payload.paymentId);
    if (callbacks) {
      callbacks.forEach((callback) => {
        callback(payload);
      });
    }
  }
  public unsubscribe(
    paymentId: string,
    callback: PaymentEventCallback,
  ): boolean {
    const callbacks = this.events.get(paymentId);
    if (callbacks) {
      callbacks.delete(callback);
      if (callbacks.size === 0) {
        this.events.delete(paymentId);
      }
      return true;
    }

    return false;
  }
}
