import LogoMark from "@/components/branding/LogoMark";

export default function MobileHeader() {
  return (
    <div className="border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur lg:hidden">
      <LogoMark compact />
    </div>
  );
}