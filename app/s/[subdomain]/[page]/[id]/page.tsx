import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubdomainData } from "@/lib/subdomains";
import { rootDomain } from "@/lib/utils";
import { getSubpageBySlug } from "@/templates/registry";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subdomain: string; page: string; id: string }>;
}): Promise<Metadata> {
  const { subdomain, page, id } = await params;
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
      title: portalTitle,
    };
  }

  return {
    title: `Chi tiết ${subpage.name} - ${portalTitle}`,
    description: `Chi tiết nội dung ${subpage.name} mã số ${id} thuộc ${portalTitle}`,
  };
}

export default async function SubdomainDetailPage({
  params,
}: {
  params: Promise<{ subdomain: string; page: string; id: string }>;
}) {
  const { subdomain, page, id } = await params;
  const subdomainData = await getSubdomainData(subdomain);

  if (!subdomainData) {
    notFound();
  }

  const subpage = getSubpageBySlug(subdomainData.templateId, page);

  if (!subpage) {
    notFound();
  }

  // Use specialized detail component if registered, otherwise fallback to subpage component with detailId
  const ComponentToRender = subpage.detailComponent || subpage.component;

  return (
    <ComponentToRender
      subdomain={subdomain}
      title={subdomainData.title}
      emoji={subdomainData.emoji}
      description={subdomainData.description}
      activePath={`/${page}/${id}`}
      detailId={id}
      isPreview={false}
    />
  );
}

