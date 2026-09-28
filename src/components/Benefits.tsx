import React from 'react';
import { Shield, UserCheck, Activity, Zap, Users, TrendingUp } from 'lucide-react';
import { gymData } from '../data/gymData';

export const Benefits: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield': return <Shield className="w-7 h-7" />;
      case 'UserCheck': return <UserCheck className="w-7 h-7" />;
      case 'Activity': return <Activity className="w-7 h-7" />;
      case 'Zap': return <Zap className="w-7 h-7" />;
      case 'Users': return <Users className="w-7 h-7" />;
      case 'TrendingUp': return <TrendingUp className="w-7 h-7" />;
      default: return <Shield className="w-7 h-7" />;
    }
  };

  return (
    <section id="beneficios" className="py-20 sm:py-28 relative bg-[#0B0D13] border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              TRANSFORMAÇÃO PARA O CORPO E A MENTE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Por que treinar Jiu-Jitsu?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Os benefícios do Jiu-Jitsu vão muito além das finalizações no tatame. É um estilo de vida focado em saúde, serenidade e equilíbrio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gymData.benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group relative bg-[#12141D] border border-zinc-800/80 hover:border-amber-500/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Top Accent Gradient line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-amber-400 group-hover:to-transparent transition-all duration-500" />

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:border-amber-400 text-amber-400 group-hover:text-slate-950 transition-colors duration-300 shadow-md">
                {getIcon(benefit.iconName)}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-black text-white mb-1 tracking-wide group-hover:text-amber-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-xs font-bold text-amber-400/90 uppercase tracking-wider mb-3">
                {benefit.subtitle}
              </p>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
