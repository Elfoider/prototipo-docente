"use client";

import { useMemo, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import SubjectForm from "@/components/asignaturas/SubjectForm";
import SubjectList from "@/components/asignaturas/SubjectList";
import { Subject } from "@/types";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function SubjectsPage() {
  const [subjects, setSubjects, isLoaded] = useLocalStorage<Subject[]>(
    "subjects",
    []
  );
  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);

  const totalSubjects = useMemo(() => subjects.length, [subjects]);

  const handleSaveSubject = (subject: Subject) => {
    const exists = subjects.some((item) => item.id === subject.id);

    if (exists) {
      setSubjects(
        subjects.map((item) => (item.id === subject.id ? subject : item))
      );
    } else {
      setSubjects([...subjects, subject]);
    }

    setEditingSubject(null);
  };

  const handleDeleteSubject = (id: string) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar esta asignatura?"
    );

    if (!confirmed) return;

    setSubjects(subjects.filter((item) => item.id !== id));
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
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Asignaturas</h1>
          <p className="mt-2 text-gray-600">
            Registra y administra las asignaturas del período académico.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Total registradas: {totalSubjects}
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
          <SubjectForm
            onSubmit={handleSaveSubject}
            editingSubject={editingSubject}
            onCancelEdit={() => setEditingSubject(null)}
          />

          <SubjectList
            subjects={subjects}
            onEdit={setEditingSubject}
            onDelete={handleDeleteSubject}
          />
        </div>
      </section>
    </DashboardLayout>
  );
}