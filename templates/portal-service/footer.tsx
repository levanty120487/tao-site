"use client";

import React from 'react';
import type { PortalTemplateProps } from '../types';

export function ServiceFooter({
  subdomain,
  title,
}: PortalTemplateProps) {
  const displayTitle = title || `Cổng Dịch Vụ Công ${subdomain.toUpperCase()}`;

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h5 className="text-white font-bold text-sm mb-2">{displayTitle}</h5>
          <p className="leading-relaxed">
            Vận hành và quản lý bởi Trung tâm Phục vụ Hành chính công.<br />
            Tích hợp cơ sở dữ liệu quốc gia về dân cư và doanh nghiệp.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold text-sm mb-2">Đường dây nóng hỗ trợ</h5>
          <p className="leading-relaxed">
            Tổng đài tư vấn: 1800 1096 (Miễn cước gọi)<br />
            Bộ phận kỹ thuật phần mềm: support@{subdomain}.domain.vn<br />
            Giờ làm việc: 7h30 - 17h00 (Từ thứ 2 đến thứ 6)
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold text-sm mb-2">Chính sách bảo mật</h5>
          <p className="leading-relaxed">
            Bảo mật toàn bộ thông tin cá nhân theo Nghị định số 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.
          </p>
        </div>
      </div>
    </footer>
  );
}

