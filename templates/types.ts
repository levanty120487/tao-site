import type React from 'react';

export interface PortalTemplateProps {
  subdomain: string;
  title?: string;
  emoji?: string;
  description?: string;
  isPreview?: boolean;
  activePath?: string; // '/', '/tin-tuc', '/van-ban', etc.
  onNavigatePreview?: (path: string) => void;
}

export interface SubpageDefinition {
  slug: string;
  name: string;
  component: React.ComponentType<PortalTemplateProps>;
}

export interface PortalTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  accentColor: string;
  component: React.ComponentType<PortalTemplateProps>;
  subpages?: Record<string, SubpageDefinition>;
}
