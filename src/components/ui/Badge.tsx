interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "violet" | "green" | "amber" | "slate";
}

export default function Badge({
  children,
  variant = "blue",
}: BadgeProps) {
  const styles = {
    blue: "bg-blue-100 text-blue-700",
    violet: "bg-violet-100 text-violet-700",
    green: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    slate: "bg-slate-100 text-slate-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles[variant]}`}
    >
      {children}
    </span>
  );
}