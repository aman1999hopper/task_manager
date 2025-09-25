import express from "express";
import { loginUser, getUser, updateUserProfile, signupUser} from "../controllers/authControllers.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/user", auth, getUser);
router.put("/user", auth, updateUserProfile);

export default router;