"use client";

import { useState } from "react";

const templates = {
  anuncio: (topic: string) =>
    `Estimados estudiantes, se les informa que ${topic}. Se agradece revisar el contenido correspondiente y mantener atención a las próximas indicaciones académicas.`,
  actividad: (topic: string) =>
    `Actividad académica: ${topic}. El estudiante deberá desarrollar la actividad siguiendo las orientaciones suministradas en clase y cumplir con la fecha establecida.`,
  instrucciones: (topic: string) =>
    `Instrucciones: ${topic}. Lea cuidadosamente cada apartado, organice sus ideas con claridad y entregue la actividad en el formato solicitado.`,
  recordatorio: (topic: string) =>
    `Recordatorio importante: ${topic}. Se recomienda a los estudiantes cumplir con los plazos establecidos y consultar cualquier duda con antelación.`,
};

type TemplateKey = keyof typeof templates;

export default function AssistantPanel() {
  const [type, setType] = useState<TemplateKey>("anuncio");
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setResult(templates[type](topic.trim()));
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[380px_1fr]">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          Asistente inteligente
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Genera textos académicos de apoyo para la gestión docente.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Tipo de texto
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as TemplateKey)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            >
              <option value="anuncio">Anuncio</option>
              <option value="actividad">Actividad</option>
              <option value="instrucciones">Instrucciones</option>
              <option value="recordatorio">Recordatorio</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Tema o indicación base
            </label>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="min-h-[140px] w-full rounded-xl border border-gray-300 px-4 py-3"
              placeholder="Ej. la evaluación parcial será reprogramada para el próximo lunes"
            />
          </div>

          <button
            type="button"
            onClick={handleGenerate}
            className="w-full rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-800"
          >
            Generar texto
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Resultado generado</h2>
        <p className="mt-1 text-sm text-gray-600">
          Puedes copiar este texto y usarlo como apoyo en tu gestión académica.
        </p>

        <div className="mt-6 min-h-[280px] rounded-xl border border-dashed border-gray-300 p-4">
          {result ? (
            <p className="whitespace-pre-line text-sm leading-7 text-gray-800">
              {result}
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              Aquí aparecerá el texto generado por el asistente.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}