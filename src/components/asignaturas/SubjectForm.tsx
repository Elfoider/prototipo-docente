"use client";

import { Subject } from "@/types";
import { FormEvent, useEffect, useState } from "react";

interface SubjectFormProps {
  onSubmit: (subject: Subject) => void;
  editingSubject: Subject | null;
  onCancelEdit: () => void;
}

const initialForm = {
  id: "",
  name: "",
  code: "",
  description: "",
  period: "",
};

export default function SubjectForm({
  onSubmit,
  editingSubject,
  onCancelEdit,
}: SubjectFormProps) {
  const [formData, setFormData] = useState<Subject>(initialForm);

  useEffect(() => {
    if (editingSubject) {
      setFormData(editingSubject);
    } else {
      setFormData(initialForm);
    }
  }, [editingSubject]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subjectToSave: Subject = {
      ...formData,
      id: formData.id || crypto.randomUUID(),
    };

    onSubmit(subjectToSave);
    setFormData(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {editingSubject ? "Editar asignatura" : "Registrar asignatura"}
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Administra la información básica de cada unidad curricular.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Nombre de la asignatura
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Ej. Ingeniería de Software"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Código
          </label>
          <input
            type="text"
            value={formData.code}
            onChange={(e) =>
              setFormData({ ...formData, code: e.target.value })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Ej. INF-401"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Período académico
          </label>
          <input
            type="text"
            value={formData.period}
            onChange={(e) =>
              setFormData({ ...formData, period: e.target.value })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Ej. 2026-I"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="min-h-[120px] w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Descripción general de la asignatura"
            required
          />
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="submit"
          className="rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-800"
        >
          {editingSubject ? "Guardar cambios" : "Registrar asignatura"}
        </button>

        {editingSubject && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-100"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}