import React, { useState } from 'react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/frequencyData';
import { MessageCircle, Calendar, MapPin, Target, Home, Clock, Sparkles, Send } from 'lucide-react';

const BAIRROS_LIST = [
  'Itaim Bibi',
  'Moema (Pássaros / Índios)',
  'Jardins / Jardim Europa',
  'Vila Nova Conceição',
  'Morumbi / Alto da Boa Vista',
  'Brooklin / Campo Belo',
  'Pinheiros / Alto de Pinheiros',
  'Outro Bairro em SP',
];

const LOCAL_TYPES = [
  'No meu apartamento (sala/espaço)',
  'Na academia do meu condomínio',
  'Na minha casa',
  'No meu escritório / corporativo',
];

const GOALS = [
  'Ganho de tempo & eficiência (rotina corrida)',
  'Tonificação & perda de gordura',
  'Fortalecimento muscular sem impacto articular',
  'Postura & alívio de dores na coluna',
  'Performance esportiva (tênis, golfe, corrida)',
];

const PREFERRED_TIMES = [
  'Manhã cedo (06h às 09h)',
  'Manhã (09h às 12h)',
  'Horário de almoço (12h às 14h)',
  'Tarde (14h às 18h)',
  'Noite (18h às 21h30)',
  'Fins de semana (Sábado/Domingo)',
];

export const BookingForm: React.FC = () => {
  const [bairro, setBairro] = useState(BAIRROS_LIST[0]);
  const [localType, setLocalType] = useState(LOCAL_TYPES[0]);
  const [goal, setGoal] = useState(GOALS[0]);
  const [preferredTime, setPreferredTime] = useState(PREFERRED_TIMES[0]);
  const [name, setName] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const buildMessage = () => {
    let msg = `Olá! Gostaria de agendar uma sessão experimental com a Frequency Body em São Paulo.\n\n`;
    if (name.trim()) msg += `👤 Meu Nome: ${name.trim()}\n`;
    msg += `📍 Bairro: ${bairro}\n`;
    msg += `🏠 Local preferido: ${localType}\n`;
    msg += `🎯 Meu objetivo: ${goal}\n`;
    msg += `⏰ Melhor período: ${preferredTime}\n\n`;
    msg += `Gostaria de verificar datas disponíveis para o atendimento em domicílio.`;
    return msg;
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUrl = createWhatsAppUrl(buildMessage());
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendamento" className="py-20 md:py-28 bg-[#070b14] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Card Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Agendamento Rápido VIP
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Solicite Sua Sessão Experimental em Domicílio
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Personalize suas preferências abaixo. Ao clicar, abriremos diretamente o WhatsApp com sua mensagem pronta para atendimento rápido.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
            
            {/* Name Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Seu Nome (Como prefere ser chamado):
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Dra. Mariana ou Carlos Albuquerque"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
              />
            </div>

            {/* Bairro Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Bairro onde deseja o atendimento em SP:
              </label>
              <select
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white focus:outline-none focus:border-cyan-400 text-sm"
              >
                {BAIRROS_LIST.map((b) => (
                  <option key={b} value={b} className="bg-slate-900 text-white">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Local Type Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                <Home className="w-4 h-4 text-indigo-400" />
                Ambiente de preferência:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {LOCAL_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setLocalType(type)}
                    className={`p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                      localType === type
                        ? 'bg-cyan-500/20 border-cyan-400 text-white font-semibold'
                        : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Goal Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400" />
                Seu objetivo primordial:
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white focus:outline-none focus:border-cyan-400 text-sm"
              >
                {GOALS.map((g) => (
                  <option key={g} value={g} className="bg-slate-900 text-white">
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Period */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400" />
                Horário ideal para você:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PREFERRED_TIMES.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setPreferredTime(time)}
                    className={`p-2.5 rounded-xl text-xs font-medium text-center border transition-all ${
                      preferredTime === time
                        ? 'bg-indigo-600 text-white border-indigo-400 font-semibold shadow-md'
                        : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-3 transition-all cursor-pointer group active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Enviar Solicitação Direto no WhatsApp</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-slate-400 text-center mt-3">
                Você será direcionado para o WhatsApp oficial da Frequency Body: <strong className="text-emerald-400">{CONTACT_INFO.phoneFormatted}</strong>.
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
