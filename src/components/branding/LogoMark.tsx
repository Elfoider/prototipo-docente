interface LogoMarkProps {
  compact?: boolean;
}

export default function LogoMark({ compact = false }: LogoMarkProps) {
  if (compact) {
    return (
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 font-bold text-white shadow-lg">
        DW
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 font-bold text-white shadow-lg">
        DW
      </div>
      <div>
        <h1 className="text-lg font-bold tracking-tight text-white">
          Docentia Web
        </h1>
        <p className="text-xs text-blue-100/80">
          Campus académico inteligente
        </p>
      </div>
    </div>
  );
}