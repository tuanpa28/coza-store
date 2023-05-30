import { Router } from "express";
import {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} from "../controllers/product.js";
import { checkPermission } from "../middlewares/checkPermission.js";

const router = Router();

// Lấy tất cả sản phẩm
router.get("/products", getProducts);

// Lấy sản phẩm theo id
router.get("/products/:id", getProduct);

// Thêm sản phẩm
router.post("/products", checkPermission, addProduct);

// Sửa sản phẩm
router.put("/products/:id", checkPermission, editProduct);

// Xóa sản phẩm
router.delete("/products/:id", checkPermission, deleteProduct);

export default router;
