import { PaymentProvider } from "../interfaces/PaymentProvider";
import { stripe } from "../config/stripe";

export class StripeProvider implements PaymentProvider {
  async processPayment(amount: number, currency: string): Promise<{ clientSecret?: string; error?: string }> {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
      });

      return { clientSecret: paymentIntent.client_secret ?? undefined };
    } catch (error) {
      return { error: (error as Error).message };
    }
  }
}
