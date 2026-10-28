"use client";

import React, { useState } from 'react';
import type { PortalTemplateProps } from '../../types';
import { DeptHeader } from '../header';
import { DeptFooter } from '../footer';
import { 
  Download, 
  FileSpreadsheet, 
  Filter, 
  Search 
} from 'lucide-react';

const DEPT_DOCUMENTS = [
  { code: '152/QĐ-ĐV', date: '27/10/2026', title: 'Quyết định ban hành Quy chế làm việc và phân công nhiệm vụ Lãnh đạo đơn vị khóa mới', type: 'Quyết định', signer: 'Trưởng đơn vị', size: '1.4 MB' },
  { code: '98/TB-VP', date: '25/10/2026', title: 'Thông báo kết luận cuộc họp giao ban công tác tháng 10 và triển khai nhiệm vụ trọng tâm quý IV', type: 'Thông báo', signer: 'Chánh Văn phòng', size: '640 KB' },
  { code: '45/KH-CNTT', date: '22/10/2026', title: 'Kế hoạch triển khai diễn tập an toàn thông tin mạng và ứng phó sự cố năm 2026', type: 'Kế hoạch', signer: 'Tổ CNTT', size: '2.1 MB' },
  { code: '112/BC-THTK', date: '18/10/2026', title: 'Báo cáo tổng kết phong trào thi đua và sáng kiến cải tiến quy trình công tác năm', type: 'Báo cáo', signer: 'Hội đồng Thi đua', size: '1.9 MB' },
  { code: '88/HD-VP', date: '12/10/2026', title: 'Hướng dẫn quy chuẩn lập hồ sơ công việc và giao nộp tài liệu vào lưu trữ cơ quan', type: 'Hướng dẫn', signer: 'Văn phòng', size: '980 KB' },
];

export function DeptDocsSubpage(props: PortalTemplateProps) {
  const [filterType, setFilterType] = useState('Tất cả');
  const [searchDoc, setSearchDoc] = useState('');

  const filtered = DEPT_DOCUMENTS.filter((doc) => {
    const matchType = filterType === 'Tất cả' || doc.type === filterType;
    const matchSearch = doc.title.toLowerCase().includes(searchDoc.toLowerCase()) ||
                        doc.code.toLowerCase().includes(searchDoc.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <DeptHeader {...props} activePath="/van-ban" />

        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-slate-200 py-2.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
            <span 
              onClick={() => props.isPreview && props.onNavigatePreview?.('/')}
              className="hover:text-emerald-700 cursor-pointer"
            >
              Trang chủ
            </span>
            <span>/</span>
            <span className="text-emerald-700 font-bold">Chuyên trang Văn bản Chỉ đạo Điều hành</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-1">
                <FileSpreadsheet className="w-4 h-4" /> VĂN BẢN ĐƠN VỊ
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                Hệ Thống Văn Bản & Quy Chế Nội Bộ
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Tra cứu các văn bản hành chính, quy chế hoạt động và chỉ đạo điều hành của {props.title || props.subdomain}
              </p>
            </div>

            {/* In-page search */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchDoc}
                onChange={(e) => setSearchDoc(e.target.value)}
                placeholder="Số hiệu hoặc từ khóa..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-700 outline-hidden shadow-2xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Thể loại:
            </span>
            {['Tất cả', 'Quyết định', 'Thông báo', 'Kế hoạch', 'Báo cáo', 'Hướng dẫn'].map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  filterType === t
                    ? 'bg-emerald-700 text-white shadow-xs font-bold'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Documents Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 border-b border-slate-200 uppercase font-bold text-[11px]">
                  <tr>
                    <th className="py-3 px-4 w-36">Số hiệu</th>
                    <th className="py-3 px-4 w-32">Ngày ban hành</th>
                    <th className="py-3 px-4">Trích yếu nội dung</th>
                    <th className="py-3 px-4 w-36">Người ký</th>
                    <th className="py-3 px-4 w-28 text-center">Tải file</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-slate-400">
                        Không tìm thấy văn bản phù hợp.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((item, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-emerald-800 whitespace-nowrap">
                          {item.code}
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                          {item.date}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-slate-900 hover:text-emerald-700 cursor-pointer transition-colors leading-relaxed">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5">
                            Thể loại: {item.type}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 font-medium whitespace-nowrap">
                          {item.signer}
                        </td>
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          <button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-700 hover:text-white font-semibold transition-colors">
                            <Download className="w-3.5 h-3.5" />
                            <span>{item.size}</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <DeptFooter {...props} />
    </div>
  );
}

