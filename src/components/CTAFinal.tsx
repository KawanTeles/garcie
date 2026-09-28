import React from 'react';
import { Calendar, MessageCircle, ChevronRight, CheckCircle2, Shield } from 'lucide-react';
import { gymData } from '../data/gymData';

interface CTAFinalProps {
  onOpenBooking: () => void;
}

export const CTAFinal: React.FC<CTAFinalProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 sm:py-28 relative bg-[#08090C] overflow-hidden">
      {/* Background Graphic & ambient lighting */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-[#141724] to-[#0D0F17] border border-amber-500/40 rounded-3xl p-8 sm:p-14 text-center space-y-7 shadow-2xl relative overflow-hidden">
          {/* Top Gold Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-black/60 border border-amber-500/40 px-4 py-1.5 rounded-full">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-black tracking-widest text-amber-300 uppercase">
              COMECE SUA JORNADA HOJE
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Seu próximo passo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              começa no tatame.
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Não importa se você nunca vestiu um kimono ou se já treinou no passado. A <strong>Gracie Jiu-Jitsu</strong> está de portas abertas para ajudar você a conquistar sua melhor versão com técnica e respeito.
          </p>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto min-h-[56px] inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider py-4 px-8 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer group"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>AGENDAR AULA EXPERIMENTAL</span>
              <ChevronRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={`https://wa.me/${gymData.info.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de conversar com a equipe da Gracie Jiu-Jitsu.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[56px] inline-flex items-center justify-center space-x-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-amber-500/40 font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-6 rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>FALAR COM A ACADEMIA</span>
            </a>
          </div>

          {/* Assurances row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 border-t border-zinc-800/80">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Kimono higienizado emprestado para o teste</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Sem taxa ou fidelidade para a aula teste</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Turmas exclusivas para iniciantes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
