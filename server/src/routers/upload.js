import { Router } from "express";
import { upload } from "../middlewares/upload.js";

import {
  uploadImage,
  updateImage,
  deleteImage,
} from "../controllers/upload.js";

const router = Router();

router.post("/images/upload", upload.array("image", 5), uploadImage);
router.put("/images/:publicId", upload.array("image", 5), updateImage);
router.delete("/images/:publicId", deleteImage);

export default router;
