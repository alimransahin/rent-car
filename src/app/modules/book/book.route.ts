import express from "express";
import validateRequest from "../middleware/validateRequest";
import { bookValidation } from "./book.validation";
import { bookController } from "./book.controller";
import { auth } from "../middleware/auth";
import { user_role } from "../user/user.constants";
const router = express.Router();
router.post(
  "/",
  validateRequest(bookValidation.createBookValidationSchema),
  auth(user_role.user),
  bookController.createBook
);
router.get("/", auth(user_role.admin), bookController.getAllBook);
router.get(
  "/my-bookings",
  auth(user_role.user),
  bookController.getAllBookByUser
);
export const BookRouter = router;
