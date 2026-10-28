import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubdomainData } from "@/lib/subdomains";
import { protocol, rootDomain } from "@/lib/utils";
import { getTemplateById } from "@/templates/registry";
import { ExternalLink, Home, Settings } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}): Promise<Metadata> {
  const { subdomain } = await params;
  const subdomainData = await getSubdomainData(subdomain);

  if (!subdomainData) {
    return {
      title: rootDomain,
    };
  }

  const title = subdomainData.title || `${subdomain}.${rootDomain}`;

  return {
    title: `${title} - ${subdomain}.${rootDomain}`,
    description: subdomainData.description || `Cổng thông tin thành phần ${title}`,
  };
}

export default async function SubdomainPage({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;
  const subdomainData = await getSubdomainData(subdomain);

  if (!subdomainData) {
    notFound();
  }

  const template = getTemplateById(subdomainData.templateId);
  const TemplateComponent = template.component;

  return (
    <div className="relative">
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

      {/* Render Selected Template Layout */}
      <TemplateComponent
        subdomain={subdomain}
        title={subdomainData.title}
        emoji={subdomainData.emoji}
        description={subdomainData.description}
        isPreview={false}
      />
    </div>
  );
}
