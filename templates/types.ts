import type React from 'react';

export interface PortalTemplateProps {
  subdomain: string;
  title?: string;
  emoji?: string;
  description?: string;
  isPreview?: boolean;
}

export interface PortalTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  accentColor: string;
  component: React.ComponentType<PortalTemplateProps>;
}

