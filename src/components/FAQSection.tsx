import React, { useState } from 'react';
import { FAQ_ITEMS, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Geral', 'Logística', 'Resultados', 'Segurança'];

  const filteredFaqs =
    activeCategory === 'Todas'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((faq) => faq.category === activeCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#090e1c] relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Perguntas Frequentes Sobre o Treino EMS
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Respostas claras, técnicas e transparentes sobre a tecnologia Wiemspro®, atendimento em domicílio e segurança física.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-md'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-all duration-200 hover:border-slate-700"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-cyan-400 font-medium shrink-0">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    <p>{faq.answer}</p>
                    {faq.searchQueryContext && (
                      <div className="mt-3 text-[11px] text-slate-500 italic">
                        Tema frequentemente pesquisado no Google SP: "{faq.searchQueryContext}"
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-white font-bold text-base">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-slate-400">Nossa equipe técnica atende diretamente no WhatsApp.</p>
          </div>
          <a
            href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com o Treinador</span>
          </a>
        </div>

      </div>
    </section>
  );
};
