import { z } from "zod";

const createUserValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  role: z
    .enum(["user", "admin"])
    .refine((val) => val === "user" || val === "admin", {
      message: "Role must be 'user' or 'admin'",
    }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  phone: z.string().min(10, { message: "Phone must be at least 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  isDeleted: z.boolean().optional(),
});
// const signInUserValidationSchema = z.object({
//   email: z.string().email({ message: "Invalid email address" }),
// });

export const userValidation = {
  createUserValidationSchema,
  // signInUserValidationSchema,
};
