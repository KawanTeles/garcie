import React from 'react';
import { Trophy } from 'lucide-react';
import { gymData } from '../data/gymData';
import type { AchievementItem } from '../data/gymData';

export const Results: React.FC = () => {
  return (
    <section id="resultados" className="py-20 sm:py-28 relative bg-[#08090C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              CONQUISTAS & TRADIÇÃO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Resultados construídos no tatame.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Um legado centenário de superação, formação de campeões mundiais e transformação de vidas dentro e fora das competições.
          </p>
        </div>

        {/* Timeline / Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gymData.achievements.map((item: AchievementItem, idx: number) => (
            <div
              key={idx}
              className="bg-[#11131B] border border-zinc-800/80 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11131B] via-transparent to-transparent" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-black text-xs px-2.5 py-1 rounded-md shadow-md">
                  {item.year}
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
