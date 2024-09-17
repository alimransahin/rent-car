import { Book } from "../book/book.model";
import { TCar } from "./car.interface";
import { Car } from "./car.model";

const createCarIntoDB = async (payload: TCar) => {
  const newCar = await Car.create(payload);
  return newCar;
};
const getAllCarFromDB = async () => {
  const result = await Car.find();
  return result;
};
const getSingleCarFromDB = async (id: string) => {
  const result = await Car.findOne({ id });
  return result;
};
const updateCarIntoDB = async (id: string, payload: Partial<TCar>) => {
  const result = await Car.findOneAndUpdate({ id }, payload, { new: true });
  return result;
};
const deleteCarFromDB = async (id: string) => {
  const deleteInfo = {
    status: " unavailable ",
    isDeleted: true,
  };
  const result = await Car.findOneAndUpdate({ id }, deleteInfo, { new: true });
  return result;
};
const returnCarUpdateIntoDB = async (payload: any) => {
  // console.log(payload);
  const bookingId = payload.bookingId;
  const allBook = await Book.findById({ _id: bookingId })
    .populate("userId")
    .populate("carId");
  if (!allBook) {
    throw new Error("Booking not found");
  }
  allBook.endTime = payload.endTime;
  allBook.totalCost = payload.totalCost;

  const updatedBook = await allBook.save();
  return updatedBook;
  // const result =await Book.findOneAndUpdate({id},payload,{new:})
};
export const carService = {
  createCarIntoDB,
  getAllCarFromDB,
  getSingleCarFromDB,
  updateCarIntoDB,
  deleteCarFromDB,
  returnCarUpdateIntoDB,
};
