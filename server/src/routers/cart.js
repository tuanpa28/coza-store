import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { authorization } from "../middlewares/authorization.js";

import {
  addToCart,
  updateCart,
  getCart,
  getCarts,
  deleteProductCart,
  deleteAllProductCart,
  checkOut,
} from "../controllers/cart.js";

const router = Router();

router.get("/cart", authenticate, authorization, getCarts);
router.get("/cart/user", authenticate, getCart);
router.post("/cart/add", authenticate, addToCart);
router.put("/cart/update", authenticate, updateCart);
router.delete("/cart/delete/:productId", authenticate, deleteProductCart);
router.delete("/cart/delete-all", authenticate, deleteAllProductCart);
router.post("/cart/checkout", authenticate, checkOut);

export default router;
