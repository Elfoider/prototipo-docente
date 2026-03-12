"use client";

import { Planning, Section, Subject } from "@/types";

interface PlanningListProps {
  plannings: Planning[];
  subjects: Subject[];
  sections: Section[];
  onEdit: (planning: Planning) => void;
  onDelete: (id: string) => void;
}

export default function PlanningList({
  plannings,
  subjects,
  sections,
  onEdit,
  onDelete,
}: PlanningListProps) {
  const getSubjectName = (subjectId: string) =>
    subjects.find((subject) => subject.id === subjectId)?.name || "N/A";

  const getSectionName = (sectionId: string) =>
    sections.find((section) => section.id === sectionId)?.name || "N/A";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Planificaciones registradas
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Consulta y administra las planificaciones creadas.
        </p>
      </div>

      {plannings.length === 0 ? (
        <p className="text-sm text-gray-500">
          Aún no hay planificaciones registradas.
        </p>
      ) : (
        <div className="space-y-4">
          {plannings.map((planning) => (
            <div
              key={planning.id}
              className="rounded-xl border border-gray-200 p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {planning.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Asignatura: {getSubjectName(planning.subjectId)} · Sección:{" "}
                    {getSectionName(planning.sectionId)}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    <span className="font-medium">Objetivo:</span>{" "}
                    {planning.objective}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    <span className="font-medium">Contenido:</span>{" "}
                    {planning.content}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    <span className="font-medium">Fecha:</span> {planning.date}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(planning)}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(planning.id)}
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