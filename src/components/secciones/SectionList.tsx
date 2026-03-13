"use client";

import { Section, Subject } from "@/types";
import EmptyState from "../ui/EmptyState";

interface SectionListProps {
  sections: Section[];
  subjects: Subject[];
  onEdit: (section: Section) => void;
  onDelete: (id: string) => void;
}

export default function SectionList({
  sections,
  subjects,
  onEdit,
  onDelete,
}: SectionListProps) {
  const getSubjectName = (subjectId: string) => {
    return subjects.find((subject) => subject.id === subjectId)?.name || "N/A";
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Secciones registradas
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Consulta y administra las secciones creadas.
        </p>
      </div>

      {sections.length === 0 ? (
        <EmptyState
          title="Sin registros"
          description="Todavía no hay elementos registrados en este módulo."
        />
      ) : (
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {section.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Asignatura: {getSubjectName(section.subjectId)}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    Horario: {section.schedule}
                  </p>
                  <p className="text-sm text-gray-700">
                    Modalidad: {section.modality}
                  </p>
                  <p className="text-sm text-gray-700">
                    Aula o espacio: {section.classroom}
                  </p>
                  <p className="text-sm text-gray-700">
                    Capacidad: {section.capacity} estudiantes
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(section)}
                    className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(section.id)}
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
