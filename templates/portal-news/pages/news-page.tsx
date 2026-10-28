"use client";

import React, { useState } from 'react';
import type { PortalTemplateProps } from '../../types';
import { NewsHeader } from '../header';
import { NewsFooter } from '../footer';
import { NavLink } from '../../common/nav-link';
import { 
  Bell, 
  Calendar, 
  ChevronRight, 
  Eye, 
  Filter, 
  Newspaper, 
  Search 
} from 'lucide-react';

const ALL_ARTICLES = [
  {
    id: 1,
    title: 'Hội nghị sơ kết chuyển đổi số và công bố hệ sinh thái dịch vụ điện tử giai đoạn 2026',
    summary: 'Sáng nay, cổng thành phần đã chính thức công bố lộ trình ứng dụng trí tuệ nhân tạo và số hóa 100% quy trình thủ tục nghiệp vụ, hướng tới phục vụ người dân và doanh nghiệp hiệu quả hơn.',
    category: 'Chỉ đạo điều hành',
    date: '28/10/2026 08:30',
    views: '1,420',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Triển khai chiến dịch truyền thông đa phương tiện hướng về cơ sở',
    summary: 'Mục tiêu phủ sóng thông tin đến 100% tổ dân phố, đoàn viên thanh niên và các chi hội cơ sở thông qua kênh truyền thông số hiện đại.',
    category: 'Sự kiện',
    date: '27/10/2026 14:15',
    views: '890',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Đẩy mạnh thanh toán không dùng tiền mặt và số hóa dữ liệu công dân',
    summary: 'Các đơn vị trực thuộc đã đồng loạt triển khai điểm hỗ trợ công dân tạo tài khoản định danh và thanh toán trực tuyến nhanh chóng.',
    category: 'Chuyển đổi số',
    date: '27/10/2026 10:00',
    views: '730',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Nâng cao chất lượng phục vụ thông qua đo lường mức độ hài lòng trực tuyến',
    summary: 'Khảo sát ý kiến tự động sau mỗi phiên làm việc giúp cải thiện rõ rệt chỉ số minh bạch và tính chuyên nghiệp của đội ngũ cán bộ.',
    category: 'Cải cách hành chính',
    date: '26/10/2026 16:45',
    views: '488',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Tăng cường tương tác hai chiều qua cổng thông tin và mạng xã hội',
    summary: 'Hệ thống phản hồi thông minh tự động phân loại và chuyển đến bộ phận chuyên trách giải quyết trong vòng 24 giờ.',
    category: 'Truyền thông',
    date: '25/10/2026 09:20',
    views: '615',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Tọa đàm chuyên đề: An toàn bảo mật thông tin trong cơ quan nhà nước',
    summary: 'Các chuyên gia an ninh mạng hàng đầu đã chia sẻ kinh nghiệm phòng chống tấn công mã độc tống tiền và bảo vệ dữ liệu nội bộ.',
    category: 'Sự kiện',
    date: '24/10/2026 11:00',
    views: '540',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80',
  },
];

const CATEGORIES = ['Tất cả', 'Chỉ đạo điều hành', 'Sự kiện', 'Chuyển đổi số', 'Cải cách hành chính', 'Truyền thông'];

export function NewsSubpage(props: PortalTemplateProps) {
  const [selectedCat, setSelectedCat] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = ALL_ARTICLES.filter((item) => {
    const matchCat = selectedCat === 'Tất cả' || item.category === selectedCat;
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <NewsHeader {...props} activePath="/tin-tuc" />

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
            <span className="text-red-700 font-bold">Chuyên trang Tin tức & Sự kiện</span>
          </div>
        </div>

        {/* Subpage Hero & Filter Section */}
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider mb-1">
                <Newspaper className="w-4 h-4" /> CHUYÊN TRANG NỘI DUNG
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                Tin tức, Sự kiện & Chuyên đề
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Cập nhật thông tin nhanh chóng, chính xác về các hoạt động của {props.title || props.subdomain}
              </p>
            </div>

            {/* In-page search */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm bài viết..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-700 outline-hidden shadow-2xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-2">
            <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Chuyên mục:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedCat === cat
                    ? 'bg-red-700 text-white shadow-xs font-bold'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Stream & Right Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
            {/* Main Stream (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              {filtered.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-xl border border-slate-200 text-slate-500 text-xs">
                  Không tìm thấy bài viết nào phù hợp với bộ lọc hiện tại.
                </div>
              ) : (
                filtered.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-md transition-all overflow-hidden flex flex-col sm:flex-row group"
                  >
                    <NavLink
                      href={`/tin-tuc/${item.id}`}
                      active={false}
                      isPreview={props.isPreview}
                      onNavigate={props.onNavigatePreview}
                      className="sm:w-60 h-44 overflow-hidden bg-slate-900 shrink-0 block cursor-pointer"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </NavLink>
                    <div className="p-4 flex flex-col justify-between flex-1 space-y-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-sm">
                            {item.category}
                          </span>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {item.date}
                          </span>
                        </div>
                        <NavLink
                          href={`/tin-tuc/${item.id}`}
                          active={false}
                          isPreview={props.isPreview}
                          onNavigate={props.onNavigatePreview}
                          className="block text-sm md:text-base font-bold text-slate-900 group-hover:text-red-700 transition-colors line-clamp-2 leading-snug cursor-pointer"
                        >
                          {item.title}
                        </NavLink>
                        <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" /> {item.views} lượt xem
                        </span>
                        <NavLink
                          href={`/tin-tuc/${item.id}`}
                          active={false}
                          isPreview={props.isPreview}
                          onNavigate={props.onNavigatePreview}
                          className="text-red-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          Đọc chi tiết <ChevronRight className="w-3 h-3" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 pt-6">
                <button className="px-3 py-1.5 rounded-lg text-xs font-bold bg-red-700 text-white">1</button>
                <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50">2</button>
                <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50">3</button>
                <span className="text-slate-400 text-xs">...</span>
                <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50">Trang sau →</button>
              </div>
            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs">
                <h4 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2 mb-3 flex items-center gap-2">
                  <Bell className="w-4 h-4 text-amber-500" /> THÔNG BÁO QUAN TRỌNG
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="border-b border-slate-100 pb-2">
                    <span className="text-[10px] font-bold text-red-700">Khẩn • 28/10/2026</span>
                    <NavLink
                      href="/tin-tuc/1"
                      active={false}
                      isPreview={props.isPreview}
                      onNavigate={props.onNavigatePreview}
                      className="font-semibold text-slate-800 hover:text-red-700 cursor-pointer mt-0.5 block"
                    >
                      Kế hoạch tổng kiểm tra rà soát an toàn thông tin hệ thống cổng
                    </NavLink>
                  </div>
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
