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
//
//
//
//
//

const returnCarUpdateIntoDB = async (payload: any) => {
  const bookingId = payload.bookingId;

  // Find the booking by ID and specify the populated type for carId
  const allBook = await Book.findById(bookingId)
    .populate<{ carId: any }>("carId") // Ensure carId is populated with ICar type
    .populate("userId");

  if (!allBook) {
    throw new Error("Booking not found");
  }

  // Ensure the carId is populated and valid
  if (!allBook.carId || typeof allBook.carId !== "object") {
    throw new Error("Car details not found");
  }
  console.log(payload);
  // Extract startTime and endTime (assuming they are in "HH:mm" format)
  const startTime = allBook.startTime; // Check payload first, fallback to allBook
  const endTime = payload.endTime;
  console.log(startTime, endTime);
  // Ensure startTime and endTime exist before processing
  if (!startTime || !endTime) {
    throw new Error("Start time or end time is missing");
  }

  // Function to convert time strings to hours
  const convertToHours = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours + minutes / 60;
  };

  // Convert the startTime and endTime to hours
  const startHour = convertToHours(startTime);
  const endHour = convertToHours(endTime);

  // Calculate the duration in hours
  const duration = endHour - startHour;

  // Access pricePerHour from the populated carId
  const pricePerHour = allBook.carId.pricePerHour;

  // Calculate total cost: duration (hours) * pricePerHour
  const totalCost = duration * pricePerHour;

  // Update the booking object with the new values
  allBook.endTime = endTime; // Update the end time
  allBook.totalCost = totalCost; // Update the total cost
  allBook.carId.status = "available";
  // Save the updated document back to the database
  const updatedBook = await allBook.save();

  return updatedBook;
};

export const carService = {
  createCarIntoDB,
  getAllCarFromDB,
  getSingleCarFromDB,
  updateCarIntoDB,
  deleteCarFromDB,
  returnCarUpdateIntoDB,
};
