"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import RoleSelector from "@/components/auth/RoleSelector";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<"docente" | "estudiante">("docente");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (role === "docente") {
      router.push("/dashboard");
    } else {
      router.push("/estudiante/dashboard");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-white to-violet-100 px-4">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-2xl lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700 p-10 text-white">
          <div>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15 text-2xl font-bold shadow-lg backdrop-blur">
              DW
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-tight">
              Docentia Web
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-blue-50">
              Plataforma académica inteligente con entorno diferenciado para
              docentes y estudiantes.
            </p>
          </div>

          <div className="space-y-3 text-sm text-blue-50/90">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              Gestión docente, clases en línea, evaluaciones y planificación
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              Experiencia estudiantil, actividades y playground académico
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-10 lg:p-12">
          <div className="mb-8 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Bienvenido
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Iniciar sesión
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Accede a tu entorno académico.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Tipo de acceso
              </label>
              <RoleSelector selectedRole={role} onChange={setRole} />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Correo institucional
              </label>
              <input
                type="email"
                placeholder="usuario@universidad.edu"
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full rounded-2xl px-4 py-3 font-semibold text-white shadow-lg transition ${
                role === "docente"
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
                  : "bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
              }`}
            >
              Ingresar como {role}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}