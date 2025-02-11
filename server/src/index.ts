
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import paymentRoutes from "./routes/PaymentRoutes"; 

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", paymentRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
