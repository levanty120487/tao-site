"use client";

import React, { useState } from 'react';
import type { PortalTemplateProps } from '../../types';
import { ServiceHeader } from '../header';
import { ServiceFooter } from '../footer';
import { 
  Building2, 
  CheckCircle2, 
  Clock, 
  Download, 
  FileText, 
  Filter, 
  Layers, 
  Search, 
  Users 
} from 'lucide-react';

const ALL_SERVICES = [
  { id: 1, title: 'Đăng ký thành lập hộ kinh doanh trực tuyến', level: 'Toàn trình', cat: 'Doanh nghiệp', time: '3 ngày', fee: '100.000 đ', agency: 'Phòng Tài chính - Kế hoạch' },
  { id: 2, title: 'Cấp bản sao trích lục hộ tịch từ Cơ sở dữ liệu Quốc gia', level: 'Một phần', cat: 'Tư pháp', time: 'Trong ngày', fee: '8.000 đ', agency: 'Phòng Tư pháp' },
  { id: 3, title: 'Cấp đổi Giấy phép lái xe quốc tế do Việt Nam cấp', level: 'Toàn trình', cat: 'Giao thông', time: '5 ngày', fee: '135.000 đ', agency: 'Sở Giao thông Vận tải' },
  { id: 4, title: 'Đăng ký khai sinh và cấp mã số định danh cá nhân liên thông', level: 'Toàn trình', cat: 'Hộ tịch', time: 'Trong ngày', fee: 'Miễn phí', agency: 'UBND cấp xã' },
  { id: 5, title: 'Cấp giấy phép xây dựng nhà ở riêng lẻ đô thị', level: 'Một phần', cat: 'Xây dựng', time: '15 ngày', fee: '50.000 đ', agency: 'Phòng Quản lý Đô thị' },
  { id: 6, title: 'Xác nhận thông tin về cư trú điện tử (CT07)', level: 'Toàn trình', cat: 'Cư trú', time: '1 ngày', fee: 'Miễn phí', agency: 'Công an cấp xã' },
  { id: 7, title: 'Đăng ký biến động quyền sử dụng đất, quyền sở hữu nhà ở', level: 'Một phần', cat: 'Đất đai', time: '10 ngày', fee: 'Theo quy định', agency: 'Văn phòng Đăng ký đất đai' },
  { id: 8, title: 'Cấp Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm', level: 'Toàn trình', cat: 'Y tế', time: '7 ngày', fee: '150.000 đ', agency: 'Phòng Y tế' },
];

export function ServicesSubpage(props: PortalTemplateProps) {
  const [selectedCat, setSelectedCat] = useState('Tất cả');
  const [selectedLevel, setSelectedLevel] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = ALL_SERVICES.filter((item) => {
    const matchCat = selectedCat === 'Tất cả' || item.cat === selectedCat;
    const matchLevel = selectedLevel === 'Tất cả' || item.level === selectedLevel;
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.agency.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchLevel && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <ServiceHeader {...props} activePath="/dich-vu" />

        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-slate-200 py-2.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
            <span 
              onClick={() => props.isPreview && props.onNavigatePreview?.('/')}
              className="hover:text-blue-700 cursor-pointer"
            >
              Trang chủ
            </span>
            <span>/</span>
            <span className="text-blue-700 font-bold">Chuyên trang Dịch vụ công & Thủ tục trực tuyến</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider mb-1">
                <Layers className="w-4 h-4" /> DANH MỤC THỦ TỤC HÀNH CHÍNH
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                Dịch vụ công trực tuyến Toàn trình & Một phần
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Công khai quy trình, biểu mẫu, thời hạn giải quyết và tiếp nhận hồ sơ trực tuyến
              </p>
            </div>

            {/* In-page search */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Nhập tên thủ tục, cơ quan..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-hidden shadow-2xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-600 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-blue-600" /> Lĩnh vực:
              </span>
              {['Tất cả', 'Doanh nghiệp', 'Tư pháp', 'Hộ tịch', 'Giao thông', 'Xây dựng', 'Đất đai', 'Y tế'].map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCat(c)}
                  className={`text-xs px-3 py-1 rounded-lg font-medium transition-all ${
                    selectedCat === c
                      ? 'bg-blue-600 text-white font-bold shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600">Mức độ:</span>
              {['Tất cả', 'Toàn trình', 'Một phần'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`text-xs px-2.5 py-1 rounded-md transition-all ${
                    selectedLevel === lvl
                      ? 'bg-slate-900 text-white font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.length === 0 ? (
              <div className="col-span-2 bg-white p-12 text-center rounded-xl border border-slate-200 text-slate-500 text-xs">
                Không tìm thấy thủ tục hành chính nào phù hợp.
              </div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-sm">
                        {item.cat} • {item.agency}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.level === 'Toàn trình' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.level}
                      </span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div>
                      <span>Thời hạn: <b>{item.time}</b></span>
                      <span className="mx-2">•</span>
                      <span>Lệ phí: <b className="text-slate-900">{item.fee}</b></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Tải mẫu tờ khai">
                        <Download className="w-3.5 h-3.5" />
                      </button>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors shadow-2xs">
                        Nộp hồ sơ
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <ServiceFooter {...props} />
    </div>
  );
}

