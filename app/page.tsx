import { BudgetTracker } from "@/components/BudgetTracker";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <BudgetTracker />
    </main>
  );
}
