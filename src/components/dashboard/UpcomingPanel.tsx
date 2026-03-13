const items = [
  {
    title: "Clases en línea",
    description: "Integrar sesiones virtuales entre docentes y estudiantes.",
  },
  {
    title: "Módulo estudiante",
    description: "Visualización de asignaturas, secciones y actividades.",
  },
  {
    title: "Playground académico",
    description: "Espacio práctico para resolución de ejercicios por materia.",
  },
  {
    title: "IA educativa",
    description: "Asistencia contextual para tareas, anuncios y guías.",
  },
];

export default function UpcomingPanel() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Visión de expansión</h2>
      <p className="mt-1 text-sm text-slate-600">
        Próximas capacidades del sistema para una experiencia académica integral.
      </p>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
          >
            <h3 className="font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}