import Link from "next/link";

interface ModuleCardProps {
  title: string;
  description: string;
  href: string;
  tone?: "blue" | "violet" | "cyan" | "green" | "amber";
  tag?: string;
}

export default function ModuleCard({
  title,
  description,
  href,
  tone = "blue",
  tag,
}: ModuleCardProps) {
  const tones = {
    blue: "from-blue-600 to-blue-500",
    violet: "from-violet-600 to-indigo-500",
    cyan: "from-cyan-500 to-blue-500",
    green: "from-emerald-500 to-green-500",
    amber: "from-amber-500 to-orange-500",
  };

  return (
    <Link
      href={href}
      className="group block rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tones[tone]} text-lg font-bold text-white shadow-lg`}
      >
        {title.slice(0, 1)}
      </div>

      {tag && (
        <span className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {tag}
        </span>
      )}

      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </Link>
  );
}