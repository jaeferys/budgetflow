"use client";

import { FormEvent, useState } from "react";
import { EXPENSE_CATEGORIES, type Expense, type ExpenseCategory } from "@/types/expense";

type ExpenseFormProps = {
  onAddExpense: (expense: Expense) => void;
};

function getTodayDate() {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60_000;

  return new Date(today.getTime() - timezoneOffset).toISOString().slice(0, 10);
}

function createExpenseId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `expense-${Date.now()}`;
}

export function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
  const [date, setDate] = useState(getTodayDate());
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState<ExpenseCategory>("Food & Drinks");
  const [description, setDescription] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const amountValue = Number(amount);

    if (!date || amountValue <= 0) {
      return;
    }

    onAddExpense({
      id: createExpenseId(),
      date,
      amount: amountValue,
      category,
      description: description.trim(),
      createdAt: new Date().toISOString(),
    });

    setAmount("");
    setDescription("");
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">Add expense</h2>

      <form className="mt-5 flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Date
          <input
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm"
            onChange={(event) => setDate(event.target.value)}
            type="date"
            value={date}
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Amount
          <input
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm"
            min="0"
            onChange={(event) => setAmount(event.target.value)}
            placeholder="0.00"
            required
            step="0.01"
            type="number"
            value={amount}
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Category
          <select
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-950 shadow-sm"
            onChange={(event) => setCategory(event.target.value as ExpenseCategory)}
            value={category}
          >
            {EXPENSE_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Description
          <input
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm"
            onChange={(event) => setDescription(event.target.value)}
            placeholder="What did you spend on?"
            type="text"
            value={description}
          />
        </label>

        <button
          className="rounded-md bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
          type="submit"
        >
          Add expense
        </button>
      </form>
    </section>
  );
}
