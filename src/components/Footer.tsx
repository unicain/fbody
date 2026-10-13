import React from 'react';
import { FrequencyLogo } from './FrequencyLogo';
import { CONTACT_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { Instagram, MessageCircle, Mail, MapPin, ShieldCheck, Heart, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const bairrosList = [
    'Itaim Bibi',
    'Vila Nova Conceição',
    'Moema (Pássaros & Índios)',
    'Jardins & Jardim Europa',
    'Morumbi & Alto da Boa Vista',
    'Brooklin & Campo Belo',
    'Pinheiros',
    'Berrini & Faria Lima',
  ];

  return (
    <footer className="bg-[#050810] border-t border-slate-800/80 pt-16 pb-28 sm:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <FrequencyLogo variant="horizontal" size="sm" lightText={true} className="mb-4" />
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Treinamento funcional integrado com a tecnologia de Eletroestimulação Muscular sem fio (WB-EMS) Wiemspro®. Atendimento exclusivo em domicílio e condomínios de alto padrão em São Paulo desde 2021.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                title="Instagram @frequency.body"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="WhatsApp Oficial"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="Email de Contato"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Atendimento por Bairro (SEO Anchor text) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Área de Atendimento SP
            </h4>
            <ul className="space-y-2">
              {bairrosList.map((b) => (
                <li key={b}>
                  <a
                    href="#bairros"
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60"></span>
                    <span>{b}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Links Rápidos */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li><a href="#tecnologia" className="hover:text-white transition-colors">Tecnologia Wiemspro®</a></li>
              <li><a href="#beneficios" className="hover:text-white transition-colors">8 Benefícios Oficiais</a></li>
              <li><a href="#comparativo" className="hover:text-white transition-colors">Por Que em Domicílio?</a></li>
              <li><a href="#calculadora" className="hover:text-white transition-colors">Calculadora de Trânsito</a></li>
              <li><a href="#publico-alvo" className="hover:text-white transition-colors">Perfis & Objetivos</a></li>
              <li><a href="#seguranca" className="hover:text-white transition-colors">Segurança & Contraindicações</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ & Dúvidas</a></li>
            </ul>
          </div>

          {/* Col 4: Contato Direto & Horários */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Canais Diretos
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-semibold">{CONTACT_INFO.phoneFormatted}</div>
                  <div className="text-[11px] text-slate-500">Atendimento e agendamentos</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-semibold">{CONTACT_INFO.instagram}</div>
                  <div className="text-[11px] text-slate-500">Instagram oficial</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-semibold">{CONTACT_INFO.email}</div>
                  <div className="text-[11px] text-slate-500">Contato comercial & corporativo</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-semibold">{CONTACT_INFO.city}</div>
                  <div className="text-[11px] text-slate-500">Horários flexíveis das 6h às 21h30</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Ethical Legal Notice */}
        <div className="py-8 border-b border-slate-800/80 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong>Aviso de Regularidade Profissional:</strong> Os treinamentos físicos da Frequency Body são ministrados exclusivamente por profissionais de Educação Física com registro ativo no Conselho Regional de Educação Física (CREF-SP), em cumprimento à Lei Federal nº 9.696/1998 e Resoluções CONFEF.
          </p>
          <p>
            <strong>Tecnologia e Segurança:</strong> Equipamentos de eletroestimulação muscular de corpo inteiro Wiemspro® com certificações de conformidade internacional e normas sanitárias. O treino com eletroestimulação é estritamente contraindicado para gestantes, portadores de marca-passo cardíaco ou desfibriladores implantados, pessoas com epilepsia e casos de trombose venosa aguda ativa.
          </p>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Frequency Body EletroEstimulação. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span>São Paulo, Brasil</span>
            <span>•</span>
            <span className="text-cyan-400 font-semibold">Tecnologia Wiemspro® Sem Fio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
