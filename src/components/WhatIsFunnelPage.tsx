import React from 'react';
import { PageFooter } from './PageFooter';
import { 
  Compass, 
  Quote, 
  CheckCircle2, 
  ArrowLeft, 
  Sparkles,
  ShoppingBag,
  PhoneCall,
  Download,
  Mail,
  FileCheck,
  Video,
  Share2
} from 'lucide-react';

export const WhatIsFunnelPage: React.FC = () => {
  const possibleActions = [
    { labelAr: "شراء منتج مدفوع", labelEn: "Product Purchase", icon: <ShoppingBag className="w-4 h-4 text-[#F2C45C]" /> },
    { labelAr: "حجز مكالمة استراتيجية", labelEn: "Call Booking", icon: <PhoneCall className="w-4 h-4 text-[#34D399]" /> },
    { labelAr: "تحميل ملف أو أداة مجانية", labelEn: "Lead Magnet Download", icon: <Download className="w-4 h-4 text-[#60A5FA]" /> },
    { labelAr: "إدخال البريد الإلكتروني", labelEn: "Email Opt-in", icon: <Mail className="w-4 h-4 text-[#A78BFA]" /> },
    { labelAr: "التقديم على خدمة كبرى", labelEn: "Service Application", icon: <FileCheck className="w-4 h-4 text-[#F43F5E]" /> },
    { labelAr: "مشاهدة ويبينار تدريبي", labelEn: "Webinar View", icon: <Video className="w-4 h-4 text-[#FBBF24]" /> },
    { labelAr: "الضغط على رابط Affiliate", labelEn: "Affiliate Link Click", icon: <Share2 className="w-4 h-4 text-[#38BDF8]" /> },
  ];

  const coreVisualStages = [
    { step: "01", labelEn: "SOURCE", labelAr: "المصدر والجمهور", descAr: "من أين يأتي الزائر؟ (سوشيال، إعلانات، بحث)" },
    { step: "02", labelEn: "JOURNEY", labelAr: "المسار والصفحات", descAr: "ماذا يرى وما الرسائل التي يتعرض لها أولاً؟" },
    { step: "03", labelEn: "CONVERSION", labelAr: "نقطة التحويل", descAr: "الإجراء الجوهري المستهدف (دفع، حجز، تسجيل)" },
    { step: "04", labelEn: "FOLLOW-UP", labelAr: "المتابعة اللاحقة", descAr: "ماذا يحدث لمن اشترى، ومن لم يشترِ بعد؟" }
  ];

  return (
    <div className="a4-page bg-[#05070B] text-[#F7F3E8] p-8 sm:p-10 flex flex-col justify-between border border-[#101823] shadow-2xl relative">
      {/* Background ambient accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F2C45C]/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <header className="relative z-10 border-b border-[#1A2638] pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono-code font-bold text-[#F2C45C] tracking-wider uppercase">
            FOUNDATIONAL CONCEPT • المفهوم التأسيسي
          </span>
          <span className="text-xs font-mono-code text-[#AAB2BF]/60">
            CHAPTER 01
          </span>
        </div>
        <h1 className="text-3xl font-black text-[#F7F3E8] tracking-tight">
          ما هي خريطة الـ <span className="text-[#F2C45C]">Funnel</span>؟
        </h1>
        <p dir="ltr" className="text-xs font-latin font-medium text-[#AAB2BF] mt-1">
          Understanding the Anatomy of Customer Journeys
        </p>
      </header>

      {/* Main Body */}
      <main className="my-auto py-4 space-y-6 relative z-10">
        {/* Core Definition Box */}
        <div className="bg-[#101823] border border-[#1A2638] rounded-xl p-5 relative">
          <div className="w-1.5 h-full absolute top-0 right-0 bg-[#F2C45C] rounded-r-xl" />
          <p className="text-base sm:text-lg text-[#F7F3E8] leading-relaxed font-semibold">
            خريطة الـ <span className="text-[#F2C45C] font-bold">Funnel</span> هي تمثيل بصري دقيق لرحلة العميل من أول نقطة تواصل يرى فيها رسالتك وحتى الإجراء النهائي المطلوب منه.
          </p>
          <p className="text-xs text-[#AAB2BF] mt-2 leading-relaxed">
            ليست مجرد رسم تخطيطي عشوائي، بل هي <span className="text-[#F7F3E8]">المخطط الهندسي المعماري</span> الذي يسبق أي سطر كود أو قالب تصميم؛ إنها تحدد القيمة، التوقيت، ونقاط الاحتكاك لتقليل التسرب ومضاعفة العائد.
          </p>
        </div>

        {/* 7 Possible Final Actions */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-[#F2C45C] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F2C45C]" />
              <span>قد يكون هذا الإجراء النهائي المطلوب:</span>
            </h2>
            <span className="text-[11px] font-mono-code text-[#AAB2BF]/60">7 CORE CONVERSION GOALS</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {possibleActions.map((action, i) => (
              <div 
                key={i} 
                className="bg-[#0D141D] border border-[#1A2638] rounded-lg p-2.5 flex items-center gap-2.5 hover:border-[#2A3B54] transition-colors"
              >
                <div className="p-1.5 rounded bg-[#101823] border border-[#1A2638]">
                  {action.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#F7F3E8] leading-tight">
                    {action.labelAr}
                  </div>
                  <div dir="ltr" className="text-[9.5px] font-latin text-[#AAB2BF]/70 font-medium">
                    {action.labelEn}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 4-Stage Core Flow Visual */}
        <div className="bg-[#0B111A] border border-[#1A2638] rounded-xl p-5">
          <div className="text-xs font-mono-code font-bold text-[#F2C45C] mb-3 uppercase tracking-wider">
            THE 4 FUNDAMENTAL PILLARS OF ANY FUNNEL
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {coreVisualStages.map((stage, idx) => (
              <div 
                key={stage.step}
                className="bg-[#101823] border border-[#1A2638] rounded-lg p-3 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono-code font-bold text-[#F2C45C]">
                      STAGE {stage.step}
                    </span>
                    <span dir="ltr" className="text-[10px] font-latin font-bold text-[#AAB2BF]/60">
                      {stage.labelEn}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#F7F3E8] mb-1">
                    {stage.labelAr}
                  </div>
                  <p className="text-[10.5px] text-[#AAB2BF] leading-relaxed">
                    {stage.descAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prominent Golden Quote */}
        <div className="bg-gradient-to-r from-[#101823] to-[#0D141D] border-2 border-[#F2C45C]/50 rounded-xl p-6 relative shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-[#F2C45C]/10 border border-[#F2C45C]/30 shrink-0">
              <Quote className="w-6 h-6 text-[#F2C45C]" />
            </div>
            <div>
              <blockquote className="text-base sm:text-lg font-bold text-[#F7F3E8] leading-relaxed font-cairo">
                "أكبر خطأ ليس ضعف التصميم… بل أن تبدأ التصميم قبل أن تعرف من أين يدخل العميل وإلى أين يجب أن يذهب."
              </blockquote>
              <div className="mt-2 text-xs text-[#F2C45C] font-semibold flex items-center gap-2">
                <span>— محمد عادل</span>
                <span className="text-[#AAB2BF]/40">•</span>
                <span className="text-[#AAB2BF] font-normal">استشاري أنظمة التحويل الرقمي</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <PageFooter pageNumber={2} />
    </div>
  );
};
