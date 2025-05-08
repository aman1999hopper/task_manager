import express from "express";
import { registerUser, loginUser, getUser} from "../controllers/authControllers.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", auth, getUser);

export default router;