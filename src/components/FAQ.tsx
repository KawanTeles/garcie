import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, MessageCircle } from 'lucide-react';
import { gymData } from '../data/gymData';
import type { FAQItem } from '../data/gymData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = gymData.faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative bg-[#0B0D13] border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              DÚVIDAS COMUNS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Esclareça suas principais dúvidas sobre como funciona a aula experimental, equipamentos e o início na arte suave.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto pt-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquise por kimono, idade, aula experimental..."
                className="w-full bg-[#11131B] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq: FAQItem, idx: number) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#11131B] border border-zinc-800/80 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-bold text-amber-400/80 bg-amber-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider hidden sm:inline">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`p-1.5 rounded-lg bg-zinc-900 text-amber-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 bg-amber-500/20' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-[#11131B] rounded-2xl border border-zinc-800 p-6">
              <p className="text-zinc-400 text-sm">
                Nenhuma dúvida encontrada para "{searchQuery}".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs font-bold text-amber-400 underline cursor-pointer"
              >
                Limpar pesquisa
              </button>
            </div>
          )}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-[#131622] to-zinc-900 border border-amber-500/20 text-center space-y-3">
          <h4 className="text-base sm:text-lg font-black text-white">
            Ainda tem alguma pergunta sobre a Gracie Jiu-Jitsu?
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
            Nossa equipe de instrutores está à disposição para tirar qualquer dúvida e indicar o treino perfeito para seu perfil.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${gymData.info.whatsappRaw}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre os treinos na Gracie Jiu-Jitsu.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>Conversar com a gente no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
