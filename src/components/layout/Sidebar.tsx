"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "@/components/branding/LogoMark";

const menuItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Asignaturas", href: "/asignaturas" },
  { label: "Secciones", href: "/secciones" },
  { label: "Planificación", href: "/planificacion" },
  { label: "Evaluaciones", href: "/evaluaciones" },
  { label: "Estudiantes", href: "/estudiantes" },
  { label: "Asistente", href: "/asistente" },
  { label: "Resumen", href: "/resumen" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r border-white/10 bg-gradient-to-b from-slate-950 via-blue-950 to-violet-950 text-white lg:flex lg:flex-col">
      <div className="border-b border-white/10 px-6 py-6">
        <LogoMark />
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-white text-slate-900 shadow-lg"
                      : "text-blue-100/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-white/10 px-4 py-4">
        <div className="rounded-2xl bg-white/10 p-4">
          <p className="text-xs uppercase tracking-wide text-blue-100/70">
            Próxima evolución
          </p>
          <p className="mt-2 text-sm text-white">
            Ecosistema docente + estudiante + clases online + playground.
          </p>
        </div>
      </div>
    </aside>
  );
}