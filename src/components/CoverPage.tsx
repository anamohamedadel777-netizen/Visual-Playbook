import React from 'react';
import { AUTHOR_INFO } from '../data/funnelData';
import { ArrowLeft, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const CoverPage: React.FC = () => {
  const journeyNodes = [
    { labelEn: "TRAFFIC", labelAr: "الزيارات والجمهور", step: "01" },
    { labelEn: "MESSAGE", labelAr: "الرسالة والتسويق", step: "02" },
    { labelEn: "PAGE", labelAr: "صفحة الهبوط", step: "03" },
    { labelEn: "ACTION", labelAr: "الإجراء المبدئي", step: "04" },
    { labelEn: "FOLLOW-UP", labelAr: "المتابعة والرعاية", step: "05" },
    { labelEn: "CONVERSION", labelAr: "التحويل والبيع", step: "06", isTarget: true },
  ];

  return (
    <div className="a4-page bg-[#05070B] text-[#F7F3E8] p-8 sm:p-12 flex flex-col justify-between border border-[#101823] shadow-2xl relative overflow-hidden select-none">
      {/* Editorial Luxury Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2C45C]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B111A] rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner / Small Premium Label */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#1A2638]/80 pb-6">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#F2C45C] shadow-[0_0_8px_#F2C45C]"></span>
          <span 
            dir="ltr" 
            className="text-xs font-mono-code font-bold tracking-widest text-[#F2C45C] uppercase"
          >
            BONUS — VISUAL SYSTEM LIBRARY
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#AAB2BF]/70 font-mono-code">
          <span>EDITION 2026</span>
          <span className="text-[#AAB2BF]/30">|</span>
          <span className="text-[#19C878] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED BLUEPRINT</span>
          </span>
        </div>
      </div>

      {/* Main Title Block */}
      <div className="relative z-10 my-auto py-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101823] border border-[#F2C45C]/30 text-[#F2C45C] text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#F2C45C]" />
          <span>الدليل المرجعي لأنظمة التحويل الرقمي</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F3E8] tracking-tight leading-[1.15] mb-4">
          مكتبة خرائط الـ <span className="text-[#F2C45C]">Funnels</span>
        </h1>

        <div 
          dir="ltr" 
          className="text-2xl sm:text-3xl font-latin font-bold text-[#AAB2BF] tracking-wide mb-8"
        >
          Visual Funnel Maps Library
        </div>

        {/* Sophisticated Abstract Funnel Journey Nodes */}
        <div className="my-8 bg-[#0B111A]/90 border border-[#1A2638] rounded-2xl p-6 relative">
          <div className="text-[11px] font-mono-code text-[#F2C45C] tracking-wider uppercase mb-4 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>THE STRATEGIC CONVERSION ARCHITECTURE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {journeyNodes.map((node, i) => (
              <div 
                key={node.step}
                className={`relative p-3 rounded-xl flex flex-col justify-between transition-all ${
                  node.isTarget
                    ? 'bg-[#101823] border-2 border-[#F2C45C] shadow-[0_0_20px_rgba(242,196,92,0.2)]'
                    : 'bg-[#0D141D] border border-[#1A2638]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono-code font-bold ${
                    node.isTarget ? 'text-[#F2C45C]' : 'text-[#AAB2BF]/60'
                  }`}>
                    {node.step}
                  </span>
                  {node.isTarget && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F2C45C]"></span>
                  )}
                </div>

                <div 
                  dir="ltr" 
                  className={`text-xs font-latin font-bold tracking-wider ${
                    node.isTarget ? 'text-[#F2C45C]' : 'text-[#F7F3E8]'
                  }`}
                >
                  {node.labelEn}
                </div>

                <div className="text-[11px] text-[#AAB2BF] mt-1">
                  {node.labelAr}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#1A2638]/60 flex items-center justify-between text-xs text-[#AAB2BF]/80">
            <span>مسار رحلة العميل الاستراتيجية خطوة بخطوة</span>
            <span dir="ltr" className="text-[#F2C45C] font-mono-code text-[11px]">
              TOTAL 25 BLUEPRINTS INCLUDED
            </span>
          </div>
        </div>

        {/* Supporting Statement */}
        <p className="text-base sm:text-lg text-[#F7F3E8]/90 font-medium leading-relaxed max-w-2xl mt-4">
          25 خريطة بصرية تساعدك على فهم رحلة العميل وتسلسل الخطوات قبل أن تبدأ في التصميم
        </p>
      </div>

      {/* Author & Footer Block */}
      <div className="relative z-10 border-t border-[#1A2638]/80 pt-6 flex items-end justify-between">
        <div>
          <span className="text-xs text-[#AAB2BF]/70 block mb-1">إعداد وتأليف:</span>
          <div className="text-xl font-bold text-[#F7F3E8] flex items-center gap-2">
            <span>{AUTHOR_INFO.nameAr}</span>
            <span className="text-[#F2C45C] text-sm font-latin">({AUTHOR_INFO.nameEn})</span>
          </div>
          <p className="text-xs text-[#AAB2BF] mt-0.5">
            {AUTHOR_INFO.roleAr}
          </p>
        </div>

        <div className="text-left font-mono-code text-xs text-[#AAB2BF]/60">
          <div>CONFIDENTIAL & STRATEGIC PLAYBOOK</div>
          <div className="text-[#F2C45C]/80 mt-1">PAGE 01 • COVER</div>
        </div>
      </div>
    </div>
  );
};
