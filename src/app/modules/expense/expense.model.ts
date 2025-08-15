import { model, Schema } from "mongoose";
import { IExpense } from "./expense.interface";

const expenseSchema = new Schema<IExpense>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters long"],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [1, "Amount must be greater than 0"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
      validate: {
        validator: (value) => !isNaN(value.getTime()),
        message: "Invalid date format",
      },
    },
  },
  { timestamps: true, versionKey: false }
);

export const Expense = model<IExpense>("Expense", expenseSchema);
