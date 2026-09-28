import React, { useState, useEffect } from 'react';
import { X, User, Phone, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { gymData } from '../data/gymData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedModality?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedModality = 'Jiu-Jitsu Iniciante'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [modality, setModality] = useState(selectedModality);
  const [preferredShift, setPreferredShift] = useState('Noite (após 18h)');
  const [experience, setExperience] = useState('Iniciante Absoluto (Nunca treinei)');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedModality) {
      setModality(selectedModality);
    }
  }, [selectedModality]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const message = `🥋 *Agendamento de Aula Experimental - Gracie Jiu-Jitsu*
━━━━━━━━━━━━━━━━━━━━
👤 *Nome:* ${name}
📱 *WhatsApp:* ${phone}
🎯 *Modalidade:* ${modality}
⏰ *Turno de Preferência:* ${preferredShift}
🥋 *Nível de Experiência:* ${experience}
━━━━━━━━━━━━━━━━━━━━
Gostaria de confirmar minha aula experimental gratuita na academia!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${gymData.info.whatsappRaw}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0F1117] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 rounded-full transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center space-x-2.5 mb-2">
              <span className="p-1.5 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400">
                <Shield className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                Aula Experimental Gratuita
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Dê o primeiro passo no <span className="text-amber-400">tatame</span>.
            </h3>
            <p className="text-sm text-zinc-400 mt-1.5 mb-6">
              Preencha seus dados abaixo. Emprestamos o kimono para sua primeira aula sem custo algum.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold tracking-wider text-zinc-300 uppercase mb-1.5">
                  Seu Nome Completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Gracie"
                    className="w-full bg-[#181B24] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wider text-zinc-300 uppercase mb-1.5">
                  WhatsApp / Celular com DDD *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(21) 98765-4321"
                    className="w-full bg-[#181B24] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider text-zinc-300 uppercase mb-1.5">
                    Modalidade Desejada
                  </label>
                  <select
                    value={modality}
                    onChange={(e) => setModality(e.target.value)}
                    className="w-full bg-[#181B24] border border-zinc-800 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Jiu-Jitsu Iniciante (Fundamentos)">Jiu-Jitsu Iniciante</option>
                    <option value="Jiu-Jitsu Adulto Avançado">Jiu-Jitsu Avançado</option>
                    <option value="Gracie Kids (4 a 8 anos)">Gracie Kids (4 a 8 anos)</option>
                    <option value="Gracie Juvenil (9 a 15 anos)">Gracie Juvenil (9 a 15 anos)</option>
                    <option value="Jiu-Jitsu No-Gi (Sem Kimono)">Jiu-Jitsu No-Gi</option>
                    <option value="Equipe de Competição">Competição</option>
                    <option value="Aulas Particulares (Privadas)">Aulas Particulares</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-zinc-300 uppercase mb-1.5">
                    Melhor Horário
                  </label>
                  <select
                    value={preferredShift}
                    onChange={(e) => setPreferredShift(e.target.value)}
                    className="w-full bg-[#181B24] border border-zinc-800 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Manhã (07h às 10h)">Manhã (07h às 10h)</option>
                    <option value="Almoço (12h às 13h)">Almoço (12h às 13h)</option>
                    <option value="Tarde (16h às 18h)">Tarde (16h às 18h)</option>
                    <option value="Noite (18h às 21h)">Noite (18h às 21h)</option>
                    <option value="Sábado de Manhã">Sábado de Manhã</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wider text-zinc-300 uppercase mb-1.5">
                  Experiência Prévia
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setExperience('Iniciante Absoluto (Nunca treinei)')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all ${
                      experience.includes('Iniciante')
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Nunca treinei
                  </button>
                  <button
                    type="button"
                    onClick={() => setExperience('Já tenho experiência / Faixa colorida')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all ${
                      experience.includes('experiência')
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Já treinei antes
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-300 hover:shadow-amber-500/40 active:scale-[0.99] group cursor-pointer"
                >
                  <span>CONFIRMAR E AGENDAR NO WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <p className="text-[11px] text-center text-zinc-500 pt-1">
                🔒 Seus dados estão 100% seguros. Não enviamos spam. Atendimento direto pelos professores da Gracie.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-2xl font-black text-white">Solicitação Encaminhada!</h4>
            <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Abrimos a conversa no WhatsApp oficial da <strong>Gracie Jiu-Jitsu</strong> com seus dados. Nossos instrutores entrarão em contato em instantes para confirmar seu horário e reservar o kimono!
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-500/40 font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition-colors cursor-pointer"
              >
                Concluir e Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
