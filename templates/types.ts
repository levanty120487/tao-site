import type React from 'react';

export interface PortalTemplateProps {
  subdomain: string;
  title?: string;
  emoji?: string;
  description?: string;
  isPreview?: boolean;
  activePath?: string; // '/', '/tin-tuc', '/tin-tuc/1', etc.
  detailId?: string;   // '1', '158-qd-ubnd', etc.
  onNavigatePreview?: (path: string) => void;
}

export interface SubpageDefinition {
  slug: string;
  name: string;
  component: React.ComponentType<PortalTemplateProps>;
  detailComponent?: React.ComponentType<PortalTemplateProps>;
}

export interface PortalTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  accentColor: string;
  layout: React.ComponentType<PortalTemplateProps & { children: React.ReactNode }>;
  component: React.ComponentType<PortalTemplateProps>;
  subpages?: Record<string, SubpageDefinition>;
}
