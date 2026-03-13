import DashboardLayout from "@/components/layout/DashboardLayout";
import AssistantPanel from "@/components/asistente/AssistantPanel";

export default function AssistantPage() {
  return (
    <DashboardLayout>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Asistente inteligente
          </h1>
          <p className="mt-2 text-gray-600">
            Genera textos académicos de apoyo para anuncios, actividades e
            instrucciones docentes.
          </p>
        </div>

        <AssistantPanel />
      </section>
    </DashboardLayout>
  );
}