import express from "express";
import { home, register, Login } from "../controllers/auth-controller.js";
import validate from "../middlewares/validate_middleware.js";
import { signUpSchema, loginSchema } from "../validator/auth-validator.js";

const router = express.Router();

router.route("/").get(home);
router.route("/register").post(validate(signUpSchema), register);
router.route("/Login").post(validate(loginSchema), Login);

export default router;
