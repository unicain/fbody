import React, { useState } from 'react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/frequencyData';
import { MessageCircle, MapPin, Target, Home, Clock, Sparkles, ArrowRight } from 'lucide-react';

const BAIRROS_LIST = [
  'Itaim Bibi / Faria Lima',
  'Moema (Pássaros / Índios)',
  'Jardins / Jardim Europa',
  'Vila Nova Conceição',
  'Morumbi / Alto da Boa Vista',
  'Brooklin / Campo Belo',
  'Pinheiros / Alto de Pinheiros',
  'Outro Bairro em São Paulo',
];

const LOCAL_TYPES = [
  'No meu apartamento (sala/varanda)',
  'Na academia do meu condomínio',
  'Na minha residência (casa)',
  'No meu escritório / corporativo',
];

const PREFERRED_TIMES = [
  'Manhã cedo (06h às 09h)',
  'Manhã (09h às 12h)',
  'Horário de almoço (12h às 14h)',
  'Tarde (14h às 18h)',
  'Noite (18h às 21h30)',
  'Fins de semana',
];

export const BookingForm: React.FC = () => {
  const [bairro, setBairro] = useState(BAIRROS_LIST[0]);
  const [localType, setLocalType] = useState(LOCAL_TYPES[0]);
  const [preferredTime, setPreferredTime] = useState(PREFERRED_TIMES[0]);
  const [name, setName] = useState('');

  const buildMessage = () => {
    let msg = `Olá, Fernanda! Gostaria de agendar uma sessão experimental com a Frequency Body em São Paulo.\n\n`;
    if (name.trim()) msg += `👤 Nome: ${name.trim()}\n`;
    msg += `📍 Bairro: ${bairro}\n`;
    msg += `🏠 Local preferido: ${localType}\n`;
    msg += `⏰ Período ideal: ${preferredTime}\n\n`;
    msg += `Poderia me informar as datas e horários disponíveis?`;
    return msg;
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUrl = createWhatsAppUrl(buildMessage());
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="book" className="py-24 md:py-32 bg-[#F2EFE9] text-[#202126] relative border-t border-[#E5E0D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8276C9] block mb-2">
            BOOK YOUR SESSION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#202126] tracking-tight mb-3">
            Agende Sua Sessão Experimental
          </h2>
          <p className="text-sm sm:text-base text-[#5A6065] max-w-xl mx-auto leading-relaxed">
            Selecione suas preferências abaixo para iniciar seu atendimento diretamente com a Fernanda via WhatsApp.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E0D8] shadow-sm">
          <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#202126] mb-2">
                Como prefere ser chamado(a):
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Dra. Mariana ou Roberto"
                className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#DDD6CC] text-[#202126] placeholder-[#8A8F95] focus:outline-none focus:border-[#8276C9] text-sm"
              />
            </div>

            {/* Neighborhood */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#202126] mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8276C9]" />
                Região de atendimento em São Paulo:
              </label>
              <select
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#DDD6CC] text-[#202126] focus:outline-none focus:border-[#8276C9] text-sm cursor-pointer"
              >
                {BAIRROS_LIST.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Local Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#202126] mb-2 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-[#8276C9]" />
                Ambiente de preferência:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {LOCAL_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setLocalType(type)}
                    className={`p-3 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer ${
                      localType === type
                        ? 'bg-[#202126] text-white border-[#202126]'
                        : 'bg-[#FAF8F5] border-[#E5E0D8] text-[#5A6065] hover:border-[#8276C9]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#202126] mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#8276C9]" />
                Horário ideal para sua rotina:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PREFERRED_TIMES.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setPreferredTime(time)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                      preferredTime === time
                        ? 'bg-[#8276C9] text-white border-[#8276C9]'
                        : 'bg-[#FAF8F5] border-[#E5E0D8] text-[#5A6065] hover:border-[#8276C9]'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full bg-[#202126] hover:bg-[#8276C9] text-white font-bold text-xs sm:text-sm tracking-[0.12em] uppercase shadow-md hover:shadow-lg flex items-center justify-center gap-3 transition-all cursor-pointer active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>SOLICITAR AGENDAMENTO NO WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-[#5A6065] text-center mt-3">
                Contato direto com a especialista Fernanda no WhatsApp: <strong className="text-[#202126]">{CONTACT_INFO.phoneFormatted}</strong>
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
