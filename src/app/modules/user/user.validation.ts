import z from "zod";

export const createUserZodSchema = z.object({
  name: z
    .string({
      message: "Name must be string",
    })
    .min(2, {
      message: "Name must be 2 character long",
    })
    .max(50, {
      message: "Name cannot exceed 50 character",
    }),
  email: z
    .email({ message: "Invalid email address format" })
    .min(5, {
      message: "Email addresss must be 5 character long",
    })
    .max(100, {
      message: "Email addresss cannot exceed 50 character",
    }),
  password: z
    .string({
      message: "Password must be string",
    })
    .min(8, {
      message: "Password must be at least 8 character long",
    })
    .regex(/^(?=.*[A-Z])/, {
      message: "Password must contains at least 1 uppercase letter.",
    })
    .regex(/^(?=.*[!@#$%^&*])/, {
      message: "Password must contains at least 1 special character.",
    })
    .regex(/^(?=.*\d)/, {
      message: "Password must contains at least 1 Number.",
    }),
  phone: z
    .string({
      message: "Phone Number must be string",
    })
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone Number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),
  address: z
    .string({
      message: "Address must be string",
    })
    .max(200, {
      message: "Address cannot exceed 200 character",
    })
    .optional(),
});
