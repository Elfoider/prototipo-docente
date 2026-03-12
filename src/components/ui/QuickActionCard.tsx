import Link from "next/link";
import { QuickAction } from "@/types";

interface QuickActionCardProps {
  action: QuickAction;
}

export default function QuickActionCard({ action }: QuickActionCardProps) {
  return (
    <Link
      href={action.href}
      className="block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-gray-900">{action.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{action.description}</p>
    </Link>
  );
}