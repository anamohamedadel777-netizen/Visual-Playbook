import React from 'react';
import { COMMON_MISTAKES } from '../data/funnelData';
import { PageFooter } from './PageFooter';
import { AlertOctagon, CheckCircle2, ShieldAlert, Sparkles, Quote } from 'lucide-react';

export const CommonMistakesPage: React.FC = () => {
  return (
    <div className="a4-page bg-[#05070B] text-[#F7F3E8] p-8 sm:p-10 flex flex-col justify-between border border-[#101823] shadow-2xl relative">
      {/* Background ambient accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F2C45C]/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 border-b border-[#1A2638] pb-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-mono-code font-bold text-[#E05252] tracking-wider uppercase flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>CONVERSION AUDIT • مراجعة سلامة التحويل</span>
          </span>
          <span className="text-xs font-mono-code text-[#AAB2BF]/60">
            PAGE 32
          </span>
        </div>
        <div className="flex items-baseline justify-between">
          <h1 className="text-2xl sm:text-3xl font-black text-[#F7F3E8] tracking-tight">
            7 أخطاء تجعل الـ <span className="text-[#F2C45C]">Funnel</span> أضعف مما يجب
          </h1>
          <span dir="ltr" className="text-xs font-latin font-bold text-[#AAB2BF]/70">
            7 Costly Funnel Killers to Avoid
          </span>
        </div>
      </header>

      {/* 7 Mistakes Grid */}
      <main className="my-auto py-2 space-y-2.5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {COMMON_MISTAKES.slice(0, 6).map((mistake) => (
            <div
              key={mistake.id}
              className="bg-[#101823] border border-[#1A2638] rounded-xl p-3 flex flex-col justify-between hover:border-[#E05252]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono-code font-bold text-[#E05252] px-1.5 py-0.5 rounded bg-[#E05252]/10 border border-[#E05252]/30">
                      MISTAKE 0{mistake.id}
                    </span>
                    <h2 className="text-xs font-bold text-[#F7F3E8]">
                      {mistake.titleAr}
                    </h2>
                  </div>
                </div>

                <p className="text-[10.5px] text-[#AAB2BF] leading-snug my-1.5">
                  {mistake.explanationAr}
                </p>
              </div>

              <div className="bg-[#0B111A] border border-[#1A2638] rounded-lg p-2 mt-1 flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#19C878] shrink-0 mt-0.5" />
                <span className="text-[10px] text-[#19C878] leading-tight font-medium">
                  {mistake.solutionAr}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mistake #7 - Full Width Hero Card */}
        {COMMON_MISTAKES[6] && (
          <div className="bg-[#101823] border border-[#1A2638] rounded-xl p-3 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono-code font-bold text-[#E05252] px-1.5 py-0.5 rounded bg-[#E05252]/10 border border-[#E05252]/30">
                  MISTAKE 07
                </span>
                <h2 className="text-xs font-bold text-[#F7F3E8]">
                  {COMMON_MISTAKES[6].titleAr}
                </h2>
              </div>
              <p className="text-[10.5px] text-[#AAB2BF] leading-snug">
                {COMMON_MISTAKES[6].explanationAr}
              </p>
            </div>
            <div className="bg-[#0B111A] border border-[#1A2638] rounded-lg p-2.5 flex items-start gap-2 max-w-sm shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#19C878] shrink-0 mt-0.5" />
              <span className="text-[10.5px] text-[#19C878] font-medium leading-tight">
                {COMMON_MISTAKES[6].solutionAr}
              </span>
            </div>
          </div>
        )}

        {/* Highlighted Golden Principle Box */}
        <div className="bg-gradient-to-r from-[#101823] via-[#0D141D] to-[#101823] border-2 border-[#F2C45C] rounded-xl p-4 flex items-center justify-center text-center shadow-lg">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono-code font-bold text-[#F2C45C] uppercase tracking-wider block mb-1">
              THE GOLDEN STRATEGIC PRINCIPLE • القاعدة الاستراتيجية الذهبية
            </span>
            <blockquote className="text-base sm:text-lg font-black text-[#F7F3E8] leading-relaxed">
              "أقصر <span className="text-[#F2C45C]">Funnel</span> تحقق الهدف بوضوح أفضل من Funnel معقدة بلا سبب."
            </blockquote>
          </div>
        </div>
      </main>

      {/* Footer */}
      <PageFooter pageNumber={32} />
    </div>
  );
};
