import AppError from "../../ErrorHelpers/error.helper";
import { IExpense } from "./expense.interface";
import { Expense } from "./expense.model";
import httpStatus from "http-status-codes";

const createExpense = async (payload: IExpense) => {
  const { title, amount, category, date } = payload;

  // Validate if expense already exists for same title and date
  const isExpenseExist = await Expense.findOne({ title, date });
  if (isExpenseExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Expense already exists for this date"
    );
  }

  const expense = await Expense.create({
    title,
    amount,
    category,
    date,
  });

  return expense;
};

const getAllExpenses = async () => {
  const totaExpensesList = await Expense.countDocuments();
  const expenses = await Expense.find();
  return { expenses, totaExpensesList };
};

const getSingleExpense = async (id: string) => {
  const existingExpense = await Expense.findById(id);
  if (!existingExpense) {
    throw new Error("Expense not found.");
  }

  return existingExpense;
};

const updateExpense = async (id: string, payload: Partial<IExpense>) => {
  const existingExpense = await Expense.findById(id);

  if (!existingExpense) {
    throw new Error("Expense not found.");
  }

  const expense = await Expense.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return expense;
};

const deleteExpense = async (id: string) => {
  const existingExpense = await Expense.findById(id);

  if (!existingExpense) {
    throw new Error("Expense not found.");
  }

  const expense = await Expense.findByIdAndDelete(id);

  return expense;
};

export const ExpenseServices = {
  createExpense,
  getAllExpenses,
  getSingleExpense,
  updateExpense,
  deleteExpense,
};
