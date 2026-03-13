"use client";

import { useMemo } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import QuickActionCard from "@/components/ui/QuickActionCard";
import { quickActions } from "@/data/mock";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  Evaluation,
  Planning,
  Section,
  Student,
  Subject,
  Stat,
} from "@/types";

export default function DashboardPage() {
  const [subjects, , subjectsLoaded] = useLocalStorage<Subject[]>("subjects", []);
  const [sections, , sectionsLoaded] = useLocalStorage<Section[]>("sections", []);
  const [students, , studentsLoaded] = useLocalStorage<Student[]>("students", []);
  const [plannings, , planningsLoaded] = useLocalStorage<Planning[]>("plannings", []);
  const [evaluations, , evaluationsLoaded] = useLocalStorage<Evaluation[]>(
    "evaluations",
    []
  );

  const stats: Stat[] = useMemo(
    () => [
      {
        title: "Asignaturas activas",
        value: String(subjects.length),
        description: "Materias registradas en el período actual",
      },
      {
        title: "Secciones",
        value: String(sections.length),
        description: "Secciones asignadas al docente",
      },
      {
        title: "Estudiantes",
        value: String(students.length),
        description: "Total de estudiantes registrados",
      },
      {
        title: "Actividades académicas",
        value: String(plannings.length + evaluations.length),
        description: "Planificaciones y evaluaciones creadas",
      },
    ],
    [subjects.length, sections.length, students.length, plannings.length, evaluations.length]
  );

  const loaded =
    subjectsLoaded &&
    sectionsLoaded &&
    studentsLoaded &&
    planningsLoaded &&
    evaluationsLoaded;

  if (!loaded) {
    return (
      <DashboardLayout>
        <p className="text-sm text-gray-500">Cargando dashboard...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <section>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Bienvenido, docente
          </h1>
          <p className="mt-2 text-gray-600">
            Administra tus asignaturas, planificación, evaluaciones y estudiantes
            desde un solo lugar.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
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