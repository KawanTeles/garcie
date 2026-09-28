import React from 'react';
import { Calendar, ChevronRight, ShieldCheck, Zap, Award, Users } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Photography & Lighting Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=85"
          alt="Treino oficial de Jiu-Jitsu Gracie no tatame"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-110 scale-105"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/65 to-[#08090C]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090C] via-[#08090C]/70 to-transparent" />
        {/* Ambient Gold Glows */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-5 sm:space-y-7">
          {/* Official Heritage Pill */}
          <div className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-amber-500/20 via-zinc-900/90 to-zinc-900/80 border border-amber-500/40 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-black tracking-widest text-amber-300 uppercase">
              ACADEMIA GRACIE • TRADIÇÃO DESDE 1925
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[clamp(2.3rem,6.5vw,4.8rem)] font-black text-white leading-[1.08] tracking-tight drop-shadow-lg">
            A Origem da Arte Suave.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 block sm:inline">
              O Estilo de Vida que Transforma Gerações.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl drop-shadow-sm">
            Treine na linhagem direta fundada por <strong>Carlos e Hélio Gracie</strong>. Metodologia mundialmente consagrada para autodefesa pura, disciplina mental, saúde integral e evolução contínua para toda a família.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto min-h-[56px] inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-sm sm:text-base font-black tracking-wider uppercase py-4 px-8 rounded-xl transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-[0.99] group cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>AGENDAR AULA EXPERIMENTAL</span>
              <ChevronRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#sobre"
              className="w-full sm:w-auto min-h-[56px] inline-flex items-center justify-center space-x-2 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-amber-500/50 text-xs sm:text-sm font-bold tracking-wider uppercase py-4 px-6 rounded-xl transition-all duration-300 backdrop-blur-md"
            >
              <span>CONHECER A ACADEMIA</span>
            </a>
          </div>

          {/* Quick Credibility Features */}
          <div className="pt-6 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl border-t border-zinc-800/80">
            <div className="flex items-center space-x-2.5 bg-zinc-950/70 border border-zinc-800/70 rounded-xl p-3 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-bold text-zinc-200">Linhagem Hélio Gracie</span>
            </div>
            <div className="flex items-center space-x-2.5 bg-zinc-950/70 border border-zinc-800/70 rounded-xl p-3 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-bold text-zinc-200">Defesa Pessoal Pura</span>
            </div>
            <div className="flex items-center space-x-2.5 bg-zinc-950/70 border border-zinc-800/70 rounded-xl p-3 backdrop-blur-sm">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-bold text-zinc-200">Iniciantes a Faixas-Pretas</span>
            </div>
            <div className="flex items-center space-x-2.5 bg-zinc-950/70 border border-zinc-800/70 rounded-xl p-3 backdrop-blur-sm">
              <Users className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-bold text-zinc-200">Ambiente Familiar Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
