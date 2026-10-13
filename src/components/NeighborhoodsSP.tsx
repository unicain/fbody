import React, { useState } from 'react';
import { NEIGHBORHOODS, CONTACT_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { MapPin, Navigation, Star, MessageCircle, CheckCircle, ShieldCheck, Building, Sparkles } from 'lucide-react';

export const NeighborhoodsSP: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string>('Todas');

  const filteredNeighborhoods =
    selectedZone === 'Todas'
      ? NEIGHBORHOODS
      : NEIGHBORHOODS.filter((n) => n.zone === selectedZone);

  return (
    <section id="bairros" className="py-20 md:py-28 bg-[#090e1c] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            SEO Local & Google Meu Negócio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Atendimento Domiciliar nos Principais Bairros de São Paulo
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A Frequency Body opera com logística estruturada para atender com agilidade e pontualidade condomínios residenciais e empresariais de alto padrão.
          </p>
        </div>

        {/* Google Business Profile Trust Card */}
        <div className="max-w-4xl mx-auto mb-12 p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-md shrink-0">
              {/* Google G icon representation */}
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-base">Google Meu Negócio</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Empresa Local Verificada
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-extrabold text-white">5.0 / 5.0</span>
                <span className="text-xs text-slate-400">• Excelência em Atendimento Domiciliar SP</span>
              </div>
            </div>
          </div>

          <a
            href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 flex items-center justify-center gap-2 transition-colors shrink-0"
          >
            <Navigation className="w-4 h-4 text-cyan-400" />
            <span>Consultar Raio no Meu Bairro</span>
          </a>
        </div>

        {/* Zone Filters */}
        <div className="flex justify-center gap-2 mb-8">
          {['Todas', 'Zona Sul', 'Zona Oeste'].map((zone) => (
            <button
              key={zone}
              type="button"
              onClick={() => setSelectedZone(zone)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                selectedZone === zone
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNeighborhoods.map((n) => (
            <div
              key={n.id}
              className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-lg hover:shadow-cyan-950/20"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {n.name}
                      </h3>
                      <span className="text-[11px] text-slate-400">{n.zone} • SP</span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
                    {n.demandTier}
                  </span>
                </div>

                {/* Profile summary */}
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  {n.profile}
                </p>

                {/* Condo info */}
                <div className="mb-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] text-slate-300 flex items-start gap-2">
                  <Building className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{n.condoType}</span>
                </div>

                {/* Bullet points */}
                <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                  {n.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px]">
                      <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp button for this specific neighborhood */}
              <a
                href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.bairro(n.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600/90 text-slate-200 hover:text-white font-bold text-xs border border-slate-700/80 hover:border-emerald-500 flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Agendar no {n.name}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Don't see your neighborhood callout */}
        <div className="mt-10 text-center text-xs text-slate-400">
          <span>Seu bairro não está listado? Atendemos também bairros adjacentes sob consulta: </span>
          <a
            href={createWhatsAppUrl('Olá! Gostaria de consultar se vocês atendem no meu endereço/bairro em São Paulo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline font-semibold hover:text-cyan-300 ml-1"
          >
            Fale conosco no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
