import React from 'react';
import { Heart, MessageCircle, ExternalLink, BadgeCheck } from 'lucide-react';
import { gymData } from '../data/gymData';
import type { InstagramPost } from '../data/gymData';
import { InstagramIcon } from './InstagramIcon';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-20 sm:py-28 relative bg-[#0B0D13] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Profile Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 p-6 sm:p-8 bg-[#11131B] border border-zinc-800/80 rounded-2xl shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-600 shadow-md">
                <div className="w-full h-full rounded-full bg-[#0B0D13] p-1 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/gracie-triangle.svg"
                    alt="@academiagracie"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  academiagracie
                </h3>
                <BadgeCheck className="w-5 h-5 text-amber-400 fill-amber-400" />
              </div>
              <p className="text-xs text-zinc-400 font-semibold mt-0.5">
                GRACIE JIU JITSU OFICIAL • 24.8K seguidores • 117 publicações
              </p>
              <p className="text-xs text-zinc-300 mt-1 max-w-md hidden sm:block">
                Iniciante • Avançado • Competição • Jiu-Jitsu Kids • Jiu-Jitsu Adulto
              </p>
            </div>
          </div>

          <a
            href={gymData.info.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all cursor-pointer"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>SEGUIR NO INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Continue acompanhando nossa equipe.
          </h2>
          <p className="text-zinc-400 text-sm">
            Confira as últimas publicações, técnicas de defesa pessoal e o dia a dia do nosso tatame no <strong>@academiagracie</strong>.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gymData.instagramFeed.map((post: InstagramPost) => (
            <a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#11131B] border border-zinc-800/80 hover:border-amber-500/50 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              {/* Photo Frame */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6 text-white font-bold text-sm">
                  <div className="flex items-center space-x-1.5">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 p-1.5 bg-black/70 rounded-full text-zinc-300">
                  <InstagramIcon className="w-4 h-4 text-amber-400" />
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-zinc-800/80">
                  <span>{post.date}</span>
                  <span className="text-amber-400 font-bold group-hover:underline flex items-center space-x-1">
                    <span>Ver post</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
