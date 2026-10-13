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

export interface MuscleGroup {
  id: string;
  name: string;
  location: string;
  benefit: string;
  coords: { x: number; y: number };
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Geral' | 'Segurança' | 'Logística' | 'Resultados';
  searchQueryContext?: string;
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
};

export const createWhatsAppUrl = (messageText: string) => {
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encoded}`;
};

export const DEFAULT_WHATSAPP_MESSAGES = {
  hero: 'Olá! Conheci a Frequency Body e gostaria de agendar uma aula experimental de Eletroestimulação (EMS) no meu condomínio/residência em SP.',
  calculator: 'Olá! Calculei a economia de tempo com a Frequency Body e gostaria de agendar um atendimento de EMS sem trânsito.',
  condo: 'Olá! Moro em condomínio em São Paulo e gostaria de saber como funciona o atendimento VIP de eletroestimulação na minha unidade/academia do prédio.',
  corporate: 'Olá! Gostaria de receber uma proposta para o programa de saúde e bem-estar corporativo da Frequency Body (EMS para diretores e colaboradores).',
  bairro: (bairro: string) => `Olá! Vi que vocês atendem no bairro ${bairro} e gostaria de verificar disponibilidade de horários para treino com EMS em domicílio.`,
  general: 'Olá! Gostaria de tirar dúvidas sobre o treino de 20 minutos com eletroestimulação da Frequency Body.',
};

export const BENEFITS: Benefit[] = [
  {
    id: 'b1',
    number: '01',
    title: 'Aumento da Força e Resistência Muscular',
    description: 'A WB-EMS promove o desenvolvimento de fibras musculares mais fortes e resistentes, ativando mais de 350 músculos simultaneamente.',
    iconName: 'Zap',
  },
  {
    id: 'b2',
    number: '02',
    title: 'Melhoria do Condicionamento Físico',
    description: 'Contribui para o aumento da capacidade aeróbica e anaeróbica, melhorando o desempenho cardiovascular e a resistência global.',
    iconName: 'Activity',
  },
  {
    id: 'b3',
    number: '03',
    title: 'Tonificação e Definição Muscular',
    description: 'Auxilia na queima calórica e recrutamento profundo dos tecidos musculares, favorecendo uma estética corporal mais tonificada.',
    iconName: 'Flame',
  },
  {
    id: 'b4',
    number: '04',
    title: 'Proteção Articular e Prevenção de Lesões',
    description: 'Sem pesos pesados sobre coluna e joelhos. Fortalece a musculatura estabilizadora profunda reduzindo drasticamente o risco de lesões.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'b5',
    number: '05',
    title: 'Personalização Total dos Treinos',
    description: 'Protocolos de treinamento Wiemspro® ajustados em tempo real às necessidades, histórico e objetivos individuais de cada aluno.',
    iconName: 'Sliders',
  },
  {
    id: 'b6',
    number: '06',
    title: 'Adaptação a Múltiplos Públicos',
    description: 'Desde o executivo sem tempo até o esportista de alta performance e pessoas que necessitam de fortalecimento seguro.',
    iconName: 'Users',
  },
  {
    id: 'b7',
    number: '07',
    title: 'Aprimoramento da Performance Esportiva',
    description: 'Potencializa velocidade de contração neuromuscular e core para praticantes de tênis, golfe, corrida, natação e hipismo.',
    iconName: 'Trophy',
  },
  {
    id: 'b8',
    number: '08',
    title: 'Ganho Real de Tempo: Apenas 20 Minutos',
    description: 'Trabalha múltiplos grupos musculares simultaneamente. Todos os benefícios de horas de treino convencional em 20 minutos de alta eficácia.',
    iconName: 'Clock',
  },
];

export const MUSCLE_GROUPS: MuscleGroup[] = [
  { id: 'm1', name: 'Trapézio e Ombros', location: 'Superior', benefit: 'Alívio da tensão postural e firmeza dos ombros', coords: { x: 50, y: 15 } },
  { id: 'm2', name: 'Costas / Dorsais', location: 'Posterior Superior', benefit: 'Fortalecimento postural para quem passa horas sentado', coords: { x: 50, y: 25 } },
  { id: 'm3', name: 'Lombar', location: 'Posterior Central', benefit: 'Prevenção de queixas lombares crônicas e estabilidade de tronco', coords: { x: 50, y: 35 } },
  { id: 'm4', name: 'Peitoral', location: 'Anterior Superior', benefit: 'Ativação muscular controlada sem impacto articular nos ombros', coords: { x: 50, y: 22 } },
  { id: 'm5', name: 'Abdominal e Core', location: 'Anterior Central', benefit: 'Fortalecimento da cinta abdominal profunda e estabilização pélvica', coords: { x: 50, y: 38 } },
  { id: 'm6', name: 'Bíceps e Tríceps', location: 'Braços', benefit: 'Tonificação de braços com ajuste bilateral independente', coords: { x: 25, y: 28 } },
  { id: 'm7', name: 'Glúteos', location: 'Posterior Pélvico', benefit: 'Recrutamento motor intenso para firmeza e suporte biomecânico', coords: { x: 50, y: 48 } },
  { id: 'm8', name: 'Quadríceps', location: 'Anterior Pernas', benefit: 'Força funcional nas pernas sem sobrecarregar a articulação do joelho', coords: { x: 45, y: 62 } },
  { id: 'm9', name: 'Posteriores de Coxa', location: 'Posterior Pernas', benefit: 'Equilíbrio muscular com ativação simultânea aos flexores', coords: { x: 55, y: 65 } },
  { id: 'm10', name: 'Panturrilhas / Membros', location: 'Membros Distais', benefit: 'Eletrodos opcionais avançados para retorno venoso e potência', coords: { x: 50, y: 82 } },
];

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: 'itaim-bibi',
    name: 'Itaim Bibi',
    zone: 'Zona Sul',
    demandTier: 'Muito Alta',
    profile: 'Executivos, investidores e empresários com agenda cheia e proximidade da Faria Lima.',
    condoType: 'Condomínios verticais de alto padrão e coberturas.',
    features: ['Atendimento das 6h às 21h30', 'Zero perda de tempo no trânsito da Faria Lima', 'Montagem rápida de 3 minutos'],
  },
  {
    id: 'vila-nova-conceicao',
    name: 'Vila Nova Conceição',
    zone: 'Zona Sul',
    demandTier: 'Muito Alta',
    profile: 'Público que busca máxima discrição, proximidade do Parque Ibirapuera e exclusividade.',
    condoType: 'Edifícios residenciais ultra-premium e condomínios fechados.',
    features: ['Atendimento privativo 100% individual', 'Personal trainer dedicado CREF', 'Conexão com rotina de corrida e esportes'],
  },
  {
    id: 'jardins',
    name: 'Jardins & Jardim Europa',
    zone: 'Zona Oeste',
    demandTier: 'Muito Alta',
    profile: 'Famílias tradicionais, médicos, advogados e executivos C-Level que valorizam extremo conforto.',
    condoType: 'Mansões, residências amplas e edifícios clássicos.',
    features: ['Atendimento no próprio espaço ou jardim', 'Equipamento sem fio Wiemspro 100% silencioso', 'Triagem de saúde e postura'],
  },
  {
    id: 'moema',
    name: 'Moema (Pássaros & Índios)',
    zone: 'Zona Sul',
    demandTier: 'Muito Alta',
    profile: 'Moradores ativos que evitam a superlotação de estúdios e preferem treinar sem sair de casa.',
    condoType: 'Condomínios residenciais modernos com ótimas áreas comuns.',
    features: ['Aproveitamento da academia do prédio ou sala', 'Sessões dinâmicas de 20 minutos', 'Horários flexíveis aos fins de semana'],
  },
  {
    id: 'brooklin-campo-belo',
    name: 'Brooklin & Campo Belo',
    zone: 'Zona Sul',
    demandTier: 'Alta',
    profile: 'Profissionais de tecnologia e corporativos próximos ao eixo Berrini e Chucri Zaidan.',
    condoType: 'Grandes condomínios-clube e lofts executivos.',
    features: ['Elimina a desculpa do trânsito na Marginal Pinheiros', 'Programa corporativo e individual', 'Combate dores nas costas'],
  },
  {
    id: 'morumbi-alto-boa-vista',
    name: 'Morumbi & Alto da Boa Vista',
    zone: 'Zona Sul',
    demandTier: 'Alta',
    profile: 'Moradores de casas em condomínios fechados que enfrentam alto atrito para se deslocar.',
    condoType: 'Casas com ampla área social e condomínios horizontais protegidos.',
    features: ['Treine sem enfrentar a Marginal ou pontes de SP', 'Estrutura completa levada até o condomínio', 'Pacotes para casais ou familiares'],
  },
];

export const COMPARISONS = [
  {
    criterion: 'Deslocamento & Trânsito em SP',
    frequencyBody: 'Zero trânsito. O personal vai até a sua sala, condomínio ou escritório.',
    physicalStudios: 'Você perde de 40 a 60 minutos no trânsito de SP ida e volta.',
    highlight: true,
  },
  {
    criterion: 'Horários & Flexibilidade',
    frequencyBody: 'Horários flexíveis (manhã cedo a partir das 6h, almoço, noite e fins de semana).',
    physicalStudios: 'Grade engessada. Vários fecham às 16h30 ou não abrem aos sábados/domingos.',
    highlight: true,
  },
  {
    criterion: 'Privacidade & Exclusividade',
    frequencyBody: '100% privativo no seu ambiente, sem olhares de terceiros ou estúdio cheio.',
    physicalStudios: 'Cabines compartilhadas, fluxo constante de outros alunos no mesmo espaço.',
    highlight: false,
  },
  {
    criterion: 'Atenção do Personal Trainer',
    frequencyBody: 'Acompanhamento 1-a-1 dedicado e exclusivo, corrigindo postura a cada segundo.',
    physicalStudios: 'Com frequência o instrutor divide a atenção com múltiplas cabines.',
    highlight: false,
  },
  {
    criterion: 'Custo de Vestuário (Lycra)',
    frequencyBody: 'Traje de alta tecnologia Wiemspro fornecido com protocolo estrito de higienização.',
    physicalStudios: 'Cobrança adicional frequente de lycras especiais de compra obrigatória.',
    highlight: false,
  },
  {
    criterion: 'Consistência & Chuva/Frio em SP',
    frequencyBody: 'Zero atrito. Faça frio, chuva ou trânsito parado em SP, seu treino acontece.',
    physicalStudios: 'Alta taxa de cancelamento e faltas pelo cansaço de sair de casa após o trabalho.',
    highlight: true,
  },
];

export const AUDIENCE_PERSONAS = [
  {
    id: 'executivos',
    title: 'Empresários & Executivos',
    subtitle: 'Itaim Bibi, Jardins, Faria Lima & Berrini',
    tag: 'Otimização de Tempo',
    painPoint: 'Rotina intensa de reuniões, viagens e zero disposição para perder 1h30 no trânsito de São Paulo.',
    solution: 'O treino mais eficiente do mundo direto no seu home office ou escritório. 20 minutos e você está pronto para o dia.',
    iconName: 'Briefcase',
    features: ['Sem trânsito ou estacionamento', 'Sessões antes das 8h ou pós-expediente', 'Ativação muscular com foco na postura'],
  },
  {
    id: 'condominios',
    title: 'Condomínios de Alto Padrão',
    subtitle: 'Morumbi, Moema, Vila Nova Conceição & Brooklin',
    tag: 'Máximo Conforto VIP',
    painPoint: 'Preguiça de sair no trânsito frio/chuvoso de SP para ir à academia ou estúdio lotado.',
    solution: 'Transformamos a academia do seu prédio ou a sua própria sala em um centro de eletroestimulação de última geração.',
    iconName: 'Home',
    features: ['Atendimento dentro do condomínio', 'Equipamento Wiemspro silencioso e sem fios', 'Possibilidade de treinar em dupla no prédio'],
  },
  {
    id: 'corporativo',
    title: 'Empresas & RH Corporativo',
    subtitle: 'Benefício VIP de Saúde e Bem-Estar',
    tag: 'Saúde Corporativa',
    painPoint: 'Colaboradores sedentários, dores posturais/lombalgia e perda de produtividade por afastamentos.',
    solution: 'Levamos sessões rápidas de 20 minutos com triagem médica para diretores e executivos da sua corporação.',
    iconName: 'Building2',
    features: ['Aulas demonstrativas rápidas', 'Fortalecimento de coluna e postura', 'Aumento de foco e disposição na equipe'],
  },
  {
    id: 'atletas',
    title: 'Esportistas (Tênis, Golfe, Corrida)',
    subtitle: 'Fortalecimento sem impacto articular',
    tag: 'Performance Esportiva',
    painPoint: 'Necessidade de fortalecer core e potência sem sobrecarregar tendões e articulações já desgastadas.',
    solution: 'Trabalho focado em estabilidade rotacional, membros inferiores e velocidade de contração neuromuscular.',
    iconName: 'Trophy',
    features: ['Foco em estabilidade lombar e pélvica', 'Zero impacto nas articulações', 'Complemento ideal para o seu esporte'],
  },
  {
    id: 'saude',
    title: 'Longevidade & Saúde Muscular (60+)',
    subtitle: 'Combate à perda de massa e postura',
    tag: 'Fortalecimento Seguro',
    painPoint: 'Dificuldade para erguer pesos tradicionais por medo de dor articular, desvios posturais ou fraqueza muscular.',
    solution: 'Fortalecimento profundo e seguro sem compressão das articulações, sempre com anamnese e liberação médica.',
    iconName: 'HeartPulse',
    features: ['Zero carga articular nas vértebras', 'Estímulo neuromuscular profundo', 'Professor com registro CREF acompanhando'],
  },
];

export const SAFETY_ITEMS = {
  contraindications: [
    { title: 'Gestantes', reason: 'Estímulos elétricos abdominais e pélvicos são contraindicados durante o período gestacional.' },
    { title: 'Portadores de Marca-Passo ou DCI', reason: 'Dispositivos eletrônicos implantados podem sofrer interferência eletromagnética.' },
    { title: 'Epilepsia ou Convulsões', reason: 'Histórico ativo de distúrbios neurológicos com crises convulsivas.' },
    { title: 'Trombose Aguda ou Infecções Ativas', reason: 'Quadros vasculares agudos exigem repouso e liberação médica prévia formal.' },
  ],
  ethicalCommitments: [
    { title: 'Sem Promessas Milagrosas', description: 'Trabalhamos com fisiologia real e evidências. A EMS otimiza condicionamento, tônus e postura, aliada à constância e bons hábitos.' },
    { title: 'Profissionais Graduados CREF', description: 'Todos os nossos treinadores possuem formação em Educação Física e registro ativo no Conselho Regional (CREF-SP).' },
    { title: 'Tecnologia Wiemspro® Homologada', description: 'Equipamentos certificados por rigorosos órgãos internacionais de saúde e conformidade com normas sanitárias brasileiras.' },
    { title: 'Triagem e Anamnese Prévia', description: 'Nenhum aluno inicia sem preenchimento prévio do questionário de prontidão física e verificação de condições de saúde.' },
  ],
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Geral',
    searchQueryContext: 'o que e eletroestimulacao muscular sp',
    question: 'O que é a WB-EMS (Whole-Body Electromyostimulation)?',
    answer: 'É uma tecnologia de eletroestimulação muscular de corpo inteiro que utiliza impulsos elétricos controlados emitidos através de um traje tecnológico sem fio Wiemspro®. O sistema ativa mais de 350 músculos em simultâneo com intensidade personalizada, multiplicando a contração muscular natural enquanto você realiza exercícios funcionais leves.',
  },
  {
    category: 'Logística',
    searchQueryContext: 'personal trainer em domicilio sp',
    question: 'Como funciona o atendimento da Frequency Body em domicílio?',
    answer: 'Nosso personal trainer chega ao seu endereço no horário marcado trazendo toda a estrutura: equipamento sem fio, traje biométrico higienizado e plano de aula planejado para o seu objetivo. O treino dura 20 minutos e pode ser realizado na sala da sua casa, varanda ou na academia do seu condomínio. Você não precisa se deslocar nem enfrentar trânsito.',
  },
  {
    category: 'Resultados',
    searchQueryContext: '20 minutos de ems substitui musculacao',
    question: 'Por que o treino dura apenas 20 minutos?',
    answer: 'Na musculação comum, você estimula um ou dois músculos por vez com pausas para descanso. Na WB-EMS, 10 grandes grupos musculares trabalham ao mesmo tempo com contrações contínuas e recrutamento de fibras profundas. Por isso, 20 minutos de treino oferecem um estímulo neuromuscular altamente eficaz, sem sobrecarregar suas articulações com sobrepeso.',
  },
  {
    category: 'Segurança',
    searchQueryContext: 'eletroestimulacao faz mal para a saude dor',
    question: 'A eletroestimulação dá choque ou dói?',
    answer: 'Não! Você sente uma vibração e uma contração muscular firme e tonificante, sem dor aguda. A intensidade de cada um dos 10 grupos musculares é calibrada milimetricamente pelo personal trainer no aplicativo Wiemspro®, respeitando sua tolerância e evolução individual.',
  },
  {
    category: 'Logística',
    searchQueryContext: 'personal para condominio luxo sp',
    question: 'O que o condomínio ou síndico exige para o atendimento?',
    answer: 'Nossos equipamentos Wiemspro são 100% sem fio, à bateria e não requerem fiação ou tomadas especiais. O treino pode ocorrer no seu próprio apartamento ou na sala de ginástica do condomínio, sendo extremamente silencioso e discreto, sem qualquer interferência na rotina dos vizinhos.',
  },
  {
    category: 'Segurança',
    searchQueryContext: 'eletroestimulacao contraindicacoes',
    question: 'Quem NÃO pode treinar com EMS?',
    answer: 'Por estrito protocolo de biossegurança, a EMS é contraindicada para gestantes, portadores de marca-passo cardíaco ou implantes elétricos, pessoas com epilepsia e casos de trombose aguda ativa. Alunos com condições de saúde específicas passam por triagem e podem necessitar de liberação do médico assistente.',
  },
  {
    category: 'Geral',
    searchQueryContext: 'quanto custa treino ems sp',
    question: 'Como agendar uma aula experimental?',
    answer: 'Basta clicar em qualquer botão de WhatsApp nesta página. Nossa equipe entrará em contato para verificar seu bairro em São Paulo, objetivo e disponibilidade de agenda para sua sessão experimental com acompanhamento exclusivo.',
  },
];
