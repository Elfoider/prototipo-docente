"use client";

import { Section, Subject } from "@/types";

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
        <p className="text-sm text-gray-500">
          Aún no hay secciones registradas.
        </p>
      ) : (
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="rounded-xl border border-gray-200 p-4"
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
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(section.id)}
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