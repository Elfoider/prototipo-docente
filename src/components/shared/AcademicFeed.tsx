interface FeedItem {
  title: string;
  description: string;
  meta: string;
}

interface AcademicFeedProps {
  items: FeedItem[];
}

export default function AcademicFeed({ items }: AcademicFeedProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Feed académico</h2>
      <p className="mt-1 text-sm text-slate-600">
        Publicaciones y novedades recientes del entorno académico.
      </p>

      <div className="mt-5 space-y-4">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
          >
            <h3 className="font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
            <p className="mt-3 text-xs font-medium text-slate-400">{item.meta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}