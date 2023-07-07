import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { authorization } from "../middlewares/authorization.js";
import {
  getBills,
  getUserBills,
  getBill,
  updateBill,
} from "../controllers/bill.js";

const router = Router();

router.get("/bills", authenticate, authorization, getBills);
router.get("/bills/user/:userId", authenticate, getUserBills);
router.get("/bills/:billId", authenticate, getBill);
router.put("/bills/update/:billId", authenticate, authorization, updateBill);

export default router;
