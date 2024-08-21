import express from "express";
import {
  getMahasiswa,
  getMahasiswaByNim,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} from "../controllers/mahasiswaController.js";

const router = express.Router();

router.get("/", getMahasiswa);
router.get("/find", getMahasiswaByNim);
router.post("/create", createMahasiswa);
router.put("/update", updateMahasiswa);
router.delete("/delete", deleteMahasiswa);
export default router;
