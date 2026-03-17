import StudentLayout from "@/components/layout/StudentLayout";
import StudentHero from "@/components/estudiante/StudentHero";
import SubjectStudentCard from "@/components/estudiante/SubjectStudentCard";
import SubjectTabs from "@/components/estudiante/SubjectTabs";

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
  return (
    <StudentLayout>
      <section className="space-y-8">
        <StudentHero />

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

        <SubjectTabs />
      </section>
    </StudentLayout>
  );
}