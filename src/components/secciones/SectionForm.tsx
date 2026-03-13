"use client";

import { Section, Subject } from "@/types";
import { FormEvent, useEffect, useState } from "react";

interface SectionFormProps {
  subjects: Subject[];
  onSubmit: (section: Section) => void;
  editingSection: Section | null;
  onCancelEdit: () => void;
}

const initialForm: Section = {
  id: "",
  subjectId: "",
  name: "",
  schedule: "",
  modality: "",
  classroom: "",
  capacity: 0,
};

export default function SectionForm({
  subjects,
  onSubmit,
  editingSection,
  onCancelEdit,
}: SectionFormProps) {
  const [formData, setFormData] = useState<Section>(initialForm);

  useEffect(() => {
    if (editingSection) {
      setFormData(editingSection);
    } else {
      setFormData(initialForm);
    }
  }, [editingSection]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sectionToSave: Section = {
      ...formData,
      id: formData.id || crypto.randomUUID(),
      capacity: Number(formData.capacity),
    };

    onSubmit(sectionToSave);
    setFormData(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {editingSection ? "Editar sección" : "Registrar sección"}
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Crea secciones vinculadas a una asignatura.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Asignatura
          </label>
          <select
            value={formData.subjectId}
            onChange={(e) =>
              setFormData({ ...formData, subjectId: e.target.value })
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
            Nombre de la sección
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            placeholder="Ej. Sección A"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Horario
          </label>
          <input
            type="text"
            value={formData.schedule}
            onChange={(e) =>
              setFormData({ ...formData, schedule: e.target.value })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            placeholder="Ej. Lunes 8:00 AM - 10:00 AM"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Modalidad
          </label>
          <select
            value={formData.modality}
            onChange={(e) =>
              setFormData({ ...formData, modality: e.target.value })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            required
          >
            <option value="">Selecciona una modalidad</option>
            <option value="Presencial">Presencial</option>
            <option value="Virtual">Virtual</option>
            <option value="Mixta">Mixta</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Aula o espacio
          </label>
          <input
            type="text"
            value={formData.classroom}
            onChange={(e) =>
              setFormData({ ...formData, classroom: e.target.value })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            placeholder="Ej. Laboratorio 2"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Capacidad
          </label>
          <input
            type="number"
            value={formData.capacity}
            onChange={(e) =>
              setFormData({ ...formData, capacity: Number(e.target.value) })
            }
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
            placeholder="Ej. 35"
            min="1"
            required
          />
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="submit"
          className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 font-semibold text-white shadow-md hover:from-blue-700 hover:to-violet-700"
        >
          {editingSection ? "Guardar cambios" : "Registrar sección"}
        </button>

        {editingSection && (
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