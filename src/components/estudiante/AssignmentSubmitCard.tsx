"use client";

import { useState } from "react";

export default function AssignmentSubmitCard() {
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!fileName.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Entrega de actividad</h2>
      <p className="mt-1 text-sm text-slate-600">
        Simulación de entrega de tareas o evidencias académicas.
      </p>

      <div className="mt-5 space-y-4">
        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="Ej. taller_unidad_2.pdf"
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
        />

        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 font-semibold text-white"
        >
          Entregar actividad
        </button>

        {submitted && (
          <div className="rounded-2xl bg-emerald-100 px-4 py-3 text-sm font-medium text-emerald-800">
            Actividad enviada correctamente.
          </div>
        )}
      </div>
    </div>
  );
}
