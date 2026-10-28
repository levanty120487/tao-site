import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubdomainData } from "@/lib/subdomains";
import { protocol, rootDomain } from "@/lib/utils";
import { getTemplateById } from "@/templates/registry";
import { Home } from "lucide-react";

export default async function SubdomainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;
  const subdomainData = await getSubdomainData(subdomain);

  if (!subdomainData) {
    notFound();
  }

  const template = getTemplateById(subdomainData.templateId);

  return (
    <div className="relative min-h-screen">
      {/* Floating System Bar */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-white text-xs px-3.5 py-2 rounded-full shadow-xl border border-white/20">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="font-semibold text-slate-300">
          {template.name}
        </span>
        <span className="text-slate-500">|</span>
        <Link
          href={`${protocol}://${rootDomain}`}
          className="hover:text-blue-300 transition-colors flex items-center gap-1 font-medium"
        >
          <Home className="w-3.5 h-3.5" /> Trang chủ nền tảng
        </Link>
      </div>

      {children}
    </div>
  );
}

