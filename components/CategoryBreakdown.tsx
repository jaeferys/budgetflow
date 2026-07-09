import { formatCurrency, getCategoryTotals, getTotalExpenses } from "@/lib/calculations";
import type { Expense } from "@/types/expense";

type CategoryBreakdownProps = {
  expenses: Expense[];
};

export function CategoryBreakdown({ expenses }: CategoryBreakdownProps) {
  const categoryTotals = getCategoryTotals(expenses);
  const totalExpenses = getTotalExpenses(expenses);

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold">Category breakdown</h2>
        <p className="mt-1 text-sm text-slate-500">
          Spending grouped by the default BudgetFlow categories.
        </p>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {categoryTotals.map(({ category, total }) => {
          const percentage = totalExpenses > 0 ? (total / totalExpenses) * 100 : 0;

          return (
            <article
              className="rounded-md border border-slate-200 p-4"
              key={category}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">{category}</p>
                <p className="text-sm font-semibold">{formatCurrency(total)}</p>
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-emerald-600"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
