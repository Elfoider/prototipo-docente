"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Docentia Web</h1>
          <p className="mt-2 text-sm text-gray-600">
            Sistema web para apoyo en la gestión académica docente
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Correo institucional
            </label>
            <input
              type="email"
              placeholder="docente@universidad.edu"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gray-900 px-4 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Ingresar
          </button>
        </form>
      </div>
    </main>
  );
}