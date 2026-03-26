"use client";

import { useMemo } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import HeroBanner from "@/components/dashboard/HeroBanner";
import ProfileCard from "@/components/shared/ProfileCard";
import NotificationPanel from "@/components/shared/NotificationPanel";
import AcademicFeed from "@/components/shared/AcademicFeed";
import TimelinePanel from "@/components/shared/TimelinePanel";
import ModuleCard from "@/components/dashboard/ModuleCard";
import ProgressPanel from "@/components/dashboard/ProgressPanel";
import UpcomingPanel from "@/components/dashboard/UpcomingPanel";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Evaluation, Planning, Section, Student, Subject } from "@/types";
import { useFirestoreCollection } from "@/hooks/useFirestoreCollection";
import { COLLECTIONS } from "@/lib/collections";

export default function DashboardPage() {
  const { items: subjects, isLoaded: subjectsLoaded } =
    useFirestoreCollection<Subject>(COLLECTIONS.subjects);

  const { items: sections, isLoaded: sectionsLoaded } =
    useFirestoreCollection<Section>(COLLECTIONS.sections);

  const { items: students, isLoaded: studentsLoaded } =
    useFirestoreCollection<Student>(COLLECTIONS.students);

  const { items: plannings, isLoaded: planningsLoaded } =
    useFirestoreCollection<Planning>(COLLECTIONS.plannings);

  const { items: evaluations, isLoaded: evaluationsLoaded } =
    useFirestoreCollection<Evaluation>(COLLECTIONS.evaluations);

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
        description:
          "Administra materias, unidades curriculares y organización docente.",
        href: "/asignaturas",
        tone: "blue" as const,
        tag: `${subjects.length} registradas`,
      },
      {
        title: "Secciones",
        description:
          "Asocia grupos, horarios, modalidades y capacidad académica.",
        href: "/secciones",
        tone: "violet" as const,
        tag: `${sections.length} activas`,
      },
      {
        title: "Planificación",
        description:
          "Organiza objetivos, contenidos y fechas por asignatura y sección.",
        href: "/planificacion",
        tone: "green" as const,
        tag: `${plannings.length} creadas`,
      },
      {
        title: "Evaluaciones",
        description:
          "Gestiona actividades evaluativas, ponderaciones y cronogramas.",
        href: "/evaluaciones",
        tone: "amber" as const,
        tag: `${evaluations.length} registradas`,
      },
      {
        title: "Estudiantes",
        description:
          "Consulta y organiza estudiantes asociados a cada sección.",
        href: "/estudiantes",
        tone: "cyan" as const,
        tag: `${students.length} registrados`,
      },
      {
        title: "Asistente IA",
        description:
          "Genera textos académicos y apoyo inteligente para la gestión docente.",
        href: "/asistente",
        tone: "violet" as const,
        tag: "Inteligente",
      },
    ],
    [
      subjects.length,
      sections.length,
      plannings.length,
      evaluations.length,
      students.length,
    ],
  );

  const notifications = [
    {
      title: "Evaluación próxima",
      description:
        "El Parcial I de Ingeniería de Software está programado para esta semana.",
      tone: "amber" as const,
    },
    {
      title: "Planificación actualizada",
      description: "Se registró una nueva planificación en Programación Web.",
      tone: "green" as const,
    },
    {
      title: "Asistente disponible",
      description:
        "El módulo inteligente está listo para generar anuncios y actividades.",
      tone: "violet" as const,
    },
  ];

  const feedItems = [
    {
      title: "Nuevo anuncio académico",
      description:
        "Se recomienda a los estudiantes revisar el contenido de la Unidad II antes de la próxima sesión.",
      meta: "Hace 2 horas",
    },
    {
      title: "Actualización del sistema",
      description:
        "El entorno académico ahora incorpora experiencia visual docente y estudiante.",
      meta: "Hoy",
    },
  ];

  const timelineItems = [
    {
      time: "08:00 AM",
      title: "Clase programada",
      description: "Inicio de sesión de Ingeniería de Software - Sección A.",
    },
    {
      time: "11:00 AM",
      title: "Revisión de actividades",
      description: "Validación de entregas pendientes en Programación Web.",
    },
    {
      time: "02:00 PM",
      title: "Planificación docente",
      description: "Registro de contenidos y ajustes del cronograma académico.",
    },
  ];

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

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <ProfileCard
            name="Yhonny Perozo"
            role="Docente universitario"
            email="yhonny@universidad.edu"
            detail="Área académica: Tecnologías de Información y apoyo a la gestión docente."
            color="docente"
          />
          <NotificationPanel items={notifications} />
        </div>

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
        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <AcademicFeed items={feedItems} />
          <TimelinePanel items={timelineItems} />
        </div>
      </section>
    </DashboardLayout>
  );
}
