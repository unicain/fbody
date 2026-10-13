import React, { useState } from 'react';
import { CONTACT_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { MessageCircle, X, Sparkles, Send, MapPin } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: 'Aula Experimental VIP',
      desc: 'Atendimento na minha casa / apto',
      msg: 'Olá! Gostaria de agendar uma aula experimental de eletroestimulação em domicílio em SP.',
    },
    {
      title: 'Atendimento no Condomínio',
      desc: 'Na academia ou área comum do prédio',
      msg: 'Olá! Gostaria de saber como funciona o atendimento de EMS no meu condomínio em SP.',
    },
    {
      title: 'Executivos / Corporativo',
      desc: 'No escritório ou home office',
      msg: 'Olá! Gostaria de informações sobre o treino EMS de 20 min para executivos/empresas.',
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Quick popup launcher */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-3xl bg-[#090e1c] border border-emerald-500/30 p-4 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Frequency Body</h4>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online em São Paulo
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mb-3">
            Olá! Como podemos te ajudar hoje? Selecione uma opção para falar direto no WhatsApp:
          </p>

          <div className="space-y-2 mb-3">
            {quickOptions.map((opt, idx) => (
              <a
                key={idx}
                href={createWhatsAppUrl(opt.msg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/40 transition-colors text-left group"
              >
                <div className="text-xs font-semibold text-white group-hover:text-emerald-300 flex items-center justify-between">
                  <span>{opt.title}</span>
                  <Send className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">{opt.desc}</div>
              </a>
            ))}
          </div>

          <a
            href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Abrir Conversa Geral</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-3">
        {/* Subtle pill tooltip for conversion */}
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white text-xs font-semibold shadow-xl shadow-black/50 cursor-pointer hover:border-emerald-500/50 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Agendar no WhatsApp</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-xl shadow-emerald-500/35 hover:shadow-emerald-500/50 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 focus:outline-none"
          aria-label="Abrir WhatsApp"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20"></span>
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7 fill-white/20" />}
        </button>
      </div>
    </div>
  );
};
