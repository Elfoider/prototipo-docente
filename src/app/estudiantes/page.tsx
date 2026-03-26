"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StudentForm from "@/components/estudiantes/StudentForm";
import StudentList from "@/components/estudiantes/StudentList";
import Alert from "@/components/ui/Alert";
import { useAlert } from "@/hooks/useAlert";
import { useFirestoreCollection } from "@/hooks/useFirestoreCollection";
import { COLLECTIONS } from "@/lib/collections";
import { Section, Student, Subject } from "@/types";

export default function StudentsPage() {
  const { items: subjects, isLoaded: subjectsLoaded } =
    useFirestoreCollection<Subject>(COLLECTIONS.subjects);

  const { items: sections, isLoaded: sectionsLoaded } =
    useFirestoreCollection<Section>(COLLECTIONS.sections);

  const {
    items: students,
    isLoaded: studentsLoaded,
    saveItem,
    removeItem,
  } = useFirestoreCollection<Student>(COLLECTIONS.students);

  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const { alert, showAlert } = useAlert();

  const handleSaveStudent = async (student: Student) => {
    const studentToSave: Student = {
      ...student,
      id: student.id || crypto.randomUUID(),
      createdAt: student.createdAt || Date.now(),
    };

    const exists = students.some((item) => item.id === studentToSave.id);

    await saveItem(studentToSave);

    showAlert(
      exists
        ? "Estudiante actualizado correctamente."
        : "Estudiante registrado correctamente.",
      "success"
    );

    setEditingStudent(null);
  };

  const handleDeleteStudent = async (id: string) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar este estudiante?"
    );
    if (!confirmed) return;

    await removeItem(id);
    showAlert("Estudiante eliminado correctamente.", "info");

    if (editingStudent?.id === id) {
      setEditingStudent(null);
    }
  };

  if (!subjectsLoaded || !sectionsLoaded || !studentsLoaded) {
    return (
      <DashboardLayout>
        <p className="text-sm text-slate-500">Cargando estudiantes...</p>
      </DashboardLayout>
    );
  }

  if (subjects.length === 0 || sections.length === 0) {
    return (
      <DashboardLayout>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
          <h2 className="text-lg font-semibold text-yellow-900">
            Necesitas asignaturas y secciones
          </h2>
          <p className="mt-2 text-sm text-yellow-800">
            Para registrar estudiantes, primero debes crear asignaturas y
            secciones.
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Estudiantes</h1>
          <p className="mt-2 text-slate-600">
            Registra y administra estudiantes por asignatura y sección.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Total registrados: {students.length}
          </p>
        </div>

        {alert && <Alert message={alert.message} type={alert.type} />}

        <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
          <StudentForm
            subjects={subjects}
            sections={sections}
            onSubmit={handleSaveStudent}
            editingStudent={editingStudent}
            onCancelEdit={() => setEditingStudent(null)}
          />

          <StudentList
            students={students}
            subjects={subjects}
            sections={sections}
            onEdit={setEditingStudent}
            onDelete={handleDeleteStudent}
          />
        </div>
      </section>
    </DashboardLayout>
  );
}