import { QuickAction, Stat } from "@/types";

export const dashboardStats: Stat[] = [
  {
    title: "Asignaturas activas",
    value: "4",
    description: "Materias registradas en el período actual",
  },
  {
    title: "Secciones",
    value: "7",
    description: "Secciones asignadas al docente",
  },
  {
    title: "Estudiantes",
    value: "186",
    description: "Total de estudiantes registrados",
  },
  {
    title: "Actividades próximas",
    value: "5",
    description: "Evaluaciones y entregas programadas",
  },
];

export const quickActions: QuickAction[] = [
  {
    title: "Registrar asignatura",
    description: "Crea una nueva asignatura para este período.",
    href: "/asignaturas",
  },
  {
    title: "Gestionar secciones",
    description: "Administra las secciones asociadas a tus asignaturas.",
    href: "/secciones",
  },
  {
    title: "Crear planificación",
    description: "Organiza contenidos y actividades académicas.",
    href: "#",
  },
  {
    title: "Generar anuncio",
    description: "Usa el asistente para redactar avisos académicos.",
    href: "#",
  },
];