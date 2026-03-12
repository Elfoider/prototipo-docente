export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Panel docente</h2>
        <p className="text-sm text-gray-500">
          Bienvenido al sistema de gestión académica
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">Yhonny Perozo</p>
        <p className="text-xs text-gray-500">Docente universitario</p>
      </div>
    </header>
  );
}