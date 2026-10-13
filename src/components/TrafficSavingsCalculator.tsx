import React, { useState } from 'react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/frequencyData';
import { Clock, Navigation, Car, Sparkles, MessageCircle, CheckCircle, TrendingDown, Shield } from 'lucide-react';

const SP_NEIGHBORHOODS = [
  { name: 'Itaim Bibi', avgCommuteRoundTrip: 50, mainTrafficHub: 'Faria Lima / JK / 9 de Julho' },
  { name: 'Moema', avgCommuteRoundTrip: 45, mainTrafficHub: 'Ibirapuera / 23 de Maio / Indianópolis' },
  { name: 'Jardins / Jd. Europa', avgCommuteRoundTrip: 55, mainTrafficHub: 'Rebouças / Brasil / Europa' },
  { name: 'Vila Nova Conceição', avgCommuteRoundTrip: 45, mainTrafficHub: 'Hélio Pellegrino / Santo Amaro' },
  { name: 'Morumbi / Alto da Boa Vista', avgCommuteRoundTrip: 65, mainTrafficHub: 'Pontes Morumbi / Marginal Pinheiros / Giovanni Gronchi' },
  { name: 'Brooklin / Campo Belo', avgCommuteRoundTrip: 50, mainTrafficHub: 'Berrini / Chucri Zaidan / Vicente Rao' },
  { name: 'Pinheiros / Alto de Pinheiros', avgCommuteRoundTrip: 50, mainTrafficHub: 'Faria Lima / Eusébio Matoso / Pedroso de Morais' },
];

export const TrafficSavingsCalculator: React.FC = () => {
  const [selectedBairro, setSelectedBairro] = useState(SP_NEIGHBORHOODS[0]);
  const [sessionsPerWeek, setSessionsPerWeek] = useState<number>(2);
  const [customCommute, setCustomCommute] = useState<number>(50);

  // Math:
  // Studio training time per day = Commute (mins) + Gym workout (60 mins) + Waiting/Parking/Lockers (25 mins)
  // Frequency Body time per day = 0 commute + 20 mins workout + 5 mins prep = 25 mins total!
  const minutesSavedPerSession = customCommute + 40; // saves commute + locker/parking/waiting overhead
  const hoursSavedPerMonth = Math.round((minutesSavedPerSession * (sessionsPerWeek * 4.33)) / 60);
  const hoursSavedPerYear = Math.round(hoursSavedPerMonth * 12);
  const daysOfLifeSaved = (hoursSavedPerYear / 24).toFixed(1);

  const handleBairroChange = (bairroName: string) => {
    const found = SP_NEIGHBORHOODS.find((b) => b.name === bairroName) || SP_NEIGHBORHOODS[0];
    setSelectedBairro(found);
    setCustomCommute(found.avgCommuteRoundTrip);
  };

  const whatsappMessage = `Olá! Usei a calculadora da Frequency Body no bairro ${selectedBairro.name}. Gostaria de economizar cerca de ${hoursSavedPerMonth} horas por mês no trânsito de SP e agendar meu treino EMS em domicílio.`;

  return (
    <section id="calculadora" className="py-20 md:py-28 bg-[#090e1c] relative overflow-hidden border-y border-slate-800">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            O Ativo Mais Valioso de SP: Seu Tempo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Quantas Horas Você Perde no Trânsito para ir à Academia?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Simule abaixo o impacto na sua rotina em São Paulo ao trocar a ida ao estúdio tradicional pelo treino de 20 minutos que vai até a sua residência ou condomínio.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Form (Left) */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Car className="w-5 h-5 text-cyan-400" />
              Parâmetros da Sua Rotina em SP
            </h3>

            {/* Neighborhood Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Selecione seu Bairro / Região
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SP_NEIGHBORHOODS.map((b) => (
                  <button
                    key={b.name}
                    type="button"
                    onClick={() => handleBairroChange(b.name)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-left ${
                      selectedBairro.name === b.name
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-950/40'
                        : 'bg-slate-800/70 border-slate-700/80 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5">
                <Navigation className="w-3 h-3 text-cyan-400" />
                Principal gargalo de trânsito: <span className="text-slate-300">{selectedBairro.mainTrafficHub}</span>
              </p>
            </div>

            {/* Sessions per Week */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                2. Frequência Semanal de Treino
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setSessionsPerWeek(num)}
                    className={`py-3 rounded-xl text-center font-bold text-sm border transition-all ${
                      sessionsPerWeek === num
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-950/50'
                        : 'bg-slate-800/70 text-slate-300 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    {num}x por semana
                    {num === 2 && <span className="block text-[10px] font-normal text-indigo-200">Recomendado</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Commute Time Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  3. Tempo Médio Deslocamento Ida e Volta
                </label>
                <span className="text-sm font-extrabold text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-lg border border-cyan-800">
                  {customCommute} minutos
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="90"
                step="5"
                value={customCommute}
                onChange={(e) => setCustomCommute(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>20 min (Perto)</span>
                <span>50 min (Típico SP)</span>
                <span>90 min (Horário de Pico)</span>
              </div>
            </div>

            {/* Summary bullet */}
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Com a <strong>Frequency Body</strong>, o personal monta o equipamento sem fio na sua sala ou condomínio em 3 minutos. Você toma banho no seu chuveiro e segue sua rotina imediatamente.
              </span>
            </div>
          </div>

          {/* Results Showcase (Right) */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Big Impact Counter Card */}
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-cyan-400 via-indigo-500 to-emerald-400 shadow-2xl">
              <div className="bg-[#0b1226] rounded-[22px] p-6 sm:p-8 text-center relative overflow-hidden">
                <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-1">
                  Resultado da Sua Economia
                </div>
                <div className="text-5xl sm:text-6xl font-black text-white tracking-tight my-2">
                  +{hoursSavedPerMonth}h <span className="text-2xl sm:text-3xl font-bold text-slate-400">/ mês</span>
                </div>
                <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
                  Horas preciosas livres de trânsito em {selectedBairro.name} para trabalhar, descansar ou ficar com a família.
                </p>

                {/* Sub metrics grid */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-800/80 text-left">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">No Acumulado do Ano</div>
                    <div className="text-xl font-extrabold text-cyan-300 mt-0.5">+{hoursSavedPerYear} Horas</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Equivale a ~{daysOfLifeSaved} dias inteiros de vida</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Duração do Treino</div>
                    <div className="text-xl font-extrabold text-emerald-400 mt-0.5">20 Minutos</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Frequência sem fio Wiemspro®</div>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="mt-6">
                  <a
                    href={createWhatsAppUrl(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-base shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all group"
                  >
                    <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                    <span>Quero Economizar {hoursSavedPerMonth}h no WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-slate-400 mt-2 text-center">
                    Agende sua sessão experimental em {selectedBairro.name} sem compromisso
                  </p>
                </div>
              </div>
            </div>

            {/* Direct comparative benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <TrendingDown className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Zero Desculpa de Chuva</strong>
                  <span className="text-slate-400">Nos dias de frio ou chuva em SP, você treina no conforto do lar.</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">100% Privativo</strong>
                  <span className="text-slate-400">Sem olhares curiosos, sem fila em aparelhos de musculação.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
