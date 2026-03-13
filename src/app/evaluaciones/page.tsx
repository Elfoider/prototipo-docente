"use client";

import { useMemo, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import EvaluationForm from "@/components/evaluaciones/EvaluationForm";
import EvaluationList from "@/components/evaluaciones/EvaluationList";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Evaluation, Section, Subject } from "@/types";

export default function EvaluationsPage() {
  const [subjects, , subjectsLoaded] = useLocalStorage<Subject[]>("subjects", []);
  const [sections, , sectionsLoaded] = useLocalStorage<Section[]>("sections", []);
  const [evaluations, setEvaluations, evaluationsLoaded] = useLocalStorage<Evaluation[]>(
    "evaluations",
    []
  );
  const [editingEvaluation, setEditingEvaluation] = useState<Evaluation | null>(null);

  const totalEvaluations = useMemo(() => evaluations.length, [evaluations]);

  const handleSaveEvaluation = (evaluation: Evaluation) => {
    const exists = evaluations.some((item) => item.id === evaluation.id);

    if (exists) {
      setEvaluations(
        evaluations.map((item) => (item.id === evaluation.id ? evaluation : item))
      );
    } else {
      setEvaluations([...evaluations, evaluation]);
    }

    setEditingEvaluation(null);
  };

  const handleDeleteEvaluation = (id: string) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar esta evaluación?"
    );

    if (!confirmed) return;

    setEvaluations(evaluations.filter((item) => item.id !== id));
    if (editingEvaluation?.id === id) {
      setEditingEvaluation(null);
    }
  };

  if (!subjectsLoaded || !sectionsLoaded || !evaluationsLoaded) {
    return (
      <DashboardLayout>
        <p className="text-sm text-gray-500">Cargando evaluaciones...</p>
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
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Evaluaciones</h1>
          <p className="mt-2 text-gray-600">
            Registra evaluaciones con tipo, ponderación y fecha.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Total registradas: {totalEvaluations}
          </p>
        </div>

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