import React from 'react';
import { FrequencyLogo } from './FrequencyLogo';
import { CONTACT_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { Instagram, MessageCircle, Mail, MapPin, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const chapters = [
    { label: 'THE EXPERIENCE', href: '#experience' },
    { label: 'THE METHOD', href: '#method' },
    { label: 'YOUR SESSION', href: '#session' },
    { label: 'ABOUT', href: '#about' },
    { label: 'BOOK YOUR SESSION', href: '#book' },
  ];

  const bairros = [
    'Itaim Bibi & Faria Lima',
    'Moema',
    'Jardins & Jardim Europa',
    'Vila Nova Conceição',
    'Morumbi & Alto da Boa Vista',
    'Brooklin & Campo Belo',
  ];

  return (
    <footer className="bg-[#EFECE6] border-t border-[#DDD6CC] pt-16 pb-24 sm:pb-16 text-[#5A6065] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#DDD6CC]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <FrequencyLogo variant="horizontal" size="sm" lightText={false} className="mb-4" />
            <p className="text-sm font-serif italic text-[#202126] mb-3">
              "Tempo é luxo. Praticidade é rotina."
            </p>
            <p className="text-[#5A6065] leading-relaxed mb-6 max-w-sm text-xs">
              Treinamento personalizado com eletroestimulação muscular de corpo inteiro (WB-EMS Wiemspro®). Atendimento exclusivo em domicílio e condomínios de alto padrão em São Paulo desde 2021.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#DDD6CC] flex items-center justify-center text-[#202126] hover:text-[#8276C9] transition-colors"
                title="Instagram @frequency.body"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#DDD6CC] flex items-center justify-center text-[#202126] hover:text-[#8276C9] transition-colors"
                title="WhatsApp Oficial"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-9 h-9 rounded-full bg-white border border-[#DDD6CC] flex items-center justify-center text-[#202126] hover:text-[#8276C9] transition-colors"
                title="Email de Contato"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Chapters */}
          <div className="lg:col-span-3">
            <h4 className="text-[#202126] font-bold text-xs uppercase tracking-[0.16em] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {chapters.map((ch) => (
                <li key={ch.label}>
                  <a
                    href={ch.href}
                    className="hover:text-[#8276C9] transition-colors font-medium text-xs tracking-wider"
                  >
                    {ch.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="text-[#202126] font-bold text-xs uppercase tracking-[0.16em] mb-4">
              Contato Direto & Regiões
            </h4>
            <div className="space-y-2.5 text-xs text-[#5A6065]">
              <div className="text-[#202126] font-semibold flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#8276C9]" />
                <span>{CONTACT_INFO.phoneFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#8276C9]" />
                <span>{CONTACT_INFO.instagram}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8276C9]" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8276C9]" />
                <span>São Paulo - SP (Horários a partir das 6h)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Medical Notice */}
        <div className="py-8 border-b border-[#DDD6CC] text-[11px] text-[#7A8086] leading-relaxed space-y-2">
          <p>
            <strong>Aviso Legal & Regulamentação CREF-SP:</strong> Todos os treinamentos físicos são conduzidos sob a responsabilidade técnica de profissional de Educação Física devidamente registrada no Conselho Regional de Educação Física (CREF-SP), em estrita conformidade com a Lei Federal nº 9.696/1998.
          </p>
          <p>
            <strong>Segurança & Contraindicações Clínicas:</strong> Equipamentos de eletroestimulação muscular de corpo inteiro Wiemspro® com certificações de conformidade sanitária. O treino de WB-EMS é estritamente contraindicado para gestantes, portadores de marca-passo cardíaco ou desfibriladores implantados, pessoas com histórico de epilepsia e casos de trombose aguda ativa. O serviço atua no aprimoramento físico e bem-estar funcional, não configurando tratamento médico curativo de patologias.
          </p>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#7A8086]">
          <div>
            © {new Date().getFullYear()} Frequency Body EletroEstimulação. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span>São Paulo, Brasil</span>
            <span>•</span>
            <span className="text-[#202126] font-semibold">Tecnologia Wiemspro® Sem Fio</span>
            <span>•</span>
            <a
              href="https://unicain.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8276C9] transition-colors font-medium text-[#202126] inline-flex items-center gap-1"
              title="Única Inteligência"
            >
              <span>Powered by <strong>Jacson Marcelo</strong> | Única Inteligência (unicain.com.br)</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
