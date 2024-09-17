import express from "express";
import validateRequest from "../middleware/validateRequest";
import { carValidation } from "./car.validation";
import { carController } from "./car.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(carValidation.createCarValidationSchema),
  carController.createCar
);
router.get("/", carController.getAllCar);
router.get("/:id", carController.getSingleCar);
router.put(
  "/:id",
  validateRequest(carValidation.updateCarValidationSchema),
  carController.updateCar
);
router.delete("/:id", carController.deleteCar);
export const CarRoutes = router;
