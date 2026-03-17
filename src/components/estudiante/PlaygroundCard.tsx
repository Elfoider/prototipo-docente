interface PlaygroundCardProps {
  title: string;
  description: string;
  status: string;
}

export default function PlaygroundCard({
  title,
  description,
  status,
}: PlaygroundCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
        {status}
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>

      <button className="mt-5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:from-violet-700 hover:to-fuchsia-700">
        Explorar
      </button>
    </div>
  );
}