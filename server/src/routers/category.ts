import { Router } from "express";
import {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";

const router: Router = Router();

// Lấy tất cả danh mục
router.get("/categories", getCategories);

// Lấy danh mục theo id
router.get("/categories/:id", getCategory);

// Thêm danh mục
router.post("/categories", checkPermission, createCategory);

// Sửa danh mục
router.put("/categories/:id", checkPermission, updateCategory);

// Xóa danh mục
router.delete("/categories/:id", checkPermission, deleteCategory);

export default router;
