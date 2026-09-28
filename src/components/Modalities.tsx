import React from 'react';
import { User, ChevronRight } from 'lucide-react';
import { gymData } from '../data/gymData';
import type { Modality } from '../data/gymData';

interface ModalitiesProps {
  onOpenBooking: (modalityTitle?: string) => void;
}

export const Modalities: React.FC<ModalitiesProps> = ({ onOpenBooking }) => {
  return (
    <section id="modalidades" className="py-20 sm:py-24 relative bg-[#0B0D13] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-[11px] font-black tracking-widest text-amber-400 uppercase">
              MODALIDADES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Programas para cada objetivo
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Turmas estruturadas por nível técnico e faixa etária para garantir aprendizado seguro e consistente.
          </p>
        </div>

        {/* Clean Modalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gymData.modalities.map((item: Modality) => (
            <div
              key={item.id}
              className="flex flex-col bg-[#11131B] border border-zinc-800/80 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Image Frame */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11131B] via-[#11131B]/30 to-transparent" />

                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-amber-500/40 px-2.5 py-0.5 rounded-md">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center space-x-2 text-[11px] font-semibold text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-2.5 py-1.5 rounded-lg mt-2">
                    <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{item.targetAudience}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800/80">
                  <button
                    onClick={() => onOpenBooking(item.title)}
                    className="w-full flex items-center justify-center space-x-1.5 bg-zinc-900 hover:bg-amber-500 text-zinc-300 hover:text-slate-950 font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl transition-all duration-200 border border-zinc-700/80 hover:border-amber-400 cursor-pointer"
                  >
                    <span>Agendar aula</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
