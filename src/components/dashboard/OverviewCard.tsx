interface OverviewCardProps {
  title: string;
  value: string;
  description: string;
}

export default function OverviewCard({
  title,
  value,
  description,
}: OverviewCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
        {value}
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}