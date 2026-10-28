"use client";

import React from 'react';
import { Globe, Phone, Search } from 'lucide-react';
import { NavLink } from '../common/nav-link';
import type { PortalTemplateProps } from '../types';

export function NewsHeader({
  subdomain,
  title,
  emoji = '📰',
  description,
  isPreview = false,
  activePath = '/',
  onNavigatePreview,
}: PortalTemplateProps) {
  const displayTitle = title || `Cổng Thông tin ${subdomain.toUpperCase()}`;

  const navItems = [
    { href: '/', label: 'TRANG CHỦ', icon: Globe },
    { href: '/tin-tuc', label: 'TIN TỨC - SỰ KIỆN' },
    { href: '/van-ban', label: 'VĂN BẢN MỚI' },
    { href: '/lien-he', label: 'LIÊN HỆ' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-800 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold tracking-wide">CỔNG THÀNH PHẦN CHÍNH THỨC</span>
            <span className="hidden sm:inline text-red-200">|</span>
            <span className="hidden sm:inline text-red-100">Hệ thống Cổng Thông tin Điện tử Tích hợp</span>
          </div>
          <div className="flex items-center gap-4 text-red-100">
            <span>Hôm nay: Thứ Tư, 28/10/2026</span>
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> Đường dây nóng: 1900 6868</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <NavLink
              href="/"
              active={false}
              isPreview={isPreview}
              onNavigate={onNavigatePreview}
              className="w-14 h-14 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-3xl shadow-xs shrink-0 hover:bg-red-100 transition-colors"
            >
              {emoji}
            </NavLink>
            <div>
              <div className="text-xs uppercase tracking-wider text-red-700 font-bold">
                TRANG THÀNH PHẦN • {subdomain}.domain
              </div>
              <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                {displayTitle}
              </h1>
              <p className="text-xs text-slate-500">
                {description || 'Cung cấp tin tức thời sự, sự kiện, thông báo và văn bản chỉ đạo điều hành'}
              </p>
            </div>
          </div>

          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="Tìm kiếm tin tức, văn bản..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 border border-slate-200 rounded-full focus:outline-hidden focus:ring-2 focus:ring-red-700 focus:bg-white transition-all"
              readOnly={isPreview}
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-red-700 text-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center">
            {navItems.map((item) => {
              const isActive = activePath === item.href;
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.href}
                  href={item.href}
                  active={isActive}
                  isPreview={isPreview}
                  onNavigate={onNavigatePreview}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 border-r border-red-600/60 ${
                    isActive ? 'bg-red-900 text-white shadow-inner' : 'hover:bg-red-800 text-red-50'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
}

