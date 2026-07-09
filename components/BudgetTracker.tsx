"use client";

import { useEffect, useMemo, useState } from "react";
import { CategoryBreakdown } from "@/components/CategoryBreakdown";
import { ExpenseForm } from "@/components/ExpenseForm";
import { ExpenseTable } from "@/components/ExpenseTable";
import { SummaryCards } from "@/components/SummaryCards";
import { mockExpenses } from "@/lib/data";
import type { Expense } from "@/types/expense";

const STORAGE_KEY = "budgetflow-expenses";

function getCurrentMonth() {
  return new Date().toISOString().slice(0, 7);
}

function getInitialExpenses() {
  if (typeof window === "undefined") {
    return mockExpenses;
  }

  const savedExpenses = window.localStorage.getItem(STORAGE_KEY);

  if (!savedExpenses) {
    return mockExpenses;
  }

  try {
    return JSON.parse(savedExpenses) as Expense[];
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return mockExpenses;
  }
}

function getMonthLabel(month: string) {
  return new Date(`${month}-01T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function BudgetTracker() {
  const [expenses, setExpenses] = useState<Expense[]>(getInitialExpenses);
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses]);

  const monthOptions = useMemo(() => {
    const months = new Set(expenses.map((expense) => expense.date.slice(0, 7)));
    months.add(selectedMonth);
    months.add(getCurrentMonth());

    return Array.from(months).sort().reverse();
  }, [expenses, selectedMonth]);

  function addExpense(expense: Expense) {
    setExpenses((currentExpenses) => [expense, ...currentExpenses]);
    setSelectedMonth(expense.date.slice(0, 7));
  }

  function deleteExpense(expenseId: string) {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== expenseId),
    );
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <header className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-emerald-700">
            Personal budget tracker
          </p>
          <h1 className="text-3xl font-bold tracking-tight">BudgetFlow</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Track daily spending, review monthly totals, and see where your
            money goes.
          </p>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Current month
          <select
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-950 shadow-sm"
            onChange={(event) => setSelectedMonth(event.target.value)}
            value={selectedMonth}
          >
            {monthOptions.map((month) => (
              <option key={month} value={month}>
                {getMonthLabel(month)}
              </option>
            ))}
          </select>
        </label>
      </header>

      <SummaryCards expenses={expenses} selectedMonth={selectedMonth} />

      <section className="grid gap-6 lg:grid-cols-[minmax(280px,380px)_1fr]">
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseTable expenses={expenses} onDeleteExpense={deleteExpense} />
      </section>

      <CategoryBreakdown expenses={expenses} />
    </div>
  );
}
