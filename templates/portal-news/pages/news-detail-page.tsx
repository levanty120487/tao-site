"use client";

import React, { useState } from 'react';
import type { PortalTemplateProps } from '../../types';
import { NewsHeader } from '../header';
import { NewsFooter } from '../footer';
import { NavLink } from '../../common/nav-link';
import { 
  ArrowLeft, 
  Calendar, 
  Check, 
  Clock, 
  Copy, 
  Eye, 
  Facebook, 
  Newspaper, 
  Printer, 
  Quote, 
  Share2, 
  Tag, 
  User 
} from 'lucide-react';

const MOCK_ARTICLE_DETAILS: Record<string, any> = {
  '1': {
    id: 1,
    title: 'Hội nghị sơ kết chuyển đổi số và công bố hệ sinh thái dịch vụ điện tử giai đoạn 2026',
    category: 'Chỉ đạo điều hành',
    date: 'Thứ Tư, 28/10/2026 - 08:30 GMT+7',
    author: 'TS. Nguyễn Hoàng Nam',
    source: 'Ban Biên Tập Cổng Thành Phần',
    views: '1,420',
    sapo: 'Sáng ngày 28/10/2026, Cổng thành phần đã chính thức chủ trì Hội nghị sơ kết công tác chuyển đổi số năm 2026 và công bố hệ sinh thái dịch vụ hành chính điện tử mới, hướng tới số hóa toàn diện 100% hồ sơ nghiệp vụ.',
    content: [
      {
        type: 'paragraph',
        text: 'Phát biểu khai mạc hội nghị, đại diện Ban Lãnh đạo nhấn mạnh việc phát triển hạ tầng số và nền tảng cổng thành phần là nhiệm vụ đột phá chiến lược. Trong 10 tháng đầu năm 2026, hệ thống đã ghi nhận hơn 2,4 triệu lượt truy cập và tiếp nhận trên 58.000 hồ sơ trực tuyến, đạt tỷ lệ hài lòng trên 99%.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop&q=80',
        caption: 'Toàn cảnh Hội nghị sơ kết chuyển đổi số và ứng dụng dịch vụ điện tử sáng 28/10/2026.'
      },
      {
        type: 'paragraph',
        text: 'Điểm nhấn quan trọng tại hội nghị là việc kích hoạt nền tảng Cổng thành phần đa giao diện (Multi-Tenant Portal Platform), cho phép từng phòng ban, cơ quan và đơn vị trực thuộc tự chủ hoàn toàn trong việc chọn lựa bố cục giao diện, cá nhân hóa nội dung và tích hợp chuyên trang dịch vụ công riêng biệt.'
      },
      {
        type: 'quote',
        quote: 'Chuyển đổi số không đơn thuần là đưa văn bản giấy lên máy tính, mà là thay đổi tư duy làm việc, xóa bỏ thủ tục rườm rà và lấy sự tiện ích, thời gian của người dân làm thước đo cao nhất của hiệu quả hành chính.',
        author: 'Lãnh đạo đơn vị chỉ đạo tại Hội nghị'
      },
      {
        type: 'paragraph',
        text: 'Hội nghị cũng đã thống nhất lộ trình 3 giai đoạn tiếp theo: Hoàn thiện 100% kho dữ liệu số dùng chung trước ngày 30/11/2026; thí điểm trợ lý ảo AI hỗ trợ giải đáp tự động thắc mắc của công dân 24/7; và kết nối liên thông dữ liệu với Cổng Dịch vụ công Quốc gia.'
      }
    ],
    tags: ['Chuyển đổi số', 'Cổng thành phần', 'Dịch vụ công trực tuyến', 'Cải cách hành chính', 'Hạ tầng số'],
    relatedNews: [
      { id: 2, title: 'Triển khai chiến dịch truyền thông đa phương tiện hướng về cơ sở', date: '27/10/2026', views: '890' },
      { id: 3, title: 'Đẩy mạnh thanh toán không dùng tiền mặt và số hóa dữ liệu công dân', date: '27/10/2026', views: '730' },
      { id: 4, title: 'Nâng cao chất lượng phục vụ thông qua đo lường mức độ hài lòng trực tuyến', date: '26/10/2026', views: '488' }
    ]
  }
};

