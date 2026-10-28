"use client";

import React from 'react';
import type { PortalTemplateProps } from '../types';
import { ServiceHeader } from './header';
import { ServiceFooter } from './footer';

export function ServiceLayout({
  children,
  ...props
}: PortalTemplateProps & { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <ServiceHeader {...props} />
        {children}
      </div>
      <ServiceFooter {...props} />
    </div>
  );
}

