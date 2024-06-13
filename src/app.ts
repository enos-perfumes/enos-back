import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import perfumeRoutes from "./routes/perfume.routes";
import commentRoutes from "./routes/comment.routes";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/perfumes", perfumeRoutes);
app.use("/api/comments", commentRoutes);
