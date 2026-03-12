"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Asignaturas", href: "/asignaturas" },
  { label: "Secciones", href: "/secciones" },
  { label: "Planificación", href: "#" },
  { label: "Evaluaciones", href: "#" },
  { label: "Estudiantes", href: "#" },
  { label: "Asistente", href: "#" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 border-r border-gray-200 bg-white lg:flex lg:flex-col">
      <div className="border-b border-gray-200 px-6 py-5">
        <h1 className="text-2xl font-bold text-gray-900">Docentia Web</h1>
        <p className="text-sm text-gray-500">Gestión académica docente</p>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}