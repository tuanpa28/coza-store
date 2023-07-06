import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { getUserProfile, updateUserProfile } from "../controllers/user.js";

const router = Router();

router.get("/user/profile", authenticate, getUserProfile);
router.put("/user/update", authenticate, updateUserProfile);

export default router;
