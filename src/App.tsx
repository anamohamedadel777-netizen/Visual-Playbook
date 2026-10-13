/**
 * VISUAL FUNNEL MAPS LIBRARY — مكتبة خرائط الـ Funnels
 * Author: محمد عادل
 * Complete 34-Page Strategic Playbook & Operating Manual
 */

import React, { useState, useEffect, useRef } from 'react';
import { FUNNEL_MAPS, CATEGORIES, AUTHOR_INFO } from './data/funnelData';
import { CoverPage } from './components/CoverPage';
import { WhatIsFunnelPage } from './components/WhatIsFunnelPage';
import { HowToUsePage } from './components/HowToUsePage';
import { IndexDirectoryPage } from './components/IndexDirectoryPage';
import { FunnelPage } from './components/FunnelPage';
import { FunnelSelectorPage } from './components/FunnelSelectorPage';
import { FunnelMatrixPage } from './components/FunnelMatrixPage';
import { CommonMistakesPage } from './components/CommonMistakesPage';
import { WorksheetPage } from './components/WorksheetPage';
import { FinalCtaPage } from './components/FinalCtaPage';
import { GlossaryModal } from './components/GlossaryModal';
import {
  ChevronRight,
  ChevronLeft,
  Printer,
  BookOpen,
  LayoutGrid,
  FileText,
  Search,
  MessageCircle,
  HelpCircle,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Layers,
  Sparkles,
  Share2,
  CheckCircle2,
  ArrowUp
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'single' | 'continuous' | 'gallery' | 'worksheet'>('single');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const TOTAL_PAGES = 34;

  // Track scroll position in continuous mode
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for single page view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'single') return;
      if (e.key === 'ArrowLeft') {
        // In RTL, left arrow goes to next page
        handleNextPage();
      } else if (e.key === 'ArrowRight') {
        // In RTL, right arrow goes to previous page
        handlePrevPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, viewMode]);

  const handleNextPage = () => {
    if (currentPage < TOTAL_PAGES) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleJumpToPage = (pageNum: number) => {
    setCurrentPage(pageNum);
    if (viewMode === 'gallery') {
      setViewMode('single');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMapById = (mapId: number) => {
    const targetMap = FUNNEL_MAPS.find(m => m.id === mapId);
    if (targetMap) {
      handleJumpToPage(targetMap.pageNumber);
    }
  };

  const handlePrint = () => {
    // If in single page mode, temporary advice or direct trigger
    window.print();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  // Render a specific page by index (1 to 34)
  const renderPageComponent = (pageIndex: number) => {
    if (pageIndex === 1) return <CoverPage />;
    if (pageIndex === 2) return <WhatIsFunnelPage />;
    if (pageIndex === 3) return <HowToUsePage />;
    if (pageIndex === 4) return <IndexDirectoryPage onSelectMap={handleSelectMapById} />;
    
    // Pages 5 to 29 are the 25 Funnel Maps
    if (pageIndex >= 5 && pageIndex <= 29) {
      const mapItem = FUNNEL_MAPS[pageIndex - 5];
      if (mapItem) return <FunnelPage map={mapItem} />;
    }

    if (pageIndex === 30) return <FunnelSelectorPage onSelectMap={handleSelectMapById} />;
    if (pageIndex === 31) return <FunnelMatrixPage onSelectMap={handleSelectMapById} />;
    if (pageIndex === 32) return <CommonMistakesPage />;
    if (pageIndex === 33) return <WorksheetPage />;
    if (pageIndex === 34) return <FinalCtaPage />;

    return null;
  };

  // Filter funnels for gallery mode
  const filteredFunnels = FUNNEL_MAPS.filter(m => {
    const matchesCategory = selectedCategory === null || m.categoryId === selectedCategory;
    const matchesSearch = 
      searchQuery === '' ||
      m.arabicName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.goal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.bestFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.traffic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#05070B] text-[#F7F3E8] flex flex-col font-cairo">
      {/* ================= STICKY TOP CONTROL NAVIGATION (NO PRINT) ================= */}
      <header className="no-print sticky top-0 z-40 bg-[#0B111A]/95 backdrop-blur-md border-b border-[#1A2638] px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Logo & Author Branding */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F2C45C] to-[#D99B25] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#05070B] rounded-[10px] flex items-center justify-center font-black text-[#F2C45C] text-sm font-latin">
                  FM
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-bold text-[#F7F3E8] tracking-tight">
                    مكتبة خرائط الـ Funnels
                  </h1>
                  <span className="text-[10px] font-mono-code font-bold text-[#F2C45C] bg-[#F2C45C]/15 px-1.5 py-0.2 rounded border border-[#F2C45C]/30">
                    25 MAPS
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#AAB2BF]">
                  <span>إعداد {AUTHOR_INFO.nameAr}</span>
                  <span className="text-[#AAB2BF]/30">•</span>
                  <span dir="ltr" className="font-latin text-[10px] text-[#AAB2BF]/70">Visual Playbook</span>
                </div>
              </div>
            </div>

            {/* Mobile View Toggle */}
            <div className="flex items-center gap-1.5 md:hidden">
              <button
                onClick={() => setIsGlossaryOpen(true)}
                className="p-1.5 rounded-lg bg-[#101823] text-[#F2C45C] border border-[#1A2638]"
                title="القاموس"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
              <button
                onClick={handlePrint}
                className="p-1.5 rounded-lg bg-[#F2C45C] text-[#05070B] font-bold"
                title="طباعة / PDF"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* View Modes Tabs */}
          <div className="flex items-center bg-[#101823] p-1 rounded-xl border border-[#1A2638] text-xs font-semibold overflow-x-auto">
            <button
              onClick={() => setViewMode('single')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                viewMode === 'single'
                  ? 'bg-[#F2C45C] text-[#05070B] font-bold shadow-sm'
                  : 'text-[#AAB2BF] hover:text-[#F7F3E8]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>تصفح الصفحات</span>
            </button>

            <button
              onClick={() => setViewMode('continuous')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                viewMode === 'continuous'
                  ? 'bg-[#F2C45C] text-[#05070B] font-bold shadow-sm'
                  : 'text-[#AAB2BF] hover:text-[#F7F3E8]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>المستند الكامل (34 صفحة)</span>
            </button>

            <button
              onClick={() => setViewMode('gallery')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                viewMode === 'gallery'
                  ? 'bg-[#F2C45C] text-[#05070B] font-bold shadow-sm'
                  : 'text-[#AAB2BF] hover:text-[#F7F3E8]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>معرض الـ 25 خريطة</span>
            </button>

            <button
              onClick={() => {
                handleJumpToPage(33);
                setViewMode('single');
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#F2C45C] hover:bg-[#F2C45C]/10 transition-all shrink-0 cursor-pointer border-r border-[#1A2638]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F2C45C]" />
              <span>ورقة عمل مشروعي</span>
            </button>
          </div>

          {/* Action Tools: Print, Glossary, WhatsApp */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setIsGlossaryOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#101823] hover:bg-[#1A2638] text-[#AAB2BF] hover:text-[#F7F3E8] border border-[#1A2638] text-xs transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#F2C45C]" />
              <span>قاموس المصطلحات</span>
            </button>

            <a
              href={AUTHOR_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#19C878]/15 hover:bg-[#19C878]/25 text-[#19C878] border border-[#19C878]/30 text-xs font-bold transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>استشارة محمد عادل</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#F2C45C] to-[#D99B25] hover:from-[#FAD175] hover:to-[#E5A832] text-[#05070B] text-xs font-black shadow-[0_2px_10px_rgba(242,196,92,0.25)] transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>طباعة / حفظ كـ PDF</span>
            </button>
          </div>
        </div>

        {/* Secondary Subbar in Single Page Mode: Page Jumper & Navigation */}
        {viewMode === 'single' && (
          <div className="max-w-7xl mx-auto pt-2.5 mt-2 border-t border-[#1A2638]/70 flex items-center justify-between text-xs">
            {/* Quick Chapter Selector Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-[#AAB2BF]/70 font-semibold hidden sm:inline">انتقال سريع:</span>
              <select
                value={currentPage}
                onChange={(e) => handleJumpToPage(Number(e.target.value))}
                className="bg-[#101823] border border-[#1A2638] rounded-lg px-2.5 py-1 text-xs text-[#F7F3E8] focus:outline-none focus:border-[#F2C45C] cursor-pointer"
              >
                <option value={1}>صفحة 01 — الغلاف الرئيسي</option>
                <option value={2}>صفحة 02 — ما هي خريطة الـ Funnel؟</option>
                <option value={3}>صفحة 03 — كيف تستخدم هذه المكتبة؟</option>
                <option value={4}>صفحة 04 — فهرس التصنيفات (8 أقسام)</option>
                <optgroup label="الـ 25 خريطة بصرية:">
                  {FUNNEL_MAPS.map((m) => (
                    <option key={m.id} value={m.pageNumber}>
                      صفحة {String(m.pageNumber).padStart(2, '0')} — {m.number}: {m.arabicName} ({m.englishName})
                    </option>
                  ))}
                </optgroup>
                <option value={30}>صفحة 30 — شجرة اتخاذ القرار (أي فانل أختار؟)</option>
                <option value={31}>صفحة 31 — مصفوفة تقييم ومقارنة الـ 25 فانل</option>
                <option value={32}>صفحة 32 — 7 أخطاء تجعل الفانل أضعف</option>
                <option value={33}>صفحة 33 — ورقة عمل ارسم فانل مشروعك</option>
                <option value={34}>صفحة 34 — طلب فانل مخصصة (تواصل مباشر)</option>
              </select>
            </div>

            {/* Paging Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage <= 1}
                className="p-1 rounded-lg bg-[#101823] hover:bg-[#1A2638] disabled:opacity-30 disabled:pointer-events-none text-[#F7F3E8] border border-[#1A2638] transition-colors cursor-pointer"
                title="الصفحة السابقة (السهم الأيمن)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="font-mono-code text-xs font-bold px-2 py-0.5 rounded bg-[#101823] border border-[#1A2638] text-[#F2C45C]">
                {String(currentPage).padStart(2, '0')} / {TOTAL_PAGES}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage >= TOTAL_PAGES}
                className="p-1 rounded-lg bg-[#101823] hover:bg-[#1A2638] disabled:opacity-30 disabled:pointer-events-none text-[#F7F3E8] border border-[#1A2638] transition-colors cursor-pointer"
                title="الصفحة التالية (السهم الأيسر)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>

            {/* Zoom / Fullscreen Toggles */}
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={() => setZoomLevel(prev => Math.max(80, prev - 10))}
                className="p-1 rounded-lg bg-[#101823] hover:bg-[#1A2638] text-[#AAB2BF] border border-[#1A2638]"
                title="تصغير"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono-code text-[11px] text-[#AAB2BF] w-9 text-center">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel(prev => Math.min(130, prev + 10))}
                className="p-1 rounded-lg bg-[#101823] hover:bg-[#1A2638] text-[#AAB2BF] border border-[#1A2638]"
                title="تكبير"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-1 rounded-lg bg-[#101823] hover:bg-[#1A2638] text-[#AAB2BF] border border-[#1A2638] mr-1"
                title="ملء الشاشة"
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <main className="flex-1 flex flex-col items-center py-6 px-3 sm:px-6 relative">
        {/* ================= MODE A: SINGLE PAGE VIEW ================= */}
        {viewMode === 'single' && (
          <div 
            className="flex flex-col items-center transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          >
            <div className="shadow-2xl rounded-2xl overflow-hidden border border-[#1A2638]/80 max-w-[880px] w-full">
              {renderPageComponent(currentPage)}
            </div>

            {/* Bottom floating quick pagination bar */}
            <div className="no-print mt-6 flex items-center gap-3 bg-[#0B111A]/95 px-4 py-2 rounded-2xl border border-[#1A2638] shadow-xl">
              <button
                onClick={handlePrevPage}
                disabled={currentPage <= 1}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#101823] hover:bg-[#1A2638] disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
                <span>الصفحة السابقة</span>
              </button>

              <span className="text-xs font-mono-code font-bold text-[#F2C45C] px-2">
                PAGE {String(currentPage).padStart(2, '0')} OF {TOTAL_PAGES}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage >= TOTAL_PAGES}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#101823] hover:bg-[#1A2638] disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold transition-all cursor-pointer"
              >
                <span>الصفحة التالية</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= MODE B: CONTINUOUS 34-PAGE PRINT-READY DOCUMENT ================= */}
        {viewMode === 'continuous' && (
          <div className="w-full max-w-[880px] flex flex-col items-center space-y-8">
            {/* Top Continuous Mode Notice */}
            <div className="no-print w-full bg-[#101823] border border-[#F2C45C]/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#19C878] animate-pulse"></span>
                <span>
                  يتم الآن عرض جميع الـ 34 صفحة بالترتيب الكامل للأصل النهائي. جاهزة للمعاينة والطباعة الكاملة.
                </span>
              </div>
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl bg-[#F2C45C] text-[#05070B] font-bold flex items-center gap-2 hover:bg-[#FAD175] transition-all cursor-pointer shrink-0"
              >
                <Printer className="w-4 h-4" />
                <span>طباعة أو حفظ كملف PDF</span>
              </button>
            </div>

            {/* Sequence of all 34 Pages */}
            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((pageNum) => (
              <div 
                key={pageNum}
                id={`page-anchor-${pageNum}`}
                className="w-full shadow-2xl rounded-2xl overflow-hidden border border-[#1A2638] relative page-container"
              >
                {/* Visual Page Tag for screen viewing */}
                <div className="no-print absolute top-2 left-2 z-20 font-mono-code text-[10px] bg-[#05070B]/80 text-[#F2C45C] px-2 py-0.5 rounded border border-[#1A2638]">
                  PAGE {String(pageNum).padStart(2, '0')}
                </div>
                {renderPageComponent(pageNum)}
              </div>
            ))}
          </div>
        )}

        {/* ================= MODE C: 25 FUNNEL MAPS GALLERY / DIRECTORY ================= */}
        {viewMode === 'gallery' && (
          <div className="w-full max-w-7xl">
            {/* Gallery Search & Filter Bar */}
            <div className="bg-[#0B111A] border border-[#1A2638] rounded-2xl p-4 sm:p-5 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-bold text-[#F7F3E8] flex items-center gap-2">
                    <LayoutGrid className="w-5 h-5 text-[#F2C45C]" />
                    <span>مكتبة خرائط الـ Funnels الـ 25</span>
                  </h2>
                  <p className="text-xs text-[#AAB2BF] mt-0.5">
                    ابحث عن الخريطة المناسبة لمشروعك حسب الهدف أو نوع الخدمة أو مستوى التعقيد
                  </p>
                </div>

                {/* Search Input */}
                <div className="relative min-w-[280px]">
                  <Search className="w-4 h-4 text-[#AAB2BF] absolute right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث بالاسم، الهدف، أو مصدر الزيارات..."
                    className="w-full bg-[#101823] border border-[#1A2638] rounded-xl pr-9 pl-4 py-2 text-xs text-[#F7F3E8] focus:outline-none focus:border-[#F2C45C]"
                  />
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1.5 rounded-xl border transition-all shrink-0 cursor-pointer ${
                    selectedCategory === null
                      ? 'bg-[#F2C45C] text-[#05070B] font-bold border-[#F2C45C]'
                      : 'bg-[#101823] text-[#AAB2BF] border-[#1A2638] hover:text-[#F7F3E8]'
                  }`}
                >
                  جميع التصنيفات ({FUNNEL_MAPS.length})
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl border transition-all shrink-0 cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#F2C45C] text-[#05070B] font-bold border-[#F2C45C]'
                        : 'bg-[#101823] text-[#AAB2BF] border-[#1A2638] hover:text-[#F7F3E8]'
                    }`}
                  >
                    {cat.nameAr} ({cat.mapsCount})
                  </button>
                ))}
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFunnels.map((map) => (
                <div
                  key={map.id}
                  onClick={() => handleJumpToPage(map.pageNumber)}
                  className="bg-[#0B111A] border border-[#1A2638] hover:border-[#F2C45C] rounded-2xl p-5 flex flex-col justify-between transition-all hover:scale-[1.01] hover:shadow-[0_4px_24px_rgba(242,196,92,0.12)] cursor-pointer group"
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded bg-[#101823] text-[#F2C45C] border border-[#F2C45C]/30">
                        {map.number}
                      </span>
                      <span className="text-[10px] font-mono-code text-[#AAB2BF]/60">
                        صفحة {map.pageNumber}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#F7F3E8] group-hover:text-[#F2C45C] transition-colors mb-0.5">
                      {map.arabicName}
                    </h3>
                    <div dir="ltr" className="text-xs font-latin font-bold text-[#AAB2BF]/70 mb-3 text-right">
                      {map.englishName}
                    </div>

                    <p className="text-xs text-[#AAB2BF] leading-relaxed mb-4 line-clamp-2">
                      {map.subtitle}
                    </p>

                    {/* Quick Nodes Sequence */}
                    <div className="bg-[#101823] p-2.5 rounded-xl border border-[#1A2638] mb-3">
                      <div className="text-[10px] font-bold text-[#AAB2BF]/70 mb-1.5 flex items-center justify-between">
                        <span>مسار التحويل السريع:</span>
                        <span className="font-mono-code text-[#F2C45C]">{map.flowNodes.length} خطوات</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1 text-[9.5px]">
                        {map.flowNodes.slice(0, 4).map((node, i) => (
                          <React.Fragment key={node.id}>
                            <span 
                              dir="ltr" 
                              className={`px-1.5 py-0.5 rounded font-latin ${
                                node.isPrimaryConversion
                                  ? 'bg-[#F2C45C] text-[#05070B] font-bold'
                                  : 'bg-[#0D141D] text-[#AAB2BF]'
                              }`}
                            >
                              {node.labelEn}
                            </span>
                            {i < 3 && <span className="text-[#AAB2BF]/40">←</span>}
                          </React.Fragment>
                        ))}
                        {map.flowNodes.length > 4 && (
                          <span className="text-[9px] text-[#AAB2BF]/50 font-mono-code">+المزيد</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#1A2638]/70 text-xs text-[#AAB2BF]">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-[#F7F3E8]">{map.categoryNameAr}</span>
                    </div>
                    <span className="text-[#F2C45C] text-xs font-bold group-hover:translate-x-[-4px] transition-transform flex items-center gap-1">
                      <span>عرض الخريطة الكاملة</span>
                      <span>←</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredFunnels.length === 0 && (
              <div className="text-center py-16 bg-[#0B111A] rounded-2xl border border-[#1A2638]">
                <p className="text-sm text-[#AAB2BF]">لا توجد خرائط مطابقة لبحثك.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
                  className="mt-3 px-4 py-1.5 rounded-xl bg-[#101823] text-[#F2C45C] text-xs font-bold border border-[#1A2638]"
                >
                  إعادة ضبط الفلترة
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="no-print fixed bottom-6 left-6 z-40 p-3 rounded-full bg-[#F2C45C] text-[#05070B] shadow-2xl hover:scale-110 transition-transform cursor-pointer"
          title="الرجوع للأعلى"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      )}

      {/* English / Arabic Glossary Modal */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />
    </div>
  );
}
