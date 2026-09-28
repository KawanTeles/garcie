import React, { useState } from 'react';
import { Camera, X, ZoomIn } from 'lucide-react';
import { gymData } from '../data/gymData';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeCaption, setActiveCaption] = useState<string>('');

  const categories = ['Todos', 'Treino', 'Kids', 'Tradição', 'No-Gi', 'Graduação', 'Estrutura'];

  const filteredImages = selectedCategory === 'Todos'
    ? gymData.galleryImages
    : gymData.galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 sm:py-28 relative bg-[#08090C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              MOMENTOS NO TATAME
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Viva o Jiu-Jitsu com a gente.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Registros do dia a dia, evolução técnica, treinos intensos e o companheirismo que nos une.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
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
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Tag */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-amber-500/30 px-2.5 py-1 rounded-md">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  {img.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-amber-400" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs sm:text-sm font-bold text-white leading-snug drop-shadow-md">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
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
                className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-black text-white rounded-full z-10"
                aria-label="Fechar foto"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={activeImage}
                alt={activeCaption}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
              <div className="p-4 bg-black/80 border-t border-zinc-800 text-center">
                <p className="text-sm font-bold text-white">{activeCaption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
