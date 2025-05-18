import express from "express";
import { registerUser, loginUser, getUser, updateUserProfile} from "../controllers/authControllers.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", auth, getUser);
router.put("/user", auth, updateUserProfile);

export default router;