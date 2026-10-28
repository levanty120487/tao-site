"use client";

import React, { useState } from 'react';
import type { PortalTemplateProps } from '../../types';
import { NewsHeader } from '../header';
import { NewsFooter } from '../footer';
import { NavLink } from '../../common/nav-link';
import { 
  ArrowLeft, 
  Calendar, 
  CheckCircle2, 
  Download, 
  FileCheck, 
  FileSpreadsheet, 
  FileText, 
  Printer, 
  Share2, 
  ShieldCheck, 
  User 
} from 'lucide-react';

const MOCK_DOC_DETAILS: Record<string, any> = {
  '1': {
    code: '158/QĐ-UBND',
    title: 'Quyết định phê duyệt Đề án chuyển đổi số toàn diện các cổng thành phần giai đoạn 2026 - 2030',
    type: 'Quyết định',
    issuedDate: '28/10/2026',
    effectiveDate: '01/11/2026',
    signer: 'TS. Nguyễn Hoàng Nam',
    signerTitle: 'Chủ tịch / Trưởng Đơn vị',
    agency: 'Ủy ban Nhân dân & Ban Chỉ đạo Chuyển đổi số',
    field: 'Công nghệ thông tin - Cải cách hành chính',
    status: 'Đang có hiệu lực',
    filePdf: { name: '158_QD-UBND_2026.pdf', size: '2.4 MB' },
    fileDoc: { name: '158_QD-UBND_2026.docx', size: '1.1 MB' },
    summary: 'Phê duyệt Đề án chuyển đổi số toàn diện các cổng thành phần giai đoạn 2026 - 2030 với mục tiêu 100% dịch vụ công đủ điều kiện được cung cấp trực tuyến toàn trình và tích hợp dữ liệu dân cư dùng chung.',
    articles: [
      {
        heading: 'Điều 1. Phê duyệt Đề án',
        content: 'Phê duyệt kèm theo Quyết định này Đề án "Chuyển đổi số toàn diện hệ sinh thái Cổng thông tin thành phần giai đoạn 2026 - 2030, tầm nhìn 2035", với các chỉ tiêu trọng tâm: Số hóa 100% hồ sơ kết quả giải quyết thủ tục hành chính; đảm bảo an toàn thông tin theo cấp độ 4; nâng cao tỷ lệ hài lòng của người dân đạt tối thiểu 98%.'
      },
      {
        heading: 'Điều 2. Tổ chức thực hiện',
        content: 'Giao Trung tâm Công nghệ thông tin chủ trì phối hợp với Văn phòng và các phòng ban chuyên môn triển khai hạ tầng kỹ thuật, bảo đảm an ninh an toàn mạng, đào tạo bồi dưỡng nâng cao năng lực cho cán bộ vận hành cổng.'
      },
      {
        heading: 'Điều 3. Kinh phí thực hiện',
        content: 'Kinh phí thực hiện Đề án được bố trí từ nguồn ngân sách nhà nước theo phân cấp ngân sách hiện hành, nguồn vốn đầu tư công và các nguồn kinh phí hợp pháp khác theo quy định của pháp luật.'
      },
      {
        heading: 'Điều 4. Hiệu lực thi hành',
        content: 'Quyết định này có hiệu lực thi hành kể từ ngày 01 tháng 11 năm 2026. Chánh Văn phòng, Trưởng các phòng ban đơn vị trực thuộc và các tổ chức, cá nhân có liên quan chịu trách nhiệm thi hành Quyết định này./.'
      }
    ]
  }
};

