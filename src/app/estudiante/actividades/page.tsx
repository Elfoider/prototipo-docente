import StudentLayout from "@/components/layout/StudentLayout";
import ActivityCard from "@/components/estudiante/ActivityCard";
import AssignmentSubmitCard from "@/components/estudiante/AssignmentSubmitCard";

const activities = [
  {
    title: "Taller de modelado UML",
    subject: "Ingeniería de Software",
    dueDate: "2026-03-28",
    type: "Taller",
  },
  {
    title: "Quiz de normalización",
    subject: "Bases de Datos",
    dueDate: "2026-03-30",
    type: "Quiz",
  },
  {
    title: "Práctica de componentes React",
    subject: "Programación Web",
    dueDate: "2026-04-02",
    type: "Práctica",
  },
];

export default function StudentActivitiesPage() {
  return (
    <StudentLayout>
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Actividades</h1>
          <p className="mt-2 text-slate-600">
            Revisa tus compromisos académicos pendientes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {activities.map((item) => (
            <ActivityCard key={item.title} {...item} />
          ))}
        </div>

        <AssignmentSubmitCard />
      </section>
    </StudentLayout>
  );
}
