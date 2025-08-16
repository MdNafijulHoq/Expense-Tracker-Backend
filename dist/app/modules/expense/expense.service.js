"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseServices = void 0;
const error_helper_1 = __importDefault(require("../../ErrorHelpers/error.helper"));
const expense_model_1 = require("./expense.model");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createExpense = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, amount, category, date } = payload;
    // Validate if expense already exists for same title and date
    const isExpenseExist = yield expense_model_1.Expense.findOne({ title, date });
    if (isExpenseExist) {
        throw new error_helper_1.default(http_status_codes_1.default.BAD_REQUEST, "Expense already exists for this date");
    }
    const expense = yield expense_model_1.Expense.create({
        title,
        amount,
        category,
        date,
    });
    return expense;
});
const getAllExpenses = () => __awaiter(void 0, void 0, void 0, function* () {
    const totaExpensesList = yield expense_model_1.Expense.countDocuments();
    const expenses = yield expense_model_1.Expense.find();
    return { expenses, totaExpensesList };
});
const getSingleExpense = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existingExpense = yield expense_model_1.Expense.findById(id);
    if (!existingExpense) {
        throw new Error("Expense not found.");
    }
    return existingExpense;
});
const updateExpense = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingExpense = yield expense_model_1.Expense.findById(id);
    if (!existingExpense) {
        throw new Error("Expense not found.");
    }
    const expense = yield expense_model_1.Expense.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return expense;
});
const deleteExpense = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existingExpense = yield expense_model_1.Expense.findById(id);
    if (!existingExpense) {
        throw new Error("Expense not found.");
    }
    const expense = yield expense_model_1.Expense.findByIdAndDelete(id);
    return expense;
});
exports.ExpenseServices = {
    createExpense,
    getAllExpenses,
    getSingleExpense,
    updateExpense,
    deleteExpense,
};
