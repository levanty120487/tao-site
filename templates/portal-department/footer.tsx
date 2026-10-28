"use client";

import React from 'react';
import type { PortalTemplateProps } from '../types';

export function DeptFooter({
  subdomain,
  title,
}: PortalTemplateProps) {
  const displayTitle = title || `Cổng Thông Tin Đơn Vị ${subdomain.toUpperCase()}`;

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t-4 border-emerald-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h5 className="text-white font-bold text-sm mb-2">{displayTitle}</h5>
          <p className="leading-relaxed">
            Địa chỉ: Tầng 4-5, Tòa nhà Trụ sở liên cơ quan.<br />
            Chịu trách nhiệm nội dung: Văn phòng Đơn vị.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold text-sm mb-2">Thông tin liên hệ công tác</h5>
          <p className="leading-relaxed">
            Điện thoại: (024) 3788 9900 • Fax: (024) 3788 9911<br />
            Hòm thư điện tử: vanphong@{subdomain}.domain.vn
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold text-sm mb-2">Chế độ báo cáo</h5>
          <p className="leading-relaxed">
            Các phòng ban trực thuộc gửi báo cáo công tác tuần trước 15h00 thứ Sáu hàng tuần về Văn phòng đơn vị.
          </p>
        </div>
      </div>
    </footer>
  );
}

