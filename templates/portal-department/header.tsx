"use client";

import React from 'react';
import { Building, ShieldCheck } from 'lucide-react';
import { NavLink } from '../common/nav-link';
import type { PortalTemplateProps } from '../types';

export function DeptHeader({
  subdomain,
  title,
  emoji = '🏢',
  description,
  isPreview = false,
  activePath = '/',
  onNavigatePreview,
}: PortalTemplateProps) {
  const displayTitle = title || `Cổng Thông Tin Đơn Vị ${subdomain.toUpperCase()}`;

  const navItems = [
    { href: '/', label: 'TRANG CHỦ' },
    { href: '/gioi-thieu', label: 'GIỚI THIỆU & CƠ CẤU' },
    { href: '/van-ban', label: 'VĂN BẢN CHỈ ĐẠO' },
    { href: '/lich-cong-tac', label: 'LỊCH CÔNG TÁC' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-1.5 px-4 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold tracking-wide">CỔNG THÔNG TIN PHÒNG BAN & ĐƠN VỊ THÀNH VIÊN</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-emerald-300">
            <span>Email: contact@{subdomain}.domain.vn</span>
            <span>Hotline: (024) 3788 9900</span>
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
              className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-3xl shadow-xs shrink-0 hover:bg-emerald-100 transition-colors"
            >
              {emoji}
            </NavLink>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-emerald-700 font-bold">
                ĐƠN VỊ TRỰC THUỘC • {subdomain}.domain
              </div>
              <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                {displayTitle}
              </h1>
              <p className="text-xs text-slate-500">
                {description || 'Đoàn kết - Kỷ cương - Đổi mới - Phát triển bền vững'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Đơn vị đạt chuẩn quản trị
            </span>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-emerald-800 text-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center text-xs font-semibold">
            {navItems.map((item) => {
              const isActive = activePath === item.href;

              return (
                <NavLink
                  key={item.href}
                  href={item.href}
                  active={isActive}
                  isPreview={isPreview}
                  onNavigate={onNavigatePreview}
                  className={`px-4 py-3 transition-colors ${
                    isActive ? 'bg-emerald-950 text-white shadow-inner' : 'hover:bg-emerald-700'
                  }`}
                >
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

