import React from 'react';
import { Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 sm:py-24 relative bg-[#08090C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase */}
          <div className="relative">
            <div className="relative h-[360px] sm:h-[440px] w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/80 group">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85"
                alt="Tatame oficial da Academia Gracie"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Crest Badge */}
              <div className="absolute top-5 left-5 w-14 h-14 sm:w-16 sm:h-16 bg-black/80 backdrop-blur-md rounded-xl p-2 border border-amber-500/40 shadow-xl flex items-center justify-center">
                <img
                  src="/images/gracie-crest.svg"
                  alt="Selo Gracie"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/30 flex items-center space-x-3">
                <div className="p-2.5 bg-amber-500 rounded-lg text-slate-950 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Linhagem Carlos & Hélio Gracie
                  </h4>
                  <p className="text-amber-400 text-xs font-semibold">
                    Preservando a autêntica arte suave desde 1925
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Short & Objective Content */}
          <div className="space-y-5">
            <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-[11px] font-black tracking-widest text-amber-400 uppercase">
                QUEM SOMOS & FILOSOFIA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Mais do que uma arte marcial.{' '}
              <span className="text-amber-400 block sm:inline">Um caminho de evolução.</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Fundada em 1925 pelos irmãos Carlos e Hélio Gracie, a <strong className="text-white">Academia Gracie</strong> é a matriz onde nasceu o Jiu-Jitsu Brasileiro. Desenvolvido para que qualquer pessoa consiga se defender através de alavancas e técnica pura, sem depender de força física bruta.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Nossa proposta vai além das técnicas no tatame: construímos disciplina mental, confiança para a vida, respeito mútuo e saúde integral em um ambiente familiar, seguro e acolhedor para iniciantes de todas as idades.
            </p>

            {/* High-Value Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-zinc-800">
              <div className="bg-zinc-950/80 border border-zinc-800/80 p-3 rounded-xl text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400">1925</div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mt-0.5">Origem do BJJ</div>
              </div>
              <div className="bg-zinc-950/80 border border-zinc-800/80 p-3 rounded-xl text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400">100%</div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mt-0.5">Certificados</div>
              </div>
              <div className="bg-zinc-950/80 border border-zinc-800/80 p-3 rounded-xl text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400">Kids & Adultos</div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mt-0.5">Todas as Idades</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
