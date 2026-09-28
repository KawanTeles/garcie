import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import { gymData } from '../data/gymData';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-zinc-800 text-zinc-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <img
                  src="/images/gracie-triangle.svg"
                  alt="Gracie Jiu Jitsu"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-widest uppercase block">
                  GRACIE JIU JITSU
                </span>
                <span className="text-[10px] font-bold text-amber-400 tracking-[0.2em] uppercase">
                  DESDE 1925 • CARLOS & HÉLIO GRACIE
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              A matriz original onde a arte suave foi aperfeiçoada para defender a vida, fortalecer o caráter e promover longevidade e equilíbrio para toda a família.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={gymData.info.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center text-zinc-300 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${gymData.info.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-green-600 hover:text-white flex items-center justify-center text-zinc-300 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${gymData.info.phone.replace(/[^0-9]/g, '')}`}
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-300 transition-colors"
                aria-label="Telefone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navegação Rápida */}
          <div className="space-y-3">
            <h4 className="text-xs font-black tracking-widest text-white uppercase">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre a Academia</a></li>
              <li><a href="#beneficios" className="hover:text-amber-400 transition-colors">Por que Treinar</a></li>
              <li><a href="#modalidades" className="hover:text-amber-400 transition-colors">Modalidades</a></li>
              <li><a href="#horarios" className="hover:text-amber-400 transition-colors">Grade de Horários</a></li>
              <li><a href="#professores" className="hover:text-amber-400 transition-colors">Nossa Equipe</a></li>
            </ul>
          </div>

          {/* Col 3: Programas */}
          <div className="space-y-3">
            <h4 className="text-xs font-black tracking-widest text-white uppercase">
              Modalidades
            </h4>
            <ul className="space-y-2">
              <li><a href="#modalidades" className="hover:text-amber-400 transition-colors">Jiu-Jitsu Iniciante</a></li>
              <li><a href="#modalidades" className="hover:text-amber-400 transition-colors">Jiu-Jitsu Adulto Avançado</a></li>
              <li><a href="#modalidades" className="hover:text-amber-400 transition-colors">Gracie Kids & Juvenil</a></li>
              <li><a href="#modalidades" className="hover:text-amber-400 transition-colors">Equipe de Competição</a></li>
              <li><a href="#modalidades" className="hover:text-amber-400 transition-colors">Jiu-Jitsu No-Gi</a></li>
              <li><a href="#modalidades" className="hover:text-amber-400 transition-colors">Aulas Particulares</a></li>
            </ul>
          </div>

          {/* Col 4: Contato & Unidade */}
          <div className="space-y-3">
            <h4 className="text-xs font-black tracking-widest text-white uppercase">
              Matriz Oficial
            </h4>
            <div className="space-y-2 text-zinc-400">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{gymData.info.address.full}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{gymData.info.phone}</span>
              </p>
              <p className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span>{gymData.info.whatsapp}</span>
              </p>
              <p className="flex items-center space-x-2">
                <InstagramIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{gymData.info.instagram}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <p>
            © {new Date().getFullYear()} Academia Gracie Jiu-Jitsu. Todos os direitos reservados. Em honra aos Grandes Mestres Carlos & Hélio Gracie.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
