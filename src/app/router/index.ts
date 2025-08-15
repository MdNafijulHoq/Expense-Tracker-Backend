import { Router } from "express";
import { ExpenseRoutes } from "../modules/expense/expense.router";
import { UserRoutes } from "../modules/user/user.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/expense",
    route: ExpenseRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
