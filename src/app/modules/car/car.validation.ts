import { z } from "zod";

// Define Zod schema for car validation
const createCarValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  color: z.string().min(1, { message: "Color is required" }),
  isElectric: z.boolean({ required_error: "isElectric is required" }),
  features: z
    .array(z.string())
    .min(1, { message: "At least one feature is required" }),
  pricePerHour: z
    .number({ required_error: "Price per hour is required" })
    .positive({ message: "Price must be a positive number" }),
  status: z.enum(["available", "unavailable"]).optional(),
  isDeleted: z.boolean().optional(),
});
const updateCarValidationSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  color: z.string().min(1).optional(),
  isElectric: z
    .boolean({ required_error: "isElectric is required" })
    .optional(),
  features: z
    .array(z.string())
    .min(1, { message: "At least one feature is required" })
    .optional(),
  pricePerHour: z
    .number({ required_error: "Price per hour is required" })
    .positive({ message: "Price must be a positive number" })
    .optional(),
  status: z.enum(["available", "unavailable"]).optional(),
  isDeleted: z.boolean().optional(),
});

export const carValidation = {
  createCarValidationSchema,
  updateCarValidationSchema,
};
