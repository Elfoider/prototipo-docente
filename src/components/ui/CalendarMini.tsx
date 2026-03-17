const days = ["L", "M", "M", "J", "V", "S", "D"];
const numbers = Array.from({ length: 30 }, (_, i) => i + 1);

export default function CalendarMini() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">
        Calendario académico
      </h2>
      <p className="mt-1 text-sm text-slate-600">
        Vista rápida de fechas importantes del período.
      </p>

      <div className="mt-5 grid grid-cols-7 gap-2 text-center text-sm">
        {days.map((day, idx) => (
          <div key={`${day}-${idx}`} className="font-semibold text-slate-500">
            {day}
          </div>
        ))}

        {numbers.map((n) => (
          <div
            key={n}
            className={`rounded-xl py-2 ${
              n === 12 || n === 18 || n === 24
                ? "bg-gradient-to-r from-cyan-500 to-emerald-500 font-semibold text-white"
                : "bg-slate-50 text-slate-700"
            }`}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
