import StudentLayout from "@/components/layout/StudentLayout";
import VirtualClassRoom from "@/components/estudiante/VirtualClassRoom";
import MiniChatPanel from "@/components/estudiante/MiniChatPanel";

export default function StudentClassesPage() {
  return (
    <StudentLayout>
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Clases en línea</h1>
          <p className="mt-2 text-slate-600">
            Vista interactiva del entorno virtual de aprendizaje.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <VirtualClassRoom />
          <MiniChatPanel />
        </div>
      </section>
    </StudentLayout>
  );
}
