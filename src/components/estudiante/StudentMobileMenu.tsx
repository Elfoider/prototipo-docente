"use client";

import Link from "next/link";
import { useState } from "react";

const items = [
  { label: "Inicio", href: "/estudiante/dashboard" },
  { label: "Clases", href: "/estudiante/clases" },
  { label: "Actividades", href: "/estudiante/actividades" },
  { label: "Playground", href: "/estudiante/playground" },
  { label: "Portal", href: "/portal" },
];

export default function StudentMobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
      >
        {open ? "Cerrar menú" : "Abrir menú"}
      </button>

      {open && (
        <div className="mt-3 space-y-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
