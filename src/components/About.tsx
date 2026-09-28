import React from 'react';
import { Shield, CheckCircle2, Sparkles } from 'lucide-react';
import { gymData } from '../data/gymData';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 sm:py-28 relative bg-[#08090C] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase with Heritage Crest */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/80 group">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85"
                alt="Tatame da Academia Gracie Jiu-Jitsu"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Heritage Crest Watermark badge */}
              <div className="absolute top-6 left-6 w-16 h-16 sm:w-20 sm:h-20 bg-black/75 backdrop-blur-md rounded-2xl p-2 border border-amber-500/40 shadow-xl flex items-center justify-center">
                <img
                  src="/images/gracie-crest.svg"
                  alt="Selo de Tradição Gracie"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/30">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl text-slate-950 shrink-0 shadow-md">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm sm:text-base tracking-wide">
                      LINHAGEM CARLOS & HÉLIO GRACIE
                    </h4>
                    <p className="text-amber-400 text-xs sm:text-sm font-semibold">
                      Preservando a autêntica arte suave desde 1925
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Geometric Gold Accent frame */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border-b-2 border-r-2 border-amber-500/60 rounded-br-2xl pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
                TRADIÇÃO, VALORES & FILOSOFIA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Mais do que uma arte marcial.{' '}
              <span className="text-amber-400 block sm:inline">Um caminho de evolução.</span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Na <strong className="text-white">Academia Gracie</strong>, o Jiu-Jitsu não é praticado apenas como um esporte de combate — é um sistema completo de vida fundado na autodefesa, na saúde equilibrada, na clareza mental e no respeito mútuo.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Criado para permitir que qualquer indivíduo, independente de estatura física ou peso, consiga se defender com eficácia aplicando as leis da alavanca e equilíbrio. Hoje, nossa matriz perpetua esse método refinado para que crianças, mulheres e homens desenvolvam confiança inabalável para encarar qualquer desafio.
            </p>

            {/* Checkmark List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-zinc-200 font-medium">
                  Metodologia original preservada diretamente da família fundadora.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-zinc-200 font-medium">
                  Ambiente limpo, familiar e acolhedor: do iniciante ao veterano.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-zinc-200 font-medium">
                  Instrutores faixas-pretas certificados pelo conselho oficial de mestres.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-zinc-200 font-medium">
                  Currículo estruturado de defesa pessoal, condicionamento e estilo de vida.
                </span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-800">
              {gymData.heroStats.map((stat) => (
                <div key={stat.label} className="bg-zinc-950/80 border border-zinc-800/80 p-3.5 rounded-xl text-center">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-bold text-zinc-200 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
