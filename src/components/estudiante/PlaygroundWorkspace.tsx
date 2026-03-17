export default function PlaygroundWorkspace() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
      <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-5 text-white">
        <h2 className="text-2xl font-bold">Playground académico</h2>
        <p className="mt-1 text-sm text-violet-50">
          Espacio visual para práctica, lógica y resolución de ejercicios
        </p>
      </div>

      <div className="grid gap-6 p-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <div className="rounded-2xl bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Ejercicio activo</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Diseña la estructura lógica de un sistema web académico indicando
              módulos principales, usuarios y relaciones.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Instrucciones</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Lee cuidadosamente el planteamiento</li>
              <li>• Organiza tus ideas</li>
              <li>• Responde en el espacio de trabajo</li>
              <li>• Guarda tu avance</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-900 p-5 text-white shadow-inner">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Zona de práctica</h3>
            <button className="rounded-xl bg-violet-500 px-3 py-2 text-sm font-medium text-white">
              Guardar
            </button>
          </div>

          <textarea
            className="min-h-[320px] w-full rounded-2xl border border-white/10 bg-slate-950 p-4 text-sm text-slate-100"
            placeholder="Escribe aquí tu respuesta o desarrolla tu ejercicio..."
          />
        </div>
      </div>
    </div>
  );
}