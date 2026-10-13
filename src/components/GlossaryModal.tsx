import React, { useState } from 'react';
import { X, Search, BookOpen, ExternalLink } from 'lucide-react';

interface GlossaryTerm {
  termEn: string;
  termAr: string;
  definitionAr: string;
  exampleAr: string;
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    termEn: "Funnel",
    termAr: "قمع المبيعات / مسار التحويل",
    definitionAr: "سلسلة خطوات مدروسة تقود الزائر من مرحلة عدم المعرفة بالمنتج وحتى الشراء أو اتخاذ الإجراء النهائي.",
    exampleAr: "مثل مسار: إعلان ← صفحة هبوط ← هدية مجانية ← إيميل متابعة ← صفحة شراء."
  },
  {
    termEn: "Traffic",
    termAr: "الزيارات / الترافيك",
    definitionAr: "تدفق المستخدمين أو الزوار الذين يصلون إلى موقعك أو صفحتك من مصادر مختلفة.",
    exampleAr: "ترافيك ممول (Paid Ads) أو ترافيك عضوي مجاني (Organic Content)."
  },
  {
    termEn: "Landing Page",
    termAr: "صفحة الهبوط",
    definitionAr: "صفحة ويب مخصصة لغرض وحيد وواضح، خالية من المشتتات والروابط الجانبية لتحقيق هدف محدد.",
    exampleAr: "صفحة مخصصة فقط لتسجيل الاسم والإيميل لتحميل ملف PDF."
  },
  {
    termEn: "Lead Magnet",
    termAr: "الهدية الجاذبة / المغناطيس",
    definitionAr: "قيمة مجانية عالية وسريعة الاستهلاك يقدمها صاحب العمل للزائر مقابل الحصول على بيانات تواصله.",
    exampleAr: "كتاب إلكتروني، قائمة تدقيق (Checklist)، أو قالب جاهز (Template)."
  },
  {
    termEn: "Tripwire",
    termAr: "العرض الرمزي الاستدرافي",
    definitionAr: "منتج قيمته عالية جداً يُباع بسعر منخفض ورمزي ($7-$27) لتحويل الزائر إلى مشترٍ فوراً وتغطية تكلفة الإعلانات.",
    exampleAr: "ورشة عمل تدريبية مسجلة قيمتها $100 معروضة بـ $15 فقط لمرة واحدة."
  },
  {
    termEn: "VSL (Video Sales Letter)",
    termAr: "فيديو المبيعات الإقناعي",
    definitionAr: "مقطع فيديو تسويقي مكتوب بسيناريو إقناعي دقيق يستهدف تفكيك القناعات الخاطئة وطرح العرض والضمان.",
    exampleAr: "فيديو 12 دقيقة يشرح طريقة عمل نظامنا التسويقي قبل ظهور زر الحجز."
  },
  {
    termEn: "Order Bump",
    termAr: "الإضافة اللحظية في صفحة الدفع",
    definitionAr: "عرض تكميلي صغير يظهر داخل صفحة الدفع (Checkout) كزر اختيار (Checkbox) يضيف قيمة مقابل مبلغ زهيد.",
    exampleAr: "إضافة التسجيل الصوتي أو مذكرة التلخيص بـ $9 بضغطة واحدة قبل إتمام الدفع."
  },
  {
    termEn: "Upsell (OTO)",
    termAr: "عرض الترقية / البيع الأعلى",
    definitionAr: "عرض يظهر بعد عملية الشراء مباشرة لترقية الطلب أو الحصول على نسخة أسرع أو أكثر شمولاً قبل الخروج.",
    exampleAr: "عرض شراء جلسة مراجعة شخصية بخصم 50% بعد شراء الكورس مباشرة."
  },
  {
    termEn: "Downsell",
    termAr: "العرض البديل المخفض",
    definitionAr: "عرض يظهر فقط لمن رفض الـ Upsell، يقدم جزءاً من القيمة بسعر أقل ليناسب ميزانية المترددين.",
    exampleAr: "إذا رفضت التدريب الفردي بـ $300، يعرض عليك الانضمام لمجموعة جماعية بـ $99."
  },
  {
    termEn: "CTA (Call to Action)",
    termAr: "الدعوة لاتخاذ الإجراء",
    definitionAr: "الزر أو العبارة التوجيهية التي تطلب من المستخدم فعل الخطوة التالية المباشرة.",
    exampleAr: "مثل: 'احجز مكانك الآن'، 'حمل الدليل فوراً'، 'انضم للقائمة'."
  },
  {
    termEn: "Conversion Rate (CR)",
    termAr: "معدل التحويل",
    definitionAr: "النسبة المئوية للزوار الذين أكملوا الإجراء المطلوب مقارنة بإجمالي عدد الزوار الكلي.",
    exampleAr: "إذا زار الصفحة 100 شخص واشترى 5، فإن معدل التحويل هو 5%."
  },
  {
    termEn: "Follow-up",
    termAr: "المتابعة والرعاية المؤتمتة",
    definitionAr: "سلسلة من الرسائل (إيميل أو واتساب أو SMS) تُرسل آلياً للعميل بعد اتخاذه إجراءً مبدئياً لبناء الثقة أو إتمام الشراء.",
    exampleAr: "3 رسائل ترحيبية تشرح طريقة الاستفادة من الهدية المجانية وتطرح العرض المدفوع."
  }
];

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const filtered = GLOSSARY_TERMS.filter(item => 
    item.termEn.toLowerCase().includes(search.toLowerCase()) ||
    item.termAr.includes(search) ||
    item.definitionAr.includes(search)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#0B111A] border border-[#1A2638] rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#1A2638] flex items-center justify-between bg-[#101823]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#0B111A] border border-[#1A2638]">
              <BookOpen className="w-5 h-5 text-[#F2C45C]" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#F7F3E8]">
                قاموس مصطلحات الـ Funnels
              </h2>
              <p dir="ltr" className="text-xs font-latin text-[#AAB2BF]">
                Marketing Terms Glossary (English & Arabic)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#AAB2BF] hover:text-[#F7F3E8] hover:bg-[#1A2638] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-[#1A2638] bg-[#0D141D]">
          <div className="relative">
            <Search className="w-4 h-4 text-[#AAB2BF] absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث بالإنجليزية أو العربية (مثل: Upsell, VSL, Lead Magnet)..."
              className="w-full bg-[#101823] border border-[#1A2638] rounded-xl pr-9 pl-4 py-2 text-xs sm:text-sm text-[#F7F3E8] focus:outline-none focus:border-[#F2C45C]"
            />
          </div>
        </div>

        {/* Terms list */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1 divide-y divide-[#1A2638]/40">
          {filtered.map((item, idx) => (
            <div key={idx} className="pt-3 first:pt-0">
              <div className="flex items-center justify-between mb-1">
                <span 
                  dir="ltr" 
                  className="font-latin text-sm font-bold text-[#F2C45C]"
                >
                  {item.termEn}
                </span>
                <span className="text-xs font-bold text-[#F7F3E8]">
                  {item.termAr}
                </span>
              </div>
              <p className="text-xs text-[#AAB2BF] leading-relaxed">
                {item.definitionAr}
              </p>
              <div className="mt-1.5 text-[11px] text-[#34D399] bg-[#0B111A] p-2 rounded border border-[#1A2638] font-medium leading-snug">
                <span className="text-[#AAB2BF]/70 font-bold ml-1">مثال:</span>
                {item.exampleAr}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-8 text-xs text-[#AAB2BF]">
              لا توجد مصطلحات مطابقة لبحثك.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-[#1A2638] bg-[#101823] flex items-center justify-between text-xs text-[#AAB2BF]/70">
          <span>دليل مصطلحات دقيق يحافظ على سلامة النص الإنجليزي والعربي</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-[#1A2638] text-[#F7F3E8] hover:bg-[#F2C45C] hover:text-[#05070B] transition-colors font-medium text-xs"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
