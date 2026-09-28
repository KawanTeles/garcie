import React from 'react';
import { MessageCircle } from 'lucide-react';
import { gymData } from '../data/gymData';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050608] border-t border-zinc-800/80 py-10 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-zinc-850">
          {/* Logo & Gym Name */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 shrink-0">
              <img
                src="/images/gracie-triangle.svg"
                alt="Gracie Jiu Jitsu"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-sm font-black text-white uppercase tracking-wider block">
                Academia Gracie Jiu-Jitsu
              </span>
              <span className="text-[10px] text-zinc-500 font-semibold">
                Desde 1925 • Carlos & Hélio Gracie
              </span>
            </div>
          </div>

          {/* Social / WhatsApp icons */}
          <div className="flex items-center space-x-3">
            <a
              href={gymData.info.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>@academiagracie</span>
            </a>

            <a
              href={`https://wa.me/${gymData.info.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-green-400 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-green-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Address and Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 text-[11px] text-center sm:text-left">
          <p>
            {gymData.info.address.street}, {gymData.info.address.neighborhood} – {gymData.info.address.city}, {gymData.info.address.state}
          </p>
          <p>
            © {new Date().getFullYear()} Academia Gracie Jiu-Jitsu. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
