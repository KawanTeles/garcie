import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, Camera } from 'lucide-react';

interface Slide {
  url: string;
  caption: string;
  category: string;
}

const existingGallerySlides: Slide[] = [
  {
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85',
    caption: 'Tatame profissional com higienização rigorosa e alta absorção de impacto',
    category: 'Estrutura & Tatame'
  },
  {
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85',
    caption: 'Tradição e respeito mútuo em cada saudação aos mestres fundadores',
    category: 'Tradição Gracie'
  },
  {
    url: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=85',
    caption: 'Turmas infantis desenvolvendo disciplina, coordenação motora e método anti-bullying',
    category: 'Gracie Kids'
  },
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
    caption: 'Treinos dinâmicos de grappling, wrestling e transições de No-Gi',
    category: 'Jiu-Jitsu No-Gi'
  },
  {
    url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=85',
    caption: 'Atenção 100% individualizada e aprendizado acelerado em aulas particulares',
    category: 'Aulas Particulares'
  }
];

export const StructureGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<Slide | null>(null);

  // Touch and drag tracking
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragCurrentX, setDragCurrentX] = useState<number | null>(null);
  const isDragging = useRef(false);

  const totalSlides = existingGallerySlides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay
  useEffect(() => {
    if (isPaused || lightboxImage) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, lightboxImage, nextSlide]);

  // Touch handlers (Mobile swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setDragStartX(e.touches[0].clientX);
    setDragCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    setDragCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (dragStartX !== null && dragCurrentX !== null) {
      const diff = dragStartX - dragCurrentX;
      if (diff > 45) {
        nextSlide();
      } else if (diff < -45) {
        prevSlide();
      }
    }
    setDragStartX(null);
    setDragCurrentX(null);
    setIsPaused(false);
  };

  // Mouse drag handlers (Desktop swipe/drag)
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    setIsPaused(true);
    setDragStartX(e.clientX);
    setDragCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || dragStartX === null) return;
    setDragCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (isDragging.current && dragStartX !== null && dragCurrentX !== null) {
      const diff = dragStartX - dragCurrentX;
      if (diff > 50) {
        nextSlide();
      } else if (diff < -50) {
        prevSlide();
      }
    }
    isDragging.current = false;
    setDragStartX(null);
    setDragCurrentX(null);
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      setDragStartX(null);
      setDragCurrentX(null);
    }
    setIsPaused(false);
  };

  // Helper for circular indices
  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + totalSlides) % totalSlides;
  };

  return (
    <section
      id="estrutura"
      className="py-20 sm:py-24 relative bg-[#0B0D13] border-t border-zinc-800/80 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3 py-1 rounded-full">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-black tracking-widest text-amber-400 uppercase">
              ESTRUTURA & TATAME
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Conheça o nosso espaço
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Ambiente climatizado, tatame profissional de alta absorção e estrutura completa para a sua evolução.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Stage with Side Peek (Desktop Gallery Style) */}
          <div
            className="relative h-[320px] sm:h-[420px] lg:h-[480px] w-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {/* Left Peeking Slide (Desktop Only) */}
            <div
              onClick={() => prevSlide()}
              className="hidden md:block absolute left-0 w-[24%] h-[82%] rounded-2xl overflow-hidden opacity-35 hover:opacity-65 transition-all duration-500 -translate-x-8 scale-95 cursor-pointer z-10 border border-zinc-800"
            >
              <img
                src={existingGallerySlides[getSlideIndex(-1)].url}
                alt="Foto anterior"
                className="w-full h-full object-cover filter brightness-75 pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Active Center Slide */}
            <div
              className="relative w-full md:w-[72%] lg:w-[76%] h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl transition-all duration-500 z-20 group"
            >
              <img
                src={existingGallerySlides[currentIndex].url}
                alt={existingGallerySlides[currentIndex].caption}
                className="w-full h-full object-cover filter brightness-95 pointer-events-none transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-black/80 backdrop-blur-md border border-amber-500/40 px-3 py-1 rounded-lg">
                <span className="text-[10px] sm:text-xs font-black text-amber-400 tracking-wider uppercase">
                  {existingGallerySlides[currentIndex].category}
                </span>
              </div>

              {/* Top-Right Expand Icon Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(existingGallerySlides[currentIndex]);
                }}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 bg-black/60 hover:bg-black/90 text-amber-400 rounded-full border border-amber-500/30 transition-all hover:scale-110 cursor-pointer"
                aria-label="Expandir foto"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 pointer-events-none">
                <p className="text-xs sm:text-base font-bold text-white leading-snug drop-shadow-md">
                  {existingGallerySlides[currentIndex].caption}
                </p>
              </div>
            </div>

            {/* Right Peeking Slide (Desktop Only) */}
            <div
              onClick={() => nextSlide()}
              className="hidden md:block absolute right-0 w-[24%] h-[82%] rounded-2xl overflow-hidden opacity-35 hover:opacity-65 transition-all duration-500 translate-x-8 scale-95 cursor-pointer z-10 border border-zinc-800"
            >
              <img
                src={existingGallerySlides[getSlideIndex(1)].url}
                alt="Próxima foto"
                className="w-full h-full object-cover filter brightness-75 pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Discreet Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-2 sm:left-4 z-30 p-2.5 rounded-full bg-black/70 hover:bg-amber-500 text-white hover:text-slate-950 border border-zinc-700/80 transition-all shadow-lg hover:scale-105 cursor-pointer"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-2 sm:right-4 z-30 p-2.5 rounded-full bg-black/70 hover:bg-amber-500 text-white hover:text-slate-950 border border-zinc-700/80 transition-all shadow-lg hover:scale-105 cursor-pointer"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Discreet Indicators (Dots) */}
          <div className="flex items-center justify-center space-x-2 pt-6">
            {existingGallerySlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-7 h-1.5 bg-amber-400'
                    : 'w-2 h-1.5 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Ir para foto ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] bg-[#11131B] border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/80 hover:bg-black text-white rounded-full z-10 border border-zinc-700 cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={lightboxImage.url}
                alt={lightboxImage.caption}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
              <div className="p-4 bg-black/90 border-t border-zinc-800 text-center">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  {lightboxImage.category}
                </span>
                <p className="text-sm font-semibold text-white">
                  {lightboxImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
