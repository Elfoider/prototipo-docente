"use client";

import { useMemo, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import SubjectForm from "@/components/asignaturas/SubjectForm";
import SubjectList from "@/components/asignaturas/SubjectList";
import SearchInput from "@/components/ui/SearchInput";
import Alert from "@/components/ui/Alert";
import { Subject } from "@/types";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useAlert } from "@/hooks/useAlert";

export default function SubjectsPage() {
  const [subjects, setSubjects, isLoaded] = useLocalStorage<Subject[]>(
    "subjects",
    []
  );
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

  const totalSubjects = useMemo(() => subjects.length, [subjects]);

  const handleSaveSubject = (subject: Subject) => {
    const exists = subjects.some((item) => item.id === subject.id);

    if (exists) {
      setSubjects(
        subjects.map((item) => (item.id === subject.id ? subject : item))
      );
      showAlert("Asignatura actualizada correctamente.", "success");
    } else {
      setSubjects([...subjects, subject]);
      showAlert("Asignatura registrada correctamente.", "success");
    }

    setEditingSubject(null);
  };

  const handleDeleteSubject = (id: string) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar esta asignatura?"
    );

    if (!confirmed) return;

    setSubjects(subjects.filter((item) => item.id !== id));
    showAlert("Asignatura eliminada correctamente.", "info");

    if (editingSubject?.id === id) {
      setEditingSubject(null);
    }
  };

  if (!isLoaded) {
    return (
      <DashboardLayout>
        <p className="text-sm text-gray-500">Cargando asignaturas...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Asignaturas</h1>
          <p className="mt-2 text-gray-600">
            Registra y administra las asignaturas del período académico.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Total registradas: {totalSubjects}
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