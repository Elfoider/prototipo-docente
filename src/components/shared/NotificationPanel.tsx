interface NotificationItem {
  title: string;
  description: string;
  tone: "blue" | "green" | "amber" | "violet";
}

interface NotificationPanelProps {
  items: NotificationItem[];
}

export default function NotificationPanel({
  items,
}: NotificationPanelProps) {
  const tones = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    violet: "bg-violet-100 text-violet-700",
  };

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Notificaciones</h2>
      <p className="mt-1 text-sm text-slate-600">
        Eventos y recordatorios recientes del sistema.
      </p>

      <div className="mt-5 space-y-4">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
          >
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tones[item.tone]}`}
            >
              Aviso
            </span>
            <h3 className="mt-3 font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}