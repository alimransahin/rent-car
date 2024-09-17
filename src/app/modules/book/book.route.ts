import express from "express";
import validateRequest from "../middleware/validateRequest";
import { bookValidation } from "./book.validation";
import { bookController } from "./book.controller";
const router = express.Router();
router.post(
  "/",
  validateRequest(bookValidation.createBookValidationSchema),
  bookController.createBook
);
router.get("/", bookController.getAllBook);
router.get("/my-bookings", bookController.getAllBookByUser);
export const BookRouter = router;
