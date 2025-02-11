
import { Request, Response } from "express";
import { PaymentService } from "../services/PaymentService";
import { StripeProvider } from "../providers/StripeProvider";

const paymentService = new PaymentService(new StripeProvider());

export const createPayment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { amount, currency } = req.body;
    const result = await paymentService.processPayment(amount, currency);

    if (result.error) {
      res.status(500).json({ error: result.error });
      return;
    }

    res.json({ clientSecret: result.clientSecret });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
