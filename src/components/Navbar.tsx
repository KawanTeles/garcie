import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, ChevronRight, Calendar } from 'lucide-react';
import { gymData } from '../data/gymData';
import { InstagramIcon } from './InstagramIcon';

interface NavbarProps {
  onOpenBooking: (modality?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Horários', href: '#horarios' },
    { name: 'Professores', href: '#professores' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#localizacao' },
  ];

  return (
    <>
      {/* Top Heritage Notice Bar */}
      <div className="bg-[#0C0E14] border-b border-zinc-800/80 text-[11px] sm:text-xs text-zinc-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center space-x-1.5 text-amber-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>LINHAGEM OFICIAL GRACIE JIU-JITSU</span>
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-300">Primeira Aula Experimental Gratuita com Kimono Emprestado</span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={gymData.info.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-amber-400 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>@academiagracie</span>
            </a>
            <span className="text-zinc-600">•</span>
            <a 
              href={`tel:${gymData.info.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center space-x-1 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{gymData.info.phone}</span>
            </a>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center space-x-1 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Lagoa, Rio de Janeiro</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090C]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center space-x-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11">
              <img
                src="/images/gracie-triangle.svg"
                alt="Gracie Jiu Jitsu Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-widest text-white uppercase group-hover:text-amber-400 transition-colors">
                GRACIE
              </span>
              <div className="flex items-center space-x-1.5 -mt-1">
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-amber-400 uppercase">
                  JIU-JITSU
                </span>
                <span className="text-[9px] font-semibold tracking-wider text-zinc-500 hidden sm:inline">
                  • 1925
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`https://wa.me/${gymData.info.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de tirar dúvidas sobre a Gracie Jiu-Jitsu.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 px-3.5 py-2.5 rounded-full transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-green-400" />
              <span>Fale Conosco</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-xs font-black tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>AGENDAR AULA</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center space-x-1 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full shadow-md shadow-amber-500/20 cursor-pointer"
            >
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>AULA EXPERIMENTAL</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white bg-zinc-900/90 border border-zinc-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0C12] border-b border-zinc-800/90 px-4 pt-4 pb-6 mt-2 animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-xs font-semibold text-zinc-300 hover:text-amber-400 bg-zinc-900/60 border border-zinc-800/60 p-2.5 rounded-lg transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3 h-3 text-zinc-600" />
                </a>
              ))}
            </div>

            <div className="space-y-2 pt-2 border-t border-zinc-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-lg shadow-amber-500/25"
              >
                <Calendar className="w-4 h-4" />
                <span>AGENDAR AULA EXPERIMENTAL</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`https://wa.me/${gymData.info.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com a equipe da Gracie Jiu-Jitsu.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 bg-zinc-900 border border-zinc-700 text-zinc-200 py-2.5 px-3 rounded-xl text-[11px] font-bold"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={gymData.info.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 bg-zinc-900 border border-zinc-700 text-zinc-200 py-2.5 px-3 rounded-xl text-[11px] font-bold"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