export function NewsDetailPage(props: PortalTemplateProps) {
  const [copied, setCopied] = useState(false);
  const detailKey = props.detailId || '1';
  const article = MOCK_ARTICLE_DETAILS[detailKey] || MOCK_ARTICLE_DETAILS['1'];

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <NewsHeader {...props} activePath="/tin-tuc" />

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
              href="/tin-tuc"
              active={false}
              isPreview={props.isPreview}
              onNavigate={props.onNavigatePreview}
              className="hover:text-red-700 cursor-pointer shrink-0"
            >
              Tin tức - Sự kiện
            </NavLink>
            <span>/</span>
            <span className="text-red-700 font-bold truncate">Chi tiết bài viết</span>
          </div>
        </div>

        {/* Article Container */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Article Content (8 cols) */}
            <article className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
              {/* Back Link */}
              <NavLink
                href="/tin-tuc"
                active={false}
                isPreview={props.isPreview}
                onNavigate={props.onNavigatePreview}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-red-700 transition-colors cursor-pointer mb-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Quay lại danh sách tin tức
              </NavLink>

              {/* Category & Title */}
              <div className="space-y-3">
                <span className="inline-block bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {article.category}
                </span>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                  {article.title}
                </h1>
              </div>

              {/* Meta bar & Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-slate-100 text-xs text-slate-500">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <User className="w-3.5 h-3.5 text-red-700" /> {article.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> {article.views} xem
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleCopyLink}
                    className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors flex items-center gap-1 text-[11px]"
                    title="Sao chép liên kết"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Đã chép' : 'Sao chép'}</span>
                  </button>
                  <button 
                    onClick={() => window.print()}
                    className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                    title="In bài viết"
                  >
                    <Printer className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Sapo Lead */}
              <div className="p-4 bg-slate-50 border-l-4 border-red-700 rounded-r-xl">
                <p className="text-sm md:text-base font-semibold text-slate-800 leading-relaxed italic">
                  {article.sapo}
                </p>
              </div>

              {/* Body Content */}
              <div className="space-y-6 text-sm md:text-base text-slate-700 leading-relaxed">
                {article.content.map((block: any, idx: number) => {
                  if (block.type === 'paragraph') {
                    return <p key={idx}>{block.text}</p>;
                  }
                  if (block.type === 'image') {
                    return (
                      <figure key={idx} className="my-6 space-y-2">
                        <img
                          src={block.url}
                          alt={block.caption}
                          className="w-full rounded-xl object-cover shadow-xs border border-slate-200"
                        />
                        <figcaption className="text-xs text-center text-slate-500 italic">
                          {block.caption}
                        </figcaption>
                      </figure>
                    );
                  }
                  if (block.type === 'quote') {
                    return (
                      <div key={idx} className="my-6 p-5 bg-red-50/60 border border-red-200 rounded-2xl relative space-y-2">
                        <Quote className="w-8 h-8 text-red-300 absolute top-3 right-4 opacity-50" />
                        <p className="font-bold text-red-950 italic text-sm md:text-base relative z-10 leading-relaxed">
                          "{block.quote}"
                        </p>
                        <div className="text-xs font-semibold text-red-700 text-right">
                          — {block.author}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Article Footer & Author Signature */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
                <div>
                  Nguồn: <b className="text-slate-800">{article.source}</b>
                </div>
                <div className="italic">
                  Biên tập & Xuất bản: Tổ Thư ký Ban Biên tập
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5 text-red-700" /> Từ khóa:
                </span>
                {article.tags.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Related Articles */}
              <div className="pt-8 border-t border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <Newspaper className="w-4 h-4 text-red-700" /> TIN TỨC LIÊN QUAN
                </h3>
                <div className="divide-y divide-slate-100">
                  {article.relatedNews.map((rel: any) => (
                    <div key={rel.id} className="py-2.5 flex items-center justify-between gap-4 group">
                      <NavLink
                        href={`/tin-tuc/${rel.id}`}
                        active={false}
                        isPreview={props.isPreview}
                        onNavigate={props.onNavigatePreview}
                        className="text-xs font-semibold text-slate-800 group-hover:text-red-700 transition-colors leading-snug cursor-pointer flex-1"
                      >
                        • {rel.title}
                      </NavLink>
                      <span className="text-[11px] text-slate-400 shrink-0">
                        {rel.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Highlight widget */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-3">
                <h4 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2">
                  CHUYÊN MỤC NỔI BẬT
                </h4>
                <div className="space-y-2 text-xs">
                  {['Chuyển đổi số & AI', 'Cải cách hành chính', 'Định danh điện tử VNeID', 'Quy hoạch phát triển'].map((c, i) => (
                    <NavLink
                      key={i}
                      href="/tin-tuc"
                      active={false}
                      isPreview={props.isPreview}
                      onNavigate={props.onNavigatePreview}
                      className="p-2 rounded-lg bg-slate-50 hover:bg-red-50 hover:text-red-700 flex items-center justify-between text-slate-700 font-medium transition-colors cursor-pointer"
                    >
                      <span>{c}</span>
                      <span>→</span>
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Hotline widget */}
              <div className="bg-gradient-to-br from-red-800 to-red-950 text-white p-5 rounded-2xl shadow-sm space-y-2 text-center">
                <div className="text-xs uppercase tracking-wider text-red-200 font-semibold">Góp ý & Phản ánh nội dung</div>
                <div className="text-xl font-black">1900 6868</div>
                <p className="text-[11px] text-red-200">
                  Hòm thư tiếp nhận bài cộng tác & phản hồi từ độc giả
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsFooter {...props} />
    </div>
  );
}

