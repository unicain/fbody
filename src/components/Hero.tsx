import React from 'react';
import { FrequencyLogo } from './FrequencyLogo';
import { CONTACT_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { MessageCircle, Clock, ShieldCheck, MapPin, Zap, ArrowRight, CheckCircle2, Award, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] bg-gradient-to-tr from-sky-600/20 via-indigo-600/15 to-purple-600/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Trust Badges, WhatsApp CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Local Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-cyan-950/40">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>São Paulo VIP: Treino EMS em Domicílio & Condomínio</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 hidden sm:inline">Tecnologia Wiemspro®</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              O Treino de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">20 Minutos</span> que Vai Até Você.
              <span className="block text-2xl sm:text-4xl lg:text-[42px] font-bold text-slate-300 mt-2">
                Zero Trânsito em SP. <span className="text-cyan-400 underline decoration-cyan-500/40 underline-offset-8">Máximo Resultado.</span>
              </span>
            </h1>

            {/* Subtitle with deep value proposition from market research */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Esqueça o trânsito da Faria Lima e as academias lotadas. A <strong className="text-white font-semibold">Frequency Body</strong> leva personal trainer credenciado CREF e a tecnologia de eletroestimulação sem fio <strong className="text-cyan-300 font-semibold">Wiemspro®</strong> direto para o seu condomínio, sala de casa ou escritório nos bairros nobres de São Paulo.
            </p>

            {/* Key Value Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-200 text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>20 Minutos por Sessão</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-200 text-xs sm:text-sm">
                <Zap className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>+350 Músculos Ativos</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-200 text-xs sm:text-sm col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Impacto Articular</span>
              </div>
            </div>

            {/* CTA Group: WhatsApp First */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 active:scale-95 transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Agendar Sessão no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#calculadora"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm transition-all text-center"
              >
                <span>Calcular Ganho de Tempo em SP</span>
              </a>
            </div>

            {/* Trust and Social Proof Strip */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-slate-200">5.0 no Google Meu Negócio</span>
                <span className="text-slate-500">| Avaliações locais SP</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Profissionais com registro no CREF-SP</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame with neon glow */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-indigo-500/20 to-purple-500/40 shadow-2xl shadow-cyan-950/50">
                <div className="bg-[#0b1122] rounded-[22px] p-6 sm:p-7 overflow-hidden relative">
                  
                  {/* Suit Tech Simulation Banner */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xs">
                        EMS
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Traje Wiemspro® Wireless</div>
                        <div className="text-[11px] text-cyan-400">Tecnologia sem fio homologada</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      100% Higienizado
                    </span>
                  </div>

                  {/* Visual Centerpiece: Modern EMS Training Visualization */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-[#070b14] to-[#111936] p-5 border border-slate-800 text-center mb-5">
                    {/* Glowing pulse indicator */}
                    <div className="flex items-center justify-center mb-4">
                      <FrequencyLogo variant="mark" size="md" />
                    </div>

                    <div className="text-center space-y-1">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Ativação Muscular Profunda
                      </div>
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">
                        10 Grupos Simultâneos
                      </div>
                      <p className="text-xs text-slate-400 pt-1">
                        Trapézio • Peitoral • Abdômen • Lombar • Glúteos • Quadríceps
                      </p>
                    </div>

                    {/* Dynamic Status Bars simulating real-time EMS impulse */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-slate-800/80 text-left">
                      <div>
                        <div className="flex justify-between text-[11px] font-medium text-slate-300 mb-1">
                          <span>Recrutamento Fibras Musculares</span>
                          <span className="text-cyan-400 font-bold">Até 90%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[90%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] font-medium text-slate-300 mb-1">
                          <span>Impacto nas Articulações</span>
                          <span className="text-emerald-400 font-bold">Zero Carga Axial</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full w-[8%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-[11px] text-slate-400">Atendimento em SP</div>
                      <div className="text-xs font-bold text-white mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>Na sua casa ou prédio</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-[11px] text-slate-400">Duração da Sessão</div>
                      <div className="text-xs font-bold text-white mt-0.5 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>Apenas 20 minutos</span>
                      </div>
                    </div>
                  </div>

                  {/* Live WhatsApp Callout Box inside Card */}
                  <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-[11px] font-semibold text-emerald-300">Agendamento Fácil no WhatsApp</div>
                        <div className="text-[10px] text-slate-400">Resposta ágil em horário comercial</div>
                      </div>
                    </div>
                    <a
                      href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shrink-0 transition-colors"
                    >
                      Agendar
                    </a>
                  </div>

                </div>
              </div>

              {/* Floating Badge (Bottom Left) */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 p-3.5 rounded-2xl bg-slate-900/95 border border-slate-700 shadow-2xl backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-sky-400 flex items-center justify-center text-slate-950 font-black text-sm">
                  20'
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Treino Rápido & VIP</div>
                  <div className="text-[11px] text-slate-400">Perfeito para quem não tem tempo</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
