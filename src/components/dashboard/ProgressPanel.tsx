interface ProgressPanelProps {
  subjects: number;
  sections: number;
  students: number;
  plannings: number;
  evaluations: number;
}

export default function ProgressPanel({
  subjects,
  sections,
  students,
  plannings,
  evaluations,
}: ProgressPanelProps) {
  const total = subjects + sections + students + plannings + evaluations;

  const items = [
    { label: "Asignaturas", value: subjects, color: "bg-blue-500" },
    { label: "Secciones", value: sections, color: "bg-violet-500" },
    { label: "Estudiantes", value: students, color: "bg-cyan-500" },
    { label: "Planificación", value: plannings, color: "bg-emerald-500" },
    { label: "Evaluaciones", value: evaluations, color: "bg-amber-500" },
  ];

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Progreso del entorno académico</h2>
      <p className="mt-1 text-sm text-slate-600">
        Distribución actual de registros dentro del sistema.
      </p>

      <div className="mt-6 space-y-4">
        {items.map((item) => {
          const percent = total > 0 ? Math.max((item.value / total) * 100, 4) : 0;

          return (
            <div key={item.label}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
                <span className="text-sm text-slate-500">{item.value}</span>
              </div>

              <div className="h-3 rounded-full bg-slate-100">
                <div
                  className={`h-3 rounded-full ${item.color}`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}