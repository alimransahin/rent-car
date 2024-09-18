import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "../user/user.interface";
import { TBook } from "./book.interface";
import { Book } from "./book.model";

const createBookIntoDb = async (payload: TBook) => {
  const newBook = await (
    await (await Book.create(payload)).populate("userId")
  ).populate<{ carId: any }>("carId");

  if (!newBook.carId || typeof newBook.carId !== "object") {
    throw new AppError(httpStatus.NOT_FOUND,"Car details not found");
  }
  newBook.carId.status = "unavailable";
  await newBook.carId.save();
  return newBook;
};
const getAllBookFromDB = async () => {
  const result = await Book.find().populate("userId").populate("carId");
  return result;
};
const getSingleBookFromDB = async (userId: any) => {
  const result = await Book.find({ userId: userId.userId._id })
    .populate("userId")
    .populate("carId");
  return result;
};
export const bookService = {
  createBookIntoDb,
  getAllBookFromDB,
  getSingleBookFromDB,
};
