import Link from 'next/link';
import { SubdomainForm } from './subdomain-form';
import { rootDomain } from '@/lib/utils';
import { Layers } from 'lucide-react';

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-100 via-blue-50 to-white p-4 md:p-8 relative">
      <div className="absolute top-4 right-4">
        <Link
          href="/admin"
          className="text-sm font-medium text-slate-600 hover:text-slate-900 bg-white/80 backdrop-blur-xs border border-slate-200 px-3.5 py-1.5 rounded-lg shadow-2xs hover:bg-white transition-all"
        >
          Quản trị Cổng
        </Link>
      </div>

      <div className="w-full max-w-4xl space-y-6 my-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
            <Layers className="w-3.5 h-3.5" /> Nền tảng Cổng Thành Phần Đa Giao Diện
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
            Khởi tạo Cổng Thành Phần
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto">
            Đăng ký tên miền con <span className="font-semibold text-blue-600">.{rootDomain}</span>, chọn mẫu giao diện chuyên biệt và xem trước demo bố cục với dữ liệu sinh động.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-slate-200/80">
          <SubdomainForm />
        </div>
      </div>
    </div>
  );
}
