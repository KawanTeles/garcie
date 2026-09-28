import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, ExternalLink } from 'lucide-react';
import { gymData } from '../data/gymData';

export const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 sm:py-28 relative bg-[#08090C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              LOCALIZAÇÃO & CONTATO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Encontre a nossa academia.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Localizada no coração da Zona Sul do Rio de Janeiro, com fácil acesso e estacionamento nas proximidades.
          </p>
        </div>

        {/* 2-Column Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#11131B] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6">
            <div className="space-y-6">
              {/* Unit Tag */}
              <div>
                <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
                  UNIDADE MATRIZ OFICIAL
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  Academia Gracie Humaitá / Lagoa
                </h3>
              </div>

              {/* Info Items */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Endereço
                    </h4>
                    <p className="text-sm font-semibold text-zinc-200 mt-0.5">
                      {gymData.info.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Horário de Funcionamento
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-200 mt-0.5">
                      {gymData.info.openingHours.weekdays}
                    </p>
                    <p className="text-xs text-zinc-400">
                      {gymData.info.openingHours.saturday}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Telefone & Secretaria
                    </h4>
                    <p className="text-sm font-semibold text-zinc-200 mt-0.5">
                      {gymData.info.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      WhatsApp Oficial
                    </h4>
                    <p className="text-sm font-semibold text-zinc-200 mt-0.5">
                      {gymData.info.whatsapp}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-zinc-800 space-y-2.5">
              <a
                href={gymData.info.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>COMO CHEGAR (GOOGLE MAPS)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${gymData.info.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de informações sobre como chegar à academia.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>Falar com a Recepção no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Frame */}
          <div className="lg:col-span-7 bg-[#11131B] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl relative min-h-[380px] lg:min-h-full flex flex-col">
            <iframe
              title="Mapa de Localização da Academia Gracie Jiu-Jitsu"
              src="https://maps.google.com/maps?q=Rua+Vitor+Maurtua+14+A+Lagoa+Rio+de+Janeiro+RJ&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
