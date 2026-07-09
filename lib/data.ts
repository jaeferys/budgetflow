import type { Expense } from "@/types/expense";

export const mockExpenses: Expense[] = [
  {
    id: "expense-1",
    date: "2026-07-03",
    amount: 135,
    category: "Food & Drinks",
    description: "Lunch after class",
    paymentMethod: "Cash",
    createdAt: "2026-07-03T12:30:00.000Z",
  },
  {
    id: "expense-2",
    date: "2026-07-04",
    amount: 60,
    category: "Transportation",
    description: "Jeepney fare",
    paymentMethod: "Cash",
    createdAt: "2026-07-04T08:00:00.000Z",
  },
  {
    id: "expense-3",
    date: "2026-07-05",
    amount: 250,
    category: "School",
    description: "Printed requirements",
    paymentMethod: "Cash",
    createdAt: "2026-07-05T10:15:00.000Z",
  },
  {
    id: "expense-4",
    date: "2026-07-07",
    amount: 480,
    category: "Shopping",
    description: "OJT polo shirt",
    paymentMethod: "GCash",
    createdAt: "2026-07-07T16:45:00.000Z",
  },
  {
    id: "expense-5",
    date: "2026-06-28",
    amount: 700,
    category: "Trips",
    description: "Weekend trip",
    paymentMethod: "Cash",
    createdAt: "2026-06-28T09:00:00.000Z",
  },
];
