import { Stat } from "@/types";

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-gray-500">{stat.title}</p>
      <h3 className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</h3>
      <p className="mt-2 text-sm text-gray-600">{stat.description}</p>
    </div>
  );
}