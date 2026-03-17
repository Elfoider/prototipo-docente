"use client";

import { useState } from "react";
import TabButton from "@/components/ui/TabButton";

const subjects = [
  "Ingeniería de Software",
  "Bases de Datos",
  "Programación Web",
];

export default function SubjectTabs() {
  const [active, setActive] = useState(subjects[0]);

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Mis materias</h2>
      <p className="mt-1 text-sm text-slate-600">
        Cambia entre asignaturas para revisar contenido académico.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {subjects.map((subject) => (
          <TabButton
            key={subject}
            label={subject}
            active={active === subject}
            onClick={() => setActive(subject)}
          />
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-5">
        <h3 className="font-semibold text-slate-900">{active}</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Aquí podrás mostrar contenidos, recursos, evaluaciones y progreso
          específico de la materia seleccionada.
        </p>
      </div>
    </div>
  );
}