import React from 'react';
import { COMPARISONS, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { Check, X, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparativo" className="py-20 md:py-28 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Por Que Treinar em Domicílio?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Estúdios Físicos Convencionais <span className="text-slate-400">vs.</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              Frequency Body
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Entenda por que executivos e moradores dos bairros nobres de São Paulo optam por receber o personal trainer com EMS na própria residência em vez de se deslocar até uma academia física.
          </p>
        </div>

        {/* Comparison Table / Card View */}
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl backdrop-blur-sm">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-900 border-b border-slate-800 p-4 sm:p-6 text-sm font-bold">
            <div className="col-span-4 sm:col-span-4 text-slate-400 uppercase tracking-wider text-xs flex items-center">
              Critério
            </div>
            <div className="col-span-4 sm:col-span-4 text-rose-400/90 text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-1.5">
              <span>Estúdios Físicos (Ex: TecFit)</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-cyan-400 text-xs sm:text-sm font-extrabold flex items-center justify-center sm:justify-start gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Frequency Body (VIP em Casa)</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800/80">
            {COMPARISONS.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-12 p-4 sm:p-6 items-center text-xs sm:text-sm transition-colors ${
                  item.highlight ? 'bg-cyan-950/15' : 'hover:bg-slate-850/40'
                }`}
              >
                {/* Criterion */}
                <div className="col-span-12 sm:col-span-4 font-semibold text-white mb-2 sm:mb-0">
                  <div className="flex items-center gap-2">
                    {item.highlight && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>}
                    <span>{item.criterion}</span>
                  </div>
                </div>

                {/* Traditional Studios */}
                <div className="col-span-6 sm:col-span-4 text-slate-400 pr-2 flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed">{item.physicalStudios}</span>
                </div>

                {/* Frequency Body */}
                <div className="col-span-6 sm:col-span-4 text-slate-100 pl-2 sm:pl-0 flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium text-cyan-200 leading-relaxed">{item.frequencyBody}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Bottom Call to Action */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-white font-bold text-base">Pronto para treinar com conforto absoluto?</div>
              <p className="text-xs text-slate-400 mt-0.5">Sem mensalidades presas, sem trânsito e com personal dedicado.</p>
            </div>
            <a
              href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Experimentar em Domicílio</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
