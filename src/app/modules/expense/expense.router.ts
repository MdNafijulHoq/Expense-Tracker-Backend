import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { createExpenseSchema } from "./expense.validation";
import { ExpenseControllers } from "./expense.controller";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router();

router.post(
  "/create-expense",
  validateRequest(createExpenseSchema),
  checkAuth(),
  ExpenseControllers.createExpense
);
router.get("/all-expense", ExpenseControllers.getAllExpenses);

router.get("/each-expense/:id", ExpenseControllers.getSingleExpense);

router.patch(
  "/update-expense/:id",
  checkAuth(),
  ExpenseControllers.updateExpense
);

router.delete(
  "/remove-expense/:id",
  checkAuth(),
  ExpenseControllers.deleteExpense
);

export const ExpenseRoutes = router;
