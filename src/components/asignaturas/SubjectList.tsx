"use client";

import { Subject } from "@/types";

interface SubjectListProps {
  subjects: Subject[];
  onEdit: (subject: Subject) => void;
  onDelete: (id: string) => void;
}

export default function SubjectList({
  subjects,
  onEdit,
  onDelete,
}: SubjectListProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Asignaturas registradas
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Consulta y administra tus asignaturas activas.
        </p>
      </div>

      {subjects.length === 0 ? (
        <p className="text-sm text-gray-500">
          Aún no hay asignaturas registradas.
        </p>
      ) : (
        <div className="space-y-4">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="rounded-xl border border-gray-200 p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Código: {subject.code} · Período: {subject.period}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    {subject.description}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(subject)}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(subject.id)}
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