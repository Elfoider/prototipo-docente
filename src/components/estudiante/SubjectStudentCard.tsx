interface SubjectStudentCardProps {
  title: string;
  section: string;
  teacher: string;
  progress: number;
}

export default function SubjectStudentCard({
  title,
  section,
  teacher,
  progress,
}: SubjectStudentCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-lg font-bold text-white shadow-lg">
        {title.slice(0, 1)}
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">Sección: {section}</p>
      <p className="text-sm text-slate-600">Docente: {teacher}</p>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-600">Progreso</span>
          <span className="text-sm text-slate-500">{progress}%</span>
        </div>
        <div className="h-3 rounded-full bg-slate-100">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}