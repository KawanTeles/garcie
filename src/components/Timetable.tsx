import React, { useState } from 'react';
import { Clock, Calendar } from 'lucide-react';
import { gymData } from '../data/gymData';
import type { ScheduleItem } from '../data/gymData';

interface TimetableProps {
  onOpenBooking: (modalityTitle?: string) => void;
}

export const Timetable: React.FC<TimetableProps> = ({ onOpenBooking }) => {
  const [selectedDay, setSelectedDay] = useState('Todos');

  const days = ['Todos', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const dayNames: { [key: string]: string } = {
    'Todos': 'Todos os dias',
    'Seg': 'Segunda',
    'Ter': 'Terça',
    'Qua': 'Quarta',
    'Qui': 'Quinta',
    'Sex': 'Sexta',
    'Sáb': 'Sábado'
  };

  const filteredSchedule = selectedDay === 'Todos'
    ? gymData.timetable
    : gymData.timetable.filter(item => item.days.includes(selectedDay));

  return (
    <section id="horarios" className="py-20 sm:py-24 relative bg-[#08090C] border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-black tracking-widest text-amber-400 uppercase">
              GRADE DE HORÁRIOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Horários das Aulas
          </h2>
          <p className="text-zinc-400 text-sm">
            Consulte as turmas por dia da semana e encontre o horário ideal para sua rotina.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 mb-8 gap-2 no-scrollbar">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                selectedDay === day
                  ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {dayNames[day]}
            </button>
          ))}
        </div>

        {/* Schedule List / Table */}
        <div className="bg-[#11131B] border border-zinc-800/80 rounded-2xl overflow-hidden divide-y divide-zinc-800/80 shadow-xl">
          {filteredSchedule.map((item: ScheduleItem) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-900/40 transition-colors"
            >
              {/* Modality & Category */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2.5">
                  <h3 className="text-base font-bold text-white">
                    {item.modality}
                  </h3>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md uppercase">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-zinc-400">
                  <span className="font-semibold text-zinc-300">Dias:</span>
                  <span>{item.days.join(', ')}</span>
                  <span>•</span>
                  <span>{item.instructor}</span>
                </div>
              </div>

              {/* Time & Action Button */}
              <div className="flex items-center justify-between sm:justify-end space-x-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-800/60">
                <div className="flex items-center space-x-1.5 font-mono text-xs font-bold text-amber-300 bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.time}</span>
                </div>

                <button
                  onClick={() => onOpenBooking(item.modality)}
                  className="inline-flex items-center space-x-1.5 bg-zinc-900 hover:bg-amber-500 text-zinc-300 hover:text-slate-950 text-xs font-bold uppercase tracking-wider py-1.5 px-3.5 rounded-lg border border-zinc-700/80 hover:border-amber-400 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Agendar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
