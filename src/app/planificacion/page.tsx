"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PlanningForm from "@/components/planificacion/PlanningForm";
import PlanningList from "@/components/planificacion/PlanningList";
import Alert from "@/components/ui/Alert";
import { useAlert } from "@/hooks/useAlert";
import { useFirestoreCollection } from "@/hooks/useFirestoreCollection";
import { COLLECTIONS } from "@/lib/collections";
import { Planning, Section, Subject } from "@/types";

export default function PlanningPage() {
  const { items: subjects, isLoaded: subjectsLoaded } =
    useFirestoreCollection<Subject>(COLLECTIONS.subjects);

  const { items: sections, isLoaded: sectionsLoaded } =
    useFirestoreCollection<Section>(COLLECTIONS.sections);

  const {
    items: plannings,
    isLoaded: planningsLoaded,
    saveItem,
    removeItem,
  } = useFirestoreCollection<Planning>(COLLECTIONS.plannings);

  const [editingPlanning, setEditingPlanning] = useState<Planning | null>(null);
  const { alert, showAlert } = useAlert();

  const handleSavePlanning = async (planning: Planning) => {
    const planningToSave: Planning = {
      ...planning,
      id: planning.id || crypto.randomUUID(),
      createdAt: planning.createdAt || Date.now(),
    };

    const exists = plannings.some((item) => item.id === planningToSave.id);

    await saveItem(planningToSave);

    showAlert(
      exists
        ? "Planificación actualizada correctamente."
        : "Planificación registrada correctamente.",
      "success"
    );

    setEditingPlanning(null);
  };

  const handleDeletePlanning = async (id: string) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar esta planificación?"
    );
    if (!confirmed) return;

    await removeItem(id);
    showAlert("Planificación eliminada correctamente.", "info");

    if (editingPlanning?.id === id) {
      setEditingPlanning(null);
    }
  };

  if (!subjectsLoaded || !sectionsLoaded || !planningsLoaded) {
    return (
      <DashboardLayout>
        <p className="text-sm text-slate-500">Cargando planificación...</p>
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
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Planificación académica</h1>
          <p className="mt-2 text-slate-600">
            Organiza objetivos, contenidos y fechas por asignatura y sección.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Total registradas: {plannings.length}
          </p>
        </div>

        {alert && <Alert message={alert.message} type={alert.type} />}

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