interface RoleSelectorProps {
  selectedRole: "docente" | "estudiante";
  onChange: (role: "docente" | "estudiante") => void;
}

export default function RoleSelector({
  selectedRole,
  onChange,
}: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={() => onChange("docente")}
        className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
          selectedRole === "docente"
            ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg"
            : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
        }`}
      >
        Docente
      </button>

      <button
        type="button"
        onClick={() => onChange("estudiante")}
        className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
          selectedRole === "estudiante"
            ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg"
            : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
        }`}
      >
        Estudiante
      </button>
    </div>
  );
}