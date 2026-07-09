import { EXPENSE_CATEGORIES, type Expense, type ExpenseCategory } from "@/types/expense";

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function filterExpensesByMonth(expenses: Expense[], month: string) {
  return expenses.filter((expense) => expense.date.startsWith(month));
}

export function getTotalExpenses(expenses: Expense[]) {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

export function getCategoryTotals(expenses: Expense[]) {
  return EXPENSE_CATEGORIES.map((category) => ({
    category,
    total: expenses
      .filter((expense) => expense.category === category)
      .reduce((total, expense) => total + expense.amount, 0),
  }));
}

export function getHighestCategory(expenses: Expense[]) {
  const categoryTotals = getCategoryTotals(expenses);
  const highest = categoryTotals.reduce(
    (currentHighest, categoryTotal) =>
      categoryTotal.total > currentHighest.total ? categoryTotal : currentHighest,
    { category: "No data yet" as ExpenseCategory | "No data yet", total: 0 },
  );

  return highest.total > 0 ? highest : { category: "No data yet", total: 0 };
}

export function getAverageDailySpending(expenses: Expense[]) {
  const spendingDays = new Set(expenses.map((expense) => expense.date));

  if (spendingDays.size === 0) {
    return 0;
  }

  return getTotalExpenses(expenses) / spendingDays.size;
}
