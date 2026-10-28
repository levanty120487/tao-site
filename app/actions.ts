'use server';

import { redis } from '@/lib/redis';
import { isValidIcon } from '@/lib/subdomains';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { rootDomain, protocol } from '@/lib/utils';
import { DEFAULT_TEMPLATE_ID } from '@/templates/registry';

export async function createSubdomainAction(
  prevState: any,
  formData: FormData
) {
  const subdomain = formData.get('subdomain') as string;
  const icon = formData.get('icon') as string;
  const title = (formData.get('title') as string) || '';
  const description = (formData.get('description') as string) || '';
  const templateId = (formData.get('templateId') as string) || DEFAULT_TEMPLATE_ID;

  if (!subdomain || !icon) {
    return { 
      subdomain, 
      icon, 
      title, 
      templateId, 
      success: false, 
      error: 'Tên miền con (Subdomain) và biểu tượng (Icon) là bắt buộc' 
    };
  }

  if (!isValidIcon(icon)) {
    return {
      subdomain,
      icon,
      title,
      templateId,
      success: false,
      error: 'Vui lòng chọn hoặc nhập biểu tượng emoji hợp lệ (tối đa 10 ký tự)'
    };
  }

  const sanitizedSubdomain = subdomain.toLowerCase().replace(/[^a-z0-9-]/g, '');

  if (sanitizedSubdomain !== subdomain) {
    return {
      subdomain,
      icon,
      title,
      templateId,
      success: false,
      error: 'Tên miền con chỉ được chứa chữ cái thường, số và dấu gạch ngang (-).'
    };
  }

  const subdomainAlreadyExists = await redis.get(
    `subdomain:${sanitizedSubdomain}`
  );
  if (subdomainAlreadyExists) {
    return {
      subdomain,
      icon,
      title,
      templateId,
      success: false,
      error: 'Tên miền con này đã có người đăng ký, vui lòng chọn tên khác'
    };
  }

  await redis.set(`subdomain:${sanitizedSubdomain}`, {
    emoji: icon,
    title: title.trim() || sanitizedSubdomain,
    description: description.trim(),
    templateId: templateId,
    createdAt: Date.now()
  });

  redirect(`${protocol}://${sanitizedSubdomain}.${rootDomain}`);
}

export async function deleteSubdomainAction(
  prevState: any,
  formData: FormData
) {
  const subdomain = formData.get('subdomain');
  await redis.del(`subdomain:${subdomain}`);
  revalidatePath('/admin');
  return { success: 'Xóa cổng thành phần thành công' };
}
