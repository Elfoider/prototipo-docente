interface ProfileCardProps {
  name: string;
  role: string;
  email: string;
  detail: string;
  color?: "docente" | "estudiante";
}

export default function ProfileCard({
  name,
  role,
  email,
  detail,
  color = "docente",
}: ProfileCardProps) {
  const styles =
    color === "docente"
      ? "from-blue-600 to-violet-600"
      : "from-cyan-500 to-emerald-500";

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div
        className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${styles} text-lg font-bold text-white shadow-lg`}
      >
        {name.slice(0, 1)}
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm font-medium text-slate-500">{role}</p>
      <p className="mt-3 text-sm text-slate-600">{email}</p>
      <p className="mt-2 text-sm text-slate-600">{detail}</p>
    </div>
  );
}