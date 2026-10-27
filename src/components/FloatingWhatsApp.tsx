import React, { useState } from 'react';
import { CONTACT_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { MessageCircle, X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: 'Agendar Sessão Experimental',
      desc: 'Atendimento na sua casa ou condomínio em SP',
      msg: DEFAULT_WHATSAPP_MESSAGES.hero,
    },
    {
      title: 'Dúvidas Sobre o Método',
      desc: 'Falar diretamente com a Fernanda',
      msg: DEFAULT_WHATSAPP_MESSAGES.method,
    },
    {
      title: 'Consultar Região e Horários',
      desc: 'Moema, Itaim, Jardins, Morumbi e outros',
      msg: DEFAULT_WHATSAPP_MESSAGES.experience,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick popup launcher */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-3xl bg-white border border-[#E5E0D8] p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F2EFE9]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F5F2EB] flex items-center justify-center text-[#8276C9]">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#202126]">Fernanda • Frequency Body</h4>
                <p className="text-[10px] text-[#8276C9] flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Disponível em São Paulo
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#5A6065] hover:text-[#202126] p-1 rounded-lg cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#5A6065] mb-3 leading-relaxed">
            Olá! Como posso ajudar você hoje? Escolha um assunto para iniciar nossa conversa:
          </p>

          <div className="space-y-2 mb-3">
            {quickOptions.map((opt, idx) => (
              <a
                key={idx}
                href={createWhatsAppUrl(opt.msg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block p-3 rounded-2xl bg-[#FAF8F5] hover:bg-[#F5F2EB] border border-[#EAE5DC] transition-colors text-left group"
              >
                <div className="text-xs font-bold text-[#202126] group-hover:text-[#8276C9] flex items-center justify-between">
                  <span>{opt.title}</span>
                  <Send className="w-3 h-3 text-[#5A6065] group-hover:text-[#8276C9]" />
                </div>
                <div className="text-[10px] text-[#5A6065] mt-0.5">{opt.desc}</div>
              </a>
            ))}
          </div>

          <a
            href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-full bg-[#202126] hover:bg-[#8276C9] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors uppercase tracking-wider"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Abrir WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Button */}
      <div className="flex items-center gap-2.5">
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#DDD6CC] text-[#202126] text-xs font-semibold shadow-md cursor-pointer hover:border-[#8276C9] transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Falar com Fernanda</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-13 h-13 rounded-full bg-[#202126] hover:bg-[#8276C9] text-white shadow-xl flex items-center justify-center transition-all cursor-pointer active:scale-95"
          aria-label="Abrir WhatsApp"
        >
          {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
};
