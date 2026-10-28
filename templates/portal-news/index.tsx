"use client";

import React from 'react';
import type { PortalTemplateProps } from '../types';
import { NewsHeader } from './header';
import { NewsFooter } from './footer';
import { 
  Bell, 
  Calendar, 
  ChevronRight, 
  Eye, 
  Flame, 
  Link as LinkIcon, 
  Newspaper, 
  Play 
} from 'lucide-react';
import { NavLink } from '../common/nav-link';

const MOCK_NEWS = {
  featured: {
    id: 1,
    title: 'Hội nghị sơ kết chuyển đổi số và công bố hệ sinh thái dịch vụ điện tử giai đoạn 2026',
    summary: 'Sáng nay, cổng thành phần đã chính thức công bố lộ trình ứng dụng trí tuệ nhân tạo và số hóa 100% quy trình thủ tục nghiệp vụ, hướng tới phục vụ người dân và doanh nghiệp hiệu quả hơn.',
    category: 'Chỉ đạo điều hành',
    author: 'Ban Biên Tập',
    date: '28/10/2026',
    time: '08:30',
    views: '1,420',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
  },
  trending: [
    {
      id: 2,
      title: 'Triển khai chiến dịch truyền thông đa phương tiện hướng về cơ sở',
      category: 'Sự kiện',
      date: '27/10/2026',
      views: '890',
      imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'Ban hành hướng dẫn chuẩn hóa cấu trúc dữ liệu cổng thông tin thành viên',
      category: 'Văn bản mới',
      date: '26/10/2026',
      views: '654',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      title: 'Tọa đàm nâng cao năng lực quản trị nội dung số và an toàn thông tin',
      category: 'Tập huấn',
      date: '25/10/2026',
      views: '512',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=80',
    },
  ],
  notices: [
    { id: 1, title: 'Thông báo tiếp nhận phản ánh, kiến nghị trực tuyến quý IV/2026', date: '28/10/2026', urgent: true },
    { id: 2, title: 'Kế hoạch bảo trì nâng cấp hạ tầng kết nối ngày 30/10/2026', date: '27/10/2026', urgent: false },
    { id: 3, title: 'Danh sách xét khen thưởng chuyên đề chuyển đổi số năm 2026', date: '26/10/2026', urgent: false },
    { id: 4, title: 'Lịch tiếp công dân và tiếp nhận văn bản tuần 44', date: '25/10/2026', urgent: false },
  ],
  articles: [
    {
      id: 5,
      title: 'Đẩy mạnh thanh toán không dùng tiền mặt và số hóa dữ liệu công dân',
      summary: 'Các đơn vị trực thuộc đã đồng loạt triển khai điểm hỗ trợ công dân tạo tài khoản định danh và thanh toán trực tuyến nhanh chóng.',
      category: 'Chuyển đổi số',
      date: '27/10/2026',
      views: '730',
    },
    {
      id: 6,
      title: 'Nâng cao chất lượng phục vụ thông qua đo lường mức độ hài lòng trực tuyến',
      summary: 'Khảo sát ý kiến tự động sau mỗi phiên làm việc giúp cải thiện rõ rệt chỉ số minh bạch và tính chuyên nghiệp của đội ngũ cán bộ.',
      category: 'Cải cách hành chính',
      date: '26/10/2026',
      views: '488',
    },
    {
      id: 7,
      title: 'Tăng cường tương tác hai chiều qua cổng thông tin và mạng xã hội',
      summary: 'Hệ thống phản hồi thông minh tự động phân loại và chuyển đến bộ phận chuyên trách giải quyết trong vòng 24 giờ.',
      category: 'Truyền thông',
      date: '25/10/2026',
      views: '615',
    },
  ]
};

