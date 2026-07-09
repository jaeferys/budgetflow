import { formatCurrency } from "@/lib/calculations";
import type { Expense } from "@/types/expense";

type ExpenseTableProps = {
  expenses: Expense[];
  onDeleteExpense: (expenseId: string) => void;
};

export function ExpenseTable({ expenses, onDeleteExpense }: ExpenseTableProps) {
  function handleDelete(expense: Expense) {
    const shouldDelete = window.confirm(
      `Delete "${expense.description || expense.category}"?`,
    );

    if (shouldDelete) {
      onDeleteExpense(expense.id);
    }
  }

  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-5">
        <h2 className="text-lg font-semibold">Recent expenses</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Description</th>
              <th className="px-5 py-3 text-right font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {expenses.length === 0 ? (
              <tr>
                <td className="px-5 py-8 text-center text-slate-500" colSpan={5}>
                  No expenses yet. Add your first expense using the form.
                </td>
              </tr>
            ) : (
              expenses.map((expense) => (
                <tr key={expense.id}>
                  <td className="px-5 py-4 text-slate-600">{expense.date}</td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                      {expense.category}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    {expense.description || "No description"}
                  </td>
                  <td className="px-5 py-4 text-right font-semibold">
                    {formatCurrency(expense.amount)}
                  </td>
                  <td className="px-5 py-4">
                    <button
                      className="rounded-md border border-red-200 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50"
                      onClick={() => handleDelete(expense)}
                      type="button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
