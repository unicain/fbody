import React from 'react';
import { SAFETY_ITEMS, createWhatsAppUrl } from '../data/frequencyData';
import { ShieldAlert, Award, FileCheck2, Sparkles, AlertTriangle, CheckCircle, HeartPulse, Stethoscope, MessageCircle } from 'lucide-react';

export const SafetyEthicsSection: React.FC = () => {
  return (
    <section id="seguranca" className="py-20 md:py-28 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            Compromisso Ético & Rigor Clínico
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Sua Saúde e Integridade em Primeiro Lugar
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Na Frequency Body, não vendemos promessas mágicas. O treinamento com eletroestimulação neuromuscular é conduzido com ciência aplicada, biossegurança hospitalar e instrutores graduados.
          </p>
        </div>

        {/* 2-Column Grid: Ethical Commitments vs. Transparent Contraindications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Ethical & Professional Standards */}
          <div className="lg:col-span-7 bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Padrões de Excelência & Registro</h3>
                  <p className="text-xs text-slate-400">Diretrizes em conformidade com o CREF-SP e Anvisa</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SAFETY_ITEMS.ethicalCommitments.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CREF Registration Notice */}
            <div className="mt-6 p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 flex items-start gap-3 text-xs text-indigo-200">
              <Stethoscope className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Atenção responsável:</strong> Para pessoas com condições especiais de saúde (ex: sarcopenia diagnosticada, dores crônicas na coluna ou lipedema), o treinamento é planejado como suporte de condicionamento físico seguro e com recomendação de acompanhamento multidisciplinar (médico / fisioterapeuta).
              </span>
            </div>
          </div>

          {/* Right Column: Transparent Contraindications (Builds Supreme Trust) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-rose-950/20 via-slate-900 to-slate-900 rounded-3xl p-6 sm:p-8 border border-rose-900/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Triagem de Contraindicações</h3>
                  <p className="text-xs text-rose-300">Quem NÃO pode praticar EMS</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Por motivos estritos de segurança fisiológica internacional, a eletroestimulação de corpo inteiro não é indicada para:
              </p>

              <div className="space-y-3">
                {SAFETY_ITEMS.contraindications.map((contra, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs text-rose-200 block font-semibold">{contra.title}</strong>
                      <span className="text-[11px] text-slate-400 leading-snug">{contra.reason}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Anamnese Pre-Check CTA */}
            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={createWhatsAppUrl('Olá! Gostaria de fazer uma triagem rápida para saber se estou apto(a) a treinar com EMS com a Frequency Body.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Tirar Dúvidas Sobre Triagem Médica</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
