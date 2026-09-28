import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

interface CTAFinalProps {
  onOpenBooking: () => void;
}

export const CTAFinal: React.FC<CTAFinalProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 sm:py-24 relative bg-[#08090C] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-[#141724] to-[#0D0F17] border border-amber-500/35 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          {/* Subtle gold line on top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-black/60 border border-amber-500/30 px-3.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-[11px] font-black tracking-widest text-amber-300 uppercase">
              AULA EXPERIMENTAL GRATUITA
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Agende sua aula experimental
          </h2>

          {/* Short explanatory phrase */}
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Dê o primeiro passo no tatame. Emprestamos o kimono higienizado para sua aula de teste sem custo ou taxa de matrícula antecipada.
          </p>

          {/* Main Action Button */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenBooking}
              className="min-h-[52px] inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider py-3.5 px-8 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer group"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Agendar aula</span>
              <ChevronRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
