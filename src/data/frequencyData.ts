export interface Neighborhood {
  id: string;
  name: string;
  zone: 'Zona Sul' | 'Zona Oeste' | 'Zona Central';
  demandTier: 'Muito Alta' | 'Alta';
  profile: string;
  condoType: string;
  features: string[];
}

export interface Benefit {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BrandPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
}

export interface MuscleGroup {
  id: string;
  name: string;
  location: string;
  benefit: string;
  coords: { x: number; y: number };
}

export interface MethodFaq {
  id: number;
  question: string;
  answer: string;
  highlight: string;
}

export const CONTACT_INFO = {
  phoneRaw: '5511981787259',
  phoneFormatted: '(11) 98178-7259',
  email: 'fernandabfaria@gmail.com',
  instagram: '@frequency.body',
  instagramUrl: 'https://www.instagram.com/frequency.body',
  city: 'São Paulo - SP',
  serviceType: 'Atendimento Domiciliar e Condominial VIP',
  wiemsproSince: '2016',
  frequencySince: '2021',
  founder: 'Fernanda B. Faria',
};

export const createWhatsAppUrl = (messageText: string) => {
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encoded}`;
};

export const DEFAULT_WHATSAPP_MESSAGES = {
  hero: 'Olá, Fernanda! Gostaria de agendar uma sessão experimental de Eletroestimulação (EMS) no meu condomínio/residência em São Paulo.',
  experience: 'Olá! Conheci a experiência da Frequency Body e gostaria de saber horários para atendimento domiciliar.',
  method: 'Olá! Li sobre o método da Frequency Body e gostaria de agendar uma sessão experimental com você.',
  session: 'Olá, Fernanda! Gostaria de agendar o meu primeiro atendimento com EMS em domicílio.',
  about: 'Olá, Fernanda! Gostaria de conversar com você para entender como o treino EMS se adapta à minha rotina.',
  bairro: (bairro: string) => `Olá, Fernanda! Vi que você atende na região do ${bairro} e gostaria de consultar disponibilidade de horários para atendimento com EMS.`,
  calculator: 'Olá, Fernanda! Fiz a simulação de economia de tempo no site e gostaria de agendar meu treino em domicílio.',
};

export const BRAND_PILLARS: BrandPillar[] = [
  {
    id: 'longevidade',
    title: 'Longevidade & Autonomia',
    tagline: 'Cuidar do corpo para continuar vivendo com autonomia.',
    description: 'Valorização contínua da capacidade física, equilíbrio muscular e postura ao longo dos anos, com segurança e sem impacto sobre as articulações.',
    badge: 'Visão de Futuro',
  },
  {
    id: 'praticidade',
    title: 'Praticidade na Vida Real',
    tagline: 'Do parque ao escritório. O cuidado precisa caber na vida real.',
    description: 'Eliminamos o atrito do trânsito e o deslocamento em São Paulo. O treino de 20 minutos vai até você, encaixando-se com elegância na sua agenda.',
    badge: 'Zero Trânsito',
  },
  {
    id: 'acompanhamento',
    title: 'Acompanhamento Individual',
    tagline: 'Tecnologia com orientação humana.',
    description: 'Atendimento presencial e exclusivo conduzido diretamente pela especialista Fernanda, com calibração precisa para o seu limiar e momento corporal.',
    badge: 'Cuidado 1 a 1',
  },
  {
    id: 'personalizada',
    title: 'Experiência Personalizada',
    tagline: 'Cuidado sem acrescentar complexidade.',
    description: 'Estrutura discreta, tecnologia sem fio Wiemspro® e biossegurança rigorosa dentro do seu condomínio ou residência com total privacidade.',
    badge: 'Conveniência VIP',
  },
];

export const METHOD_FAQS: MethodFaq[] = [
  {
    id: 1,
    question: '1. O que é o treino com eletroestimulação (EMS)?',
    answer: 'A WB-EMS (Whole-Body Electromyostimulation) é uma tecnologia avançada que utiliza impulsos elétricos de baixa e média frequência emitidos através de um traje biométrico sem fio. Esses impulsos simulam e potencializam os comandos naturais do sistema nervoso, ativando até as fibras musculares mais profundas de forma simultânea e controlada, enquanto você executa movimentos funcionais leves e guiados. É uma abordagem contemporânea que une ciência e eficiência, sem promessas milagrosas.',
    highlight: 'Ciência aplicada e ativação simultânea sem sobrecarga articular.',
  },
  {
    id: 2,
    question: '2. Como funcionam os 20 minutos e por que potencializam a rotina?',
    answer: 'Na musculação convencional, os músculos são estimulados isoladamente, exigindo horas e pausas constantes. Com a eletroestimulação sem fio, mais de 350 músculos são ativados ao mesmo tempo a cada ciclo de contração. Os 20 minutos dividem-se em aquecimento dinâmico, ativação funcional profunda e, no final, um protocolo exclusivo de drenagem e recuperação muscular que alivia a tensão e melhora o retorno circulatório.',
    highlight: '20 minutos de treino funcional ativo + protocolo final de drenagem e relaxamento.',
  },
  {
    id: 3,
    question: '3. Preciso parar com a minha atividade atual (musculação/pilates/corrida)?',
    answer: 'De forma alguma. A eletroestimulação atua como um potencializador e aliado da sua rotina física, e não como um substituto rígido. Para corredores, melhora a estabilidade de passada; para praticantes de tênis e golfe, fortalece o core rotacional; e para quem pratica pilates ou musculação, promove reforço das fibras profundas com zero sobrecarga axial.',
    highlight: 'O EMS é o aliado ideal para potencializar o esporte e o exercício que você já ama.',
  },
  {
    id: 4,
    question: '4. Como funciona a segurança e o acompanhamento presencial?',
    answer: 'O atendimento é 100% individual e presencial, conduzido pela Fernanda. A intensidade de cada um dos 10 grupos musculares é calibrada em tempo real no aplicativo dedicado, respeitando a sua sensibilidade. Todos os trajes passam por protocolo hospitalar de higienização prévia e posterior.',
    highlight: 'Acompanhamento presencial dedicado da Fernanda com calibração milimétrica.',
  },
  {
    id: 5,
    question: '5. Quais são os critérios de triagem e contraindicações?',
    answer: 'Antes do primeiro treino, realizamos uma anamnese detalhada para mapear seu histórico de saúde, lesões prévias e objetivos. Por rigor ético e normas internacionais de segurança, o treino de EMS de corpo inteiro é estritamente contraindicado para gestantes, portadores de marca-passo cardíaco ou desfibriladores implantados, pessoas com epilepsia e quadros de trombose aguda ativa. Havendo qualquer condição específica, atuamos em sintonia com a recomendação do seu médico.',
    highlight: 'Anamnese obrigatória e respeito às orientações do seu médico.',
  },
];

export const MUSCLE_GROUPS: MuscleGroup[] = [
  { id: 'm1', name: 'Trapézio e Ombros', location: 'Cervical & Superior', benefit: 'Alívio de tensões posturais e estabilização de escápulas', coords: { x: 50, y: 15 } },
  { id: 'm2', name: 'Dorsais e Costas', location: 'Posterior Superior', benefit: 'Fortalecimento postural para quem passa horas em reuniões e telas', coords: { x: 50, y: 25 } },
  { id: 'm3', name: 'Região Lombar', location: 'Posterior Central', benefit: 'Estabilização de coluna e suporte contra desconfortos crônicos', coords: { x: 50, y: 35 } },
  { id: 'm4', name: 'Peitoral', location: 'Anterior Superior', benefit: 'Abertura de cadeia anterior sem impacto sobre a articulação do ombro', coords: { x: 50, y: 22 } },
  { id: 'm5', name: 'Abdômen e Core', location: 'Anterior Central', benefit: 'Fortalecimento do transverso e cinta abdominal profunda', coords: { x: 50, y: 38 } },
  { id: 'm6', name: 'Bíceps e Tríceps', location: 'Braços', benefit: 'Tonificação com calibração bilateral independente', coords: { x: 25, y: 28 } },
  { id: 'm7', name: 'Glúteos', location: 'Posterior Pélvico', benefit: 'Ativação potente para equilíbrio pélvico e sustentação', coords: { x: 50, y: 48 } },
  { id: 'm8', name: 'Quadríceps', location: 'Anterior Pernas', benefit: 'Força funcional sem pressão patelofemoral nos joelhos', coords: { x: 45, y: 62 } },
  { id: 'm9', name: 'Posteriores de Coxa', location: 'Posterior Pernas', benefit: 'Equilíbrio biomecânico de flexores e extensores', coords: { x: 55, y: 65 } },
  { id: 'm10', name: 'Panturrilhas e Distais', location: 'Membros Inferiores', benefit: 'Estímulo ao retorno venoso e drenagem periférica', coords: { x: 50, y: 82 } },
];

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: 'itaim-bibi',
    name: 'Itaim Bibi & Faria Lima',
    zone: 'Zona Sul',
    demandTier: 'Muito Alta',
    profile: 'Executivos e profissionais com rotina intensa que valorizam cada minuto livre.',
    condoType: 'Condomínios verticais de alto padrão, coberturas e home offices.',
    features: ['Atendimento a partir das 6h da manhã', 'Montagem rápida e discreta em 3 minutos', 'Zero tempo no trânsito da Faria Lima'],
  },
  {
    id: 'vila-nova-conceicao',
    name: 'Vila Nova Conceição',
    zone: 'Zona Sul',
    demandTier: 'Muito Alta',
    profile: 'Público que prioriza bem-estar, proximidade com o Ibirapuera e máxima discrição.',
    condoType: 'Edifícios residenciais ultra-premium.',
    features: ['Atendimento 100% individual', 'Conexão com rotina de corrida e esportes', 'Privacidade total no seu apartamento'],
  },
  {
    id: 'jardins',
    name: 'Jardins & Jardim Europa',
    zone: 'Zona Oeste',
    demandTier: 'Muito Alta',
    profile: 'Famílias, médicos, advogados e lideranças que exigem extrema qualidade e cuidado humano.',
    condoType: 'Residências amplas e edifícios clássicos.',
    features: ['Atendimento no próprio espaço de treino ou sala', 'Tecnologia Wiemspro sem ruídos', 'Foco em longevidade e postura'],
  },
  {
    id: 'moema',
    name: 'Moema (Pássaros & Índios)',
    zone: 'Zona Sul',
    demandTier: 'Muito Alta',
    profile: 'Moradores ativos que preferem o conforto de casa à rotina impessoal de academias.',
    condoType: 'Condomínios modernos com academias bem estruturadas.',
    features: ['Utilização da academia do prédio ou sala privativa', 'Sessões dinâmicas de 20 minutos', 'Horários flexíveis'],
  },
  {
    id: 'morumbi-alto-boa-vista',
    name: 'Morumbi & Alto da Boa Vista',
    zone: 'Zona Sul',
    demandTier: 'Alta',
    profile: 'Moradores de condomínios fechados que querem evitar o deslocamento pelas pontes e marginais.',
    condoType: 'Casas em condomínios horizontais protegidos.',
    features: ['Treine no conforto da sua casa', 'Equipamento completo levado até você', 'Atendimento para casais ou familiares'],
  },
  {
    id: 'brooklin-campo-belo',
    name: 'Brooklin & Campo Belo',
    zone: 'Zona Sul',
    demandTier: 'Alta',
    profile: 'Profissionais dinâmicos próximos ao eixo Berrini e Chucri Zaidan.',
    condoType: 'Grandes condomínios-clube e lofts executivos.',
    features: ['Elimina o cansaço do trânsito na Marginal', 'Foco em alívio de tensões nas costas', 'Consistência o ano inteiro'],
  },
];
