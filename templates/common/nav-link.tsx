"use client";

import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  active: boolean;
  isPreview?: boolean;
  onNavigate?: (path: string) => void;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}

export function NavLink({
  href,
  active,
  isPreview,
  onNavigate,
  className = '',
  activeClassName = '',
  children,
}: NavLinkProps) {
  if (isPreview) {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onNavigate?.(href);
        }}
        className={`${className} ${active ? activeClassName : ''} cursor-pointer`}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={`${className} ${active ? activeClassName : ''}`}
    >
      {children}
    </Link>
  );
}

