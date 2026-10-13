import React from 'react';
import { PageFooter } from './PageFooter';
import { 
  Target, 
  Map, 
  PenTool, 
  CheckCircle2, 
  HelpCircle,
  Sparkles,
  Layers,
  ArrowDown
} from 'lucide-react';

export const HowToUsePage: React.FC = () => {
  const threeSteps = [
    {
      num: "01",
      titleAr: "حدد هدفك النهائي بوضوح",
      titleEn: "Define Your Conversion Goal",
      questionAr: "ما هو الإجراء الوحيد الذي ترغب في أن يتخذه العميل في نهاية الرحلة؟",
      descAr: "هل هدفك جمع 5,000 إيميل؟ بيع كورس بـ $97؟ تأمين 10 مكالمات استشارية أسبوعياً؟ أو بيع خدمة B2B بـ $5,000؟ وضوح الهدف يحسم 80% من الاختيار.",
      icon: <Target className="w-5 h-5 text-[#F2C45C]" />
    },
    {
      num: "02",
      titleAr: "اختر الخريطة المناسبة لموقفك",
      titleEn: "Select the Matching Blueprint",
      questionAr: "اختر الخريطة بحسب نوع العرض، مصدر الترافيك، ومستوى وعي الجمهور.",
      descAr: "استعن بـ 'فهرس التصنيفات' أو 'مصفوفة الاختيار' السريعة لاختيار الفانل التي تناسب ميزانيتك، ونوعية الزوار، وسرعة الإطلاق المطلوبة دون مبالغة.",
      icon: <Map className="w-5 h-5 text-[#34D399]" />
    },
    {
      num: "03",
      titleAr: "ارسم نسختك قبل فتح أي أداة تصميم",
      titleEn: "Map Your Custom Version First",
      questionAr: "خصص الخريطة لمشروعك واكتب رسائلك وعناوينك قبل فتح Webflow أو WordPress.",
      descAr: "استخدم ورقة عمل الفانل (Worksheet) المرفقة بالدليل لرسم وتحديد صفحاتك ونقاط تحويلك وسلسلة الإيميلات؛ لا تبدأ التصميم قبل اكتمال الخريطة.",
      icon: <PenTool className="w-5 h-5 text-[#60A5FA]" />
    }
  ];

  const anatomyElements = [
    { labelAr: "الهدف (Goal)", descAr: "النتيجة الرقمية المحددة للرحلة" },
    { labelAr: "مناسبة لمن (Best For)", descAr: "نوع البيزنس والخدمة الأنسب" },
    { labelAr: "مصادر الـ Traffic", descAr: "قنوات الترويج ومستوى وعي الزائر" },
    { labelAr: "الخريطة البصرية (The Map)", descAr: "التدفق البصري المتسلسل للخطوات" },
    { labelAr: "نقطة التحويل (Conversion)", descAr: "الإجراء الجوهري المميز باللون الذهبي" },
    { labelAr: "لماذا تعمل؟ (Why It Works)", descAr: "السبب السيكولوجي والتسويقي لنجاحها" },
    { labelAr: "أشهر خطأ (Common Mistake)", descAr: "المطب الشائع الذي يدمر النتائج" },
    { labelAr: "ملاحظة تنفيذية (Execution Tip)", descAr: "توجيه عملي مباشر من واقع التطبيق" },
  ];

  return (
    <div className="a4-page bg-[#05070B] text-[#F7F3E8] p-8 sm:p-10 flex flex-col justify-between border border-[#101823] shadow-2xl relative">
      {/* Background ambient accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F2C45C]/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 border-b border-[#1A2638] pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono-code font-bold text-[#F2C45C] tracking-wider uppercase">
            OPERATING FRAMEWORK • إطار التشغيل
          </span>
          <span className="text-xs font-mono-code text-[#AAB2BF]/60">
            CHAPTER 02
          </span>
        </div>
        <h1 className="text-3xl font-black text-[#F7F3E8] tracking-tight">
          كيف تستخدم هذه <span className="text-[#F2C45C]">المكتبة</span>؟
        </h1>
        <p dir="ltr" className="text-xs font-latin font-medium text-[#AAB2BF] mt-1">
          A 3-Step Execution Playbook for Maximum Conversion
        </p>
      </header>

      {/* Main Content */}
      <main className="my-auto py-3 space-y-5 relative z-10">
        {/* Three Step System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {threeSteps.map((step) => (
            <div 
              key={step.num}
              className="bg-[#101823] border border-[#1A2638] rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group hover:border-[#F2C45C]/40 transition-all"
            >
              <div className="w-full h-1 absolute top-0 right-0 bg-gradient-to-l from-[#F2C45C] to-transparent" />
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-mono-code font-black text-[#F2C45C]">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-lg bg-[#0B111A] border border-[#1A2638]">
                    {step.icon}
                  </div>
                </div>

                <h2 className="text-sm font-bold text-[#F7F3E8] mb-1">
                  {step.titleAr}
                </h2>
                <div dir="ltr" className="text-[10px] font-latin font-semibold text-[#AAB2BF]/70 mb-2">
                  {step.titleEn}
                </div>

                <div className="text-[11px] font-semibold text-[#F2C45C] bg-[#0B111A]/80 p-2 rounded border border-[#1A2638] mb-2 leading-snug">
                  {step.questionAr}
                </div>

                <p className="text-[11px] text-[#AAB2BF] leading-relaxed">
                  {step.descAr}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Breakdown of Map Components */}
        <div className="bg-[#0B111A] border border-[#1A2638] rounded-xl p-5">
          <div className="flex items-center justify-between mb-3 border-b border-[#1A2638]/70 pb-2">
            <h2 className="text-xs font-mono-code font-bold text-[#F2C45C] uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>مكونات كل خريطة في هذا الدليل • MAP ANATOMY</span>
            </h2>
            <span className="text-[11px] text-[#AAB2BF]/70">
              هيكل موحد لكل صفحة لضمان سهولة الفهم والسرعة
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {anatomyElements.map((elem, i) => (
              <div 
                key={i}
                className="bg-[#101823] border border-[#1A2638] rounded-lg p-2.5 flex flex-col justify-between"
              >
                <div className="text-xs font-bold text-[#F7F3E8] flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F2C45C]"></span>
                  <span>{elem.labelAr}</span>
                </div>
                <p className="text-[10px] text-[#AAB2BF] leading-tight">
                  {elem.descAr}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Golden Rule */}
        <div className="bg-[#101823] border border-[#1A2638] rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#F2C45C]/10 text-[#F2C45C] shrink-0 font-bold text-xs font-mono-code">
              RULE #1
            </div>
            <p className="text-xs sm:text-sm text-[#F7F3E8] font-semibold leading-relaxed">
              لا تنتقل لأداة التصميم (Framer, Elementor, ClickFunnels) إلا ولديك مسار مكتوب ومحدد بالكامل من الزيارة وحتى البيع والمتابعة.
            </p>
          </div>
          <span className="text-[11px] font-mono-code text-[#19C878] hidden sm:block shrink-0 px-2 py-1 rounded bg-[#19C878]/10 border border-[#19C878]/30">
            PROVEN WORKFLOW
          </span>
        </div>
      </main>

      {/* Footer */}
      <PageFooter pageNumber={3} />
    </div>
  );
};
