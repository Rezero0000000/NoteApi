import { authMiddleware } from "../middleware/auth-middleware";
import { UserController } from "../controller/user-controller";
import { Router } from "hyper-express";

export const web = new Router();

// Public apis
web.post("/api/user", UserController.register);
web.post("/api/login", UserController.login);
