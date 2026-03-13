import Link from "next/link";
import { QuickAction } from "@/types";

interface QuickActionCardProps {
  action: QuickAction;
}

export default function QuickActionCard({ action }: QuickActionCardProps) {
  return (
    <Link
      href={action.href}
      className="group block rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-lg font-bold text-white shadow-md">
        +
      </div>

      <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-blue-700">
        {action.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {action.description}
      </p>
    </Link>
  );
}