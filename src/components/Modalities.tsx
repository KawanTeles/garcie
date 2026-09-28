import React, { useState } from 'react';
import { User, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { gymData } from '../data/gymData';
import type { Modality } from '../data/gymData';

interface ModalitiesProps {
  onOpenBooking: (modalityTitle?: string) => void;
}

export const Modalities: React.FC<ModalitiesProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Modalidades' },
    { id: 'iniciantes', label: 'Iniciantes' },
    { id: 'adulto', label: 'Adulto Avançado' },
    { id: 'kids', label: 'Kids & Juvenil' },
    { id: 'competicao', label: 'Competição' },
    { id: 'nogi', label: 'No-Gi (Sem Kimono)' },
    { id: 'particulares', label: 'Aulas Particulares' },
  ];

  const filteredModalities = filter === 'todos'
    ? gymData.modalities
    : gymData.modalities.filter(m => m.id === filter);

  return (
    <section id="modalidades" className="py-20 sm:py-28 relative bg-[#08090C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              PROGRAMAS DE TREINAMENTO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Encontre o treino ideal para você.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Aulas divididas por maturidade técnica e faixa etária para garantir aprendizado consistente, seguro e motivador.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Modalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModalities.map((item: Modality) => (
            <div
              key={item.id}
              className="flex flex-col bg-[#11131B] border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-amber-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Image Area */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11131B] via-[#11131B]/30 to-transparent" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-amber-500/40 px-3 py-1 rounded-md">
                  <span className="text-[11px] font-black text-amber-400 tracking-wider uppercase">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Target Audience */}
                  <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-300 bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-lg">
                    <User className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item.targetAudience}</span>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-1">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <button
                    onClick={() => onOpenBooking(item.title)}
                    className="w-full flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-amber-500 text-zinc-200 hover:text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase py-3.5 px-4 rounded-xl transition-all duration-300 border border-zinc-700/80 hover:border-amber-400 group/btn cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>QUERO FAZER UMA AULA</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
