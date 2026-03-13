interface RecentActivityProps {
  items: string[];
}

export default function RecentActivity({ items }: RecentActivityProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">Actividad reciente</h2>
      <p className="mt-1 text-sm text-gray-600">
        Resumen visual de registros recientes del sistema.
      </p>

      <div className="mt-5 space-y-3">
        {items.length === 0 ? (
          <p className="text-sm text-gray-500">
            Aún no hay actividad reciente disponible.
          </p>
        ) : (
          items.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700"
            >
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
}