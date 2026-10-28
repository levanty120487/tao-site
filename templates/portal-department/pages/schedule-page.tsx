"use client";

import React, { useState } from 'react';
import type { PortalTemplateProps } from '../../types';
import { DeptHeader } from '../header';
import { DeptFooter } from '../footer';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MapPin, 
  User 
} from 'lucide-react';

const WEEK_SCHEDULE = [
  {
    day: 'Thứ Hai (27/10/2026)',
    events: [
      { time: '08:00 - 09:30', title: 'Họp giao ban Lãnh đạo đơn vị đầu tuần', host: 'Trưởng đơn vị', room: 'Phòng họp A', participants: 'Các Phó Trưởng đơn vị, Chánh Văn phòng' },
      { time: '14:00 - 16:30', title: 'Rà soát tiến độ giải ngân dự án CNTT quý IV', host: 'Phó Trưởng đơn vị Cường', room: 'Phòng họp trực tuyến', participants: 'Phòng KH-TC, Trung tâm CNTT' },
    ]
  },
  {
    day: 'Thứ Ba (28/10/2026)',
    events: [
      { time: '09:00 - 11:30', title: 'Hội thảo: Nâng cao năng lực quản trị dữ liệu số và an toàn thông tin', host: 'Trưởng đơn vị', room: 'Hội trường lớn Tầng 3', participants: 'Toàn thể cán bộ công chức đơn vị' },
      { time: '14:30 - 17:00', title: 'Làm việc với đoàn thanh tra chuyên ngành', host: 'Phó Trưởng đơn vị Mai', room: 'Phòng tiếp khách số 1', participants: 'Thanh tra, Phòng Nghiệp vụ' },
    ]
  },
  {
    day: 'Thứ Tư (29/10/2026)',
    events: [
      { time: '08:30 - 11:00', title: 'Họp Ban chỉ đạo Chuyển đổi số và Cải cách hành chính', host: 'Trưởng đơn vị', room: 'Phòng họp A', participants: 'Các thành viên Ban chỉ đạo' },
    ]
  },
  {
    day: 'Thứ Năm (30/10/2026)',
    events: [
      { time: '09:00 - 11:00', title: 'Tiếp công dân định kỳ tháng 10/2026', host: 'Lãnh đạo đơn vị trực', room: 'Phòng Tiếp công dân', participants: 'Thường trực Văn phòng' },
      { time: '14:00 - 16:00', title: 'Tập huấn kỹ năng viết báo cáo điện tử trên hệ thống', host: 'Văn phòng Đơn vị', room: 'Phòng máy tính 2', participants: 'Cán bộ phụ trách văn thư các phòng' },
    ]
  },
  {
    day: 'Thứ Sáu (31/10/2026)',
    events: [
      { time: '15:00 - 17:00', title: 'Họp tổng kết công tác tuần và đánh giá chỉ tiêu thi đua', host: 'Trưởng đơn vị', room: 'Hội trường lớn', participants: 'Toàn thể cán bộ nhân viên' },
    ]
  },
];

export function DeptScheduleSubpage(props: PortalTemplateProps) {
  const [currentWeek, setCurrentWeek] = useState('Tuần 44 (27/10 - 31/10/2026)');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <DeptHeader {...props} activePath="/lich-cong-tac" />

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
            <span className="text-emerald-700 font-bold">Chuyên trang Lịch Công tác Tuần</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" /> LỊCH LÀM VIỆC CƠ QUAN
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                Lịch Công Tác Lãnh Đạo & Đơn Vị
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Thông báo lịch họp, lịch tiếp khách và các sự kiện công tác chính thức trong tuần
              </p>
            </div>

            {/* Week navigation */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-2xs">
              <button className="p-1 text-slate-500 hover:text-emerald-700 rounded-lg hover:bg-slate-100">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-slate-800 px-2">{currentWeek}</span>
              <button className="p-1 text-slate-500 hover:text-emerald-700 rounded-lg hover:bg-slate-100">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Schedule List */}
          <div className="space-y-4">
            {WEEK_SCHEDULE.map((dayGroup, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
                <div className="bg-emerald-50 text-emerald-900 px-5 py-3 border-b border-emerald-100 flex items-center justify-between">
                  <span className="font-bold text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-700" /> {dayGroup.day}
                  </span>
                  <span className="text-xs font-medium text-emerald-700">{dayGroup.events.length} cuộc họp</span>
                </div>

                <div className="divide-y divide-slate-100 p-2">
                  {dayGroup.events.map((ev, i) => (
                    <div key={i} className="p-4 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-start justify-between gap-3 text-xs">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="bg-slate-100 text-slate-700 font-mono font-bold px-2 py-0.5 rounded-md text-[11px] flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" /> {ev.time}
                          </span>
                          <span className="bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-md text-[11px] flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-emerald-600" /> {ev.room}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {ev.title}
                        </h4>
                        <div className="text-slate-500 text-[11px]">
                          Thành phần tham dự: <b>{ev.participants}</b>
                        </div>
                      </div>

                      <div className="md:text-right shrink-0">
                        <span className="text-slate-400 block text-[11px]">Chủ trì:</span>
                        <span className="font-bold text-slate-800">{ev.host}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DeptFooter {...props} />
    </div>
  );
}

