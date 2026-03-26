/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Evaluation, Section, Subject } from "@/types";
import { FormEvent, useEffect, useMemo, useState } from "react";

interface EvaluationFormProps {
  subjects: Subject[];
  sections: Section[];
  onSubmit: (evaluation: Evaluation) => void;
  editingEvaluation: Evaluation | null;
  onCancelEdit: () => void;
}

const initialForm: Evaluation = {
  id: "",
  subjectId: "",
  sectionId: "",
  title: "",
  type: "",
  percentage: 0,
  date: "",
  description: "",
  createdAt: Date.now(),
};

export default function EvaluationForm({
  subjects,
  sections,
  onSubmit,
  editingEvaluation,
  onCancelEdit,
}: EvaluationFormProps) {
  const [formData, setFormData] = useState<Evaluation>(initialForm);

  useEffect(() => {
    if (editingEvaluation) {
      setFormData(editingEvaluation);
    } else {
      setFormData(initialForm);
    }
  }, [editingEvaluation]);

  const filteredSections = useMemo(() => {
    if (!formData.subjectId) return [];
    return sections.filter((section) => section.subjectId === formData.subjectId);
  }, [sections, formData.subjectId]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const evaluationToSave: Evaluation = {
      ...formData,
      id: formData.id || crypto.randomUUID(),
      percentage: Number(formData.percentage),
    };

    onSubmit(evaluationToSave);
    setFormData(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {editingEvaluation ? "Editar evaluación" : "Registrar evaluación"}
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Registra evaluaciones por asignatura y sección.
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
            Título de la evaluación
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            placeholder="Ej. Parcial I"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Tipo
          </label>
          <select
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            required
          >
            <option value="">Selecciona un tipo</option>
            <option value="Examen">Examen</option>
            <option value="Quiz">Quiz</option>
            <option value="Taller">Taller</option>
            <option value="Exposición">Exposición</option>
            <option value="Proyecto">Proyecto</option>
            <option value="Práctica">Práctica</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Ponderación (%)
          </label>
          <input
            type="number"
            value={formData.percentage}
            onChange={(e) =>
              setFormData({ ...formData, percentage: Number(e.target.value) })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            min="1"
            max="100"
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

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="min-h-[120px] w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            placeholder="Describe la evaluación"
            required
          />
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="submit"
          className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 font-semibold text-white shadow-md hover:from-blue-700 hover:to-violet-700"
        >
          {editingEvaluation ? "Guardar cambios" : "Registrar evaluación"}
        </button>

        {editingEvaluation && (
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