export interface PaymentProvider {

    processPayment(amount: number, currency: string): Promise<{ clientSecret?: string; error?: string }>;
  }
  