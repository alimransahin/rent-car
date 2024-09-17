import express from "express";
import { userValidation } from "./user.validation";
import validateRequest from "../middleware/validateRequest";
import { UserController } from "./user.controller";
const router = express.Router();

router.post(
  "/signup",
  validateRequest(userValidation.createUserValidationSchema),
  UserController.createUser
);
router.post("/signin");
export const UserRoutes = router;
