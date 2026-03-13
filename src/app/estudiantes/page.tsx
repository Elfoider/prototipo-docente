"use client";

import { useMemo, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StudentForm from "@/components/estudiantes/StudentForm";
import StudentList from "@/components/estudiantes/StudentList";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Section, Student, Subject } from "@/types";

export default function StudentsPage() {
  const [subjects, , subjectsLoaded] = useLocalStorage<Subject[]>("subjects", []);
  const [sections, , sectionsLoaded] = useLocalStorage<Section[]>("sections", []);
  const [students, setStudents, studentsLoaded] = useLocalStorage<Student[]>(
    "students",
    []
  );
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const totalStudents = useMemo(() => students.length, [students]);

  const handleSaveStudent = (student: Student) => {
    const exists = students.some((item) => item.id === student.id);

    if (exists) {
      setStudents(
        students.map((item) => (item.id === student.id ? student : item))
      );
    } else {
      setStudents([...students, student]);
    }

    setEditingStudent(null);
  };

  const handleDeleteStudent = (id: string) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar este estudiante?"
    );

    if (!confirmed) return;

    setStudents(students.filter((item) => item.id !== id));
    if (editingStudent?.id === id) {
      setEditingStudent(null);
    }
  };

  if (!subjectsLoaded || !sectionsLoaded || !studentsLoaded) {
    return (
      <DashboardLayout>
        <p className="text-sm text-gray-500">Cargando estudiantes...</p>
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
          <h1 className="text-3xl font-bold text-gray-900">Estudiantes</h1>
          <p className="mt-2 text-gray-600">
            Registra y administra estudiantes por asignatura y sección.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Total registrados: {totalStudents}
          </p>
        </div>

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