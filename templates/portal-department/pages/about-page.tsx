"use client";

import React from 'react';
import type { PortalTemplateProps } from '../../types';
import { DeptHeader } from '../header';
import { DeptFooter } from '../footer';
import { 
  Award, 
  Briefcase, 
  Building, 
  CheckCircle2, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Users 
} from 'lucide-react';

export function DeptAboutSubpage(props: PortalTemplateProps) {
  const leaders = [
    {
      name: 'TS. Nguyễn Hoàng Nam',
      role: 'Trưởng Đơn vị / Giám đốc',
      email: 'nam.nh@domain.vn',
      phone: '(024) 3788 9901',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
      bio: 'Tiến sĩ Quản lý công. Phụ trách chung toàn diện công tác chỉ đạo điều hành, chiến lược phát triển đơn vị và chuyển đổi số.',
    },
    {
      name: 'ThS. Trần Thị Mai',
      role: 'Phó Trưởng Đơn vị',
      email: 'mai.tt@domain.vn',
      phone: '(024) 3788 9902',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
      bio: 'Thạc sĩ Luật kinh tế. Phụ trách công tác chuyên môn nghiệp vụ, hành chính tổng hợp, cải cách thủ tục và hợp tác quốc tế.',
    },
    {
      name: 'KS. Lê Văn Cường',
      role: 'Phó Trưởng Đơn vị',
      email: 'cuong.lv@domain.vn',
      phone: '(024) 3788 9903',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
      bio: 'Kỹ sư Hệ thống Thông tin. Phụ trách công nghệ thông tin, quản trị an ninh mạng và phát triển các nền tảng số.',
    },
  ];

  const departments = [
    { name: 'Văn phòng Đơn vị', head: 'ThS. Đỗ Thu Hằng', staff: '18 cán bộ', duties: 'Tham mưu tổng hợp, công tác văn thư lưu trữ, hành chính quản trị, lễ tân khánh tiết.' },
    { name: 'Phòng Kế hoạch - Tài chính', head: 'CN. Vũ Minh Tuấn', staff: '12 cán bộ', duties: 'Quản lý tài chính ngân sách, phân bổ dự toán, kế hoạch đầu tư trang thiết bị.' },
    { name: 'Phòng Nghiệp vụ & Quản lý Dự án', head: 'ThS. Phạm Quốc Hùng', staff: '24 cán bộ', duties: 'Triển khai các chương trình mục tiêu, kiểm tra giám sát chất lượng đề án chuyên môn.' },
    { name: 'Trung tâm Công nghệ Thông tin', head: 'KS. Hoàng Anh Đức', staff: '16 cán bộ', duties: 'Quản trị vận hành hạ tầng số, an toàn thông tin mạng và cổng thông tin điện tử.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <DeptHeader {...props} activePath="/gioi-thieu" />

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
            <span className="text-emerald-700 font-bold">Chuyên trang Giới thiệu & Cơ cấu Tổ chức</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-1">
              <Building className="w-4 h-4" /> THÔNG TIN TỔ CHỨC
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              Chức Năng, Nhiệm Vụ & Sơ Đồ Cơ Cấu Tổ Chức
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Giới thiệu tổng quan về lịch sử hình thành, chức năng thẩm quyền và đội ngũ lãnh đạo {props.title || props.subdomain}
            </p>
          </div>

          {/* Functions & Mandates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2 text-emerald-800">
                <ShieldCheck className="w-5 h-5 text-emerald-600" /> Chức năng chính
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đơn vị có chức năng tham mưu, giúp việc cho lãnh đạo cấp trên trong công tác quản trị chuyên ngành; tổ chức thực hiện các chính sách, quy định của pháp luật và phát triển các hoạt động chuyên môn theo thẩm quyền được phân cấp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2 text-emerald-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Nhiệm vụ trọng tâm
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li>• Xây dựng và tổ chức thực hiện kế hoạch công tác hàng năm, trung hạn.</li>
                <li>• Quản lý đội ngũ công chức, viên chức, người lao động và tài sản công.</li>
                <li>• Đẩy mạnh ứng dụng công nghệ thông tin và cải cách hành chính số.</li>
              </ul>
            </div>
          </div>

          {/* Leadership Detail Cards */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b-2 border-emerald-700 pb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-700" /> BAN LÃNH ĐẠO ĐƠN VỊ
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leaders.map((leader, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition-all text-center space-y-3">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-3 border-emerald-600 shadow-sm"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{leader.name}</h4>
                    <span className="inline-block text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full mt-1">
                      {leader.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{leader.bio}</p>
                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                    <div className="flex items-center justify-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-emerald-600" /> {leader.email}
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" /> {leader.phone}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Departmental Structure Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b-2 border-emerald-700 pb-2 flex items-center gap-2">
              <Building className="w-5 h-5 text-emerald-700" /> CÁC PHÒNG BAN CHUYÊN MÔN
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {departments.map((dept, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-slate-900">{dept.name}</h4>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {dept.staff}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500">
                    Trưởng phòng: <b>{dept.head}</b>
                  </div>
                  <p className="text-xs text-slate-600 pt-1 leading-relaxed border-t border-slate-100">
                    {dept.duties}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DeptFooter {...props} />
    </div>
  );
}

