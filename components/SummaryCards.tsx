import {
  filterExpensesByMonth,
  formatCurrency,
  getAverageDailySpending,
  getHighestCategory,
  getTotalExpenses,
} from "@/lib/calculations";
import type { Expense } from "@/types/expense";

type SummaryCardsProps = {
  expenses: Expense[];
  selectedMonth: string;
};

export function SummaryCards({ expenses, selectedMonth }: SummaryCardsProps) {
  const monthlyExpenses = filterExpensesByMonth(expenses, selectedMonth);
  const monthlyTotal = getTotalExpenses(monthlyExpenses);
  const highestCategory = getHighestCategory(monthlyExpenses);
  const averageDailySpending = getAverageDailySpending(monthlyExpenses);

  const cards = [
    {
      label: "Monthly spending",
      value: formatCurrency(monthlyTotal),
      helper: "Total for selected month",
    },
    {
      label: "Highest category",
      value: highestCategory.category,
      helper:
        highestCategory.total > 0
          ? formatCurrency(highestCategory.total)
          : "Start adding expenses",
    },
    {
      label: "Average daily",
      value: formatCurrency(averageDailySpending),
      helper: "Based on days with records",
    },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <article
          className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
          key={card.label}
        >
          <p className="text-sm font-medium text-slate-500">{card.label}</p>
          <p className="mt-3 text-2xl font-bold text-slate-950">{card.value}</p>
          <p className="mt-1 text-sm text-slate-500">{card.helper}</p>
        </article>
      ))}
    </section>
  );
}
