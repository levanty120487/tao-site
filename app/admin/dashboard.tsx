'use client';

import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Loader2, ExternalLink, Layers, Plus } from 'lucide-react';
import Link from 'next/link';
import { deleteSubdomainAction } from '@/app/actions';
import { rootDomain, protocol } from '@/lib/utils';
import { getTemplateById } from '@/templates/registry';

type Tenant = {
  subdomain: string;
  emoji: string;
  title?: string;
  templateId?: string;
  createdAt: number;
};

type DeleteState = {
  error?: string;
  success?: string;
};

function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b border-slate-200">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Quản trị Cổng Thành Phần
        </h1>
        <p className="text-xs md:text-sm text-slate-500 mt-1">
          Danh sách các trang thành phần (subdomain) và mẫu giao diện đang áp dụng
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href={`${protocol}://${rootDomain}`}
          className="text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" /> Tạo cổng mới
        </Link>
      </div>
    </div>
  );
}

function TenantGrid({
  tenants,
  action,
  isPending
}: {
  tenants: Tenant[];
  action: (formData: FormData) => void;
  isPending: boolean;
}) {
  if (tenants.length === 0) {
    return (
      <Card className="border-dashed border-2">
        <CardContent className="py-12 text-center space-y-3">
          <div className="text-4xl">🏛️</div>
          <p className="text-slate-600 font-medium text-sm">Chưa có cổng thành phần nào được khởi tạo.</p>
          <Link
            href={`${protocol}://${rootDomain}`}
            className="text-xs text-blue-600 font-bold hover:underline inline-block"
          >
            Bấm vào đây để tạo cổng đầu tiên →
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tenants.map((tenant) => {
        const template = getTemplateById(tenant.templateId);

        return (
          <Card key={tenant.subdomain} className="overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3 bg-slate-50 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 truncate">
                  <div className="text-2xl">{tenant.emoji}</div>
                  <div className="truncate">
                    <CardTitle className="text-base font-bold text-slate-900 truncate">
                      {tenant.title || tenant.subdomain}
                    </CardTitle>
                    <div className="text-xs font-mono text-slate-500">
                      {tenant.subdomain}.{rootDomain}
                    </div>
                  </div>
                </div>

                <form action={action}>
                  <input
                    type="hidden"
                    name="subdomain"
                    value={tenant.subdomain}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    type="submit"
                    disabled={isPending}
                    title="Xóa cổng thành phần này"
                    className="text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg h-8 w-8"
                  >
                    {isPending ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </Button>
                </form>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Mẫu giao diện:</span>
                <span className="font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Layers className="w-3 h-3 text-blue-600" />
                  {template.name}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Ngày tạo:</span>
                <span>{new Date(tenant.createdAt).toLocaleDateString('vi-VN')}</span>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`${protocol}://${tenant.subdomain}.${rootDomain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold text-xs flex items-center gap-1"
                >
                  Truy cập cổng <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export function AdminDashboard({ tenants }: { tenants: Tenant[] }) {
  const [state, action, isPending] = useActionState<DeleteState, FormData>(
    deleteSubdomainAction,
    {}
  );

  return (
    <div className="space-y-6 relative p-4 md:p-8 max-w-6xl mx-auto">
      <DashboardHeader />
      <TenantGrid tenants={tenants} action={action} isPending={isPending} />

      {state.error && (
        <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl shadow-md text-xs font-semibold">
          {state.error}
        </div>
      )}

      {state.success && (
        <div className="fixed bottom-4 right-4 bg-emerald-100 border border-emerald-400 text-emerald-700 px-4 py-3 rounded-xl shadow-md text-xs font-semibold">
          {state.success}
        </div>
      )}
    </div>
  );
}
