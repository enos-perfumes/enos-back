import express from "express";
import cors from "cors";
import perfumeRoutes from "./routes/perfume.routes";

export const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/perfumes", perfumeRoutes);
