"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Inicio", href: "/estudiante/dashboard" },
  { label: "Clases en línea", href: "/estudiante/clases" },
  { label: "Actividades", href: "/estudiante/actividades" },
  { label: "Playground", href: "/estudiante/playground" },
  { label: "Portal", href: "/portal" },
];

export default function StudentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r border-white/10 bg-gradient-to-b from-slate-950 via-cyan-950 to-emerald-950 text-white lg:flex lg:flex-col">
      <div className="border-b border-white/10 px-6 py-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 font-bold text-white">
          EW
        </div>
        <h1 className="mt-4 text-2xl font-bold">Entorno estudiante</h1>
        <p className="mt-1 text-sm text-cyan-100/80">
          Campus virtual académico
        </p>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-white text-slate-900"
                      : "text-cyan-100/90 hover:bg-white/10 hover:text-white"
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