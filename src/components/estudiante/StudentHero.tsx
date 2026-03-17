export default function StudentHero() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-cyan-600 via-sky-600 to-emerald-500 p-8 text-white shadow-2xl">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-50/90">
          Entorno académico
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Aprende, participa y practica desde un espacio más interactivo
        </h1>
        <p className="mt-4 text-sm leading-7 text-cyan-50 sm:text-base">
          Consulta tus asignaturas, accede a clases en línea, revisa actividades
          pendientes y prepárate para el futuro playground académico por materia.
        </p>
      </div>
    </div>
  );
}