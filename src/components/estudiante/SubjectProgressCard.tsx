interface SubjectProgressCardProps {
    title: string;
    completed: number;
    total: number;
  }
  
  export default function SubjectProgressCard({
    title,
    completed,
    total,
  }: SubjectProgressCardProps) {
    const percent = total > 0 ? (completed / total) * 100 : 0;
  
    return (
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">
          Actividades completadas: {completed} de {total}
        </p>
  
        <div className="mt-5 h-3 rounded-full bg-slate-100">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500"
            style={{ width: `${percent}%` }}
          />
        </div>
  
        <p className="mt-3 text-sm font-medium text-slate-700">
          Progreso: {Math.round(percent)}%
        </p>
      </div>
    );
  }
  