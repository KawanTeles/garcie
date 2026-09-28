import React from 'react';
import { Building2 } from 'lucide-react';
import { gymData } from '../data/gymData';
import type { FacilityItem } from '../data/gymData';

export const Structure: React.FC = () => {
  return (
    <section id="estrutura" className="py-20 sm:py-28 relative bg-[#0B0D13] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              NOSSO ESPAÇO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Estrutura pensada para o seu bem-estar.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Um ambiente impecável, seguro e equipado com tudo o que você precisa para focar 100% no seu treino.
          </p>
        </div>

        {/* Editorial Facility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gymData.facilities.map((facility: FacilityItem) => (
            <div
              key={facility.title}
              className="group relative bg-[#11131B] border border-zinc-800/80 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11131B] via-[#11131B]/40 to-transparent" />

                {/* Highlight Tag */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-amber-500/30 px-3 py-1 rounded-md">
                  <span className="text-[10px] font-black text-amber-400 tracking-wider uppercase">
                    {facility.highlight}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 space-y-2">
                <span className="text-[11px] font-bold text-amber-400/90 uppercase tracking-widest block">
                  {facility.category}
                </span>
                <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
