import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import QuickActionCard from "@/components/ui/QuickActionCard";
import { dashboardStats, quickActions } from "@/data/mock";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <section>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Bienvenido, docente
          </h1>
          <p className="mt-2 text-gray-600">
            Administra tus asignaturas, planificación y actividades académicas
            desde un solo lugar.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.title} stat={stat} />
          ))}
        </div>

        <div className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Accesos rápidos
          </h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action) => (
              <QuickActionCard key={action.title} action={action} />
            ))}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}