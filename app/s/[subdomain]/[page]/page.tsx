import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubdomainData } from "@/lib/subdomains";
import { rootDomain } from "@/lib/utils";
import { getSubpageBySlug, getTemplateById } from "@/templates/registry";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subdomain: string; page: string }>;
}): Promise<Metadata> {
  const { subdomain, page } = await params;
  const subdomainData = await getSubdomainData(subdomain);

  if (!subdomainData) {
    return {
      title: rootDomain,
    };
  }

  const subpage = getSubpageBySlug(subdomainData.templateId, page);
  const portalTitle = subdomainData.title || `${subdomain}.${rootDomain}`;

  if (!subpage) {
    return {
      title: `${portalTitle}`,
    };
  }

  return {
    title: `${subpage.name} - ${portalTitle}`,
    description: `Chuyên trang ${subpage.name} thuộc ${portalTitle}`,
  };
}

export default async function SubdomainSubPage({
  params,
}: {
  params: Promise<{ subdomain: string; page: string }>;
}) {
  const { subdomain, page } = await params;
  const subdomainData = await getSubdomainData(subdomain);

  if (!subdomainData) {
    notFound();
  }

  const template = getTemplateById(subdomainData.templateId);
  const subpage = getSubpageBySlug(subdomainData.templateId, page);

  if (!subpage) {
    notFound();
  }

  const TemplateLayout = template.layout;
  const SubpageComponent = subpage.component;

  const templateProps = {
    subdomain,
    title: subdomainData.title,
    emoji: subdomainData.emoji,
    description: subdomainData.description,
    activePath: `/${page}`,
    isPreview: false,
  };

  return (
    <TemplateLayout {...templateProps}>
      <SubpageComponent {...templateProps} />
    </TemplateLayout>
  );
}
