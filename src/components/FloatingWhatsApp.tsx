import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { gymData } from '../data/gymData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${gymData.info.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de agendar uma aula experimental gratuita na Gracie Jiu-Jitsu.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
      {/* Optional Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2 bg-[#12141D] border border-amber-500/30 text-white text-xs py-2 px-3.5 rounded-xl shadow-2xl relative animate-in fade-in duration-300">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
          <span>Fale conosco no WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-white ml-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 border-2 border-[#08090C] rounded-full animate-bounce" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
};
