import React from 'react';
import { FunnelNode } from '../data/funnelData';
import { 
  ArrowLeft, 
  ArrowDown, 
  CheckCircle2, 
  Mail, 
  Globe, 
  Calendar, 
  DollarSign, 
  MessageCircle, 
  Video, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface FunnelFlowDiagramProps {
  nodes: FunnelNode[];
}

export const FunnelFlowDiagram: React.FC<FunnelFlowDiagramProps> = ({ nodes }) => {
  // Determine icon based on node type
  const getNodeIcon = (type: FunnelNode['type'], isPrimary?: boolean) => {
    if (isPrimary) return <Sparkles className="w-4 h-4 text-[#F2C45C]" />;
    switch (type) {
      case 'traffic':
        return <Globe className="w-3.5 h-3.5 text-[#60A5FA]" />;
      case 'email':
        return <Mail className="w-3.5 h-3.5 text-[#A78BFA]" />;
      case 'calendar':
        return <Calendar className="w-3.5 h-3.5 text-[#34D399]" />;
      case 'whatsapp':
        return <MessageCircle className="w-3.5 h-3.5 text-[#22C55E]" />;
      case 'video':
        return <Video className="w-3.5 h-3.5 text-[#F43F5E]" />;
      case 'offer':
      case 'conversion':
      case 'upsell':
        return <DollarSign className="w-3.5 h-3.5 text-[#F2C45C]" />;
      case 'quiz':
        return <HelpCircle className="w-3.5 h-3.5 text-[#38BDF8]" />;
      default:
        return <CheckCircle2 className="w-3.5 h-3.5 text-[#AAB2BF]" />;
    }
  };

  return (
    <div className="w-full my-auto py-2">
      <div className="bg-[#0B111A]/90 border border-[#1A2638] rounded-xl p-4 sm:p-5 relative overflow-hidden shadow-2xl">
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(#F2C45C 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
        />

        {/* Section title & Legend */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1A2638]/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F2C45C] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F2C45C] font-latin">
              CUSTOMER JOURNEY MAP • مسار تدفق العميل
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#AAB2BF]/80">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-[#F2C45C]"></span>
              <span className="font-semibold text-[#F2C45C]">نقطة التحويل الرئيسية</span>
            </span>
            <span className="text-[#AAB2BF]/30">|</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#34D399]"></span>
              <span>تسلسل الخطوات</span>
            </span>
          </div>
        </div>

        {/* Interconnected Flow Grid: 
            For standard 6-10 nodes, we render them sequentially with clear directional flow.
            We use a 3-column / 4-column flow layout with arrows that never cross text! */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 relative">
          {nodes.map((node, index) => {
            const isLast = index === nodes.length - 1;
            const isPrimary = node.isPrimaryConversion;

            return (
              <div key={node.id} className="relative flex flex-col">
                <div
                  className={`relative z-10 flex flex-col justify-between h-full p-3 rounded-lg transition-all duration-200 ${
                    isPrimary
                      ? 'bg-[#101823] border-2 border-[#F2C45C] shadow-[0_0_20px_rgba(242,196,92,0.18)]'
                      : 'bg-[#0D141D] border border-[#1A2638] hover:border-[#2A3B54]'
                  }`}
                >
                  {/* Top row: step number + icon */}
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[10px] font-mono-code font-bold px-1.5 py-0.5 rounded ${
                        isPrimary
                          ? 'bg-[#F2C45C] text-[#05070B]'
                          : 'bg-[#1A2638] text-[#AAB2BF]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="flex items-center gap-1">
                      {isPrimary && (
                        <span className="text-[9px] font-bold text-[#F2C45C] bg-[#F2C45C]/15 px-1.5 py-0.5 rounded border border-[#F2C45C]/30">
                          PRIMARY CONVERSION
                        </span>
                      )}
                      <div className="p-1 rounded bg-[#101823]/80 border border-[#1A2638]/60">
                        {getNodeIcon(node.type, isPrimary)}
                      </div>
                    </div>
                  </div>

                  {/* English Label (Fixed LTR) */}
                  <div 
                    dir="ltr" 
                    className={`font-latin text-[11px] font-extrabold tracking-wide uppercase truncate ${
                      isPrimary ? 'text-[#F2C45C]' : 'text-[#F7F3E8]'
                    }`}
                  >
                    {node.labelEn}
                  </div>

                  {/* Arabic Label */}
                  <div className={`text-xs font-bold mt-0.5 leading-snug ${
                    isPrimary ? 'text-[#F7F3E8]' : 'text-[#AAB2BF]'
                  }`}>
                    {node.labelAr}
                  </div>

                  {/* Subtext description if available */}
                  {node.subtextAr && (
                    <div className="text-[10px] text-[#AAB2BF]/70 mt-1.5 pt-1.5 border-t border-[#1A2638]/50 leading-tight">
                      {node.subtextAr}
                    </div>
                  )}
                </div>

                {/* Directional arrow to next node if not last */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -left-2.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    {/* Rendered in RTL so arrow points left in reading order, or down on wraps */}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Linear Flow Summary Pill (Direct sequence preview) */}
        <div className="mt-4 pt-3 border-t border-[#1A2638]/60 flex flex-wrap items-center gap-1.5 text-[11px] font-latin">
          <span className="text-[10px] font-bold text-[#AAB2BF]/60 ml-2 font-cairo">
            المسار السريع:
          </span>
          {nodes.map((node, i) => (
            <React.Fragment key={`pill-${node.id}`}>
              <span
                dir="ltr"
                className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                  node.isPrimaryConversion
                    ? 'bg-[#F2C45C] text-[#05070B] font-bold shadow-sm'
                    : 'bg-[#101823] text-[#AAB2BF] border border-[#1A2638]'
                }`}
              >
                {node.labelEn}
              </span>
              {i < nodes.length - 1 && (
                <span className="text-[#AAB2BF]/40 text-xs px-0.5">←</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
