interface TabButtonProps {
  active: boolean;
  label: string;
  onClick: () => void;
}

export default function TabButton({
  active,
  label,
  onClick,
}: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-md"
          : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}