export function NewsPortalTemplate(props: PortalTemplateProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <NewsHeader {...props} activePath={props.activePath || '/'} />

        {/* Breaking News Ticker */}
        <div className="bg-amber-50 border-b border-amber-200 py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1 text-red-700 font-bold uppercase text-xs shrink-0 bg-red-100 px-2.5 py-1 rounded-sm">
              <Flame className="w-3.5 h-3.5 animate-pulse" /> Tiêu điểm
            </span>
            <p className="text-slate-700 truncate font-medium">
              Thông báo đẩy mạnh thực hiện quy trình một cửa liên thông và tăng cường tiếp nhận phản ánh kiến nghị của nhân dân trực tuyến.
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 py-6 space-y-8">
          {/* Top News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Story (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900 group">
                <img
                  src={MOCK_NEWS.featured.imageUrl}
                  alt={MOCK_NEWS.featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {MOCK_NEWS.featured.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-3 text-xs text-slate-300 mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {MOCK_NEWS.featured.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {MOCK_NEWS.featured.views} lượt xem</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold leading-tight hover:text-red-300 cursor-pointer transition-colors">
                    {MOCK_NEWS.featured.title}
                  </h2>
                </div>
              </div>
              <div className="p-5">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {MOCK_NEWS.featured.summary}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <span>Nguồn: <b>{MOCK_NEWS.featured.author}</b></span>
                  <NavLink
                    href="/tin-tuc"
                    active={false}
                    isPreview={props.isPreview}
                    onNavigate={props.onNavigatePreview}
                    className="text-red-700 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    Xem tất cả tin tức <ChevronRight className="w-3.5 h-3.5" />
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Trending Stories (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b-2 border-red-700 pb-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Newspaper className="w-4 h-4 text-red-700" /> TIN NỔI BẬT KHÁC
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {MOCK_NEWS.trending.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white p-3 rounded-lg border border-slate-200 hover:border-red-300 transition-all flex gap-3 group cursor-pointer"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-24 h-20 rounded-md object-cover shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex flex-col justify-between flex-1 min-w-0">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-red-700">
                          {item.category}
                        </span>
                        <h4 className="text-xs font-semibold text-slate-800 group-hover:text-red-700 line-clamp-2 leading-snug">
                          {item.title}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-1">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.views} xem</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Two-Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Recent Articles Stream (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between border-b-2 border-red-700 pb-2">
                <h3 className="font-bold text-slate-900 text-base">TIN HOẠT ĐỘNG & CHUYÊN ĐỀ</h3>
                <NavLink
                  href="/tin-tuc"
                  active={false}
                  isPreview={props.isPreview}
                  onNavigate={props.onNavigatePreview}
                  className="text-xs text-red-700 font-semibold hover:underline flex items-center cursor-pointer"
                >
                  Xem chuyên trang tin tức <ChevronRight className="w-3 h-3" />
                </NavLink>
              </div>

              <div className="space-y-4">
                {MOCK_NEWS.articles.map((art) => (
                  <article
                    key={art.id}
                    className="bg-white p-4 rounded-xl border border-slate-200 hover:shadow-xs transition-shadow flex flex-col sm:flex-row justify-between gap-4"
                  >
                    <div className="space-y-2 flex-1">
                      <span className="text-xs font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-sm">
                        {art.category}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 hover:text-red-700 cursor-pointer transition-colors leading-snug">
                        {art.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {art.summary}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
                        <span>Ngày đăng: {art.date}</span>
                        <span>•</span>
                        <span>{art.views} lượt đọc</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Video / Multimedia Showcase */}
              <div className="bg-slate-900 text-white rounded-xl p-5 mt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-sm flex items-center gap-2 text-red-400">
                    <Play className="w-4 h-4" /> VIDEO - PHÓNG SỰ TRUYỀN HÌNH
                  </span>
                  <span className="text-xs text-slate-400 hover:text-white cursor-pointer">Thư viện video →</span>
                </div>
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-800 relative flex items-center justify-center group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80"
                    alt="video preview"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 ml-1 fill-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-sm font-semibold text-white drop-shadow-md">
                      Phóng sự đặc biệt: Hành trình kiến tạo Cổng thành phần số hiện đại
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Notices Widget */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="bg-slate-800 text-white px-4 py-3 flex items-center justify-between">
                  <span className="text-sm font-bold flex items-center gap-2">
                    <Bell className="w-4 h-4 text-amber-400" /> THÔNG BÁO MỚI NHẤT
                  </span>
                  <NavLink
                    href="/van-ban"
                    active={false}
                    isPreview={props.isPreview}
                    onNavigate={props.onNavigatePreview}
                    className="text-[11px] text-amber-300 hover:underline cursor-pointer"
                  >
                    Xem văn bản →
                  </NavLink>
                </div>
                <div className="divide-y divide-slate-100 p-2">
                  {MOCK_NEWS.notices.map((n) => (
                    <div key={n.id} className="p-3 hover:bg-slate-50 transition-colors cursor-pointer">
                      {n.urgent && (
                        <span className="inline-block bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-sm mb-1">
                          Khẩn
                        </span>
                      )}
                      <h5 className="text-xs font-semibold text-slate-800 line-clamp-2 hover:text-red-700">
                        {n.title}
                      </h5>
                      <span className="text-[11px] text-slate-400 mt-1 block">
                        {n.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links Widget */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                <h4 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2 mb-3 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-red-700" /> CHUYÊN MỤC TRỰC TUYẾN
                </h4>
                <div className="space-y-2">
                  {[
                    { label: 'Chuyên trang Tin tức & Sự kiện', path: '/tin-tuc' },
                    { label: 'Hệ thống Văn bản Chỉ đạo Điều hành', path: '/van-ban' },
                    { label: 'Hộp thư phản ánh & Liên hệ', path: '/lien-he' },
                  ].map((item, idx) => (
                    <NavLink
                      key={idx}
                      href={item.path}
                      active={false}
                      isPreview={props.isPreview}
                      onNavigate={props.onNavigatePreview}
                      className="p-2.5 rounded-lg hover:bg-slate-100 text-xs font-medium text-slate-700 flex items-center justify-between cursor-pointer group"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-700" />
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Portal Stats */}
              <div className="bg-gradient-to-br from-red-800 to-red-950 text-white rounded-xl p-4 shadow-sm">
                <h4 className="font-bold text-xs uppercase tracking-wider text-red-200 mb-3">
                  Thống kê truy cập cổng
                </h4>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-white/10 rounded-lg p-2.5 backdrop-blur-xs">
                    <div className="text-lg font-bold">18,429</div>
                    <div className="text-[10px] text-red-200">Hôm nay</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2.5 backdrop-blur-xs">
                    <div className="text-lg font-bold">2,490,120</div>
                    <div className="text-[10px] text-red-200">Tổng lượt truy cập</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <NewsFooter {...props} />
    </div>
  );
}
