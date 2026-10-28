"use client";

import type React from "react";
import { useState } from "react";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Check,
  CheckCircle2,
  Eye,
  Layers,
  Monitor,
  Phone,
  Search,
  Smartphone,
  Smile,
  Sparkles,
  Tablet,
  X,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  EmojiPicker,
  EmojiPickerContent,
  EmojiPickerSearch,
  EmojiPickerFooter,
} from "@/components/ui/emoji-picker";
import { createSubdomainAction } from "@/app/actions";
import { rootDomain } from "@/lib/utils";
import {
  PORTAL_TEMPLATES,
  DEFAULT_TEMPLATE_ID,
  type PortalTemplate,
} from "@/templates/registry";

type CreateState = {
  error?: string;
  success?: boolean;
  subdomain?: string;
  icon?: string;
  title?: string;
  templateId?: string;
};

const SUGGESTED_EMOJIS = ["🏛️", "📰", "🏢", "🎓", "🏥", "⚖️", "🚀", "🌐"];

export function SubdomainForm() {
  const [icon, setIcon] = useState("🏛️");
  const [title, setTitle] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(DEFAULT_TEMPLATE_ID);
  
  // State for preview modal
  const [previewTemplate, setPreviewTemplate] = useState<PortalTemplate | null>(null);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  const [state, action, isPending] = useActionState<CreateState, FormData>(
    createSubdomainAction,
    {}
  );

  const handleSelectTemplate = (id: string) => {
    setSelectedTemplateId(id);
  };

  const handleOpenPreview = (tpl: PortalTemplate, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPreviewTemplate(tpl);
  };

  return (
    <>
      <form action={action} className="space-y-8">
        {/* Hidden inputs */}
        <input type="hidden" name="icon" value={icon} required />
        <input type="hidden" name="templateId" value={selectedTemplateId} required />

        {/* Section 1: Basic Information */}
        <div className="space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
              Thông tin Cổng thành phần
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Thiết lập tên hiển thị, tên miền con và biểu tượng nhận diện
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Title Input */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-xs font-bold text-slate-700">
                Tên cổng thành phần
              </Label>
              <Input
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ví dụ: Cổng Thông tin Khoa CNTT"
                className="w-full text-sm"
              />
              <p className="text-[11px] text-slate-500">
                Tiêu đề chính sẽ xuất hiện trên thanh biểu ngữ và header
              </p>
            </div>

            {/* Subdomain Input */}
            <div className="space-y-2">
              <Label htmlFor="subdomain" className="text-xs font-bold text-slate-700">
                Tên miền con (Subdomain) <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center">
                <Input
                  id="subdomain"
                  name="subdomain"
                  placeholder="khoa-cntt"
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value)}
                  defaultValue={state?.subdomain}
                  className="w-full rounded-r-none focus:z-10 text-sm font-medium"
                  required
                />
                <span className="bg-slate-100 px-3 border border-l-0 border-input rounded-r-md text-slate-600 text-xs font-semibold min-h-[36px] flex items-center whitespace-nowrap">
                  .{rootDomain}
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Chỉ sử dụng chữ thường không dấu, số và dấu gạch ngang
              </p>
            </div>
          </div>

          {/* Icon Picker */}
          <div className="space-y-2 pt-1">
            <Label className="text-xs font-bold text-slate-700">
              Biểu tượng nhận diện (Icon / Emoji)
            </Label>
            <div className="flex flex-wrap items-center gap-2">
              <Popover open={isEmojiPickerOpen} onOpenChange={setIsEmojiPickerOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-11 px-3 border-slate-300 flex items-center gap-2 hover:bg-slate-50"
                  >
                    <span className="text-2xl">{icon || "❓"}</span>
                    <span className="text-xs font-medium text-slate-600">Đổi biểu tượng</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-[260px]" align="start">
                  <EmojiPicker
                    className="h-[300px] w-[260px]"
                    onEmojiSelect={({ emoji }) => {
                      setIcon(emoji);
                      setIsEmojiPickerOpen(false);
                    }}
                  >
                    <EmojiPickerSearch />
                    <EmojiPickerContent />
                    <EmojiPickerFooter />
                  </EmojiPicker>
                </PopoverContent>
              </Popover>

              {/* Quick Emojis */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] text-slate-400 mr-1">Gợi ý nhanh:</span>
                {SUGGESTED_EMOJIS.map((em) => (
                  <button
                    key={em}
                    type="button"
                    onClick={() => setIcon(em)}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg hover:bg-slate-100 transition-all ${
                      icon === em ? "bg-blue-100 ring-2 ring-blue-500 scale-105" : "border border-slate-200"
                    }`}
                  >
                    {em}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Template Picker */}
        <div className="space-y-4">
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                Chọn Mẫu Giao Diện Cổng Thành Phần
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Mỗi mẫu có cấu trúc bố cục chuyên biệt kèm bộ dữ liệu demo sinh động
              </p>
            </div>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 w-fit">
              {PORTAL_TEMPLATES.length} Mẫu có sẵn
            </span>
          </div>

          {/* Template Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PORTAL_TEMPLATES.map((tpl) => {
              const isSelected = selectedTemplateId === tpl.id;

              return (
                <div
                  key={tpl.id}
                  onClick={() => handleSelectTemplate(tpl.id)}
                  className={`group relative rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between overflow-hidden bg-white shadow-2xs hover:shadow-md ${
                    isSelected
                      ? "border-blue-600 ring-2 ring-blue-500/20 bg-blue-50/10"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Selected check badge */}
                  {isSelected && (
                    <div className="absolute top-2.5 right-2.5 z-10 bg-blue-600 text-white p-1 rounded-full shadow-sm">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}

                  {/* Visual Header / Mockup Preview */}
                  <div className={`p-4 ${tpl.accentColor} text-white relative`}>
                    <div className="flex items-center justify-between pr-6">
                      <span className="text-[10px] uppercase font-bold tracking-wider bg-black/25 px-2 py-0.5 rounded-full backdrop-blur-xs">
                        {tpl.category}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xs flex items-center justify-center text-lg">
                        {icon || "🏛️"}
                      </div>
                      <div className="font-bold text-sm truncate">
                        {tpl.name}
                      </div>
                    </div>

                    {/* Mini Wireframe Sketch */}
                    <div className="mt-3 bg-white/10 p-2 rounded-md space-y-1.5 backdrop-blur-xs">
                      <div className="h-1.5 w-1/3 bg-white/40 rounded-sm"></div>
                      <div className="h-10 w-full bg-white/20 rounded-sm flex items-center justify-center">
                        <span className="text-[10px] text-white/80 font-medium">Bố cục demo sinh động</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="h-4 bg-white/20 rounded-xs"></div>
                        <div className="h-4 bg-white/20 rounded-xs"></div>
                        <div className="h-4 bg-white/20 rounded-xs"></div>
                      </div>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors">
                        {tpl.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {tpl.description}
                      </p>

                      {/* Feature Pills */}
                      <div className="mt-3 space-y-1.5">
                        {tpl.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={(e) => handleOpenPreview(tpl, e)}
                        className="flex-1 text-xs h-8 text-slate-700 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50 font-medium"
                      >
                        <Eye className="w-3.5 h-3.5 mr-1 text-blue-600" /> Xem demo
                      </Button>

                      <Button
                        type="button"
                        size="sm"
                        variant={isSelected ? "default" : "secondary"}
                        onClick={() => handleSelectTemplate(tpl.id)}
                        className={`text-xs h-8 font-semibold ${
                          isSelected ? "bg-blue-600 hover:bg-blue-700 text-white" : ""
                        }`}
                      >
                        {isSelected ? "Đã chọn" : "Chọn mẫu"}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Error message */}
        {state?.error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-medium">
            {state.error}
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-12 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all"
          disabled={isPending || !icon}
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Đang khởi tạo cổng thành phần...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Khởi tạo Cổng Thành Phần Ngay
            </span>
          )}
        </Button>
      </form>

      {/* MODAL LIVE PREVIEW */}
      {previewTemplate && (
        <Dialog open={!!previewTemplate} onOpenChange={(open) => !open && setPreviewTemplate(null)}>
          <DialogContent className="sm:max-w-6xl w-[96vw] max-h-[92vh] flex flex-col p-0 overflow-hidden rounded-2xl border-slate-300">
            {/* Modal Header */}
            <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-lg">
                  {icon || "🏛️"}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-400/30">
                      {previewTemplate.category}
                    </span>
                    <h3 className="font-bold text-sm md:text-base text-white">
                      {previewTemplate.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400">
                    Bố cục mẫu trực quan kèm dữ liệu minh họa sinh động
                  </p>
                </div>
              </div>

              {/* Device Preview Switcher & Select Action */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center bg-slate-800 p-1 rounded-lg border border-slate-700">
                  <button
                    type="button"
                    onClick={() => setPreviewDevice("desktop")}
                    className={`p-1.5 rounded-md transition-colors ${
                      previewDevice === "desktop" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                    }`}
                    title="Màn hình Desktop"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewDevice("tablet")}
                    className={`p-1.5 rounded-md transition-colors ${
                      previewDevice === "tablet" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                    }`}
                    title="Màn hình Máy tính bảng (768px)"
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewDevice("mobile")}
                    className={`p-1.5 rounded-md transition-colors ${
                      previewDevice === "mobile" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                    }`}
                    title="Màn hình Điện thoại (420px)"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>

                <Button
                  type="button"
                  size="sm"
                  onClick={() => {
                    setSelectedTemplateId(previewTemplate.id);
                    setPreviewTemplate(null);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs h-8 px-4 rounded-lg"
                >
                  <Check className="w-3.5 h-3.5 mr-1" />
                  {selectedTemplateId === previewTemplate.id ? "Đã chọn mẫu này" : "Chọn mẫu này"}
                </Button>
              </div>
            </div>

            {/* Modal Body / Live Preview Frame */}
            <div className="flex-1 overflow-y-auto bg-slate-200/70 p-2 md:p-4 flex justify-center">
              <div
                className={`bg-white shadow-2xl rounded-xl overflow-hidden transition-all duration-300 w-full ${
                  previewDevice === "tablet"
                    ? "max-w-[768px]"
                    : previewDevice === "mobile"
                    ? "max-w-[420px]"
                    : "max-w-full"
                }`}
              >
                {/* Live Template Component Render */}
                <previewTemplate.component
                  subdomain={subdomain || "demo-portal"}
                  title={title || `Cổng Thành Phần Mẫu`}
                  emoji={icon || "🏛️"}
                  description={previewTemplate.description}
                  isPreview={true}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Mẹo: Bạn có thể cuộn trang để xem toàn bộ các khối nội dung và bố cục của mẫu này.
              </span>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setPreviewTemplate(null)}
                  className="text-xs h-8"
                >
                  Đóng xem trước
                </Button>
                <Button
                  type="button"
                  size="sm"
                  onClick={() => {
                    setSelectedTemplateId(previewTemplate.id);
                    setPreviewTemplate(null);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs h-8"
                >
                  Sử dụng mẫu này
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
