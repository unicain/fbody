import React from 'react';
import { CONTACT_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { Award, ShieldCheck, Heart, Sparkles, MessageCircle, ArrowRight, UserCheck } from 'lucide-react';

export const AboutFernanda: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF8F5] text-[#202126] relative border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E5E0D8] shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual Portrait Card (Left) */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-br from-[#E7E2DA] via-[#F2EFE9] to-[#8276C9]/30 mb-6 shadow-sm flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#FAF8F5] border border-[#E5E0D8] flex flex-col items-center justify-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F2EB] text-[#8276C9] flex items-center justify-center mb-2">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-lg font-bold text-[#202126]">Fernanda B. Faria</span>
                  <span className="text-[10px] text-[#5A6065] tracking-wider uppercase mt-0.5">Especialista em EMS</span>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-[#EFECE6] text-[#8276C9] text-[9px] font-bold">
                    CREF-SP ATIVO
                  </span>
                </div>
              </div>

              <div className="w-full p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] text-left text-xs space-y-2">
                <div className="flex items-center gap-2 text-[#202126]">
                  <Award className="w-4 h-4 text-[#8276C9] shrink-0" />
                  <span>Educadora Física credenciada CREF-SP</span>
                </div>
                <div className="flex items-center gap-2 text-[#202126]">
                  <ShieldCheck className="w-4 h-4 text-[#8276C9] shrink-0" />
                  <span>Certificação Internacional WB-EMS Wiemspro®</span>
                </div>
                <div className="flex items-center gap-2 text-[#202126]">
                  <Sparkles className="w-4 h-4 text-[#8276C9] shrink-0" />
                  <span>À frente da Frequency Body desde 2021</span>
                </div>
              </div>
            </div>

            {/* Narrative Content (Right) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8276C9] block mb-2">
                ABOUT • A FUNDADORA
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202126] tracking-tight mb-4">
                Fernanda B. Faria
              </h2>

              {/* The Official Purpose Quote */}
              <div className="p-5 rounded-2xl bg-[#F7F5F0] border-l-4 border-[#8276C9] mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8276C9] block mb-1">
                  Nosso Propósito
                </span>
                <p className="text-sm font-medium text-[#202126] italic leading-relaxed">
                  "Facilitar o cuidado contínuo com o corpo por meio da tecnologia, da orientação profissional e de um atendimento personalizado."
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#5A6065] leading-relaxed mb-8">
                <p>
                  Com sólida formação em Educação Física e atuação voltada para o público executivo e de alta exigência em São Paulo, Fernanda estruturou a Frequency Body para responder a uma dor real: pessoas que desejam saúde, força e postura, mas não têm tempo para o atrito de academias cheias e trânsito.
                </p>
                <p>
                  Sua abordagem privilegia a escuta ativa, o rigor biomecânico e o respeito à individualidade de cada aluno. Cada sessão é acompanhada exclusivamente por ela, garantindo que o estímulo de cada grupo muscular seja dosado na medida exata para o seu objetivo.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.about)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#202126] hover:bg-[#8276C9] text-white text-xs font-bold tracking-wider uppercase shadow-sm transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar Diretamente com Fernanda</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
