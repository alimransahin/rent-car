import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { carService } from "./car.service";

const createCar = catchAsync(async (req, res) => {
  const carData = req.body;

  const result = await carService.createCarIntoDB(carData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car created successfully",
    data: result,
  });
});
const getAllCar = catchAsync(async (req, res) => {
  const result = await carService.getAllCarFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cars retrieved successfully",
    data: result,
  });
});
const getSingleCar = catchAsync(async (req, res) => {
  const result = await carService.getSingleCarFromDB(req.params._id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "A Car retrieved successfully",
    data: result,
  });
});
const updateCar = catchAsync(async (req, res) => {
  const result = await carService.updateCarIntoDB(req.params._id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car updated successfully",
    data: result,
  });
});
const deleteCar = catchAsync(async (req, res) => {
  const result = await carService.deleteCarFromDB(req.params._id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car Deleted successfully",
    data: result,
  });
});

export const carController = {
  createCar,
  getAllCar,
  getSingleCar,
  updateCar,
  deleteCar,
};
