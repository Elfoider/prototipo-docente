"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import EvaluationForm from "@/components/evaluaciones/EvaluationForm";
import EvaluationList from "@/components/evaluaciones/EvaluationList";
import Alert from "@/components/ui/Alert";
import { useAlert } from "@/hooks/useAlert";
import { useFirestoreCollection } from "@/hooks/useFirestoreCollection";
import { COLLECTIONS } from "@/lib/collections";
import { Evaluation, Section, Subject } from "@/types";

export default function EvaluationsPage() {
  const { items: subjects, isLoaded: subjectsLoaded } =
    useFirestoreCollection<Subject>(COLLECTIONS.subjects);

  const { items: sections, isLoaded: sectionsLoaded } =
    useFirestoreCollection<Section>(COLLECTIONS.sections);

  const {
    items: evaluations,
    isLoaded: evaluationsLoaded,
    saveItem,
    removeItem,
  } = useFirestoreCollection<Evaluation>(COLLECTIONS.evaluations);

  const [editingEvaluation, setEditingEvaluation] =
    useState<Evaluation | null>(null);
  const { alert, showAlert } = useAlert();

  const handleSaveEvaluation = async (evaluation: Evaluation) => {
    const evaluationToSave: Evaluation = {
      ...evaluation,
      id: evaluation.id || crypto.randomUUID(),
      createdAt: evaluation.createdAt || Date.now(),
    };

    const exists = evaluations.some((item) => item.id === evaluationToSave.id);

    await saveItem(evaluationToSave);

    showAlert(
      exists
        ? "Evaluación actualizada correctamente."
        : "Evaluación registrada correctamente.",
      "success"
    );

    setEditingEvaluation(null);
  };

  const handleDeleteEvaluation = async (id: string) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar esta evaluación?"
    );
    if (!confirmed) return;

    await removeItem(id);
    showAlert("Evaluación eliminada correctamente.", "info");

    if (editingEvaluation?.id === id) {
      setEditingEvaluation(null);
    }
  };

  if (!subjectsLoaded || !sectionsLoaded || !evaluationsLoaded) {
    return (
      <DashboardLayout>
        <p className="text-sm text-slate-500">Cargando evaluaciones...</p>
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
            Para registrar evaluaciones, primero debes crear asignaturas y
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
          <h1 className="text-3xl font-bold text-slate-900">Evaluaciones</h1>
          <p className="mt-2 text-slate-600">
            Registra evaluaciones con tipo, ponderación y fecha.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Total registradas: {evaluations.length}
          </p>
        </div>

        {alert && <Alert message={alert.message} type={alert.type} />}

        <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
          <EvaluationForm
            subjects={subjects}
            sections={sections}
            onSubmit={handleSaveEvaluation}
            editingEvaluation={editingEvaluation}
            onCancelEdit={() => setEditingEvaluation(null)}
          />

          <EvaluationList
            evaluations={evaluations}
            subjects={subjects}
            sections={sections}
            onEdit={setEditingEvaluation}
            onDelete={handleDeleteEvaluation}
          />
        </div>
      </section>
    </DashboardLayout>
  );
}