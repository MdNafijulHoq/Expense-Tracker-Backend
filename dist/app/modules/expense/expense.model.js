"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expense = void 0;
const mongoose_1 = require("mongoose");
const expenseSchema = new mongoose_1.Schema({
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
}, { timestamps: true, versionKey: false });
exports.Expense = (0, mongoose_1.model)("Expense", expenseSchema);
