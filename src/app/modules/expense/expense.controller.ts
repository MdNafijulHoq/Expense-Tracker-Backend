import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { ExpenseServices } from "./expense.service";

const createExpense = catchAsync(async (req, res) => {
  const expense = await ExpenseServices.createExpense(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Expense created successfully",
    data: expense,
  });
});

const getAllExpenses = catchAsync(async (req, res) => {
  const expenses = await ExpenseServices.getAllExpenses();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Expenses retrieved successfully",
    meta: {
      total: expenses.totaExpensesList,
    },
    data: expenses.expenses,
  });
});

const getSingleExpense = catchAsync(async (req, res) => {
  const { id } = req.params;

  const expenses = await ExpenseServices.getSingleExpense(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Expenses retrieved successfully",
    data: expenses,
  });
});

const updateExpense = catchAsync(async (req, res) => {
  const { id } = req.params;
  const expense = await ExpenseServices.updateExpense(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Expense updated successfully",
    data: expense,
  });
});

const deleteExpense = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ExpenseServices.deleteExpense(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Expense deleted successfully",
    data: null,
  });
});

export const ExpenseControllers = {
  createExpense,
  getAllExpenses,
  getSingleExpense,
  updateExpense,
  deleteExpense,
};
