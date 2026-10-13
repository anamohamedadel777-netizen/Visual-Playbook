import React from 'react';

interface PageFooterProps {
  pageNumber: number;
}

export const PageFooter: React.FC<PageFooterProps> = ({ pageNumber }) => {
  return (
    <footer className="mt-auto pt-4 border-t border-[#101823] flex items-center justify-between text-xs text-[#AAB2BF]/60 select-none">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-[#F2C45C]/80">Visual Funnel Maps Library</span>
        <span className="text-[#AAB2BF]/30">•</span>
        <span>مكتبة خرائط الـ Funnels</span>
      </div>

      <div className="flex items-center gap-3">
        <span>محمد عادل</span>
        <span className="w-1 h-1 rounded-full bg-[#F2C45C]/40"></span>
        <span className="font-mono-code font-bold text-[#F7F3E8] bg-[#101823] px-2 py-0.5 rounded border border-[#1A2638] text-[11px]">
          {String(pageNumber).padStart(2, '0')}
        </span>
      </div>
    </footer>
  );
};
