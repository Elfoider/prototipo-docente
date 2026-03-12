const menuItems = [
  "Dashboard",
  "Asignaturas",
  "Secciones",
  "Planificación",
  "Evaluaciones",
  "Estudiantes",
  "Asistente",
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-gray-200 bg-white lg:flex lg:flex-col">
      <div className="border-b border-gray-200 px-6 py-5">
        <h1 className="text-2xl font-bold text-gray-900">Docentia Web</h1>
        <p className="text-sm text-gray-500">Gestión académica docente</p>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}