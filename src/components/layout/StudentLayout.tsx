import StudentSidebar from "@/components/estudiante/StudentSidebar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-cyan-50 text-slate-900">
      <div className="flex min-h-screen">
        <StudentSidebar />
        <div className="flex flex-1 flex-col">
          <div className="border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur">
            <h2 className="text-2xl font-bold text-slate-900">
              Campus del estudiante
            </h2>
            <p className="text-sm text-slate-500">
              Experiencia académica interactiva y visual
            </p>
          </div>
          <main className="flex-1 p-4 sm:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}