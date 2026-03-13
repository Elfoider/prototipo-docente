"use client";

import { useMemo, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PlanningForm from "@/components/planificacion/PlanningForm";
import PlanningList from "@/components/planificacion/PlanningList";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Planning, Section, Subject } from "@/types";

export default function PlanningPage() {
  const [subjects, , subjectsLoaded] = useLocalStorage<Subject[]>("subjects", []);
  const [sections, , sectionsLoaded] = useLocalStorage<Section[]>("sections", []);
  const [plannings, setPlannings, planningsLoaded] = useLocalStorage<Planning[]>(
    "plannings",
    []
  );
  const [editingPlanning, setEditingPlanning] = useState<Planning | null>(null);

  const totalPlannings = useMemo(() => plannings.length, [plannings]);

  const handleSavePlanning = (planning: Planning) => {
    const exists = plannings.some((item) => item.id === planning.id);

    if (exists) {
      setPlannings(
        plannings.map((item) => (item.id === planning.id ? planning : item))
      );
    } else {
      setPlannings([...plannings, planning]);
    }

    setEditingPlanning(null);
  };

  const handleDeletePlanning = (id: string) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar esta planificación?"
    );

    if (!confirmed) return;

    setPlannings(plannings.filter((item) => item.id !== id));
    if (editingPlanning?.id === id) {
      setEditingPlanning(null);
    }
  };

  if (!subjectsLoaded || !sectionsLoaded || !planningsLoaded) {
    return (
      <DashboardLayout>
        <p className="text-sm text-gray-500">Cargando planificación...</p>
      </DashboardLayout>
    );
  }

  if (subjects.length === 0 || sections.length === 0) {
    return (
      <DashboardLayout>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
          <h2 className="text-lg font-semibold text-yellow-900">
            Necesitas asignaturas y secciones
          </h2>
          <p className="mt-2 text-sm text-yellow-800">
            Para registrar planificaciones, primero debes crear asignaturas y
            secciones.
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Planificación académica</h1>
          <p className="mt-2 text-gray-600">
            Organiza objetivos, contenidos y fechas por asignatura y sección.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Total registradas: {totalPlannings}
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
          <PlanningForm
            subjects={subjects}
            sections={sections}
            onSubmit={handleSavePlanning}
            editingPlanning={editingPlanning}
            onCancelEdit={() => setEditingPlanning(null)}
          />

          <PlanningList
            plannings={plannings}
            subjects={subjects}
            sections={sections}
            onEdit={setEditingPlanning}
            onDelete={handleDeletePlanning}
          />
        </div>
      </section>
    </DashboardLayout>
  );
}