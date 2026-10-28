"use client";

import React from 'react';
import type { PortalTemplateProps } from '../types';

export function NewsFooter({
  subdomain,
  title,
}: PortalTemplateProps) {
  const displayTitle = title || `Cổng Thông tin ${subdomain.toUpperCase()}`;

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs mt-12 border-t-4 border-red-700">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h5 className="text-white font-bold text-sm mb-2">{displayTitle}</h5>
          <p className="leading-relaxed">
            Cơ quan chủ quản: Hệ thống Cổng Thông tin Tích hợp<br />
            Chịu trách nhiệm nội dung: Ban Quản lý Cổng Thành phần<br />
            Giấy phép số: 108/GP-TTĐT do Cục Phát thanh, truyền hình và thông tin điện tử cấp.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold text-sm mb-2">Thông tin liên hệ</h5>
          <p className="leading-relaxed">
            Địa chỉ: Tòa nhà Trung tâm Hành chính, Phòng Quản lý Cổng<br />
            Điện thoại: (024) 3822 6688 - Fax: (024) 3822 6699<br />
            Email liên hệ: congthanhphan@{subdomain}.domain.vn
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold text-sm mb-2">Quy định & Bản quyền</h5>
          <p className="leading-relaxed">
            Ghi rõ nguồn "{displayTitle}" khi phát hành lại thông tin từ Cổng.<br />
            Chuyên trang trực thuộc nền tảng Multi-Tenant Next.js.
          </p>
        </div>
      </div>
      <div className="bg-slate-950 py-3 text-center text-slate-500 border-t border-slate-800">
        © 2026 {displayTitle}. Bảo lưu mọi quyền.
      </div>
    </footer>
  );
}

