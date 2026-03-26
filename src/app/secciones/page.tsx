"use client";

import { useMemo, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import SectionForm from "@/components/secciones/SectionForm";
import SectionList from "@/components/secciones/SectionList";
import SearchInput from "@/components/ui/SearchInput";
import Alert from "@/components/ui/Alert";
import { useAlert } from "@/hooks/useAlert";
import { useFirestoreCollection } from "@/hooks/useFirestoreCollection";
import { COLLECTIONS } from "@/lib/collections";
import { Section, Subject } from "@/types";

export default function SectionsPage() {
  const {
    items: subjects,
    isLoaded: subjectsLoaded,
  } = useFirestoreCollection<Subject>(COLLECTIONS.subjects);

  const {
    items: sections,
    isLoaded: sectionsLoaded,
    saveItem,
    removeItem,
  } = useFirestoreCollection<Section>(COLLECTIONS.sections);

  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [search, setSearch] = useState("");
  const { alert, showAlert } = useAlert();

  const filteredSections = useMemo(() => {
    const term = search.toLowerCase().trim();

    return sections.filter((section) => {
      const subjectName =
        subjects.find((subject) => subject.id === section.subjectId)?.name || "";

      return (
        section.name.toLowerCase().includes(term) ||
        section.schedule.toLowerCase().includes(term) ||
        section.modality.toLowerCase().includes(term) ||
        subjectName.toLowerCase().includes(term)
      );
    });
  }, [sections, subjects, search]);

  const handleSaveSection = async (section: Section) => {
    const sectionToSave: Section = {
      ...section,
      id: section.id || crypto.randomUUID(),
      createdAt: section.createdAt || Date.now(),
    };

    const exists = sections.some((item) => item.id === sectionToSave.id);

    await saveItem(sectionToSave);

    showAlert(
      exists
        ? "Sección actualizada correctamente."
        : "Sección registrada correctamente.",
      "success"
    );

    setEditingSection(null);
  };

  const handleDeleteSection = async (id: string) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar esta sección?"
    );
    if (!confirmed) return;

    await removeItem(id);
    showAlert("Sección eliminada correctamente.", "info");

    if (editingSection?.id === id) {
      setEditingSection(null);
    }
  };

  if (!subjectsLoaded || !sectionsLoaded) {
    return (
      <DashboardLayout>
        <p className="text-sm text-slate-500">Cargando secciones...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Secciones</h1>
          <p className="mt-2 text-slate-600">
            Registra y organiza las secciones asociadas a cada asignatura.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Total registradas: {sections.length}
          </p>
        </div>

        {alert && <Alert message={alert.message} type={alert.type} />}

        {subjects.length === 0 ? (
          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
            <h2 className="text-lg font-semibold text-yellow-900">
              Primero debes crear una asignatura
            </h2>
            <p className="mt-2 text-sm text-yellow-800">
              Para registrar secciones, antes necesitas crear al menos una
              asignatura.
            </p>
          </div>
        ) : (
          <>
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Buscar por sección, asignatura, modalidad u horario..."
            />

            <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
              <SectionForm
                subjects={subjects}
                onSubmit={handleSaveSection}
                editingSection={editingSection}
                onCancelEdit={() => setEditingSection(null)}
              />

              <SectionList
                sections={filteredSections}
                subjects={subjects}
                onEdit={setEditingSection}
                onDelete={handleDeleteSection}
              />
            </div>
          </>
        )}
      </section>
    </DashboardLayout>
  );
}