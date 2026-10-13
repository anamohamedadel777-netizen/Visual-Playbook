import React, { useState, useEffect } from 'react';
import { PageFooter } from './PageFooter';
import { PenLine, RotateCcw, Sparkles, CheckSquare } from 'lucide-react';

interface WorksheetData {
  projectName: string;
  targetAudience: string;
  problem: string;
  offer: string;
  trafficSource: string;
  primaryCta: string;
  conversionEvent: string;
  requiredPages: string;
  followUp: string;
  mainObjection: string;
  step1: string;
  step2: string;
  step3: string;
}

const DEFAULT_DATA: WorksheetData = {
  projectName: "إطلاق برنامج الاستشارات الخاصة Q4",
  targetAudience: "أصحاب وكالات التسويق ومتاجر التجارة الإلكترونية التي تحقق +$10k شهرياً",
  problem: "تكلفة إعلانات مرتفعة ومعدل تحويل ضعيف لعدم وجود مسار مؤتمت واضح",
  offer: "برنامج تدريبي وتنفيذي لمدة 6 أسابيع لإعادة هيكلة الفانل ومضاعفة قيمة الطلب",
  trafficSource: "Meta Video Ads (ترافيك جديد) + لينكد إن أورجانيك",
  primaryCta: "تقديم طلب الانضمام وحجز موعد المكالمة الاستراتيجية",
  conversionEvent: "COMPLETED APPLICATION & BOOKING",
  requiredPages: "صفحة VSL + استمارة فلترة + تقويم Cal.com + صفحة تأكيد بفيديو تحضيري",
  followUp: "سلسلة أوتوميشن 4 رسائل إيميل وواتساب تذكيرية بنسبة حضور عالية",
  mainObjection: "هل هذا النظام يناسب مجالي بالتحديد؟ ولماذا لا أكتفي بإعلانات الرسائل؟",
  step1: "صفحة VSL وفيديو توضيحي",
  step2: "استمارة تقييم وتأهيل (Quiz/Application)",
  step3: "جدول مواعيد الحجز المباشر"
};

