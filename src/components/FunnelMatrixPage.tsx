import React from 'react';
import { FUNNEL_MAPS } from '../data/funnelData';
import { PageFooter } from './PageFooter';
import { Table, Check, X, Sparkles } from 'lucide-react';

interface FunnelMatrixPageProps {
  onSelectMap?: (id: number) => void;
}

export const FunnelMatrixPage: React.FC<FunnelMatrixPageProps> = ({ onSelectMap }) => {
  return (
    <div className="a4-page bg-[#05070B] text-[#F7F3E8] p-6 sm:p-8 flex flex-col justify-between border border-[#101823] shadow-2xl relative">
      {/* Background ambient accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F2C45C]/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 border-b border-[#1A2638] pb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-mono-code font-bold text-[#F2C45C] tracking-wider uppercase">
            COMPARATIVE MATRIX • مصفوفة المقارنة الفنية
          </span>
          <span className="text-xs font-mono-code text-[#AAB2BF]/60">
            PAGE 31
          </span>
        </div>
        <div className="flex items-baseline justify-between">
          <h1 className="text-2xl font-black text-[#F7F3E8] tracking-tight">
            مصفوفة تقييم ومقارنة الـ <span className="text-[#F2C45C]">25 Funnel</span>
          </h1>
          <span dir="ltr" className="text-[11px] font-latin font-bold text-[#AAB2BF]/70">
            Speed vs Complexity vs Conversion
          </span>
        </div>
      </header>

      {/* Main Table: Condensed clean editorial table */}
      <main className="my-auto py-2 overflow-x-auto relative z-10">
        <div className="border border-[#1A2638] rounded-xl overflow-hidden bg-[#0B111A]">
          <table className="w-full text-right text-[10.5px]">
            <thead className="bg-[#101823] text-[#AAB2BF] border-b border-[#1A2638] font-bold">
              <tr>
                <th className="py-2 px-2.5 text-center font-mono-code w-10">#</th>
                <th className="py-2 px-2.5">اسم الـ Funnel</th>
                <th className="py-2 px-2">الهدف الرئيسي</th>
                <th className="py-2 px-2 text-center">التعقيد</th>
                <th className="py-2 px-2 text-center">سرعة الإطلاق</th>
                <th className="py-2 px-2 text-center">مناسب للمبتدئ؟</th>
                <th className="py-2 px-2.5">نقطة التحويل الأساسية</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1A2638]/50 text-[#F7F3E8]">
              {FUNNEL_MAPS.map((map) => {
                const isBeginner = map.complexity === 'منخفض';
                return (
                  <tr 
                    key={map.id} 
                    onClick={() => onSelectMap?.(map.id)}
                    className="hover:bg-[#101823]/80 transition-colors cursor-pointer group"
                  >
                    <td className="py-1 px-2.5 text-center font-mono-code font-bold text-[#F2C45C]">
                      {String(map.id).padStart(2, '0')}
                    </td>
                    <td className="py-1 px-2.5">
                      <div className="font-bold text-[#F7F3E8] group-hover:text-[#F2C45C] transition-colors leading-tight">
                        {map.arabicName.replace('Funnel ', '')}
                      </div>
                      <div dir="ltr" className="text-[9px] font-latin text-[#AAB2BF]/60 text-right">
                        {map.englishName}
                      </div>
                    </td>
                    <td className="py-1 px-2 text-[#AAB2BF] text-[10px] leading-tight max-w-[140px] truncate">
                      {map.goal}
                    </td>
                    <td className="py-1 px-2 text-center">
                      <span className={`text-[9.5px] font-bold px-1.5 py-0.5 rounded ${
                        map.complexity.includes('منخفض')
                          ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/40'
                          : map.complexity === 'متوسط'
                          ? 'bg-amber-950/70 text-amber-400 border border-amber-800/40'
                          : 'bg-rose-950/70 text-rose-400 border border-rose-800/40'
                      }`}>
                        {map.complexity.includes('منخفض') ? 'LOW' : map.complexity === 'متوسط' ? 'MED' : 'HIGH'}
                      </span>
                    </td>
                    <td className="py-1 px-2 text-center text-[9.5px] font-mono-code text-[#AAB2BF]">
                      {map.launchSpeed.split(' ')[0]}
                    </td>
                    <td className="py-1 px-2 text-center">
                      {isBeginner ? (
                        <span className="inline-flex items-center text-[9px] font-bold text-[#19C878] bg-[#19C878]/10 px-1.5 py-0.5 rounded">
                          نعم (YES)
                        </span>
                      ) : (
                        <span className="text-[9px] text-[#AAB2BF]/60">
                          يحتاج خبرة
                        </span>
                      )}
                    </td>
                    <td className="py-1 px-2.5 text-[10px] font-medium text-[#F2C45C] truncate max-w-[160px]">
                      {map.primaryConversion}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <PageFooter pageNumber={31} />
    </div>
  );
};
