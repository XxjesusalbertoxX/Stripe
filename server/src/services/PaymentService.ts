import { PaymentProvider } from "../interfaces/PaymentProvider";

export class PaymentService {
  private provider: PaymentProvider;

  constructor(provider: PaymentProvider) {
    this.provider = provider;
  }

  async processPayment(amount: number, currency: string) {
    return this.provider.processPayment(amount, currency);
  }
}
