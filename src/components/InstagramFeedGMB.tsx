import React from 'react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/frequencyData';
import { Instagram, Star, ExternalLink, MessageCircle, Heart, MessageSquare, CheckCircle, MapPin } from 'lucide-react';

const INSTAGRAM_POSTS = [
  {
    id: 1,
    title: 'Treino de 20 min em Moema',
    caption: 'Montagem rápida na sala de estar. O traje Wiemspro® sem fio permite movimentos 100% livres e confortáveis. Zero trânsito!',
    tag: '#EMSnoCondominio',
    likes: '142',
    comments: '18',
    location: 'Moema, São Paulo',
    category: 'Domicílio VIP',
  },
  {
    id: 2,
    title: 'Postura e Core no Itaim Bibi',
    caption: 'Ativação simultânea da musculatura dorsal, lombar e abdominal. O antídoto para quem passa o dia em frente às telas na Faria Lima.',
    tag: '#SaudeCorporativa',
    likes: '198',
    comments: '24',
    location: 'Itaim Bibi, São Paulo',
    category: 'Executivo',
  },
  {
    id: 3,
    title: 'Biossegurança e Higienização',
    caption: 'Protocolo estrito de higienização hospitalar em todos os trajes e eletrodos antes e depois de cada sessão.',
    tag: '#SegurancaCREF',
    likes: '115',
    comments: '12',
    location: 'Jardins, São Paulo',
    category: 'Biossegurança',
  },
  {
    id: 4,
    title: 'Wellness Day em Condomínio',
    caption: 'Demonstração especial para moradores com triagem de saúde prévia e atendimento individualizado na academia do edifício.',
    tag: '#CondominioSP',
    likes: '230',
    comments: '37',
    location: 'Morumbi, São Paulo',
    category: 'Condomínio',
  },
];

const REVIEWS = [
  {
    name: 'Rodrigo M. S.',
    role: 'Sócio de Gestora de Investimentos (Itaim Bibi)',
    text: 'Minha rotina na Faria Lima não permitia mais frequentar academia. A Frequency Body salvou meu condicionamento. O personal chega pontualmente no meu prédio, 20 minutos de treino intenso e sigo para o trabalho revigorado.',
    stars: 5,
    verified: 'Avaliação via Google Meu Negócio',
  },
  {
    name: 'Dra. Camila F.',
    role: 'Médica Cirurgiã (Jardim Europa)',
    text: 'A facilidade de não ter que me deslocar nem pegar trânsito em SP após plantões exaustivos foi decisiva. Os profissionais são extremamente capacitados, CREF ativo e respeitam rigorosamente a biomecânica.',
    stars: 5,
    verified: 'Avaliação via Google Meu Negócio',
  },
  {
    name: 'Eduardo B.',
    role: 'Morador de Condomínio (Moema)',
    text: 'Estava em dúvida entre estúdios como a Tecfit e fazer em casa. A comodidade de treinar no meu apartamento sem chuva, sem fila e sem olhares de ninguém é infinitamente superior. Vale cada centavo.',
    stars: 5,
    verified: 'Avaliação via Google Meu Negócio',
  },
];

export const InstagramFeedGMB: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#090e1c] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/70 border border-pink-500/30 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Instagram className="w-3.5 h-3.5" />
            Siga Nossa Rotina em São Paulo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Presença Digital: Instagram & Google Meu Negócio
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Acompanhe bastidores de treinos, tecnologia Wiemspro® e a experiência real dos nossos alunos nos melhores condomínios de SP.
          </p>
        </div>

        {/* Google Reviews Spotlight */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>O Que Dizem Nossos Alunos em SP</span>
                <span className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </span>
              </h3>
              <p className="text-xs text-slate-400">Feedback verificado de quem trocou o estúdio pelo atendimento em domicílio.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Nota 5.0 no Google (Moema, Itaim, Jardins, Morumbi)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60">
                      Verificado
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic mb-6 leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{rev.name}</h4>
                    <p className="text-[11px] text-slate-400">{rev.role}</p>
                  </div>
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Grid Showcase */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{CONTACT_INFO.instagram}</h3>
                <p className="text-xs text-slate-400">Treinos diários, dicas de postura e vídeos dos equipamentos</p>
              </div>
            </div>

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold text-xs shadow-md transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir no Instagram</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INSTAGRAM_POSTS.map((post) => (
              <div
                key={post.id}
                className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-pink-500/40 transition-all flex flex-col justify-between shadow-lg"
              >
                {/* Visual Header representing an Instagram card */}
                <div className="p-4 bg-gradient-to-b from-slate-850 to-slate-900 border-b border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-pink-400 bg-pink-950/60 px-2 py-0.5 rounded-full border border-pink-800/50">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      {post.location}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                    {post.title}
                  </h4>
                </div>

                {/* Caption */}
                <div className="p-4 flex-1">
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {post.caption}
                  </p>
                  <span className="text-xs font-semibold text-cyan-400">{post.tag}</span>
                </div>

                {/* Card footer with likes & comments */}
                <div className="p-3.5 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                      {post.comments}
                    </span>
                  </div>
                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    Ver post
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
