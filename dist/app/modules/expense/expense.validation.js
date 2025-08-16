"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpenseSchema = void 0;
const zod_1 = require("zod");
exports.createExpenseSchema = zod_1.z.object({
    title: zod_1.z
        .string({ message: "Title is required" })
        .min(3, "Title must be at least 3 characters long"),
    amount: zod_1.z
        .number({ message: "Amount is required" })
        .positive("Amount must be greater than 0"),
    category: zod_1.z
        .string({ message: "Category is required" })
        .min(1, "Category is required"),
    date: zod_1.z
        .string({ message: "Date is required" })
        .refine((val) => !isNaN(new Date(val).getTime()), {
        message: "Invalid date format",
    }),
});
