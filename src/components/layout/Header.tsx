export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur-md">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Panel académico
        </h2>
        <p className="text-sm text-slate-500">
          Gestión inteligente de actividades docentes
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-semibold text-slate-900">Yhonny Perozo</p>
          <p className="text-xs text-slate-500">Docente universitario</p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white shadow-lg">
          YP
        </div>
      </div>
    </header>
  );
}