"use client";

import { useMemo, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import SectionForm from "@/components/secciones/SectionForm";
import SectionList from "@/components/secciones/SectionList";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Section, Subject } from "@/types";

export default function SectionsPage() {
  const [subjects, , subjectsLoaded] = useLocalStorage<Subject[]>("subjects", []);
  const [sections, setSections, sectionsLoaded] = useLocalStorage<Section[]>(
    "sections",
    []
  );
  const [editingSection, setEditingSection] = useState<Section | null>(null);

  const totalSections = useMemo(() => sections.length, [sections]);

  const handleSaveSection = (section: Section) => {
    const exists = sections.some((item) => item.id === section.id);

    if (exists) {
      setSections(
        sections.map((item) => (item.id === section.id ? section : item))
      );
    } else {
      setSections([...sections, section]);
    }

    setEditingSection(null);
  };

  const handleDeleteSection = (id: string) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar esta sección?"
    );

    if (!confirmed) return;

    setSections(sections.filter((item) => item.id !== id));
    if (editingSection?.id === id) {
      setEditingSection(null);
    }
  };

  if (!subjectsLoaded || !sectionsLoaded) {
    return (
      <DashboardLayout>
        <p className="text-sm text-gray-500">Cargando secciones...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Secciones</h1>
          <p className="mt-2 text-gray-600">
            Registra y organiza las secciones asociadas a cada asignatura.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Total registradas: {totalSections}
          </p>
        </div>

        {subjects.length === 0 ? (
          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
            <h2 className="text-lg font-semibold text-yellow-900">
              Primero debes crear una asignatura
            </h2>
            <p className="mt-2 text-sm text-yellow-800">
              Para registrar secciones, antes necesitas crear al menos una
              asignatura en el módulo de asignaturas.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
            <SectionForm
              subjects={subjects}
              onSubmit={handleSaveSection}
              editingSection={editingSection}
              onCancelEdit={() => setEditingSection(null)}
            />

            <SectionList
              sections={sections}
              subjects={subjects}
              onEdit={setEditingSection}
              onDelete={handleDeleteSection}
            />
          </div>
        )}
      </section>
    </DashboardLayout>
  );
}