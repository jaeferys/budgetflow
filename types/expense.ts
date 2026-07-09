export const EXPENSE_CATEGORIES = [
  "Food & Drinks",
  "Transportation",
  "School",
  "Trips",
  "Shopping",
  "Others",
] as const;

export type ExpenseCategory = (typeof EXPENSE_CATEGORIES)[number];

export type Expense = {
  id: string;
  date: string;
  amount: number;
  category: ExpenseCategory;
  description?: string;
  paymentMethod?: string;
  createdAt: string;
  updatedAt?: string;
};
