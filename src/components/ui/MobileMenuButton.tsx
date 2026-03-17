interface MobileMenuButtonProps {
  onClick: () => void;
}

export default function MobileMenuButton({
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
    >
      Menú
    </button>
  );
}