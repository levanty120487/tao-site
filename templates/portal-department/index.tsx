"use client";

import React from 'react';
import type { PortalTemplateProps } from '../types';
import { DeptHeader } from './header';
import { DeptFooter } from './footer';
import { 
  Award, 
  Building, 
  Calendar, 
  Download, 
  FileSpreadsheet, 
  Mail, 
  ShieldCheck, 
  Users 
} from 'lucide-react';
import { NavLink } from '../common/nav-link';

export function DepartmentPortalTemplate(props: PortalTemplateProps) {
  const leaders = [
    {
      name: 'TS. Nguyễn Hoàng Nam',
      role: 'Trưởng Đơn vị / Giám đốc',
      email: 'nam.nh@domain.vn',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
      bio: 'Phụ trách chung toàn diện công tác chỉ đạo điều hành, chiến lược phát triển và chuyển đổi số.',
    },
    {
      name: 'ThS. Trần Thị Mai',
      role: 'Phó Trưởng Đơn vị',
      email: 'mai.tt@domain.vn',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
      bio: 'Phụ trách công tác chuyên môn nghiệp vụ, hành chính tổng hợp và hợp tác quốc tế.',
    },
    {
      name: 'KS. Lê Văn Cường',
      role: 'Phó Trưởng Đơn vị',
      email: 'cuong.lv@domain.vn',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
      bio: 'Phụ trách công nghệ thông tin, quản trị hạ tầng kỹ thuật và truyền thông đối ngoại.',
    },
  ];

  const documents = [
    { code: '152/QĐ-ĐV', date: '27/10/2026', title: 'Quyết định ban hành Quy chế làm việc và phân công nhiệm vụ Lãnh đạo đơn vị khóa mới', signer: 'Trưởng đơn vị' },
    { code: '98/TB-VP', date: '25/10/2026', title: 'Thông báo kết luận cuộc họp giao ban công tác tháng 10 và triển khai nhiệm vụ trọng tâm quý IV', signer: 'Chánh Văn phòng' },
    { code: '45/KH-CNTT', date: '22/10/2026', title: 'Kế hoạch triển khai diễn tập an toàn thông tin mạng và ứng phó sự cố năm 2026', signer: 'Tổ CNTT' },
    { code: '112/BC-THTK', date: '18/10/2026', title: 'Báo cáo tổng kết phong trào thi đua và sáng kiến cải tiến quy trình công tác năm', signer: 'Hội đồng Thi đua' },
  ];

  const schedule = [
    { day: 'Thứ Hai (27/10)', time: '08:00', title: 'Họp giao ban Lãnh đạo đơn vị đầu tuần', host: 'Trưởng đơn vị', room: 'Phòng họp A' },
    { day: 'Thứ Ba (28/10)', time: '14:00', title: 'Hội thảo chuyên đề nâng cao năng lực quản trị số', host: 'Phó Trưởng đơn vị', room: 'Hội trường lớn' },
    { day: 'Thứ Tư (29/10)', time: '09:30', title: 'Làm việc với đoàn chuyên gia đối tác', host: 'Trưởng đơn vị', room: 'Phòng tiếp khách quốc tế' },
    { day: 'Thứ Sáu (31/10)', time: '16:00', title: 'Tổng kết công tác tuần và đánh giá tiến độ dự án', host: 'Ban Lãnh đạo', room: 'Phòng họp trực tuyến' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <DeptHeader {...props} activePath={props.activePath || '/'} />

        {/* Hero Welcome & Overview */}
        <section className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-emerald-500/20 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-400/30">
                Thông điệp từ Ban Lãnh đạo
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
                Xây dựng đơn vị chuyên nghiệp, hiện đại, lấy hiệu quả công việc làm thước đo
              </h2>
              <p className="text-emerald-100 text-sm leading-relaxed max-w-2xl">
                Chào mừng quý độc giả và cán bộ đến với cổng thông tin thành phần. Nơi cung cấp đầy đủ và minh bạch mọi thông tin chỉ đạo điều hành, tài liệu nghiệp vụ và các hoạt động của đơn vị.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <NavLink
                  href="/gioi-thieu"
                  active={false}
                  isPreview={props.isPreview}
                  onNavigate={props.onNavigatePreview}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Xem sơ đồ tổ chức & lãnh đạo
                </NavLink>
                <NavLink
                  href="/van-ban"
                  active={false}
                  isPreview={props.isPreview}
                  onNavigate={props.onNavigatePreview}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors border border-white/20 cursor-pointer"
                >
                  Quy chế & Văn bản mới
                </NavLink>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center">
              <img
                src={leaders[0].image}
                alt="Leader"
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-emerald-400/40 shadow-lg mb-3"
              />
              <h4 className="font-bold text-base text-white">{leaders[0].name}</h4>
              <div className="text-xs text-emerald-300 mb-2">{leaders[0].role}</div>
              <p className="text-xs text-emerald-100 italic leading-relaxed">
                "{leaders[0].bio}"
              </p>
            </div>
          </div>
        </section>

        {/* KPI Numbers */}
        <section className="max-w-7xl mx-auto px-4 -mt-6 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '85+', label: 'Cán bộ & Nhân sự', icon: Users },
              { num: '6', label: 'Phòng ban trực thuộc', icon: Building },
              { num: '100%', label: 'Xử lý văn bản điện tử', icon: FileSpreadsheet },
              { num: '15+', label: 'Năm xây dựng & phát triển', icon: Award },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                <div className="p-3 rounded-lg bg-emerald-50 text-emerald-700">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900">{item.num}</div>
                  <div className="text-xs text-slate-600 font-medium">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content: Leadership, Documents, Work Schedule */}
        <main className="max-w-7xl mx-auto px-4 py-10 space-y-12">
          {/* Leadership Section */}
          <div>
            <div className="flex items-center justify-between border-b-2 border-emerald-700 pb-2 mb-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-700" /> BAN LÃNH ĐẠO ĐƠN VỊ
              </h3>
              <NavLink
                href="/gioi-thieu"
                active={false}
                isPreview={props.isPreview}
                onNavigate={props.onNavigatePreview}
                className="text-xs font-bold text-emerald-700 hover:underline cursor-pointer"
              >
                Xem chi tiết các phòng ban →
              </NavLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leaders.map((leader, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs hover:shadow-md transition-shadow">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-emerald-600"
                  />
                  <div className="text-center space-y-1">
                    <h4 className="font-bold text-sm text-slate-900">{leader.name}</h4>
                    <p className="text-xs font-semibold text-emerald-700">{leader.role}</p>
                    <p className="text-xs text-slate-500 pt-1 leading-relaxed">{leader.bio}</p>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-1 text-xs text-slate-400">
                      <Mail className="w-3.5 h-3.5" />
                      <span>{leader.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Column: Directives / Documents & Weekly Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Documents (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between border-b-2 border-emerald-700 pb-2">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-700" /> VĂN BẢN CHỈ ĐẠO ĐIỀU HÀNH
                </h3>
                <NavLink
                  href="/van-ban"
                  active={false}
                  isPreview={props.isPreview}
                  onNavigate={props.onNavigatePreview}
                  className="text-xs font-bold text-emerald-700 hover:underline cursor-pointer"
                >
                  Xem tất cả văn bản →
                </NavLink>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-2xs">
                {documents.map((doc, idx) => (
                  <div key={idx} className="p-4 hover:bg-slate-50 transition-colors flex items-start justify-between gap-3">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-sm">
                          {doc.code}
                        </span>
                        <span className="text-slate-400">{doc.date}</span>
                      </div>
                      <h5 className="text-xs font-semibold text-slate-800 leading-snug hover:text-emerald-700 cursor-pointer">
                        {doc.title}
                      </h5>
                      <p className="text-[11px] text-slate-500">Người ký: {doc.signer}</p>
                    </div>
                    <button className="p-2 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors shrink-0">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between border-b-2 border-emerald-700 pb-2">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-700" /> LỊCH CÔNG TÁC TUẦN NÀY
                </h3>
                <NavLink
                  href="/lich-cong-tac"
                  active={false}
                  isPreview={props.isPreview}
                  onNavigate={props.onNavigatePreview}
                  className="text-xs font-bold text-emerald-700 hover:underline cursor-pointer"
                >
                  Lịch đầy đủ →
                </NavLink>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 shadow-2xs">
                {schedule.map((sch, idx) => (
                  <div key={idx} className="p-3.5 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-800">{sch.day}</span>
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-mono text-[11px]">{sch.time}</span>
                    </div>
                    <h5 className="text-xs font-semibold text-slate-800 leading-snug">
                      {sch.title}
                    </h5>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span>Chủ trì: <b>{sch.host}</b></span>
                      <span>{sch.room}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <DeptFooter {...props} />
    </div>
  );
}
