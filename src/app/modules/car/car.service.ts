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
export const carService = {
  createCarIntoDB,
  getAllCarFromDB,
  getSingleCarFromDB,
  updateCarIntoDB,
  deleteCarFromDB,
};
