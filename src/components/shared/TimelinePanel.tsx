interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

interface TimelinePanelProps {
  items: TimelineItem[];
}

export default function TimelinePanel({ items }: TimelinePanelProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Timeline académico</h2>
      <p className="mt-1 text-sm text-slate-600">
        Cronología visual de eventos y actividades.
      </p>

      <div className="mt-6 space-y-5">
        {items.map((item, index) => (
          <div key={`${item.time}-${index}`} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-gradient-to-br from-blue-600 to-violet-600" />
              {index !== items.length - 1 && (
                <div className="mt-2 h-full w-[2px] bg-slate-200" />
              )}
            </div>

            <div className="pb-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {item.time}
              </p>
              <h3 className="mt-1 font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}