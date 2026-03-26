"use client";

import { useMemo, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import SubjectForm from "@/components/asignaturas/SubjectForm";
import SubjectList from "@/components/asignaturas/SubjectList";
import SearchInput from "@/components/ui/SearchInput";
import Alert from "@/components/ui/Alert";
import { Subject } from "@/types";
import { useAlert } from "@/hooks/useAlert";
import { useFirestoreCollection } from "@/hooks/useFirestoreCollection";
import { COLLECTIONS } from "@/lib/collections";

export default function SubjectsPage() {
  const {
    items: subjects,
    isLoaded,
    saveItem,
    removeItem,
  } = useFirestoreCollection<Subject>(COLLECTIONS.subjects);

  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);
  const [search, setSearch] = useState("");
  const { alert, showAlert } = useAlert();

  const filteredSubjects = useMemo(() => {
    const term = search.toLowerCase().trim();

    return subjects.filter(
      (subject) =>
        subject.name.toLowerCase().includes(term) ||
        subject.code.toLowerCase().includes(term) ||
        subject.period.toLowerCase().includes(term)
    );
  }, [subjects, search]);

  const handleSaveSubject = async (subject: Subject) => {
    const subjectToSave: Subject = {
      ...subject,
      id: subject.id || crypto.randomUUID(),
      createdAt: subject.createdAt || Date.now(),
    };

    const exists = subjects.some((item) => item.id === subjectToSave.id);

    await saveItem(subjectToSave);

    showAlert(
      exists
        ? "Asignatura actualizada correctamente."
        : "Asignatura registrada correctamente.",
      "success"
    );

    setEditingSubject(null);
  };

  const handleDeleteSubject = async (id: string) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar esta asignatura?"
    );
    if (!confirmed) return;

    await removeItem(id);
    showAlert("Asignatura eliminada correctamente.", "info");

    if (editingSubject?.id === id) {
      setEditingSubject(null);
    }
  };

  if (!isLoaded) {
    return (
      <DashboardLayout>
        <p className="text-sm text-slate-500">Cargando asignaturas...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Asignaturas</h1>
          <p className="mt-2 text-slate-600">
            Registra y administra las asignaturas del período académico.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Total registradas: {subjects.length}
          </p>
        </div>

        {alert && <Alert message={alert.message} type={alert.type} />}

        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Buscar por nombre, código o período..."
        />

        <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
          <SubjectForm
            onSubmit={handleSaveSubject}
            editingSubject={editingSubject}
            onCancelEdit={() => setEditingSubject(null)}
          />

          <SubjectList
            subjects={filteredSubjects}
            onEdit={setEditingSubject}
            onDelete={handleDeleteSubject}
          />
        </div>
      </section>
    </DashboardLayout>
  );
}