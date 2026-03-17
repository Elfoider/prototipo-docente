import Link from "next/link";

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-violet-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Portal académico
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            Selecciona tu entorno de acceso
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Docentia Web evoluciona hacia una plataforma integral con experiencia
            diferenciada para docentes y estudiantes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Link
            href="/dashboard"
            className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 text-2xl font-bold text-white shadow-lg">
              D
            </div>
            <h2 className="mt-6 text-2xl font-bold text-slate-900 group-hover:text-blue-700">
              Módulo docente
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Gestión de asignaturas, secciones, planificación, evaluaciones,
              estudiantes y apoyo inteligente para el trabajo académico.
            </p>
          </Link>

          <Link
            href="/estudiante/dashboard"
            className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-2xl font-bold text-white shadow-lg">
              E
            </div>
            <h2 className="mt-6 text-2xl font-bold text-slate-900 group-hover:text-cyan-700">
              Módulo estudiante
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Visualización de asignaturas, secciones, clases en línea,
              actividades, evaluaciones y futuro playground académico.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}