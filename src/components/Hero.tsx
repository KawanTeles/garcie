import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Photography & Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=85"
          alt="Treino oficial de Jiu-Jitsu Gracie no tatame"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-105 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/60 to-[#08090C]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090C] via-[#08090C]/75 to-transparent" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <div className="max-w-2xl space-y-6">
          {/* Heritage Badge */}
          <div className="inline-flex items-center space-x-2 bg-zinc-900/90 border border-amber-500/40 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-[11px] font-black tracking-widest text-amber-300 uppercase">
              ACADEMIA GRACIE • DESDE 1925
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[clamp(2.3rem,6vw,4.5rem)] font-black text-white leading-[1.1] tracking-tight">
            A Origem da Arte Suave.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              O Estilo de Vida que Transforma Gerações.
            </span>
          </h1>

          {/* Clean Description */}
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl">
            Aprenda Jiu-Jitsu autêntico na linhagem direta de Carlos e Hélio Gracie. Defesa pessoal pura, disciplina e saúde para todas as idades.
          </p>

          {/* Primary CTA and Secondary Link */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onOpenBooking}
              className="min-h-[52px] inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-sm font-black tracking-wider uppercase py-3.5 px-8 rounded-xl transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer group"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Agendar aula</span>
              <ChevronRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#sobre"
              className="min-h-[52px] inline-flex items-center justify-center text-xs sm:text-sm font-bold tracking-wider uppercase py-3.5 px-6 rounded-xl text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 transition-all"
            >
              Conhecer a academia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
