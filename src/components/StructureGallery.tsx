import React, { useState } from 'react';
import { Camera, X, ZoomIn } from 'lucide-react';
import { gymData } from '../data/gymData';

export const StructureGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeCaption, setActiveCaption] = useState<string>('');

  return (
    <section id="estrutura" className="py-20 sm:py-24 relative bg-[#0B0D13] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3 py-1 rounded-full">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-black tracking-widest text-amber-400 uppercase">
              ESTRUTURA & ESPAÇO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Conheça o nosso tatame
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Ambiente seguro, higienização rigorosa e equipamentos de ponta para a evolução de toda a família.
          </p>
        </div>

        {/* Clean Photography Grid - Image is the Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gymData.galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => {
                setActiveImage(img.url);
                setActiveCaption(img.caption);
              }}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800/80 hover:border-amber-500/50 shadow-xl transition-all duration-300"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

              {/* Discreet Caption Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-white/90 drop-shadow-md">
                  {img.caption}
                </span>
                <span className="p-1.5 rounded-full bg-black/60 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] bg-[#11131B] border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-black text-white rounded-full z-10 cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activeImage}
                alt={activeCaption}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
              <div className="p-4 bg-black/80 border-t border-zinc-800 text-center">
                <p className="text-sm font-semibold text-white">{activeCaption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
