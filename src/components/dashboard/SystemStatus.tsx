interface SystemStatusProps {
  subjects: number;
  sections: number;
  students: number;
  plannings: number;
  evaluations: number;
}

export default function SystemStatus({
  subjects,
  sections,
  students,
  plannings,
  evaluations,
}: SystemStatusProps) {
  const totalAcademicLoad = plannings + evaluations;

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">Estado del sistema</h2>
      <p className="mt-1 text-sm text-gray-600">
        Vista general del prototipo para apoyo a la gestión académica docente.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-gray-50 p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Estructura académica
          </p>
          <p className="mt-2 text-sm text-gray-700">
            {subjects} asignaturas y {sections} secciones activas.
          </p>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Gestión estudiantil
          </p>
          <p className="mt-2 text-sm text-gray-700">
            {students} estudiantes registrados.
          </p>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Planificación
          </p>
          <p className="mt-2 text-sm text-gray-700">
            {plannings} planificaciones académicas creadas.
          </p>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Evaluación
          </p>
          <p className="mt-2 text-sm text-gray-700">
            {evaluations} evaluaciones registradas.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-4">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          Carga académica total
        </p>
        <p className="mt-2 text-sm text-gray-700">
          El sistema administra actualmente {totalAcademicLoad} actividades
          académicas entre planificaciones y evaluaciones.
        </p>
      </div>
    </div>
  );
}