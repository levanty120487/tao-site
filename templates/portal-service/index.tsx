"use client";

import React, { useState } from 'react';
import type { PortalTemplateProps } from '../types';
import { ServiceHeader } from './header';
import { ServiceFooter } from './footer';
import { 
  Building2, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  FileText, 
  Search, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import { NavLink } from '../common/nav-link';

export function ServicePortalTemplate(props: PortalTemplateProps) {
  const [activeTab, setActiveTab] = useState<'citizen' | 'business'>('citizen');
  const [searchDocket, setSearchDocket] = useState('HSO-2026-9812');

  const services = [
    { id: 1, title: 'Đăng ký thành lập hộ kinh doanh trực tuyến', level: 'Toàn trình', cat: 'Doanh nghiệp', time: '3 ngày', fee: '100.000 đ' },
    { id: 2, title: 'Cấp bản sao trích lục hộ tịch từ Cơ sở dữ liệu', level: 'Một phần', cat: 'Tư pháp', time: 'Trong ngày', fee: '8.000 đ' },
    { id: 3, title: 'Cấp đổi Giấy phép lái xe quốc tế do Việt Nam cấp', level: 'Toàn trình', cat: 'Giao thông', time: '5 ngày', fee: '135.000 đ' },
    { id: 4, title: 'Đăng ký khai sinh và cấp mã số định danh cá nhân', level: 'Toàn trình', cat: 'Hộ tịch', time: 'Trong ngày', fee: 'Miễn phí' },
    { id: 5, title: 'Cấp giấy phép xây dựng nhà ở riêng lẻ đô thị', level: 'Một phần', cat: 'Xây dựng', time: '15 ngày', fee: '50.000 đ' },
    { id: 6, title: 'Xác nhận thông tin về cư trú điện tử', level: 'Toàn trình', cat: 'Cư trú', time: '1 ngày', fee: 'Miễn phí' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <ServiceHeader {...props} activePath={props.activePath || '/'} />

        {/* Hero Search Section */}
        <section className="bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 text-white py-12 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
            <span className="inline-block bg-blue-500/20 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/30">
              Cung cấp 100% thủ tục hành chính đủ điều kiện lên trực tuyến
            </span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-snug">
              Tìm kiếm & Nộp hồ sơ dịch vụ trực tuyến
            </h2>
            <p className="text-blue-200 text-sm max-w-2xl mx-auto">
              Tra cứu nhanh biểu mẫu, thủ tục quy trình xử lý, thời gian giải quyết và nộp hồ sơ nhận kết quả tại nhà.
            </p>

            {/* Search Box */}
            <div className="max-w-3xl mx-auto mt-6 bg-white p-2 rounded-2xl shadow-xl flex items-center gap-2 border border-blue-200 text-slate-800">
              <div className="pl-3 text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Nhập tên thủ tục, từ khóa (ví dụ: hộ tịch, cấp phép xây dựng, đất đai...)"
                className="flex-1 py-2.5 px-2 text-sm bg-transparent outline-hidden font-medium placeholder:text-slate-400"
                readOnly={props.isPreview}
              />
              <NavLink
                href="/dich-vu"
                active={false}
                isPreview={props.isPreview}
                onNavigate={props.onNavigatePreview}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-colors shadow-xs"
              >
                Tìm kiếm
              </NavLink>
            </div>

            {/* Hot tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-blue-200 pt-2">
              <span className="font-semibold text-white">Từ khóa phổ biến:</span>
              {['Đăng ký kinh doanh', 'Cấp đổi GPLX', 'Cư trú điện tử', 'Xây dựng', 'Hộ chiếu'].map((tag, idx) => (
                <NavLink
                  key={idx}
                  href="/dich-vu"
                  active={false}
                  isPreview={props.isPreview}
                  onNavigate={props.onNavigatePreview}
                  className="bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md cursor-pointer transition-colors"
                >
                  {tag}
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        {/* KPI Stats Bar */}
        <section className="max-w-7xl mx-auto px-4 -mt-6 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Thủ tục hành chính', val: '1,842', desc: 'Công khai đầy đủ', icon: FileText, color: 'text-blue-600' },
              { label: 'Dịch vụ toàn trình', val: '1,320', desc: 'Nộp & nhận tại nhà', icon: CheckCircle2, color: 'text-emerald-600' },
              { label: 'Đúng hạn & trước hạn', val: '99.2%', desc: 'Đánh giá thực tế', icon: TrendingUp, color: 'text-amber-600' },
              { label: 'Hồ sơ đã tiếp nhận', val: '58,410', desc: 'Năm 2026', icon: FileCheck, color: 'text-purple-600' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-md border border-slate-200/80 flex items-center gap-3">
                <div className={`p-3 rounded-lg bg-slate-50 border border-slate-100 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-black text-slate-900">{stat.val}</div>
                  <div className="text-xs font-semibold text-slate-700">{stat.label}</div>
                  <div className="text-[10px] text-slate-400">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content: Services List + Docket Lookup */}
        <main className="max-w-7xl mx-auto px-4 py-10 space-y-10">
          {/* Service Tracker Tool */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-xs">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> Tra cứu tiến độ hồ sơ một cửa
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  Kiểm tra tình trạng giải quyết hồ sơ của bạn
                </h3>
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto">
                <input
                  type="text"
                  value={searchDocket}
                  onChange={(e) => setSearchDocket(e.target.value)}
                  placeholder="Nhập mã hồ sơ (ví dụ: HSO-2026-9812)"
                  className="bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm font-mono w-full md:w-64 outline-hidden focus:ring-2 focus:ring-blue-600"
                />
                <NavLink
                  href="/tra-cuu"
                  active={false}
                  isPreview={props.isPreview}
                  onNavigate={props.onNavigatePreview}
                  className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl whitespace-nowrap transition-colors"
                >
                  Tra cứu chi tiết
                </NavLink>
              </div>
            </div>

            {/* Stepper Preview */}
            <div className="bg-white rounded-xl p-5 border border-blue-100 shadow-2xs mt-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-xs space-y-1">
                  <div className="text-slate-500">Mã hồ sơ: <span className="font-mono font-bold text-slate-800">{searchDocket}</span></div>
                  <div className="font-semibold text-slate-900">Thủ tục: Cấp bản sao trích lục hộ tịch từ CSDL Quốc gia</div>
                  <div className="text-slate-500">Người nộp: <b>Nguyễn Văn An</b> • Tiếp nhận: <b>28/10/2026 09:15</b></div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Đang xử lý đúng hạn
                  </span>
                </div>
              </div>

              {/* Step flow */}
              <div className="grid grid-cols-4 gap-2 mt-6 pt-4 border-t border-slate-100 text-center text-xs">
                <div className="space-y-1">
                  <div className="w-7 h-7 mx-auto rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">✓</div>
                  <div className="font-semibold text-blue-900">1. Đã nộp hồ sơ</div>
                  <div className="text-[10px] text-slate-400">28/10 - 09:15</div>
                </div>
                <div className="space-y-1">
                  <div className="w-7 h-7 mx-auto rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">✓</div>
                  <div className="font-semibold text-blue-900">2. Tiếp nhận & Thẩm định</div>
                  <div className="text-[10px] text-slate-400">28/10 - 09:45</div>
                </div>
                <div className="space-y-1">
                  <div className="w-7 h-7 mx-auto rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-xs animate-pulse">3</div>
                  <div className="font-semibold text-amber-700">3. Ký duyệt điện tử</div>
                  <div className="text-[10px] text-amber-600">Đang thực hiện</div>
                </div>
                <div className="space-y-1">
                  <div className="w-7 h-7 mx-auto rounded-full bg-slate-200 text-slate-500 font-bold flex items-center justify-center text-xs">4</div>
                  <div className="text-slate-400">4. Trả kết quả</div>
                  <div className="text-[10px] text-slate-400">Dự kiến 28/10 16:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Online Procedures */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Dịch vụ công trực tuyến nổi bật</h3>
                <p className="text-xs text-slate-500">Các thủ tục hành chính có tần suất thực hiện cao nhất</p>
              </div>
              <NavLink
                href="/dich-vu"
                active={false}
                isPreview={props.isPreview}
                onNavigate={props.onNavigatePreview}
                className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
              >
                Xem tất cả 1,842 thủ tục →
              </NavLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-sm">
                        {item.cat}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.level === 'Toàn trình' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.level}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div>
                      <span>Thời gian: <b>{item.time}</b></span>
                      <span className="mx-2">•</span>
                      <span>Phí: <b className="text-slate-800">{item.fee}</b></span>
                    </div>
                    <NavLink
                      href="/dich-vu"
                      active={false}
                      isPreview={props.isPreview}
                      onNavigate={props.onNavigatePreview}
                      className="bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors"
                    >
                      Nộp ngay
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <ServiceFooter {...props} />
    </div>
  );
}
