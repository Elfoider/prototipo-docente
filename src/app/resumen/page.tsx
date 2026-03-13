"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Evaluation, Planning, Section, Student, Subject } from "@/types";

export default function SummaryPage() {
  const [subjects] = useLocalStorage<Subject[]>("subjects", []);
  const [sections] = useLocalStorage<Section[]>("sections", []);
  const [students] = useLocalStorage<Student[]>("students", []);
  const [plannings] = useLocalStorage<Planning[]>("plannings", []);
  const [evaluations] = useLocalStorage<Evaluation[]>("evaluations", []);

  return (
    <DashboardLayout>
      <section className="space-y-8">
        <SectionTitle
          title="Resumen ejecutivo del prototipo"
          description="Vista de alto nivel del sistema bajo ambiente web para apoyo en la gestión académica de docentes universitarios."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Módulos implementados
            </h2>
            <div className="mt-5 space-y-3 text-sm text-gray-700">
              <div className="rounded-2xl bg-gray-50 p-4">Autenticación de acceso</div>
              <div className="rounded-2xl bg-gray-50 p-4">Gestión de asignaturas</div>
              <div className="rounded-2xl bg-gray-50 p-4">Gestión de secciones</div>
              <div className="rounded-2xl bg-gray-50 p-4">Planificación académica</div>
              <div className="rounded-2xl bg-gray-50 p-4">Gestión de evaluaciones</div>
              <div className="rounded-2xl bg-gray-50 p-4">Gestión de estudiantes</div>
              <div className="rounded-2xl bg-gray-50 p-4">Asistente inteligente básico</div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Indicadores actuales
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xs uppercase text-gray-500">Asignaturas</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {subjects.length}
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xs uppercase text-gray-500">Secciones</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {sections.length}
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xs uppercase text-gray-500">Estudiantes</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {students.length}
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xs uppercase text-gray-500">Actividades</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {plannings.length + evaluations.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Aporte del prototipo
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Este prototipo demuestra la viabilidad de un sistema bajo ambiente
            web orientado al apoyo en la gestión académica docente, permitiendo
            centralizar procesos relacionados con asignaturas, secciones,
            planificación, evaluaciones, estudiantes y generación asistida de
            contenido académico.
          </p>
        </div>
      </section>
    </DashboardLayout>
  );
}