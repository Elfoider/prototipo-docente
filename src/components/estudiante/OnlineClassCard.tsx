interface OnlineClassCardProps {
  title: string;
  teacher: string;
  schedule: string;
  room: string;
}

export default function OnlineClassCard({
  title,
  teacher,
  schedule,
  room,
}: OnlineClassCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm text-slate-500">Docente: {teacher}</p>
          <p className="text-sm text-slate-600">Horario: {schedule}</p>
          <p className="text-sm text-slate-600">Sala: {room}</p>
        </div>

        <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:from-cyan-600 hover:to-emerald-600">
          Unirse
        </button>
      </div>
    </div>
  );
}