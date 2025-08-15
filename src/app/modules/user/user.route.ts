import { Router } from "express";
import { UserControllers } from "./user.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { createUserZodSchema } from "./user.validation";

const router = Router();

router.post(
  "/register",
  validateRequest(createUserZodSchema),
  UserControllers.createUser
);

router.post("/login", UserControllers.userLogin);

router.get("/me", checkAuth(), UserControllers.getMe);

router.post("/logout", UserControllers.logout);

export const UserRoutes = router;
