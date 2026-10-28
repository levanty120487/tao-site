"use client";

import React, { useState } from 'react';
import type { PortalTemplateProps } from '../../types';
import { NavLink } from '../../common/nav-link';
import { 
  CheckCircle2, 
  Clock, 
  Search 
} from 'lucide-react';

export function ServiceTrackerSubpage(props: PortalTemplateProps) {
  const [docketCode, setDocketCode] = useState('HSO-2026-9812');
  const [searched, setSearched] = useState(true);

  return (
    <>
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <NavLink
            href="/"
            active={false}
            isPreview={props.isPreview}
            onNavigate={props.onNavigatePreview}
            className="hover:text-blue-700 cursor-pointer"
          >
            Trang chủ
          </NavLink>
          <span>/</span>
          <span className="text-blue-700 font-bold">Chuyên trang Tra cứu tiến độ hồ sơ Một cửa</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Hệ thống theo dõi hồ sơ minh bạch
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Tra Cứu Tình Trạng Giải Quyết Hồ Sơ
          </h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Nhập mã số hồ sơ được in trên giấy tiếp nhận hoặc mã số gửi qua tin nhắn SMS/Email để tra cứu tiến độ xử lý.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-md">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                value={docketCode}
                onChange={(e) => setDocketCode(e.target.value)}
                placeholder="Nhập mã hồ sơ (ví dụ: HSO-2026-9812)..."
                className="w-full pl-10 pr-4 py-3 text-sm font-mono bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 outline-hidden font-bold"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
            </div>
            <button
              onClick={() => setSearched(true)}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-colors shadow-xs shrink-0 cursor-pointer"
            >
              Tra cứu ngay
            </button>
          </div>
        </div>

        {/* Search Result Box */}
        {searched && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="text-xs text-slate-400">Mã hồ sơ tiếp nhận:</div>
                <div className="text-xl font-black font-mono text-slate-900">{docketCode}</div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Hồ sơ hợp lệ - Đang xử lý đúng hẹn
              </div>
            </div>

            {/* Meta details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div>
                <span className="text-slate-400">Tên thủ tục:</span>
                <div className="font-bold text-slate-800 mt-0.5">Cấp bản sao trích lục hộ tịch từ CSDL Quốc gia</div>
              </div>
              <div>
                <span className="text-slate-400">Người nộp hồ sơ:</span>
                <div className="font-bold text-slate-800 mt-0.5">Nguyễn Văn An (0912.***.888)</div>
              </div>
              <div>
                <span className="text-slate-400">Thời gian tiếp nhận:</span>
                <div className="font-semibold text-slate-700 mt-0.5">28/10/2026 - 09:15:30</div>
              </div>
              <div>
                <span className="text-slate-400">Hẹn trả kết quả:</span>
                <div className="font-bold text-blue-700 mt-0.5">28/10/2026 - Trước 16:30</div>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" /> Nhật ký quy trình giải quyết
              </h4>

              <div className="space-y-4 border-l-2 border-blue-500 pl-4 ml-2">
                <div className="relative">
                  <span className="absolute -left-[23px] top-0 w-3.5 h-3.5 rounded-full bg-blue-600 ring-4 ring-blue-100"></span>
                  <div className="text-xs font-bold text-blue-700">Bước 1: Nộp hồ sơ trực tuyến thành công</div>
                  <div className="text-[11px] text-slate-500">28/10/2026 09:15 • Tiếp nhận qua Cổng dịch vụ công</div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[23px] top-0 w-3.5 h-3.5 rounded-full bg-blue-600 ring-4 ring-blue-100"></span>
                  <div className="text-xs font-bold text-blue-700">Bước 2: Bộ phận Một cửa tiếp nhận & Thẩm định hồ sơ</div>
                  <div className="text-[11px] text-slate-500">28/10/2026 09:40 • Cán bộ thụ lý: Trần Thị Hoa • Hồ sơ đầy đủ hợp lệ</div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[23px] top-0 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-amber-100 animate-pulse"></span>
                  <div className="text-xs font-bold text-amber-700">Bước 3: Lãnh đạo thẩm tra & Ký duyệt chữ ký số</div>
                  <div className="text-[11px] text-slate-600 font-medium">Đang tiến hành ký số tài liệu điện tử theo quy trình</div>
                </div>

                <div className="relative opacity-60">
                  <span className="absolute -left-[23px] top-0 w-3.5 h-3.5 rounded-full bg-slate-300 ring-4 ring-slate-100"></span>
                  <div className="text-xs font-bold text-slate-600">Bước 4: Trả kết quả cho công dân</div>
                  <div className="text-[11px] text-slate-400">Dự kiến trả bản điện tử vào kho dữ liệu cá nhân trước 16:30 hôm nay</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
