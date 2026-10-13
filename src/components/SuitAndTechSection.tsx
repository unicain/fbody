import React, { useState } from 'react';
import { BENEFITS, MUSCLE_GROUPS, CONTACT_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import {
  Zap,
  Activity,
  Flame,
  ShieldCheck,
  Sliders,
  Users,
  Trophy,
  Clock,
  Sparkles,
  Wifi,
  Layers,
  HeartHandshake,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-5 h-5 text-cyan-400" />,
  Activity: <Activity className="w-5 h-5 text-sky-400" />,
  Flame: <Flame className="w-5 h-5 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  Sliders: <Sliders className="w-5 h-5 text-indigo-400" />,
  Users: <Users className="w-5 h-5 text-purple-400" />,
  Trophy: <Trophy className="w-5 h-5 text-yellow-400" />,
  Clock: <Clock className="w-5 h-5 text-teal-400" />,
};

export const SuitAndTechSection: React.FC = () => {
  const [activeMuscle, setActiveMuscle] = useState(MUSCLE_GROUPS[4]); // default to abdomen/core

  return (
    <section id="tecnologia" className="py-20 md:py-32 bg-[#090e1c] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Wifi className="w-3.5 h-3.5 text-cyan-400" />
            Tecnologia Wiemspro® Sem Fio Desde 2016
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Como Funciona a Eletroestimulação Muscular (WB-EMS)
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A <strong className="text-white">Frequency Body</strong> combina treinamento funcional inteligente com a mais avançada tecnologia espanhola de estimulação neuromuscular sem fio.
          </p>
        </div>

        {/* Deep Tech Explainer: Traje & 10 Grupos Musculares */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
          
          {/* Interactive Traje & Muscle Map (Left / Center) */}
          <div className="lg:col-span-6 bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Traje Biométrico Wiemspro®</h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                10 Áreas Simultâneas
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              O traje possui eletrodos ergonômicos estrategicamente distribuídos que emitem impulsos de baixa e média frequência, simulando os disparos naturais do sistema nervoso central com intensidade amplificada e segura.
            </p>

            {/* Muscle Group Chips */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Clique em um grupo muscular para explorar a ação:
              </label>
              <div className="flex flex-wrap gap-2">
                {MUSCLE_GROUPS.map((muscle) => {
                  const isSelected = activeMuscle.id === muscle.id;
                  return (
                    <button
                      key={muscle.id}
                      type="button"
                      onClick={() => setActiveMuscle(muscle)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-cyan-400 text-white shadow-md shadow-cyan-950/50'
                          : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-slate-600 hover:text-white'
                      }`}
                    >
                      {muscle.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Muscle Card */}
            <div className="p-4 rounded-2xl bg-[#070b14] border border-cyan-500/30 shadow-inner">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {activeMuscle.location}
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full">
                  Recrutamento Profundo
                </span>
              </div>
              <h4 className="text-base font-extrabold text-white mb-1">{activeMuscle.name}</h4>
              <p className="text-xs sm:text-sm text-slate-300">{activeMuscle.benefit}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>*Também permite eletrodos adicionais para antebraço e panturrilhas.</span>
              <span className="text-cyan-400 font-semibold">100% Sem Fio</span>
            </div>
          </div>

          {/* Right Column: Why EMS is so effective */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-slate-800">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Por Que a EMS Recruta Fibras Mais Profundas?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                No treinamento convencional de academia, o cérebro recruta primeiro as fibras musculares lentas e, apenas com cargas muito altas e exaustão, atinge as fibras rápidas (Tipo II).
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Com o traje de EMS Wiemspro®, os impulsos ativam as fibras mais profundas de forma imediata e síncrona, proporcionando um trabalho muscular completo em apenas 20 minutos — <strong className="text-cyan-300">sem sobrecarga na coluna vertebral, joelhos ou tendões</strong>.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>350+ Músculos em Ação</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Pesos Livres Pesados</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Calibração Personalizada</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Atendimento em Domicílio</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-cyan-200">Ficou com curiosidade sobre a sensação?</div>
                <div className="text-xs text-slate-400">Agende sua sessão experimental e sinta no corpo.</div>
              </div>
              <a
                href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0 transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar no WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* The 8 Official Benefits (From Presentation Slides 4 & 5) */}
        <div id="beneficios" className="pt-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
              Os 8 Principais Benefícios da Eletroestimulação
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Pilares cientificamente fundamentados que tornam a WB-EMS uma referência mundial em fitness, reabilitação e saúde integrada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b) => (
              <div
                key={b.id}
                className="group relative p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-850/80 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-cyan-950/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono">
                      {b.number}.
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/60 group-hover:scale-110 transition-transform">
                      {iconMap[b.iconName] || <Zap className="w-5 h-5 text-cyan-400" />}
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-cyan-200 transition-colors">
                    {b.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
