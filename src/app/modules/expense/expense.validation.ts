import { z } from "zod";

export const createExpenseSchema = z.object({
  title: z
    .string({ message: "Title is required" })
    .min(3, "Title must be at least 3 characters long"),
  amount: z
    .number({ message: "Amount is required" })
    .positive("Amount must be greater than 0"),
  category: z
    .string({ message: "Category is required" })
    .min(1, "Category is required"),
  date: z
    .string({ message: "Date is required" })
    .refine((val) => !isNaN(new Date(val).getTime()), {
      message: "Invalid date format",
    }),
});