export const WorksheetPage: React.FC = () => {
  const [data, setData] = useState<WorksheetData>(() => {
    try {
      const saved = localStorage.getItem('my_funnel_worksheet');
      return saved ? JSON.parse(saved) : DEFAULT_DATA;
    } catch {
      return DEFAULT_DATA;
    }
  });

  const handleChange = (field: keyof WorksheetData, value: string) => {
    const updated = { ...data, [field]: value };
    setData(updated);
    try {
      localStorage.setItem('my_funnel_worksheet', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleReset = () => {
    setData({
      projectName: "",
      targetAudience: "",
      problem: "",
      offer: "",
      trafficSource: "",
      primaryCta: "",
      conversionEvent: "",
      requiredPages: "",
      followUp: "",
      mainObjection: "",
      step1: "",
      step2: "",
      step3: ""
    });
  };

  return (
    <div className="a4-page bg-[#05070B] text-[#F7F3E8] p-6 sm:p-8 flex flex-col justify-between border border-[#101823] shadow-2xl relative">
      {/* Background ambient accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F2C45C]/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 border-b border-[#1A2638] pb-2.5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-mono-code font-bold text-[#F2C45C] tracking-wider uppercase flex items-center gap-1.5">
            <PenLine className="w-3.5 h-3.5" />
            <span>PRACTICAL BLUEPRINT WORKSHEET • ورقة عمل المخطط التنفيذي</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="no-print text-[10px] text-[#AAB2BF]/60 hover:text-[#F2C45C] flex items-center gap-1 transition-colors px-2 py-0.5 rounded bg-[#101823] border border-[#1A2638]"
              title="تفريغ الحقول لكتابتها من جديد"
            >
              <RotateCcw className="w-3 h-3" />
              <span>تفريغ الحقول</span>
            </button>
            <span className="text-xs font-mono-code text-[#AAB2BF]/60">
              PAGE 33
            </span>
          </div>
        </div>
        <div className="flex items-baseline justify-between">
          <h1 className="text-2xl font-black text-[#F7F3E8] tracking-tight">
            ارسم <span className="text-[#F2C45C]">Funnel</span> مشروعك
          </h1>
          <span dir="ltr" className="text-[11px] font-latin font-bold text-[#AAB2BF]/70">
            Interactive Planning Canvas
          </span>
        </div>
      </header>

      {/* Main Content: 10 Strategic Fields + Visual Flow */}
      <main className="my-auto py-2 space-y-3 relative z-10">
        {/* Top 10 Form Fields Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* Field 1: اسم المشروع */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2">
            <label className="text-[10px] font-bold text-[#F2C45C] block mb-1">
              اسم المشروع • Project Name
            </label>
            <input
              type="text"
              value={data.projectName}
              onChange={(e) => handleChange('projectName', e.target.value)}
              placeholder="اكتب اسم مشروعك أو حملتك..."
              className="w-full bg-[#0D141D] border border-[#1A2638] rounded px-2.5 py-1 text-xs text-[#F7F3E8] focus:outline-none focus:border-[#F2C45C]"
            />
          </div>

          {/* Field 2: الجمهور */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2">
            <label className="text-[10px] font-bold text-[#AAB2BF] block mb-1">
              الجمهور المستهدف • Target Audience
            </label>
            <input
              type="text"
              value={data.targetAudience}
              onChange={(e) => handleChange('targetAudience', e.target.value)}
              placeholder="من هو العميل المثالي؟"
              className="w-full bg-[#0D141D] border border-[#1A2638] rounded px-2.5 py-1 text-xs text-[#F7F3E8] focus:outline-none focus:border-[#F2C45C]"
            />
          </div>

          {/* Field 3: المشكلة */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2">
            <label className="text-[10px] font-bold text-[#AAB2BF] block mb-1">
              المشكلة الأساسية • Core Pain Point
            </label>
            <input
              type="text"
              value={data.problem}
              onChange={(e) => handleChange('problem', e.target.value)}
              placeholder="ما الألم الذي يعاني منه ويريد حله فوراً؟"
              className="w-full bg-[#0D141D] border border-[#1A2638] rounded px-2.5 py-1 text-xs text-[#F7F3E8] focus:outline-none focus:border-[#F2C45C]"
            />
          </div>

          {/* Field 4: العرض */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2">
            <label className="text-[10px] font-bold text-[#F2C45C] block mb-1">
              العرض المقدم • The Irresistible Offer
            </label>
            <input
              type="text"
              value={data.offer}
              onChange={(e) => handleChange('offer', e.target.value)}
              placeholder="ما الذي تقدمه كحل وبأي سعر وشروط؟"
              className="w-full bg-[#0D141D] border border-[#1A2638] rounded px-2.5 py-1 text-xs text-[#F7F3E8] focus:outline-none focus:border-[#F2C45C]"
            />
          </div>

          {/* Field 5: Traffic Source */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2">
            <label className="text-[10px] font-bold text-[#AAB2BF] block mb-1">
              مصدر الزيارات • Traffic Source
            </label>
            <input
              type="text"
              value={data.trafficSource}
              onChange={(e) => handleChange('trafficSource', e.target.value)}
              placeholder="Meta Ads, LinkedIn, YouTube, SEO..."
              className="w-full bg-[#0D141D] border border-[#1A2638] rounded px-2.5 py-1 text-xs text-[#F7F3E8] focus:outline-none focus:border-[#F2C45C]"
            />
          </div>

          {/* Field 6: Primary CTA */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2">
            <label className="text-[10px] font-bold text-[#AAB2BF] block mb-1">
              زر الإجراء الرئيسي • Primary CTA
            </label>
            <input
              type="text"
              value={data.primaryCta}
              onChange={(e) => handleChange('primaryCta', e.target.value)}
              placeholder="احجز مكالمتك / اشترِ الآن / انضم فوراً..."
              className="w-full bg-[#0D141D] border border-[#1A2638] rounded px-2.5 py-1 text-xs text-[#F7F3E8] focus:outline-none focus:border-[#F2C45C]"
            />
          </div>

          {/* Field 7: Conversion Event */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2">
            <label className="text-[10px] font-bold text-[#F2C45C] block mb-1">
              نقطة التحويل الدقيقة • Conversion Event
            </label>
            <input
              type="text"
              value={data.conversionEvent}
              onChange={(e) => handleChange('conversionEvent', e.target.value)}
              placeholder="إدخال الإيميل / الدفع / حجز التقويم..."
              className="w-full bg-[#0D141D] border border-[#1A2638] rounded px-2.5 py-1 text-xs text-[#F7F3E8] focus:outline-none focus:border-[#F2C45C]"
            />
          </div>

          {/* Field 8: Required Pages */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2">
            <label className="text-[10px] font-bold text-[#AAB2BF] block mb-1">
              الصفحات المطلوبة • Required Pages
            </label>
            <input
              type="text"
              value={data.requiredPages}
              onChange={(e) => handleChange('requiredPages', e.target.value)}
              placeholder="كم صفحة ستحتاج وما وظيفة كل منها؟"
              className="w-full bg-[#0D141D] border border-[#1A2638] rounded px-2.5 py-1 text-xs text-[#F7F3E8] focus:outline-none focus:border-[#F2C45C]"
            />
          </div>

          {/* Field 9: Follow-up */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2">
            <label className="text-[10px] font-bold text-[#AAB2BF] block mb-1">
              خطة المتابعة • Follow-up Automation
            </label>
            <input
              type="text"
              value={data.followUp}
              onChange={(e) => handleChange('followUp', e.target.value)}
              placeholder="إيميلات، واتساب، تذكيرات، ريتارجتنج..."
              className="w-full bg-[#0D141D] border border-[#1A2638] rounded px-2.5 py-1 text-xs text-[#F7F3E8] focus:outline-none focus:border-[#F2C45C]"
            />
          </div>

          {/* Field 10: Main Objection */}
          <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2">
            <label className="text-[10px] font-bold text-[#E05252] block mb-1">
              أكبر اعتراض متوقع • Main Objection
            </label>
            <input
              type="text"
              value={data.mainObjection}
              onChange={(e) => handleChange('mainObjection', e.target.value)}
              placeholder="ما الذي قد يمنع العميل من الشراء؟"
              className="w-full bg-[#0D141D] border border-[#1A2638] rounded px-2.5 py-1 text-xs text-[#F7F3E8] focus:outline-none focus:border-[#F2C45C]"
            />
          </div>
        </div>

        {/* Blank Visual Flow Canvas */}
        <div className="bg-[#0B111A] border-2 border-dashed border-[#F2C45C]/40 rounded-xl p-3.5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono-code font-bold text-[#F2C45C] uppercase tracking-wider">
              YOUR VISUAL PIPELINE • التدفق البصري المقترح لمشروعك
            </span>
            <span className="text-[10px] text-[#AAB2BF]/60">
              املأ الخطوات المتوسطة لتكتمل خريطتك
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {/* Step 1: TRAFFIC */}
            <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2 text-center flex flex-col justify-between">
              <span className="text-[9px] font-mono-code text-[#60A5FA] font-bold block mb-1">
                STEP 01
              </span>
              <div dir="ltr" className="font-latin text-[10px] font-bold text-[#60A5FA]">
                [ TRAFFIC ]
              </div>
              <div className="text-[9.5px] text-[#AAB2BF] mt-1 truncate">
                {data.trafficSource || "مصدر الزوار"}
              </div>
            </div>

            {/* Step 2: Writable Node 1 */}
            <div className="bg-[#0D141D] border border-[#1A2638] rounded-lg p-1.5 text-center flex flex-col justify-between">
              <span className="text-[9px] font-mono-code text-[#AAB2BF]/60 font-bold block mb-0.5">
                STEP 02
              </span>
              <input
                type="text"
                value={data.step1}
                onChange={(e) => handleChange('step1', e.target.value)}
                placeholder="[ المحطة الأولى ]"
                className="w-full bg-transparent text-center text-[10px] font-bold text-[#F7F3E8] focus:outline-none border-b border-[#1A2638] focus:border-[#F2C45C]"
              />
              <span className="text-[8.5px] text-[#AAB2BF]/50 mt-0.5">مثلاً: Landing Page</span>
            </div>

            {/* Step 3: Writable Node 2 */}
            <div className="bg-[#0D141D] border border-[#1A2638] rounded-lg p-1.5 text-center flex flex-col justify-between">
              <span className="text-[9px] font-mono-code text-[#AAB2BF]/60 font-bold block mb-0.5">
                STEP 03
              </span>
              <input
                type="text"
                value={data.step2}
                onChange={(e) => handleChange('step2', e.target.value)}
                placeholder="[ المحطة الثانية ]"
                className="w-full bg-transparent text-center text-[10px] font-bold text-[#F7F3E8] focus:outline-none border-b border-[#1A2638] focus:border-[#F2C45C]"
              />
              <span className="text-[8.5px] text-[#AAB2BF]/50 mt-0.5">مثلاً: Quiz / Form</span>
            </div>

            {/* Step 4: Writable Node 3 */}
            <div className="bg-[#0D141D] border border-[#1A2638] rounded-lg p-1.5 text-center flex flex-col justify-between">
              <span className="text-[9px] font-mono-code text-[#AAB2BF]/60 font-bold block mb-0.5">
                STEP 04
              </span>
              <input
                type="text"
                value={data.step3}
                onChange={(e) => handleChange('step3', e.target.value)}
                placeholder="[ المحطة الثالثة ]"
                className="w-full bg-transparent text-center text-[10px] font-bold text-[#F7F3E8] focus:outline-none border-b border-[#1A2638] focus:border-[#F2C45C]"
              />
              <span className="text-[8.5px] text-[#AAB2BF]/50 mt-0.5">مثلاً: Calendar / VSL</span>
            </div>

            {/* Step 5: CONVERSION */}
            <div className="bg-[#101823] border-2 border-[#F2C45C] rounded-lg p-2 text-center flex flex-col justify-between shadow-[0_0_12px_rgba(242,196,92,0.15)]">
              <span className="text-[9px] font-mono-code text-[#F2C45C] font-bold block mb-1">
                STEP 05 ★
              </span>
              <div dir="ltr" className="font-latin text-[10px] font-black text-[#F2C45C]">
                [ CONVERSION ]
              </div>
              <div className="text-[9.5px] text-[#F7F3E8] font-bold mt-1 truncate">
                {data.conversionEvent || "نقطة التحويل"}
              </div>
            </div>

            {/* Step 6: FOLLOW-UP */}
            <div className="bg-[#101823] border border-[#1A2638] rounded-lg p-2 text-center flex flex-col justify-between">
              <span className="text-[9px] font-mono-code text-[#34D399] font-bold block mb-1">
                STEP 06
              </span>
              <div dir="ltr" className="font-latin text-[10px] font-bold text-[#34D399]">
                [ FOLLOW-UP ]
              </div>
              <div className="text-[9.5px] text-[#AAB2BF] mt-1 truncate">
                {data.followUp || "المتابعة الآلية"}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <PageFooter pageNumber={33} />
    </div>
  );
};
