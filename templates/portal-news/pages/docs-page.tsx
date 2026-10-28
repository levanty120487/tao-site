"use client";

import React, { useState } from 'react';
import type { PortalTemplateProps } from '../../types';
import { NewsHeader } from '../header';
import { NewsFooter } from '../footer';
import { NavLink } from '../../common/nav-link';
import { 
  Download, 
  Eye, 
  FileSpreadsheet, 
  Filter, 
  Search 
} from 'lucide-react';

const DOCUMENTS_LIST = [
  {
    id: 1,
    code: '158/QĐ-UBND',
    date: '28/10/2026',
    title: 'Quyết định phê duyệt Đề án chuyển đổi số toàn diện các cổng thành phần giai đoạn 2026 - 2030',
    type: 'Quyết định',
    signer: 'Chủ tịch UBND',
    department: 'Văn phòng Cổng',
    fileSize: '2.4 MB',
  },
  {
    id: 2,
    code: '95/TB-TTĐT',
    date: '27/10/2026',
    title: 'Thông báo kết luận cuộc họp triển khai kết nối dữ liệu hành chính công và cơ sở dữ liệu chuyên ngành',
    type: 'Thông báo',
    signer: 'Trưởng ban Chỉ đạo',
    department: 'Ban Chỉ đạo CNTT',
    fileSize: '850 KB',
  },
  {
    id: 3,
    code: '42/KH-STTTT',
    date: '25/10/2026',
    title: 'Kế hoạch tổ chức diễn tập ứng cứu sự cố an toàn thông tin mạng trên địa bàn năm 2026',
    type: 'Kế hoạch',
    signer: 'Giám đốc Sở',
    department: 'Phòng An toàn thông tin',
    fileSize: '1.2 MB',
  },
  {
    id: 4,
    code: '210/BC-VP',
    date: '22/10/2026',
    title: 'Báo cáo tình hình xử lý văn bản điện tử và mức độ hài lòng của công dân tháng 10/2026',
    type: 'Báo cáo',
    signer: 'Chánh Văn phòng',
    department: 'Bộ phận Một cửa',
    fileSize: '3.1 MB',
  },
  {
    id: 5,
    code: '114/QĐ-TTĐT',
    date: '19/10/2026',
    title: 'Quyết định ban hành Quy chế bảo đảm an toàn, an ninh mạng cho Cổng thông tin thành viên',
    type: 'Quyết định',
    signer: 'Trưởng ban Quản trị',
    department: 'Trung tâm CNTT',
    fileSize: '1.8 MB',
  },
];

export function NewsDocsSubpage(props: PortalTemplateProps) {
  const [filterType, setFilterType] = useState('Tất cả');
  const [searchDoc, setSearchDoc] = useState('');

  const filtered = DOCUMENTS_LIST.filter((doc) => {
    const matchType = filterType === 'Tất cả' || doc.type === filterType;
    const matchSearch = doc.title.toLowerCase().includes(searchDoc.toLowerCase()) ||
                        doc.code.toLowerCase().includes(searchDoc.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <NewsHeader {...props} activePath="/van-ban" />

        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-slate-200 py-2.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
            <NavLink
              href="/"
              active={false}
              isPreview={props.isPreview}
              onNavigate={props.onNavigatePreview}
              className="hover:text-red-700 cursor-pointer"
            >
              Trang chủ
            </NavLink>
            <span>/</span>
            <span className="text-red-700 font-bold">Chuyên trang Văn bản Chỉ đạo Điều hành</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider mb-1">
                <FileSpreadsheet className="w-4 h-4" /> HỆ THỐNG VĂN BẢN
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                Văn bản Chỉ đạo, Điều hành & Quy phạm
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Tra cứu đầy đủ các quyết định, chỉ thị, thông báo và kế hoạch công tác chính thức
              </p>
            </div>

            {/* In-page search */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchDoc}
                onChange={(e) => setSearchDoc(e.target.value)}
                placeholder="Nhập số hiệu hoặc trích yếu..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-700 outline-hidden shadow-2xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Loại văn bản:
            </span>
            {['Tất cả', 'Quyết định', 'Thông báo', 'Kế hoạch', 'Báo cáo'].map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  filterType === t
                    ? 'bg-red-700 text-white shadow-xs font-bold'
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
                <thead className="bg-slate-100/80 text-slate-700 border-b border-slate-200 uppercase font-bold text-[11px]">
                  <tr>
                    <th className="py-3 px-4 w-36">Số / Ký hiệu</th>
                    <th className="py-3 px-4 w-32">Ngày ban hành</th>
                    <th className="py-3 px-4">Trích yếu nội dung</th>
                    <th className="py-3 px-4 w-36">Người ký / Cơ quan</th>
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
                        <td className="py-3.5 px-4 font-mono font-bold text-red-800 whitespace-nowrap">
                          <NavLink
                            href={`/van-ban/${item.id}`}
                            active={false}
                            isPreview={props.isPreview}
                            onNavigate={props.onNavigatePreview}
                            className="hover:underline"
                          >
                            {item.code}
                          </NavLink>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                          {item.date}
                        </td>
                        <td className="py-3.5 px-4">
                          <NavLink
                            href={`/van-ban/${item.id}`}
                            active={false}
                            isPreview={props.isPreview}
                            onNavigate={props.onNavigatePreview}
                            className="font-semibold text-slate-900 hover:text-red-700 cursor-pointer transition-colors leading-relaxed block"
                          >
                            {item.title}
                          </NavLink>
                          <div className="text-[10px] text-slate-400 mt-0.5">
                            Loại: {item.type} • Đơn vị soạn thảo: {item.department}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 font-medium whitespace-nowrap">
                          {item.signer}
                        </td>
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          <NavLink
                            href={`/van-ban/${item.id}`}
                            active={false}
                            isPreview={props.isPreview}
                            onNavigate={props.onNavigatePreview}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-700 hover:text-white font-semibold transition-colors"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>{item.fileSize}</span>
                          </NavLink>
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

      <NewsFooter {...props} />
    </div>
  );
}
