import React from 'react';
import { AUTHOR_INFO } from '../data/funnelData';
import { PageFooter } from './PageFooter';
import { 
  MessageCircle, 
  Sparkles, 
  Quote, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Compass,
  PhoneCall
} from 'lucide-react';

export const FinalCtaPage: React.FC = () => {
  return (
    <div className="a4-page bg-[#05070B] text-[#F7F3E8] p-8 sm:p-12 flex flex-col justify-between border border-[#101823] shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2C45C]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#101823] rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <header className="relative z-10 border-b border-[#1A2638] pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F2C45C] shadow-[0_0_8px_#F2C45C]"></span>
          <span 
            dir="ltr" 
            className="text-xs font-mono-code font-bold tracking-widest text-[#F2C45C] uppercase"
          >
            NEED A CUSTOM FUNNEL?
          </span>
        </div>
        <span className="text-xs font-mono-code text-[#AAB2BF]/60">
          PAGE 34 • FINAL
        </span>
      </header>

      {/* Main Content */}
      <main className="my-auto py-6 relative z-10 space-y-6">
        {/* Main Headline Block */}
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101823] text-[#F2C45C] text-xs font-semibold border border-[#F2C45C]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>الخطوة القادمة لمشروعك</span>
          </span>

          <h1 className="text-3xl sm:text-4xl font-black text-[#F7F3E8] tracking-tight leading-tight">
            تحتاج <span className="text-[#F2C45C]">Funnel</span> مصممة خصيصًا لمشروعك؟
          </h1>

          <p className="text-sm sm:text-base text-[#AAB2BF] mt-3 leading-relaxed max-w-2xl font-normal">
            لو عندك منتج أو خدمة ومش عارف أنهي Funnel أنسب ليك، أو محتاج تصميم وبناء Funnel متكاملة مبنية على رحلة العميل والعرض الخاص بك، تقدر تتواصل معنا مباشرة.
          </p>
        </div>

        {/* Author & System Identity Card */}
        <div className="bg-[#101823] border border-[#1A2638] rounded-2xl p-6 relative overflow-hidden shadow-xl">
          <div className="w-1.5 h-full absolute top-0 right-0 bg-[#F2C45C]" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#F2C45C] font-mono-code font-bold uppercase tracking-wider block mb-1">
                CONSULTANT & ARCHITECT
              </span>
              <div className="text-2xl font-black text-[#F7F3E8]">
                {AUTHOR_INFO.nameAr}
              </div>
              <div dir="ltr" className="text-sm font-latin font-bold text-[#AAB2BF] mt-0.5">
                {AUTHOR_INFO.roleEn}
              </div>
              <p className="text-xs text-[#AAB2BF]/80 mt-1">
                {AUTHOR_INFO.roleAr}
              </p>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="shrink-0">
              <a
                href={AUTHOR_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#19C878] to-[#12A05E] hover:from-[#1BD681] hover:to-[#14B269] text-[#05070B] font-bold text-sm shadow-[0_4px_20px_rgba(25,200,120,0.3)] transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>تواصل عبر WhatsApp لتصميم الـ Funnel الخاصة بك</span>
              </a>
              <div dir="ltr" className="text-center text-[11px] font-mono-code text-[#AAB2BF]/60 mt-2">
                WhatsApp: +20 150 586 8589
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-5 border-t border-[#1A2638]/70">
            <div className="flex items-center gap-2 text-xs text-[#F7F3E8]">
              <CheckCircle2 className="w-4 h-4 text-[#19C878] shrink-0" />
              <span>هندسة رحلة العميل والـ Offer</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#F7F3E8]">
              <CheckCircle2 className="w-4 h-4 text-[#19C878] shrink-0" />
              <span>كتابة وتصميم صفحات هبوط عالية التحويل</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#F7F3E8]">
              <CheckCircle2 className="w-4 h-4 text-[#19C878] shrink-0" />
              <span>أتمتة الأيميلات وتأهيل العملاء</span>
            </div>
          </div>
        </div>

        {/* Final Positioning Statement */}
        <div className="bg-[#0B111A] border border-[#1A2638] rounded-xl p-5 relative">
          <div className="flex items-start gap-3">
            <Quote className="w-6 h-6 text-[#F2C45C] shrink-0 opacity-80" />
            <blockquote className="text-base sm:text-lg font-bold text-[#F7F3E8] leading-relaxed">
              "لا نبني الصفحة أولًا ثم نفكر في الرحلة…
              <br />
              <span className="text-[#F2C45C]">نحدد الرحلة أولًا، ثم نبني ما يحتاجه العميل فعلًا."</span>
            </blockquote>
          </div>
        </div>
      </main>

      {/* Copyright Footer */}
      <footer className="relative z-10 border-t border-[#1A2638] pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#AAB2BF]/60 gap-2">
        <div>
          جميع الحقوق محفوظة © {AUTHOR_INFO.copyrightYear} {AUTHOR_INFO.nameAr}
        </div>
        <div dir="ltr" className="font-mono-code text-[11px] text-[#F2C45C]/70">
          Visual Funnel Maps Library — All Rights Reserved
        </div>
      </footer>
    </div>
  );
};
