import express from "express";
import { loginUser, signUpUser } from "../controllers/auth.Controller.js";
import { registerSchema, validate } from "../validators/validateUser.js";
const authRouter = express.Router();
authRouter.post("/login", loginUser);
authRouter.post("/register", validate(registerSchema), signUpUser);
export default authRouter;
