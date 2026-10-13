import React from 'react';
import { FunnelMap } from '../data/funnelData';
import { FunnelFlowDiagram } from './FunnelFlowDiagram';
import { PageFooter } from './PageFooter';
import { Target, Users, Zap, AlertTriangle, Lightbulb, Compass, Award } from 'lucide-react';

interface FunnelPageProps {
  map: FunnelMap;
}

export const FunnelPage: React.FC<FunnelPageProps> = ({ map }) => {
  return (
    <div className="a4-page bg-[#05070B] text-[#F7F3E8] p-6 sm:p-8 flex flex-col justify-between border border-[#101823] shadow-2xl relative">
      {/* Background ambient decorative glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F2C45C]/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* ================= TOP AREA ================= */}
      <header className="relative z-10">
        {/* Top bar: Category badge + Map Number */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#101823] text-[#F2C45C] border border-[#F2C45C]/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2C45C]"></span>
              <span>{map.categoryNameAr}</span>
            </span>
            <span dir="ltr" className="text-[10px] text-[#AAB2BF]/50 font-latin font-medium">
              / {map.categoryNameEn}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span 
              dir="ltr" 
              className="text-xs font-mono-code font-extrabold px-2.5 py-0.5 rounded bg-[#F2C45C] text-[#05070B] tracking-wider shadow-sm"
            >
              {map.number}
            </span>
          </div>
        </div>

        {/* Title Block */}
        <div className="mb-3">
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="text-xl sm:text-2xl font-black text-[#F7F3E8] tracking-tight">
              {map.arabicName}
            </h1>
            <h2 dir="ltr" className="text-sm sm:text-base font-latin font-bold text-[#F2C45C]">
              {map.englishName}
            </h2>
          </div>
          <p className="text-xs text-[#AAB2BF] mt-1 leading-relaxed max-w-3xl">
            {map.subtitle}
          </p>
        </div>

        {/* 4 Metadata Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 my-2">
          {/* Card 1: Goal */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2.5 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#AAB2BF] mb-1">
              <Target className="w-3 h-3 text-[#F2C45C]" />
              <span>الهدف الرئيسي • GOAL</span>
            </div>
            <p className="text-[11px] text-[#F7F3E8] font-medium leading-snug line-clamp-2">
              {map.goal}
            </p>
          </div>

          {/* Card 2: Best For */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2.5 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#AAB2BF] mb-1">
              <Users className="w-3 h-3 text-[#60A5FA]" />
              <span>مناسبة لمن • BEST FOR</span>
            </div>
            <p className="text-[11px] text-[#F7F3E8] font-medium leading-snug line-clamp-2">
              {map.bestFor}
            </p>
          </div>

          {/* Card 3: Traffic */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2.5 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#AAB2BF] mb-1">
              <Compass className="w-3 h-3 text-[#34D399]" />
              <span>مصدر الـ Traffic</span>
            </div>
            <p dir="ltr" className="text-[10.5px] text-[#F7F3E8] font-latin font-medium leading-snug line-clamp-2 text-right">
              {map.traffic}
            </p>
          </div>

          {/* Card 4: Complexity & Launch Speed */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2.5 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#AAB2BF] mb-1">
              <Zap className="w-3 h-3 text-[#EAB308]" />
              <span>التعقيد • COMPLEXITY</span>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                map.complexity.includes('منخفض')
                  ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/50'
                  : map.complexity === 'متوسط'
                  ? 'bg-amber-950/60 text-amber-400 border border-amber-800/50'
                  : 'bg-rose-950/60 text-rose-400 border border-rose-800/50'
              }`}>
                {map.complexity}
              </span>
              <span className="text-[10px] text-[#AAB2BF]/70 font-mono-code">
                {map.launchSpeed}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ================= CENTER: MAIN VISUAL FUNNEL MAP (THE HERO) ================= */}
      <main className="my-auto py-2">
        <FunnelFlowDiagram nodes={map.flowNodes} />
      </main>

      {/* ================= BOTTOM: 3 CONCISE STRATEGIC SECTIONS ================= */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-2.5 my-2">
        {/* Section 1: Why it works */}
        <div className="bg-[#101823]/90 border border-[#1A2638] rounded-lg p-3 relative overflow-hidden">
          <div className="w-1 h-full absolute top-0 right-0 bg-[#19C878]"></div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#19C878] mb-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>لماذا تعمل؟</span>
          </div>
          <p className="text-[11.5px] text-[#F7F3E8] leading-relaxed">
            {map.whyItWorks}
          </p>
        </div>

        {/* Section 2: Common mistake */}
        <div className="bg-[#101823]/90 border border-[#1A2638] rounded-lg p-3 relative overflow-hidden">
          <div className="w-1 h-full absolute top-0 right-0 bg-[#E05252]"></div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#E05252] mb-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>أشهر خطأ يجب تجنبه</span>
          </div>
          <p className="text-[11.5px] text-[#F7F3E8] leading-relaxed">
            {map.commonMistake}
          </p>
        </div>

        {/* Section 3: Implementation note */}
        <div className="bg-[#101823]/90 border border-[#1A2638] rounded-lg p-3 relative overflow-hidden">
          <div className="w-1 h-full absolute top-0 right-0 bg-[#F2C45C]"></div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#F2C45C] mb-1.5">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>ملاحظة تنفيذية</span>
          </div>
          <p className="text-[11.5px] text-[#F7F3E8] leading-relaxed">
            {map.implementationNote}
          </p>
        </div>
      </section>

      {/* Subtle Consistent Footer */}
      <PageFooter pageNumber={map.pageNumber} />
    </div>
  );
};
