/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Section, Student, Subject } from "@/types";
import { FormEvent, useEffect, useMemo, useState } from "react";

interface StudentFormProps {
  subjects: Subject[];
  sections: Section[];
  onSubmit: (student: Student) => void;
  editingStudent: Student | null;
  onCancelEdit: () => void;
}

const initialForm: Student = {
  id: "",
  subjectId: "",
  sectionId: "",
  fullName: "",
  idNumber: "",
  email: "",
  createdAt: Date.now(),

};

export default function StudentForm({
  subjects,
  sections,
  onSubmit,
  editingStudent,
  onCancelEdit,
}: StudentFormProps) {
  const [formData, setFormData] = useState<Student>(initialForm);

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    } else {
      setFormData(initialForm);
    }
  }, [editingStudent]);

  const filteredSections = useMemo(() => {
    if (!formData.subjectId) return [];
    return sections.filter((section) => section.subjectId === formData.subjectId);
  }, [sections, formData.subjectId]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const studentToSave: Student = {
      ...formData,
      id: formData.id || crypto.randomUUID(),
    };

    onSubmit(studentToSave);
    setFormData(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {editingStudent ? "Editar estudiante" : "Registrar estudiante"}
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Asocia estudiantes a una asignatura y sección.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Asignatura
          </label>
          <select
            value={formData.subjectId}
            onChange={(e) =>
              setFormData({
                ...formData,
                subjectId: e.target.value,
                sectionId: "",
              })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            required
          >
            <option value="">Selecciona una asignatura</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Sección
          </label>
          <select
            value={formData.sectionId}
            onChange={(e) =>
              setFormData({ ...formData, sectionId: e.target.value })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            required
          >
            <option value="">Selecciona una sección</option>
            {filteredSections.map((section) => (
              <option key={section.id} value={section.id}>
                {section.name}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Nombre completo
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            placeholder="Ej. María Fernanda Pérez"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Cédula
          </label>
          <input
            type="text"
            value={formData.idNumber}
            onChange={(e) =>
              setFormData({ ...formData, idNumber: e.target.value })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            placeholder="Ej. V-12345678"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Correo
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            placeholder="ejemplo@correo.com"
            required
          />
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="submit"
          className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 font-semibold text-white shadow-md hover:from-blue-700 hover:to-violet-700"
        >
          {editingStudent ? "Guardar cambios" : "Registrar estudiante"}
        </button>

        {editingStudent && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 hover:bg-slate-50"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}