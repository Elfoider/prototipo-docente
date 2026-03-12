"use client";

import { Evaluation, Section, Subject } from "@/types";

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
        <p className="text-sm text-gray-500">
          Aún no hay evaluaciones registradas.
        </p>
      ) : (
        <div className="space-y-4">
          {evaluations.map((evaluation) => (
            <div
              key={evaluation.id}
              className="rounded-xl border border-gray-200 p-4"
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
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(evaluation.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
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