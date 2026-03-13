"use client";

import { Evaluation, Section, Subject } from "@/types";
import EmptyState from "../ui/EmptyState";

interface EvaluationListProps {
  evaluations: Evaluation[];
  subjects: Subject[];
  sections: Section[];
  onEdit: (evaluation: Evaluation) => void;
  onDelete: (id: string) => void;
}

export default function EvaluationList({
  evaluations,
  subjects,
  sections,
  onEdit,
  onDelete,
}: EvaluationListProps) {
  const getSubjectName = (subjectId: string) =>
    subjects.find((subject) => subject.id === subjectId)?.name || "N/A";

  const getSectionName = (sectionId: string) =>
    sections.find((section) => section.id === sectionId)?.name || "N/A";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Evaluaciones registradas
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Consulta y administra las evaluaciones creadas.
        </p>
      </div>

      {evaluations.length === 0 ? (
<EmptyState
  title="Sin registros"
  description="Todavía no hay elementos registrados en este módulo."
/>
      ) : (
        <div className="space-y-4">
          {evaluations.map((evaluation) => (
            <div
              key={evaluation.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {evaluation.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Asignatura: {getSubjectName(evaluation.subjectId)} · Sección:{" "}
                    {getSectionName(evaluation.sectionId)}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    <span className="font-medium">Tipo:</span> {evaluation.type}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Ponderación:</span>{" "}
                    {evaluation.percentage}%
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Fecha:</span> {evaluation.date}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    <span className="font-medium">Descripción:</span>{" "}
                    {evaluation.description}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(evaluation)}
                    className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(evaluation.id)}
                    className="rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-4 py-2 text-sm font-medium text-white hover:from-rose-600 hover:to-red-700"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}