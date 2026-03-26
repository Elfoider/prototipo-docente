/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Planning, Section, Subject } from "@/types";
import { FormEvent, useEffect, useMemo, useState } from "react";

interface PlanningFormProps {
  subjects: Subject[];
  sections: Section[];
  onSubmit: (planning: Planning) => void;
  editingPlanning: Planning | null;
  onCancelEdit: () => void;
}

const initialForm: Planning = {
  id: "",
  subjectId: "",
  sectionId: "",
  title: "",
  objective: "",
  content: "",
  date: "",
  createdAt: Date.now(),
};

export default function PlanningForm({
  subjects,
  sections,
  onSubmit,
  editingPlanning,
  onCancelEdit,
}: PlanningFormProps) {
  const [formData, setFormData] = useState<Planning>(initialForm);

  useEffect(() => {
    if (editingPlanning) {
      setFormData(editingPlanning);
    } else {
      setFormData(initialForm);
    }
  }, [editingPlanning]);

  const filteredSections = useMemo(() => {
    if (!formData.subjectId) return [];
    return sections.filter((section) => section.subjectId === formData.subjectId);
  }, [sections, formData.subjectId]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const planningToSave: Planning = {
      ...formData,
      id: formData.id || crypto.randomUUID(),
    };

    onSubmit(planningToSave);
    setFormData(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {editingPlanning ? "Editar planificación" : "Registrar planificación"}
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Organiza objetivos, contenidos y fechas por asignatura y sección.
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
            Título de la planificación
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            placeholder="Ej. Unidad I - Introducción al desarrollo web"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Objetivo
          </label>
          <textarea
            value={formData.objective}
            onChange={(e) =>
              setFormData({ ...formData, objective: e.target.value })
            }
            className="min-h-[100px] w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Describe el objetivo académico"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Contenido
          </label>
          <textarea
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            className="min-h-[120px] w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            placeholder="Describe el contenido a desarrollar"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Fecha
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            required
          />
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="submit"
          className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 font-semibold text-white shadow-md hover:from-blue-700 hover:to-violet-700"
        >
          {editingPlanning ? "Guardar cambios" : "Registrar planificación"}
        </button>

        {editingPlanning && (
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