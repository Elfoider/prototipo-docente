import DashboardLayout from "@/components/layout/DashboardLayout";
import AssistantPanel from "@/components/asistente/AssistantPanel";

export default function AssistantPage() {
  return (
    <DashboardLayout>
      <section className="space-y-6">
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