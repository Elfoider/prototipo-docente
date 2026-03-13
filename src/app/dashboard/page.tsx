"use client";

import { useMemo } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import HeroBanner from "@/components/dashboard/HeroBanner";
import ModuleCard from "@/components/dashboard/ModuleCard";
import ProgressPanel from "@/components/dashboard/ProgressPanel";
import UpcomingPanel from "@/components/dashboard/UpcomingPanel";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Evaluation, Planning, Section, Student, Subject } from "@/types";

export default function DashboardPage() {
  const [subjects, , subjectsLoaded] = useLocalStorage<Subject[]>("subjects", []);
  const [sections, , sectionsLoaded] = useLocalStorage<Section[]>("sections", []);
  const [students, , studentsLoaded] = useLocalStorage<Student[]>("students", []);
  const [plannings, , planningsLoaded] = useLocalStorage<Planning[]>("plannings", []);
  const [evaluations, , evaluationsLoaded] = useLocalStorage<Evaluation[]>(
    "evaluations",
    []
  );

  const loaded =
    subjectsLoaded &&
    sectionsLoaded &&
    studentsLoaded &&
    planningsLoaded &&
    evaluationsLoaded;

  const modules = useMemo(
    () => [
      {
        title: "Asignaturas",
        description: "Administra materias, unidades curriculares y organización docente.",
        href: "/asignaturas",
        tone: "blue" as const,
        tag: `${subjects.length} registradas`,
      },
      {
        title: "Secciones",
        description: "Asocia grupos, horarios, modalidades y capacidad académica.",
        href: "/secciones",
        tone: "violet" as const,
        tag: `${sections.length} activas`,
      },
      {
        title: "Planificación",
        description: "Organiza objetivos, contenidos y fechas por asignatura y sección.",
        href: "/planificacion",
        tone: "green" as const,
        tag: `${plannings.length} creadas`,
      },
      {
        title: "Evaluaciones",
        description: "Gestiona actividades evaluativas, ponderaciones y cronogramas.",
        href: "/evaluaciones",
        tone: "amber" as const,
        tag: `${evaluations.length} registradas`,
      },
      {
        title: "Estudiantes",
        description: "Consulta y organiza estudiantes asociados a cada sección.",
        href: "/estudiantes",
        tone: "cyan" as const,
        tag: `${students.length} registrados`,
      },
      {
        title: "Asistente IA",
        description: "Genera textos académicos y apoyo inteligente para la gestión docente.",
        href: "/asistente",
        tone: "violet" as const,
        tag: "Inteligente",
      },
    ],
    [subjects.length, sections.length, plannings.length, evaluations.length, students.length]
  );

  if (!loaded) {
    return (
      <DashboardLayout>
        <p className="text-sm text-slate-500">Cargando dashboard...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <section className="space-y-8">
        <SectionTitle
          title="Panel principal"
          description="Entorno visual de gestión académica pensado para docentes y preparado para crecer hacia una experiencia completa para estudiantes."
        />

        <HeroBanner />

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            Módulos del sistema
          </h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => (
              <ModuleCard
                key={module.title}
                title={module.title}
                description={module.description}
                href={module.href}
                tone={module.tone}
                tag={module.tag}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <ProgressPanel
            subjects={subjects.length}
            sections={sections.length}
            students={students.length}
            plannings={plannings.length}
            evaluations={evaluations.length}
          />
          <UpcomingPanel />
        </div>
      </section>
    </DashboardLayout>
  );
}