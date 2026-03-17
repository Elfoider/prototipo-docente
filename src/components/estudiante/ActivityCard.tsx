interface ActivityCardProps {
  title: string;
  subject: string;
  dueDate: string;
  type: string;
}

export default function ActivityCard({
  title,
  subject,
  dueDate,
  type,
}: ActivityCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
          {type}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {subject}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">
        Fecha de entrega: {dueDate}
      </p>
    </div>
  );
}