export default function VirtualClassRoom() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
      <div className="bg-gradient-to-r from-cyan-600 to-emerald-500 px-6 py-5 text-white">
        <h2 className="text-2xl font-bold">Sala virtual</h2>
        <p className="mt-1 text-sm text-cyan-50">
          Experiencia base para clases en línea entre docente y estudiantes
        </p>
      </div>

      <div className="grid gap-6 p-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] bg-slate-900 p-6 text-white shadow-inner">
          <div className="flex h-[320px] items-center justify-center rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-2xl font-bold">
                YP
              </div>
              <h3 className="mt-4 text-xl font-semibold">Docente en línea</h3>
              <p className="mt-2 text-sm text-slate-300">
                Vista principal de transmisión o videollamada
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Detalles de la clase</h3>
            <p className="mt-2 text-sm text-slate-600">
              Ingeniería de Software · Sección A
            </p>
            <p className="text-sm text-slate-600">Lunes 8:00 AM - 10:00 AM</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Participantes</h3>
            <p className="mt-2 text-sm text-slate-600">
              28 estudiantes conectados
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Acciones rápidas</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <button className="rounded-xl bg-cyan-500 px-3 py-2 text-sm font-medium text-white">
                Micrófono
              </button>
              <button className="rounded-xl bg-emerald-500 px-3 py-2 text-sm font-medium text-white">
                Cámara
              </button>
              <button className="rounded-xl bg-violet-500 px-3 py-2 text-sm font-medium text-white">
                Compartir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}