export function NewsDocsDetailPage(props: PortalTemplateProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'meta'>('preview');
  const detailKey = props.detailId || '1';
  const doc = MOCK_DOC_DETAILS[detailKey] || MOCK_DOC_DETAILS['1'];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <NewsHeader {...props} activePath="/van-ban" />

        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-slate-200 py-2.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-hidden">
            <NavLink
              href="/"
              active={false}
              isPreview={props.isPreview}
              onNavigate={props.onNavigatePreview}
              className="hover:text-red-700 cursor-pointer shrink-0"
            >
              Trang chủ
            </NavLink>
            <span>/</span>
            <NavLink
              href="/van-ban"
              active={false}
              isPreview={props.isPreview}
              onNavigate={props.onNavigatePreview}
              className="hover:text-red-700 cursor-pointer shrink-0"
            >
              Văn bản mới
            </NavLink>
            <span>/</span>
            <span className="text-red-700 font-bold truncate">Số hiệu: {doc.code}</span>
          </div>
        </div>

        {/* Document Container */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Document Details (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
              {/* Back Link */}
              <NavLink
                href="/van-ban"
                active={false}
                isPreview={props.isPreview}
                onNavigate={props.onNavigatePreview}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-red-700 transition-colors cursor-pointer mb-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Quay lại danh mục văn bản
              </NavLink>

              {/* Header Box */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-red-800 bg-red-50 border border-red-200 px-3 py-1 rounded-md">
                    Số ký hiệu: {doc.code}
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {doc.status}
                  </span>
                </div>

                <h1 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  {doc.title}
                </h1>
              </div>

              {/* Action Toolbar */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <button className="bg-red-700 hover:bg-red-800 text-white font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-2xs">
                    <Download className="w-3.5 h-3.5" /> Tải về PDF ({doc.filePdf.size})
                  </button>
                  <button className="bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs px-3.5 py-2 rounded-lg border border-slate-300 flex items-center gap-1.5 transition-colors">
                    <Download className="w-3.5 h-3.5 text-blue-600" /> Tải file Word ({doc.fileDoc.size})
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => window.print()}
                    className="p-2 rounded-lg border border-slate-200 hover:bg-white text-slate-600 transition-colors"
                    title="In văn bản"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Attributes Table */}
              <div className="rounded-xl border border-slate-200 overflow-hidden text-xs">
                <div className="bg-slate-100 font-bold px-4 py-2.5 text-slate-800 uppercase tracking-wider text-[11px] border-b border-slate-200">
                  Thông tin thuộc tính văn bản
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                  <div className="divide-y divide-slate-100 p-2">
                    <div className="py-2 px-2 flex justify-between">
                      <span className="text-slate-500">Cơ quan ban hành:</span>
                      <b className="text-slate-800 text-right">{doc.agency}</b>
                    </div>
                    <div className="py-2 px-2 flex justify-between">
                      <span className="text-slate-500">Loại văn bản:</span>
                      <b className="text-slate-800">{doc.type}</b>
                    </div>
                    <div className="py-2 px-2 flex justify-between">
                      <span className="text-slate-500">Lĩnh vực:</span>
                      <b className="text-slate-800">{doc.field}</b>
                    </div>
                  </div>

                  <div className="divide-y divide-slate-100 p-2">
                    <div className="py-2 px-2 flex justify-between">
                      <span className="text-slate-500">Ngày ban hành:</span>
                      <b className="text-slate-800">{doc.issuedDate}</b>
                    </div>
                    <div className="py-2 px-2 flex justify-between">
                      <span className="text-slate-500">Ngày có hiệu lực:</span>
                      <b className="text-slate-800">{doc.effectiveDate}</b>
                    </div>
                    <div className="py-2 px-2 flex justify-between">
                      <span className="text-slate-500">Người ký ban hành:</span>
                      <b className="text-slate-800">{doc.signer} ({doc.signerTitle})</b>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Content Preview */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-red-700" /> TOÀN VĂN QUYẾT ĐỊNH
                </h3>

                <div className="p-6 md:p-8 bg-slate-50/70 border border-slate-200 rounded-2xl space-y-6 text-sm text-slate-800 leading-relaxed font-serif">
                  <div className="text-center space-y-1 pb-4 border-b border-slate-200">
                    <div className="font-bold uppercase text-xs tracking-wider">{doc.agency}</div>
                    <div className="text-xs font-mono">Số: {doc.code}</div>
                    <div className="font-bold text-base uppercase text-red-900 pt-2">{doc.title}</div>
                  </div>

                  <div className="space-y-4">
                    {doc.articles.map((item: any, idx: number) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="font-bold text-slate-900 font-sans text-xs">{item.heading}</div>
                        <p className="text-slate-700 text-xs md:text-sm leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-200 flex justify-between text-xs font-sans">
                    <div>
                      <div className="font-bold uppercase">Nơi nhận:</div>
                      <div className="text-slate-500 text-[11px] leading-relaxed">
                        - Như Điều 4;<br />
                        - Lãnh đạo UBND;<br />
                        - Cổng TTĐT (đăng tải);<br />
                        - Lưu: VT, CNTT.
                      </div>
                    </div>
                    <div className="text-center space-y-1">
                      <div className="font-bold uppercase">{doc.signerTitle}</div>
                      <div className="h-12 flex items-center justify-center italic text-red-700 text-xs font-serif font-bold">
                        (Đã ký số điện tử)
                      </div>
                      <div className="font-bold">{doc.signer}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-3">
                <h4 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> TÍNH PHÁP LÝ & HIỆU LỰC
                </h4>
                <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  <p>
                    Văn bản này được ban hành hợp pháp và lưu trữ trong Cơ sở dữ liệu văn bản chỉ đạo điều hành của Cổng.
                  </p>
                  <div className="p-3 bg-emerald-50 rounded-lg text-emerald-800 text-[11px] font-medium">
                    ✓ Chữ ký số cơ quan đã được xác thực qua Ban Cơ yếu Chính phủ.
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-3">
                <h4 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2">
                  VĂN BẢN CÙNG CHUYÊN ĐỀ
                </h4>
                <div className="space-y-2.5 text-xs">
                  {[
                    { code: '95/TB-TTĐT', title: 'Thông báo kết nối dữ liệu hành chính công' },
                    { code: '42/KH-STTTT', title: 'Kế hoạch diễn tập ứng cứu sự cố an toàn thông tin' },
                    { code: '210/BC-VP', title: 'Báo cáo tình hình xử lý văn bản điện tử' },
                  ].map((rel, idx) => (
                    <NavLink
                      key={idx}
                      href="/van-ban"
                      active={false}
                      isPreview={props.isPreview}
                      onNavigate={props.onNavigatePreview}
                      className="block p-2 rounded-lg bg-slate-50 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer group"
                    >
                      <div className="font-mono font-bold text-red-800 text-[10px]">{rel.code}</div>
                      <div className="font-medium text-slate-700 group-hover:text-red-700 mt-0.5 line-clamp-1">{rel.title}</div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsFooter {...props} />
    </div>
  );
}

