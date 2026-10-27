import React, { useState } from 'react';
import { CONTACT_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { Clock, CheckCircle2, Sparkles, Navigation, ArrowRight, ShieldCheck, Shirt, Waves } from 'lucide-react';

const SP_COMMUTE_DATA = [
  { name: 'Itaim Bibi / Faria Lima', avgMinutes: 50 },
  { name: 'Moema (Pássaros / Índios)', avgMinutes: 45 },
  { name: 'Jardins / Jardim Europa', avgMinutes: 55 },
  { name: 'Vila Nova Conceição', avgMinutes: 45 },
  { name: 'Morumbi / Alto da Boa Vista', avgMinutes: 65 },
  { name: 'Brooklin / Campo Belo', avgMinutes: 50 },
];

export const YourSessionSection: React.FC = () => {
  const [selectedBairro, setSelectedBairro] = useState(SP_COMMUTE_DATA[0]);
  const [weeklySessions, setWeeklySessions] = useState(2);

  // Time savings: Avoid commute (avgMinutes) + Avoid parking/locker/waiting room at gym (35 min)
  const minutesSavedPerSession = selectedBairro.avgMinutes + 35;
  const hoursSavedMonth = Math.round((minutesSavedPerSession * (weeklySessions * 4.33)) / 60);

  const steps = [
    {
      number: '01',
      title: 'Chegada & Preparação',
      duration: '3 minutos',
      description: 'Fernanda chega pontualmente ao seu condomínio ou residência com todo o equipamento esterilizado. O traje biométrico é ajustado com precisão ao seu corpo.',
      icon: Shirt,
    },
    {
      number: '02',
      title: 'Calibração Individual',
      duration: '2 minutos',
      description: 'Ajuste fino de intensidade de cada um dos 10 grupos musculares no aplicativo Wiemspro, respeitando seu limiar e objetivo do dia.',
      icon: ShieldCheck,
    },
    {
      number: '03',
      title: 'Treino Funcional Ativo',
      duration: '15 minutos',
      description: 'Movimentos funcionais leves e guiados com foco em postura, abdômen, pernas e costas, sob o olhar atento e correção contínua da especialista.',
      icon: Clock,
    },
    {
      number: '04',
      title: 'Drenagem & Relaxamento',
      duration: '5 minutos',
      description: 'Protocolo de pulsação suave final para relaxamento neuromuscular, drenagem e estímulo circulatório. Você termina renovado para seguir o dia.',
      icon: Waves,
    },
  ];

  return (
    <section id="session" className="py-24 md:py-32 bg-[#F2EFE9] text-[#202126] relative border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8276C9] block mb-3">
            YOUR SESSION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#202126] tracking-tight mb-4">
            Como Funciona o Seu Atendimento
          </h2>
          <p className="text-base sm:text-lg text-[#5A6065] font-light leading-relaxed">
            Uma sessão desenhada para ser fluida, confortável e eficiente do primeiro ao último minuto.
          </p>
        </div>

        {/* 4 Steps of the Session */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.number}
                className="p-7 rounded-3xl bg-white border border-[#E5E0D8] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-bold text-[#8276C9]">
                      {st.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[10px] font-bold text-[#5A6065] border border-[#E5E0D8]">
                      {st.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#202126] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#5A6065] leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discreet Interactive Tool: Horas de Tempo Economizadas no Mês */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E0D8] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8276C9] block mb-1">
              Simulador de Rotina em São Paulo
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#202126]">
              Quantas Horas de Vida Você Poupa por Mês?
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6065] mt-1">
              Veja o impacto real de ter o personal trainer vindo até você em vez de enfrentar deslocamento em SP:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Inputs */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#202126] mb-2">
                  Selecione sua Região:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SP_COMMUTE_DATA.map((b) => (
                    <button
                      key={b.name}
                      type="button"
                      onClick={() => setSelectedBairro(b)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                        selectedBairro.name === b.name
                          ? 'bg-[#202126] text-white border-[#202126]'
                          : 'bg-[#FAF8F5] text-[#5A6065] border-[#E5E0D8] hover:border-[#8276C9]'
                      }`}
                    >
                      {b.name.split(' / ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#202126] mb-2">
                  Frequência Semanal Desejada:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setWeeklySessions(f)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        weeklySessions === f
                          ? 'bg-[#8276C9] text-white border-[#8276C9]'
                          : 'bg-[#FAF8F5] text-[#5A6065] border-[#E5E0D8]'
                      }`}
                    >
                      {f}x por semana
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Discreet Result Box */}
            <div className="md:col-span-5 bg-[#FAF8F5] rounded-2xl p-6 border border-[#EAE5DC] text-center flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6065] block mb-1">
                Tempo Livre Recuperado
              </span>
              <div className="text-4xl sm:text-5xl font-black text-[#202126] my-1">
                +{hoursSavedMonth}h <span className="text-sm font-normal text-[#5A6065]">/ mês</span>
              </div>
              <p className="text-xs text-[#5A6065] mt-2 mb-5 leading-relaxed">
                Horas fora do trânsito para focar na sua carreira, descanso e família.
              </p>

              <a
                href={createWhatsAppUrl(`Olá, Fernanda! Simulei a economia de tempo no bairro ${selectedBairro.name} e gostaria de agendar meu treino em domicílio.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-[#202126] hover:bg-[#8276C9] text-white text-xs font-bold tracking-wider uppercase transition-colors"
              >
                Agendar com Fernanda
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
