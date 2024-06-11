import { Router } from "express";
import {
  getPerfumes,
  createPerfume,
  deletePerfume,
} from "../controllers/perfume.controller";

const router = Router();

router.get("/", getPerfumes);
router.post("/", createPerfume);
router.delete("/:id", deletePerfume);

export default router;
