"use client";

import React from 'react';
import type { PortalTemplateProps } from '../types';
import { NewsHeader } from './header';
import { NewsFooter } from './footer';

export function NewsLayout({
  children,
  ...props
}: PortalTemplateProps & { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <NewsHeader {...props} />
        {children}
      </div>
      <NewsFooter {...props} />
    </div>
  );
}

