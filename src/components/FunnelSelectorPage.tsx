import React from 'react';
import { FUNNEL_DECISION_TREE } from '../data/funnelData';
import { PageFooter } from './PageFooter';
import { GitFork, ArrowLeft, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';

interface FunnelSelectorPageProps {
  onSelectMap?: (id: number) => void;
}

export const FunnelSelectorPage: React.FC<FunnelSelectorPageProps> = ({ onSelectMap }) => {
  return (
    <div className="a4-page bg-[#05070B] text-[#F7F3E8] p-8 sm:p-10 flex flex-col justify-between border border-[#101823] shadow-2xl relative">
      {/* Background ambient accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F2C45C]/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 border-b border-[#1A2638] pb-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-mono-code font-bold text-[#F2C45C] tracking-wider uppercase">
            STRATEGIC DECISION TREE • شجرة اتخاذ القرار
          </span>
          <span className="text-xs font-mono-code text-[#AAB2BF]/60">
            PAGE 30
          </span>
        </div>
        <div className="flex items-baseline justify-between">
          <h1 className="text-2xl sm:text-3xl font-black text-[#F7F3E8] tracking-tight">
            أي <span className="text-[#F2C45C]">Funnel</span> أختار لمشروعي؟
          </h1>
          <span dir="ltr" className="text-xs font-latin font-bold text-[#AAB2BF]/70">
            Goal-Driven Selection Framework
          </span>
        </div>
      </header>

      {/* Main Decision Tree Grid */}
      <main className="my-auto py-2 grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
        {FUNNEL_DECISION_TREE.map((branch, idx) => (
          <div
            key={branch.goalId}
            className="bg-[#101823] border border-[#1A2638] rounded-xl p-3 flex flex-col justify-between hover:border-[#F2C45C]/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono-code font-bold text-[#F2C45C] px-1.5 py-0.5 rounded bg-[#0B111A] border border-[#1A2638]">
                  GOAL 0{idx + 1}
                </span>
                <span dir="ltr" className="text-[10px] font-latin font-semibold text-[#AAB2BF]/60">
                  {branch.titleEn}
                </span>
              </div>

              <h2 className="text-xs font-bold text-[#F7F3E8] mb-1">
                {branch.titleAr}
              </h2>
              <p className="text-[10.5px] text-[#AAB2BF] leading-snug mb-2.5">
                {branch.descAr}
              </p>
            </div>

            {/* Recommended funnels chips */}
            <div className="space-y-1.5 border-t border-[#1A2638]/70 pt-2">
              <span className="text-[9.5px] font-bold text-[#F2C45C] block">
                الـ Funnels المرشحة لهذا الهدف:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {branch.recommendedFunnels.map((rec) => (
                  <button
                    key={rec.mapId}
                    onClick={() => onSelectMap?.(rec.mapId)}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#0D141D] hover:bg-[#F2C45C]/15 border border-[#1A2638] hover:border-[#F2C45C]/50 text-[10.5px] transition-all cursor-pointer group"
                  >
                    <span className="font-mono-code text-[9px] text-[#F2C45C] font-bold">
                      #{rec.mapId}
                    </span>
                    <span className="text-[#F7F3E8] group-hover:text-[#F2C45C] font-medium">
                      {rec.nameAr}
                    </span>
                    <span className="text-[8.5px] text-[#34D399] font-mono-code mr-1">
                      ({rec.badge})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Decision Principle Box */}
      <div className="bg-[#0B111A] border border-[#1A2638] rounded-xl px-4 py-3 flex items-center justify-between text-xs text-[#F7F3E8]">
        <div className="flex items-center gap-2">
          <GitFork className="w-4 h-4 text-[#F2C45C]" />
          <span>القاعدة الاستراتيجية: لا تختر الفانل بناءً على شهرتها، بل على طبيعة الاحتكاك ومستوى وعي جمهورك.</span>
        </div>
      </div>

      {/* Footer */}
      <PageFooter pageNumber={30} />
    </div>
  );
};
