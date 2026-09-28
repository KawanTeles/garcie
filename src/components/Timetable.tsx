import React, { useState } from 'react';
import { Clock, Calendar, User, ChevronRight, Sparkles } from 'lucide-react';
import { gymData } from '../data/gymData';
import type { ScheduleItem } from '../data/gymData';

interface TimetableProps {
  onOpenBooking: (modalityTitle?: string) => void;
}

export const Timetable: React.FC<TimetableProps> = ({ onOpenBooking }) => {
  const [selectedDay, setSelectedDay] = useState('Todos');

  const days = ['Todos', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const dayNames: { [key: string]: string } = {
    'Todos': 'Grade Completa',
    'Seg': 'Segunda-feira',
    'Ter': 'Terça-feira',
    'Qua': 'Quarta-feira',
    'Qui': 'Quinta-feira',
    'Sex': 'Sexta-feira',
    'Sáb': 'Sábado'
  };

  const filteredSchedule = selectedDay === 'Todos'
    ? gymData.timetable
    : gymData.timetable.filter(item => item.days.includes(selectedDay));

  return (
    <section id="horarios" className="py-20 sm:py-28 relative bg-[#0B0D13] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              GRADE DE AULAS SEMANAIS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Horários flexíveis para sua rotina.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Opções pela manhã, no horário de almoço e à noite para que você nunca deixe seus treinos de lado.
          </p>
        </div>

        {/* Day Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                selectedDay === day
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {dayNames[day]}
            </button>
          ))}
        </div>

        {/* Active Filter Indicator */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-6 px-1">
          <span className="font-semibold">
            Mostrando aulas de: <strong className="text-amber-400">{dayNames[selectedDay]}</strong>
          </span>
          <span>{filteredSchedule.length} turmas disponíveis</span>
        </div>

        {/* Timetable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSchedule.map((item: ScheduleItem) => (
            <div
              key={item.id}
              className="bg-[#12141E] border border-zinc-800/80 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Time & Days Row */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-500/15 border border-amber-500/30 rounded-lg text-amber-400 font-mono font-bold text-xs tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time}</span>
                  </div>

                  <div className="flex items-center space-x-1">
                    {item.days.map((d) => (
                      <span
                        key={d}
                        className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                          d === selectedDay || selectedDay === 'Todos'
                            ? 'bg-zinc-800 text-amber-300 border border-amber-500/20'
                            : 'bg-zinc-900 text-zinc-500'
                        }`}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modality Title */}
                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                    {item.modality}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-400 mt-0.5">
                    {item.category}
                  </p>
                </div>

                {/* Instructor */}
                <div className="flex items-center space-x-2 text-xs text-zinc-400 pt-2 border-t border-zinc-800/60">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.instructor}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-zinc-800/80">
                <button
                  onClick={() => onOpenBooking(item.modality)}
                  className="w-full flex items-center justify-center space-x-1.5 bg-zinc-900/90 hover:bg-amber-500 text-zinc-300 hover:text-slate-950 text-xs font-black uppercase tracking-wider py-2.5 px-3 rounded-xl transition-all duration-300 border border-zinc-700/80 hover:border-amber-400 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agendar nesta turma</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Notice note */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <span className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-white font-bold text-xs sm:text-sm">
                Precisa de horários especiais ou aulas particulares?
              </h4>
              <p className="text-zinc-400 text-xs mt-0.5">
                Oferecemos pacotes com instrutores dedicados em horários flexíveis para sua comodidade.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking('Aulas Particulares (Privadas)')}
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            Consultar Aulas Privadas
          </button>
        </div>
      </div>
    </section>
  );
};
