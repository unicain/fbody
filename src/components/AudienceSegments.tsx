import React, { useState } from 'react';
import { AUDIENCE_PERSONAS, createWhatsAppUrl } from '../data/frequencyData';
import { Briefcase, Home, Building2, Trophy, HeartPulse, Check, ArrowRight, MessageCircle } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-5 h-5 text-cyan-400" />,
  Home: <Home className="w-5 h-5 text-sky-400" />,
  Building2: <Building2 className="w-5 h-5 text-indigo-400" />,
  Trophy: <Trophy className="w-5 h-5 text-amber-400" />,
  HeartPulse: <HeartPulse className="w-5 h-5 text-rose-400" />,
};

export const AudienceSegments: React.FC = () => {
  const [selectedPersonaId, setSelectedPersonaId] = useState<string>(AUDIENCE_PERSONAS[0].id);

  const activePersona = AUDIENCE_PERSONAS.find((p) => p.id === selectedPersonaId) || AUDIENCE_PERSONAS[0];

  const getWhatsAppMessage = (persona: typeof activePersona) => {
    return `Olá! Vi a solução da Frequency Body para ${persona.title} (${persona.tag}) e gostaria de agendar um atendimento de eletroestimulação em domicílio em SP.`;
  };

  return (
    <section id="publico-alvo" className="py-20 md:py-28 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Atendimento Sob Medida
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Qual é a Sua Principal Necessidade Hoje?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A Frequency Body estrutura protocolos de treinamento específicos para cada perfil de rotina e objetivo em São Paulo.
          </p>
        </div>

        {/* Persona Selectors Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {AUDIENCE_PERSONAS.map((p) => {
            const isSelected = p.id === selectedPersonaId;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPersonaId(p.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-950/40'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {iconMap[p.iconName]}
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Persona Deep Dive Card */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Persona Details */}
            <div className="md:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                {activePersona.tag}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                {activePersona.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-400 mb-6">
                Foco: {activePersona.subtitle}
              </p>

              {/* The Pain Point */}
              <div className="mb-4 p-4 rounded-2xl bg-rose-950/20 border border-rose-900/30 w-full text-xs sm:text-sm">
                <span className="text-rose-400 font-bold block mb-1">O Desafio Comum:</span>
                <p className="text-slate-300 italic">"{activePersona.painPoint}"</p>
              </div>

              {/* The Frequency Body Solution */}
              <div className="mb-6 p-4 rounded-2xl bg-cyan-950/20 border border-cyan-900/30 w-full text-xs sm:text-sm">
                <span className="text-cyan-400 font-bold block mb-1">A Solução Frequency Body:</span>
                <p className="text-slate-200">{activePersona.solution}</p>
              </div>

              {/* Features list */}
              <div className="space-y-2 mb-8 w-full">
                {activePersona.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <a
                href={createWhatsAppUrl(getWhatsAppMessage(activePersona))}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar para Meu Perfil</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Persona Visual Box (Right) */}
            <div className="md:col-span-4 bg-slate-950/60 rounded-2xl p-6 border border-slate-800 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
                {iconMap[activePersona.iconName]}
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
                Atendimento VIP
              </div>
              <div className="text-xl font-extrabold text-white mb-2">
                20 Minutos
              </div>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Personal trainer exclusivo no seu endereço, com agendamento flexível de acordo com sua rotina.
              </p>
              <div className="w-full py-2 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-cyan-300 font-medium">
                São Paulo - SP
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
