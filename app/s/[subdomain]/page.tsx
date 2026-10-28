import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubdomainData } from "@/lib/subdomains";
import { rootDomain } from "@/lib/utils";
import { getTemplateById } from "@/templates/registry";

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
    <TemplateComponent
      subdomain={subdomain}
      title={subdomainData.title}
      emoji={subdomainData.emoji}
      description={subdomainData.description}
      activePath="/"
      isPreview={false}
    />
  );
}
