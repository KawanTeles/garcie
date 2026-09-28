import React from 'react';
import { Award, ShieldCheck, Quote } from 'lucide-react';
import { gymData } from '../data/gymData';
import type { Professor } from '../data/gymData';

export const Professors: React.FC = () => {
  return (
    <section id="professores" className="py-20 sm:py-28 relative bg-[#08090C] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              MESTRES & INSTRUTORES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Quem ensina, também vive o Jiu-Jitsu.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Aprenda com mestres que preservam a técnica pura, a tradição e os valores transmitidos de geração em geração.
          </p>
        </div>

        {/* Professors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gymData.professors.map((prof: Professor) => (
            <div
              key={prof.name}
              className={`flex flex-col bg-[#11131B] border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${
                prof.isHistorical
                  ? 'border-amber-500/50 shadow-amber-500/10'
                  : 'border-zinc-800/80 hover:border-amber-500/40'
              }`}
            >
              {/* Photo */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden group">
                <img
                  src={prof.image}
                  alt={prof.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11131B] via-transparent to-transparent" />

                {/* Belt Tag */}
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-amber-500/40 px-3 py-1 rounded-md">
                  <span className="text-[11px] font-black text-amber-400 tracking-wider uppercase">
                    {prof.belt}
                  </span>
                </div>

                {prof.degree && (
                  <div className="absolute top-4 right-4 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 px-2.5 py-1 rounded-md">
                    <span className="text-[10px] font-bold text-zinc-300">
                      {prof.degree}
                    </span>
                  </div>
                )}
              </div>

              {/* Information */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      {prof.role}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {prof.name}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {prof.bio}
                  </p>
                </div>

                {/* Quote */}
                {prof.quote && (
                  <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 relative">
                    <Quote className="w-4 h-4 text-amber-400/60 mb-1" />
                    <p className="text-xs text-zinc-300 italic font-medium leading-relaxed">
                      "{prof.quote}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
