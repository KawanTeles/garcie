import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Horários', href: '#horarios' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090C]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-xl py-3.5'
          : 'bg-gradient-to-b from-[#08090C]/90 via-[#08090C]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0">
            <img
              src="/images/gracie-triangle.svg"
              alt="Gracie Jiu Jitsu Logo"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-widest text-white uppercase group-hover:text-amber-400 transition-colors leading-tight">
              GRACIE
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-amber-400 uppercase -mt-0.5">
              JIU-JITSU
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-amber-400 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-xs font-black tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar aula</span>
          </button>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex md:hidden items-center space-x-2.5">
          <button
            onClick={onOpenBooking}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm cursor-pointer"
          >
            Agendar aula
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white bg-zinc-900/80 border border-zinc-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0C12] border-b border-zinc-800 px-5 pt-3 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-amber-400 border-b border-zinc-800/50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar aula experimental</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
