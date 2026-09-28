import React, { useState } from 'react';
import { Star, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { gymData } from '../data/gymData';
import type { Testimonial } from '../data/gymData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % gymData.testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + gymData.testimonials.length) % gymData.testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-20 sm:py-28 relative bg-[#0B0D13] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              PROVA SOCIAL & DEPOIMENTOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Histórias reais de quem vive o tatame.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Descubra como o Jiu-Jitsu e a filosofia Gracie impactam a rotina, a saúde e a confiança de nossos alunos e famílias.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {gymData.testimonials.map((item: Testimonial, index: number) => (
            <div
              key={index}
              className="bg-[#11131B] border border-zinc-800/80 hover:border-amber-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative group"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author profile */}
              <div className="flex items-center space-x-3 pt-5 mt-4 border-t border-zinc-800/80">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Carousel */}
        <div className="lg:hidden relative">
          <div className="bg-[#11131B] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center space-x-1 text-amber-400 mb-4">
              {[...Array(gymData.testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed italic min-h-[100px]">
              "{gymData.testimonials[activeIndex].comment}"
            </p>

            <div className="flex items-center justify-between pt-6 mt-4 border-t border-zinc-800">
              <div className="flex items-center space-x-3">
                <img
                  src={gymData.testimonials[activeIndex].image}
                  alt={gymData.testimonials[activeIndex].name}
                  className="w-11 h-11 rounded-full object-cover border border-amber-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {gymData.testimonials[activeIndex].name}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {gymData.testimonials[activeIndex].role}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg border border-zinc-800 transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg border border-zinc-800 transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
