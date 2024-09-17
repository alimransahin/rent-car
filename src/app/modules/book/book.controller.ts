import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { bookService } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const result = await bookService.createBookIntoDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car booked successfully",
    data: result,
  });
});

const getAllBook = catchAsync(async (req, res) => {
  const result = await bookService.getAllBookFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bookings retrieved successfully",
    data: result,
  });
});
const getAllBookByUser = catchAsync(async (req, res) => {
  const result = await bookService.getSingleBookFromDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "My Bookings retrieved successfully",
    data: result,
  });
});

export const bookController = {
  createBook,
  getAllBook,
  getAllBookByUser,
};
