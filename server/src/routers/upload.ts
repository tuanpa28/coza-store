import { Router } from "express";
import multer from "multer";
import { uploadImage, updateImage, deleteImage } from "../controllers/upload";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary";

const router = Router();

interface CloudinaryParams {
  folder: string;
  // format: string;
  // các thuộc tính khác của `Params` nếu cần
}
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "node_react",
    // format: "png",
  } as CloudinaryParams,
});

const upload = multer({ storage: storage });

router.post("/images/upload", upload.array("image", 5), uploadImage);
router.put("/images/:publicId", upload.array("image", 5), updateImage);
router.delete("/images/:publicId", deleteImage);

export default router;
