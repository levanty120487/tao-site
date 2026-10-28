"use client";

import React from 'react';
import { Building2, PhoneCall, ShieldCheck, Users } from 'lucide-react';
import { NavLink } from '../common/nav-link';
import type { PortalTemplateProps } from '../types';

export function ServiceHeader({
  subdomain,
  title,
  emoji = '🏛️',
  description,
  isPreview = false,
  activePath = '/',
  onNavigatePreview,
}: PortalTemplateProps) {
  const displayTitle = title || `Cổng Dịch Vụ Công ${subdomain.toUpperCase()}`;

  const navItems = [
    { href: '/', label: 'TRANG CHỦ' },
    { href: '/dich-vu', label: 'DỊCH VỤ TRỰC TUYẾN' },
    { href: '/tra-cuu', label: 'TRA CỨU HỒ SƠ' },
    { href: '/van-ban', label: 'VĂN BẢN QUY ĐỊNH' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-blue-900 text-white text-xs py-2 px-4 border-b border-blue-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold tracking-wide">HỆ THỐNG DỊCH VỤ CÔNG TRỰC TUYẾN MỘT CỬA LIÊN THÔNG</span>
          </div>
          <div className="flex items-center gap-5 text-blue-200">
            <span className="flex items-center gap-1"><PhoneCall className="w-3.5 h-3.5 text-amber-400" /> Tổng đài: <b>1800 1096</b> (Miễn phí)</span>
            <span className="hidden sm:inline">Hỗ trợ kỹ thuật: 24/7</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <NavLink
              href="/"
              active={false}
              isPreview={isPreview}
              onNavigate={onNavigatePreview}
              className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-3xl shadow-xs shrink-0 hover:bg-blue-100 transition-colors"
            >
              {emoji}
            </NavLink>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-blue-600 font-bold">
                CỔNG DỊCH VỤ THÀNH PHẦN • {subdomain}.domain
              </div>
              <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                {displayTitle}
              </h1>
              <p className="text-xs text-slate-500">
                {description || 'Công khai minh bạch - Lấy người dân và doanh nghiệp làm trung tâm phục vụ'}
              </p>
            </div>
          </div>

          {/* Navigation items */}
          <nav className="flex flex-wrap items-center gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            {navItems.map((item) => {
              const isActive = activePath === item.href;

              return (
                <NavLink
                  key={item.href}
                  href={item.href}
                  active={isActive}
                  isPreview={isPreview}
                  onNavigate={onNavigatePreview}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}

