"use client";

import { Section, Student, Subject } from "@/types";

interface StudentListProps {
  students: Student[];
  subjects: Subject[];
  sections: Section[];
  onEdit: (student: Student) => void;
  onDelete: (id: string) => void;
}

export default function StudentList({
  students,
  subjects,
  sections,
  onEdit,
  onDelete,
}: StudentListProps) {
  const getSubjectName = (subjectId: string) =>
    subjects.find((subject) => subject.id === subjectId)?.name || "N/A";

  const getSectionName = (sectionId: string) =>
    sections.find((section) => section.id === sectionId)?.name || "N/A";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Estudiantes registrados
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Consulta y administra los estudiantes por sección.
        </p>
      </div>

      {students.length === 0 ? (
        <p className="text-sm text-gray-500">
          Aún no hay estudiantes registrados.
        </p>
      ) : (
        <div className="space-y-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="rounded-xl border border-gray-200 p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {student.fullName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Cédula: {student.idNumber}
                  </p>
                  <p className="text-sm text-gray-700">
                    Correo: {student.email}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    Asignatura: {getSubjectName(student.subjectId)}
                  </p>
                  <p className="text-sm text-gray-700">
                    Sección: {getSectionName(student.sectionId)}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(student)}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(student.id)}
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