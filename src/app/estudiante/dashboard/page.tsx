import StudentLayout from "@/components/layout/StudentLayout";
import StudentHero from "@/components/estudiante/StudentHero";
import SubjectStudentCard from "@/components/estudiante/SubjectStudentCard";
import SubjectTabs from "@/components/estudiante/SubjectTabs";
import SubjectProgressCard from "@/components/estudiante/SubjectProgressCard";
import CalendarMini from "@/components/ui/CalendarMini";
import ProfileCard from "@/components/shared/ProfileCard";
import NotificationPanel from "@/components/shared/NotificationPanel";
import AcademicFeed from "@/components/shared/AcademicFeed";

const subjects = [
  {
    title: "Ingeniería de Software",
    section: "Sección A",
    teacher: "Yhonny Perozo",
    progress: 72,
  },
  {
    title: "Bases de Datos",
    section: "Sección B",
    teacher: "María González",
    progress: 58,
  },
  {
    title: "Programación Web",
    section: "Sección C",
    teacher: "Luis Romero",
    progress: 84,
  },
];

export default function StudentDashboardPage() {
  const notifications = [
  {
    title: "Actividad pendiente",
    description: "Debes entregar el Taller de modelado UML antes del viernes.",
    tone: "amber" as const,
  },
  {
    title: "Clase en línea",
    description: "Tienes sesión virtual de Bases de Datos este miércoles.",
    tone: "blue" as const,
  },
  {
    title: "Playground disponible",
    description: "Próximamente podrás practicar ejercicios interactivos por materia.",
    tone: "violet" as const,
  },
];

const feedItems = [
  {
    title: "Nuevo recurso académico",
    description: "Se publicó una guía complementaria para Ingeniería de Software.",
    meta: "Hace 1 hora",
  },
  {
    title: "Recordatorio de evaluación",
    description: "El quiz de normalización sigue activo en el calendario académico.",
    meta: "Hoy",
  },
];
  return (
    <StudentLayout>
      <section className="space-y-8">
        <StudentHero />

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
  <ProfileCard
    name="María Fernanda Pérez"
    role="Estudiante universitaria"
    email="maria@universidad.edu"
    detail="Trayecto académico: Ingeniería Informática · Sección A."
    color="estudiante"
  />
  <NotificationPanel items={notifications} />
</div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            Mis asignaturas
          </h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {subjects.map((subject) => (
              <SubjectStudentCard key={subject.title} {...subject} />
            ))}
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <SubjectTabs />
          <CalendarMini />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <SubjectProgressCard
            title="Ingeniería de Software"
            completed={8}
            total={11}
          />
          <SubjectProgressCard
            title="Bases de Datos"
            completed={5}
            total={9}
          />
          <SubjectProgressCard
            title="Programación Web"
            completed={9}
            total={11}
          />
          <AcademicFeed items={feedItems} />
        </div>
      </section>
    </StudentLayout>
  );
}