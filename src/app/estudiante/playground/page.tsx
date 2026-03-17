import StudentLayout from "@/components/layout/StudentLayout";
import PlaygroundWorkspace from "@/components/estudiante/PlaygroundWorkspace";

export default function StudentPlaygroundPage() {
  return (
    <StudentLayout>
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Playground académico
          </h1>
          <p className="mt-2 text-slate-600">
            Área visual de práctica para actividades interactivas.
          </p>
        </div>

        <PlaygroundWorkspace />
      </section>
    </StudentLayout>
  );
}