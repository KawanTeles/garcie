import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Navigation } from 'lucide-react';
import { gymData } from '../data/gymData';
import { InstagramIcon } from './InstagramIcon';

export const ContactLocation: React.FC = () => {
  return (
    <section id="contato" className="py-20 sm:py-24 relative bg-[#0B0D13] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-black tracking-widest text-amber-400 uppercase">
              CONTATO & LOCALIZAÇÃO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Onde estamos e como nos encontrar
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Informações oficiais de atendimento, endereço da matriz e canais diretos de comunicação.
          </p>
        </div>

        {/* 2-Column Consolidated Contact & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#11131B] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-white">
                {gymData.info.fullUnitName}
              </h3>

              <div className="space-y-4">
                {/* Endereço */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                      Endereço
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-200 mt-0.5">
                      {gymData.info.address.full}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-green-500/10 text-green-400 rounded-lg shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                      WhatsApp Oficial
                    </h4>
                    <a
                      href={`https://wa.me/${gymData.info.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-green-400 hover:underline mt-0.5 block"
                    >
                      {gymData.info.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0 mt-0.5">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                      Instagram Oficial
                    </h4>
                    <a
                      href={gymData.info.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-amber-400 hover:underline mt-0.5 block"
                    >
                      {gymData.info.instagram}
                    </a>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                      Telefone da Recepção
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-200 mt-0.5">
                      {gymData.info.phone}
                    </p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
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
              </div>
            </div>

            {/* Direct Directions Button */}
            <div className="pt-2 border-t border-zinc-800">
              <a
                href={gymData.info.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Como Chegar (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-[#11131B] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-xl min-h-[350px]">
            <iframe
              title="Localização da Academia Gracie Jiu-Jitsu"
              src="https://maps.google.com/maps?q=Rua+Vitor+Maurtua+14+A+Lagoa+Rio+de+Janeiro+RJ&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[350px] border-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
