import type React from 'react';
import type { PortalTemplate } from './types';
import { NewsPortalTemplate } from './portal-news';
import { ServicePortalTemplate } from './portal-service';
import { DepartmentPortalTemplate } from './portal-department';

export type { PortalTemplate, PortalTemplateProps } from './types';

export const PORTAL_TEMPLATES: PortalTemplate[] = [
  {
    id: 'portal-news',
    name: 'Cổng Tin Tức & Truyền Thông',
    category: 'Báo chí & Tạp chí',
    description: 'Bố cục dạng tạp chí tin tức đa phương tiện với tin tiêu điểm, video phóng sự, dòng sự kiện và thông báo khẩn cấp.',
    features: ['Tin tiêu điểm & Trending', 'Thông báo & Công văn mới', 'Thư viện Video Phóng sự', 'Thống kê truy cập'],
    accentColor: 'bg-red-700',
    component: NewsPortalTemplate,
  },
  {
    id: 'portal-service',
    name: 'Cổng Dịch Vụ Công & Một Cửa',
    category: 'Hành chính & Tra cứu',
    description: 'Tối ưu hóa phục vụ người dân và doanh nghiệp với thanh tìm kiếm thủ tục, tra cứu mã hồ sơ một cửa và quy trình 3 bước.',
    features: ['Tìm kiếm thủ tục thông minh', 'Tra cứu mã hồ sơ theo thời gian thực', 'Dịch vụ toàn trình / một phần', 'Tổng đài hỗ trợ 24/7'],
    accentColor: 'bg-blue-600',
    component: ServicePortalTemplate,
  },
  {
    id: 'portal-department',
    name: 'Cổng Phòng Ban & Cơ Quan',
    category: 'Đơn vị & Doanh nghiệp',
    description: 'Bố cục chuyên nghiệp giới thiệu cơ cấu tổ chức, ban lãnh đạo đơn vị, văn bản chỉ đạo điều hành và lịch công tác tuần.',
    features: ['Hồ sơ ban lãnh đạo', 'Văn bản chỉ đạo & Tải PDF', 'Lịch công tác tuần', 'Sơ đồ tổ chức'],
    accentColor: 'bg-emerald-700',
    component: DepartmentPortalTemplate,
  },
];

export const DEFAULT_TEMPLATE_ID = 'portal-news';

export function getTemplateById(templateId?: string): PortalTemplate {
  const found = PORTAL_TEMPLATES.find((t) => t.id === templateId);
  return found || PORTAL_TEMPLATES[0];
}
