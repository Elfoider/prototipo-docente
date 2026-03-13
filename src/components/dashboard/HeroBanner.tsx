import Badge from "@/components/ui/Badge";

export default function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700 p-8 text-white shadow-2xl">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <Badge variant="blue">Plataforma educativa</Badge>

        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Gestiona tu entorno académico de forma más visual, moderna e inteligente
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base">
          Administra asignaturas, secciones, planificación, evaluaciones y estudiantes
          desde una experiencia centralizada, preparada para escalar hacia clases en
          línea, interacción estudiantil y playground académico.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
            Gestión docente
          </span>
          <span className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
            Experiencia estudiantil
          </span>
          <span className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
            Asistencia inteligente
          </span>
        </div>
      </div>
    </div>
  );
}