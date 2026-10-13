import React from 'react';
import { CATEGORIES, FUNNEL_MAPS } from '../data/funnelData';
import { PageFooter } from './PageFooter';
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Share2, 
  Video, 
  Layers, 
  ShoppingBag, 
  Rocket, 
  FolderKanban,
  ArrowUpRight
} from 'lucide-react';

interface IndexDirectoryPageProps {
  onSelectMap?: (id: number) => void;
}

export const IndexDirectoryPage: React.FC<IndexDirectoryPageProps> = ({ onSelectMap }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-4 h-4 text-[#F2C45C]" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 text-[#60A5FA]" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-[#34D399]" />;
      case 'Share2': return <Share2 className="w-4 h-4 text-[#A78BFA]" />;
      case 'Video': return <Video className="w-4 h-4 text-[#F43F5E]" />;
      case 'Layers': return <Layers className="w-4 h-4 text-[#38BDF8]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-4 h-4 text-[#FBBF24]" />;
      case 'Rocket': return <Rocket className="w-4 h-4 text-[#EC4899]" />;
      default: return <FolderKanban className="w-4 h-4 text-[#F2C45C]" />;
    }
  };

  return (
    <div className="a4-page bg-[#05070B] text-[#F7F3E8] p-8 sm:p-10 flex flex-col justify-between border border-[#101823] shadow-2xl relative">
      {/* Background ambient accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F2C45C]/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 border-b border-[#1A2638] pb-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-mono-code font-bold text-[#F2C45C] tracking-wider uppercase">
            VISUAL CATEGORY DIRECTORY • الفهرس البصري الشامل
          </span>
          <span className="text-xs font-mono-code text-[#AAB2BF]/60">
            25 STRATEGIC BLUEPRINTS
          </span>
        </div>
        <div className="flex items-baseline justify-between">
          <h1 className="text-2xl sm:text-3xl font-black text-[#F7F3E8] tracking-tight">
            فهرس مكتبة الـ <span className="text-[#F2C45C]">Funnels</span>
          </h1>
          <span dir="ltr" className="text-xs font-latin font-bold text-[#AAB2BF]/70">
            8 Architectural Categories
          </span>
        </div>
      </header>

      {/* Main 8 Category Cards Dashboard Grid */}
      <main className="my-auto py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">
        {CATEGORIES.map((cat) => {
          // Find maps in this category
          const mapsInCat = FUNNEL_MAPS.filter(m => cat.mapIds.includes(m.id));

          return (
            <div 
              key={cat.id}
              className="bg-[#101823] border border-[#1A2638] hover:border-[#F2C45C]/40 rounded-xl p-3 flex flex-col justify-between transition-all group"
            >
              {/* Category Top Banner */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1.5 rounded-lg bg-[#0B111A] border border-[#1A2638]">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <span className="text-[10px] font-mono-code font-bold text-[#F2C45C]">
                      CAT 0{cat.id}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-code font-bold px-1.5 py-0.5 rounded bg-[#0B111A] text-[#AAB2BF] border border-[#1A2638]">
                    {cat.mapsCount} Maps
                  </span>
                </div>

                <div 
                  dir="ltr" 
                  className="text-xs font-latin font-bold text-[#F7F3E8] group-hover:text-[#F2C45C] transition-colors leading-tight"
                >
                  {cat.nameEn}
                </div>
                <div className="text-[11px] font-bold text-[#AAB2BF] mt-0.5 mb-2 leading-tight">
                  {cat.nameAr}
                </div>

                {/* Sub-maps list in this category */}
                <div className="space-y-1 mt-2 border-t border-[#1A2638]/60 pt-2">
                  {mapsInCat.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => onSelectMap?.(m.id)}
                      className="w-full text-right p-1 rounded hover:bg-[#0B111A] transition-colors flex items-center justify-between text-[10.5px] group/item cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-mono-code text-[9px] text-[#F2C45C] font-bold shrink-0">
                          {m.number.replace('MAP ', '#')}
                        </span>
                        <span className="text-[#F7F3E8] group-hover/item:text-[#F2C45C] truncate font-medium">
                          {m.arabicName.replace('Funnel ', '')}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono-code text-[#AAB2BF]/50 group-hover/item:text-[#F2C45C] shrink-0">
                        p.{m.pageNumber}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* Bottom Summary Bar */}
      <div className="bg-[#0B111A] border border-[#1A2638] rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-[#AAB2BF]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#19C878]"></span>
          <span>كل خريطة تم إعدادها لتكون وثيقة عمل بصرية مستقلة قابلة للتنفيذ المباشر.</span>
        </div>
        <span className="font-mono-code text-[11px] text-[#F2C45C]">
          PAGES 05 — 29
        </span>
      </div>

      {/* Footer */}
      <PageFooter pageNumber={4} />
    </div>
  );
};
