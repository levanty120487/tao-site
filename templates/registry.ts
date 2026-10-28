import type React from 'react';
import type { PortalTemplate, PortalTemplateProps, SubpageDefinition } from './types';
import { NewsPortalTemplate } from './portal-news';
import { NewsSubpage } from './portal-news/pages/news-page';
import { NewsDocsSubpage } from './portal-news/pages/docs-page';

import { ServicePortalTemplate } from './portal-service';
import { ServicesSubpage } from './portal-service/pages/services-page';
import { ServiceTrackerSubpage } from './portal-service/pages/tracker-page';

import { DepartmentPortalTemplate } from './portal-department';
import { DeptAboutSubpage } from './portal-department/pages/about-page';
import { DeptDocsSubpage } from './portal-department/pages/docs-page';
import { DeptScheduleSubpage } from './portal-department/pages/schedule-page';

export type { PortalTemplate, PortalTemplateProps, SubpageDefinition } from './types';

export const PORTAL_TEMPLATES: PortalTemplate[] = [
  {
    id: 'portal-news',
    name: 'Cổng Tin Tức & Truyền Thông',
    category: 'Báo chí & Tạp chí',
    description: 'Bố cục dạng tạp chí tin tức đa phương tiện với tin tiêu điểm, video phóng sự, dòng sự kiện và thông báo khẩn cấp.',
    features: ['Tin tiêu điểm & Trending', 'Chuyên trang Tin tức riêng (/tin-tuc)', 'Chuyên trang Văn bản riêng (/van-ban)', 'Thư viện Video'],
    accentColor: 'bg-red-700',
    component: NewsPortalTemplate,
    subpages: {
      'tin-tuc': {
        slug: 'tin-tuc',
        name: 'Tin tức & Sự kiện',
        component: NewsSubpage,
      },
      'van-ban': {
        slug: 'van-ban',
        name: 'Văn bản mới',
        component: NewsDocsSubpage,
      },
      'lien-he': {
        slug: 'lien-he',
        name: 'Thông tin liên hệ',
        component: NewsDocsSubpage,
      },
    },
  },
  {
    id: 'portal-service',
    name: 'Cổng Dịch Vụ Công & Một Cửa',
    category: 'Hành chính & Tra cứu',
    description: 'Tối ưu hóa phục vụ người dân và doanh nghiệp với thanh tìm kiếm thủ tục, tra cứu mã hồ sơ một cửa và quy trình 3 bước.',
    features: ['Chuyên trang Dịch vụ trực tuyến (/dich-vu)', 'Chuyên trang Tra cứu hồ sơ (/tra-cuu)', 'Chuyên trang Văn bản (/van-ban)', 'Tổng đài 24/7'],
    accentColor: 'bg-blue-600',
    component: ServicePortalTemplate,
    subpages: {
      'dich-vu': {
        slug: 'dich-vu',
        name: 'Danh mục Dịch vụ trực tuyến',
        component: ServicesSubpage,
      },
      'tra-cuu': {
        slug: 'tra-cuu',
        name: 'Tra cứu tiến độ hồ sơ',
        component: ServiceTrackerSubpage,
      },
      'van-ban': {
        slug: 'van-ban',
        name: 'Văn bản quy định hành chính',
        component: NewsDocsSubpage,
      },
    },
  },
  {
    id: 'portal-department',
    name: 'Cổng Phòng Ban & Cơ Quan',
    category: 'Đơn vị & Doanh nghiệp',
    description: 'Bố cục chuyên nghiệp giới thiệu cơ cấu tổ chức, ban lãnh đạo đơn vị, văn bản chỉ đạo điều hành và lịch công tác tuần.',
    features: ['Chuyên trang Giới thiệu & Cơ cấu (/gioi-thieu)', 'Chuyên trang Văn bản chỉ đạo (/van-ban)', 'Chuyên trang Lịch công tác (/lich-cong-tac)'],
    accentColor: 'bg-emerald-700',
    component: DepartmentPortalTemplate,
    subpages: {
      'gioi-thieu': {
        slug: 'gioi-thieu',
        name: 'Giới thiệu & Cơ cấu Tổ chức',
        component: DeptAboutSubpage,
      },
      'van-ban': {
        slug: 'van-ban',
        name: 'Văn bản chỉ đạo điều hành',
        component: DeptDocsSubpage,
      },
      'lich-cong-tac': {
        slug: 'lich-cong-tac',
        name: 'Lịch công tác tuần',
        component: DeptScheduleSubpage,
      },
    },
  },
];

export const DEFAULT_TEMPLATE_ID = 'portal-news';

export function getTemplateById(templateId?: string): PortalTemplate {
  const found = PORTAL_TEMPLATES.find((t) => t.id === templateId);
  return found || PORTAL_TEMPLATES[0];
}

export function getSubpageBySlug(templateId: string | undefined, slug: string): SubpageDefinition | null {
  const template = getTemplateById(templateId);
  if (!template.subpages) return null;
  return template.subpages[slug] || null;
}
