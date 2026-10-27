import React from 'react';
import { BRAND_PILLARS, NEIGHBORHOODS, CONTACT_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { Sparkles, MapPin, Check, ArrowRight, Instagram, Star, Building2, Shield, HeartHandshake } from 'lucide-react';

export const TheExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#F2EFE9] text-[#202126] relative border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8276C9] block mb-3">
            THE EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#202126] tracking-tight mb-4">
            O Atendimento Domiciliar de Alta Conveniência
          </h2>
          <p className="text-base sm:text-lg text-[#5A6065] font-light leading-relaxed">
            Uma abordagem contemporânea que une tecnologia sem fio, conforto e acompanhamento 1 a 1 para quem não tem tempo a perder.
          </p>
        </div>

        {/* 4 Brand Pillars (Página 1 do PDF) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {BRAND_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-7 rounded-3xl bg-white border border-[#E5E0D8] shadow-xs flex flex-col justify-between hover:border-[#8276C9]/40 transition-all duration-200"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#F5F2EB] text-[#8276C9] text-[10px] font-bold uppercase tracking-wider mb-4">
                  {pillar.badge}
                </span>
                <h3 className="text-lg font-bold text-[#202126] mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-[#8276C9] mb-3 italic">
                  "{pillar.tagline}"
                </p>
                <p className="text-xs text-[#5A6065] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Experience Narrative (Conveniência & Diferencial) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E0D8] shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8276C9]">
                Zero Atrito em São Paulo
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202126] tracking-tight leading-tight">
                Seu treino acontece onde for mais conveniente.
              </h3>
              <p className="text-sm text-[#5A6065] leading-relaxed">
                Em São Paulo, o maior obstáculo para a consistência física não é a falta de vontade, mas sim a logística: o trânsito da Marginal Pinheiros, da 23 de Maio ou da Faria Lima, a busca por vagas de estacionamento e a agitação dos estúdios comerciais.
              </p>
              <p className="text-sm text-[#5A6065] leading-relaxed">
                Com a <strong>Frequency Body</strong>, o personal chega no seu condomínio com a estrutura completa e silenciosa. O treino dura 20 minutos com ativação muscular profunda. Ao terminar, você toma banho no seu próprio chuveiro e segue sua rotina de reuniões ou família revigorado.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium text-[#202126]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#8276C9]" />
                  <span>Sem roupas especiais de compra obrigatória</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#8276C9]" />
                  <span>Horários flexíveis a partir das 6h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#8276C9]" />
                  <span>Privacidade total sem olhares alheios</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Card */}
            <div className="lg:col-span-5 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#EAE5DC] flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#8276C9] mb-1">
                  Atendimento VIP com Fernanda
                </div>
                <h4 className="text-lg font-bold text-[#202126] mb-3">
                  Sessões no seu Condomínio ou Residência
                </h4>
                <p className="text-xs text-[#5A6065] leading-relaxed mb-6">
                  Estrutura portátil sem fio compatível com salas de estar, varandas ou academias internas de edifícios de alto padrão.
                </p>
              </div>

              <a
                href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.experience)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-full bg-[#202126] hover:bg-[#8276C9] text-white text-xs font-bold tracking-wider uppercase text-center flex items-center justify-center gap-2 transition-all"
              >
                <span>CONSULTAR DISPONIBILIDADE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Noble Neighborhoods of SP Section (Local Presence) */}
        <div>
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#202126]">
                Regiões de Atendimento Prioritário em São Paulo
              </h3>
              <p className="text-xs text-[#5A6065] mt-1">
                Logística organizada para pontualidade e discrição nos principais bairros nobres da capital.
              </p>
            </div>
            <div className="text-xs text-[#5A6065] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Atendimento com hora marcada</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {NEIGHBORHOODS.map((n) => (
              <div
                key={n.id}
                className="p-4 rounded-2xl bg-white border border-[#E5E0D8] text-center hover:border-[#8276C9] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#8276C9] mx-auto mb-1.5" />
                <h4 className="text-xs font-bold text-[#202126] mb-0.5">{n.name}</h4>
                <span className="text-[10px] text-[#5A6065] block">{n.zone}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
