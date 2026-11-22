import React from 'react';
import { FrequencyLogo } from './FrequencyLogo';
import { CONTACT_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { Clock, MapPin, ShieldCheck, ArrowRight, Sparkles, Check, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const essentialPoints = [
    { label: '20 minutos por sessão', icon: Clock },
    { label: 'Atendimento no local escolhido pelo cliente', icon: MapPin },
    { label: 'Tecnologia de EMS Wiemspro®', icon: Sparkles },
    { label: 'Acompanhamento profissional dedicado', icon: ShieldCheck },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-[#F7F5F0] text-[#202126] overflow-hidden">
      {/* Subtle organic editorial ambient background */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[#E8E2D8]/60 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[400px] bg-[#EDE8FC]/50 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Editorial Top Tag */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EFEBE3] border border-[#E0DBD0] text-[#5A6065] text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8276C9]"></span>
            <span>Tempo é luxo. Praticidade é rotina.</span>
          </div>

          {/* Official Suggested Headline */}
          <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#202126] tracking-tight leading-[1.08] mb-6">
            O TEMPO É O <br className="hidden sm:inline" />
            <span className="text-[#8276C9] font-serif font-normal italic">VERDADEIRO LUXO.</span>
          </h1>

          {/* Official Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#3A3F45] max-w-3xl font-normal leading-relaxed mb-6">
            Tecnologia de eletroestimulação muscular com acompanhamento personalizado, onde você estiver.
          </p>

          {/* Official Texto de Apoio */}
          <p className="text-sm sm:text-base text-[#5A6065] max-w-2xl font-light leading-relaxed mb-10">
            O cuidado com o corpo adaptado à sua rotina. Uma experiência de treino personalizada, com tecnologia e orientação profissional em São Paulo.
          </p>

          {/* Primary CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
            <a
              href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#202126] hover:bg-[#8276C9] text-white font-bold text-xs sm:text-sm tracking-[0.14em] uppercase shadow-lg shadow-black/10 hover:shadow-xl transition-all duration-200 group"
            >
              <span>AGENDAR SESSÃO EXPERIMENTAL</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#method"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#DDD6CC] text-[#202126] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all"
            >
              <span>Conhecer o Método</span>
            </a>
          </div>

          {/* Essential Info Strip (4 Pillars from PDF) */}
          <div className="w-full max-w-4xl pt-6 border-t border-[#E5E0D8] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            {essentialPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/80 border border-[#E7E2DA] shadow-xs flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#F5F2EB] text-[#8276C9] flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#202126] leading-tight">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Editorial Visual Composition (Clean Spa / Luxury Fitness Impression) */}
        <div className="mt-8 max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-6 sm:p-10 bg-white border border-[#E5E0D8] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Subtle Concept */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8276C9] mb-2">
                  Atendimento Domiciliar VIP em São Paulo
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202126] tracking-tight mb-4">
                  Cuidado sem acrescentar complexidade.
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6065] leading-relaxed mb-6">
                  Transformamos a academia do seu edifício ou a sua própria sala em um ambiente de alta tecnologia e atenção individualizada. Sem deslocamento, sem trânsito e sem equipamentos pesados.
                </p>

                <div className="space-y-2 text-xs text-[#202126]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8276C9]" />
                    <span>Condução presencial pela Fernanda</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8276C9]" />
                    <span>Traje sem fio Wiemspro® com calibração precisa em tempo real</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8276C9]" />
                    <span>Protocolo final de drenagem e recuperação muscular</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Discrete Aesthetic Badge */}
              <div className="md:col-span-5 bg-[#FAF8F5] rounded-2xl p-6 border border-[#EAE5DC] text-center flex flex-col items-center justify-center">
                <FrequencyLogo variant="mark" size="md" />
                <div className="mt-3 text-sm font-bold text-[#202126]">Frequency Body</div>
                <div className="text-[11px] text-[#5A6065] uppercase tracking-wider mt-0.5">EletroEstimulação</div>
                
                <div className="mt-4 pt-4 border-t border-[#E5E0D8] w-full flex items-center justify-center gap-1.5 text-xs text-[#202126]">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold">5.0</span>
                  <span className="text-[#5A6065]">(Google Meu Negócio)</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
