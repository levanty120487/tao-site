import type React from 'react';
import type { PortalTemplate, PortalTemplateProps, SubpageDefinition } from './types';

// Template 1: News Portal
import { NewsPortalTemplate } from './portal-news';
import { NewsLayout } from './portal-news/layout';
import { NewsSubpage } from './portal-news/pages/news-page';
import { NewsDocsSubpage } from './portal-news/pages/docs-page';
import { NewsDetailPage } from './portal-news/pages/news-detail-page';
import { NewsDocsDetailPage } from './portal-news/pages/docs-detail-page';

// Template 2: Service Portal
import { ServicePortalTemplate } from './portal-service';
import { ServiceLayout } from './portal-service/layout';
import { ServicesSubpage } from './portal-service/pages/services-page';
import { ServiceTrackerSubpage } from './portal-service/pages/tracker-page';

// Template 3: Department Portal
import { DepartmentPortalTemplate } from './portal-department';
import { DeptLayout } from './portal-department/layout';
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
    features: ['Tin tiêu điểm & Trending', 'Chuyên trang Tin tức riêng (/tin-tuc)', 'Chi tiết bài viết chuẩn báo chí (/tin-tuc/[id])', 'Chi tiết văn bản pháp quy (/van-ban/[id])'],
    accentColor: 'bg-red-700',
    layout: NewsLayout,
    component: NewsPortalTemplate,
    subpages: {
      'tin-tuc': {
        slug: 'tin-tuc',
        name: 'Tin tức & Sự kiện',
        component: NewsSubpage,
        detailComponent: NewsDetailPage,
      },
      'van-ban': {
        slug: 'van-ban',
        name: 'Văn bản mới',
        component: NewsDocsSubpage,
        detailComponent: NewsDocsDetailPage,
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
    features: ['Chuyên trang Dịch vụ trực tuyến (/dich-vu)', 'Chuyên trang Tra cứu hồ sơ (/tra-cuu)', 'Chi tiết văn bản quy định (/van-ban/[id])', 'Tổng đài 24/7'],
    accentColor: 'bg-blue-600',
    layout: ServiceLayout,
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
        detailComponent: NewsDocsDetailPage,
      },
    },
  },
  {
    id: 'portal-department',
    name: 'Cổng Phòng Ban & Cơ Quan',
    category: 'Đơn vị & Doanh nghiệp',
    description: 'Bố cục chuyên nghiệp giới thiệu cơ cấu tổ chức, ban lãnh đạo đơn vị, văn bản chỉ đạo điều hành và lịch công tác tuần.',
    features: ['Chuyên trang Giới thiệu & Cơ cấu (/gioi-thieu)', 'Chuyên trang Văn bản chỉ đạo (/van-ban)', 'Chi tiết văn bản chỉ đạo (/van-ban/[id])', 'Chuyên trang Lịch công tác (/lich-cong-tac)'],
    accentColor: 'bg-emerald-700',
    layout: DeptLayout,
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
        detailComponent: NewsDocsDetailPage,
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
