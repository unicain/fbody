import React, { useState } from 'react';
import { METHOD_FAQS, MUSCLE_GROUPS, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { ChevronDown, Sparkles, Check, ArrowRight, ShieldCheck, HeartPulse, Activity } from 'lucide-react';

export const TheMethodSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedMuscle, setSelectedMuscle] = useState(MUSCLE_GROUPS[4]); // abdomen/core

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="method" className="py-24 md:py-32 bg-[#FAF8F5] text-[#202126] relative border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8276C9] block mb-3">
            THE METHOD
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#202126] tracking-tight mb-4">
            Tecnologia de Ponta com Orientação Humana
          </h2>
          <p className="text-base sm:text-lg text-[#5A6065] font-light leading-relaxed">
            Entenda a ciência por trás da Whole-Body EMS (Wiemspro®) e como o método potencializa seu condicionamento, postura e recuperação em apenas 20 minutos.
          </p>
        </div>

        {/* 3 Pillars of The Method (Contemporary, no miracle claims) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 rounded-3xl bg-white border border-[#E5E0D8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] text-[#8276C9] flex items-center justify-center font-bold text-sm mb-5">
              01
            </div>
            <h3 className="text-lg font-bold text-[#202126] mb-2.5">
              Ativação Muscular Global
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6065] leading-relaxed">
              O traje biométrico envia impulsos controlados que acionam até as fibras musculares mais profundas, recrutando mais de 350 músculos simultaneamente de maneira equilibrada.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E5E0D8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] text-[#8276C9] flex items-center justify-center font-bold text-sm mb-5">
              02
            </div>
            <h3 className="text-lg font-bold text-[#202126] mb-2.5">
              Zero Impacto Articular
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6065] leading-relaxed">
              O estímulo neuromuscular dispensa anilhas pesadas ou sobrecargas sobre coluna e joelhos. O músculo trabalha com máxima intensidade enquanto as articulações permanecem preservadas.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E5E0D8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] text-[#8276C9] flex items-center justify-center font-bold text-sm mb-5">
              03
            </div>
            <h3 className="text-lg font-bold text-[#202126] mb-2.5">
              Drenagem & Recuperação
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6065] leading-relaxed">
              Os minutos finais da sessão são dedicados a um protocolo suave de pulsação circulatória que auxilia na drenagem linfática, reduz a sensação de pernas pesadas e relaxa a musculatura.
            </p>
          </div>
        </div>

        {/* 10 Muscle Groups (Clean Interactive Chip Selector) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E0D8] shadow-sm mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8276C9] block mb-2">
              Mapeamento Corporal
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202126] tracking-tight mb-2">
              10 Áreas de Ativação Simultânea
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6065] leading-relaxed">
              Selecione um grupo muscular abaixo para visualizar como a calibração individual atua no seu corpo:
            </p>
          </div>

          {/* Muscle Chips */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {MUSCLE_GROUPS.map((m) => {
              const isSelected = selectedMuscle.id === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedMuscle(m)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#202126] text-white border-[#202126] shadow-sm'
                      : 'bg-[#FAF8F5] text-[#5A6065] border-[#E5E0D8] hover:border-[#8276C9] hover:text-[#202126]'
                  }`}
                >
                  {m.name}
                </button>
              );
            })}
          </div>

          {/* Selected Group Card */}
          <div className="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E5E0D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#8276C9] mb-0.5">
                {selectedMuscle.location}
              </div>
              <h4 className="text-lg font-bold text-[#202126] mb-1">
                {selectedMuscle.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#5A6065]">
                {selectedMuscle.benefit}
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-white text-[#202126] text-xs font-semibold border border-[#E5E0D8] shrink-0">
              Calibração 1 a 1
            </span>
          </div>
        </div>

        {/* The 5 Mandatory Method FAQs (Pagina 4 e 5 do PDF) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8276C9] block mb-2">
              Respostas Claras e Transparentes
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202126] tracking-tight">
              O que Você Precisa Saber Sobre o Método
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6065] mt-1">
              Esclarecimentos técnicos em linguagem acessível, sem exageros comerciais.
            </p>
          </div>

          <div className="space-y-4">
            {METHOD_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="rounded-3xl border border-[#E5E0D8] bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#202126] leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#8276C9]' : 'text-[#5A6065]'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5A6065] leading-relaxed border-t border-[#F2EFE9] bg-[#FAF8F5]/60">
                      <p className="mb-3">{faq.answer}</p>
                      <div className="p-3 rounded-xl bg-white border border-[#E7E2DA] text-[11px] font-semibold text-[#8276C9] flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span>{faq.highlight}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Section bottom CTA */}
          <div className="mt-12 text-center">
            <a
              href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.method)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#202126] hover:bg-[#8276C9] text-white text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <span>Agendar Minha Primeira Sessão</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
