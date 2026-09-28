export interface GymInfo {
  name: string;
  tagline: string;
  subtagline: string;
  instagram: string;
  instagramUrl: string;
  website: string;
  phone: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  mapsUrl: string;
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface Benefit {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface Modality {
  id: string;
  title: string;
  badge: string;
  description: string;
  targetAudience: string;
  image: string;
  features: string[];
}

export interface ScheduleItem {
  id: string;
  time: string;
  modality: string;
  category: string;
  instructor: string;
  days: string[]; // ['Seg', 'Qua', 'Sex'] or ['Ter', 'Qui'] or ['Sáb']
}

export interface Professor {
  name: string;
  role: string;
  belt: string;
  degree?: string;
  bio: string;
  quote?: string;
  image: string;
  isHistorical?: boolean;
}

export interface FacilityItem {
  title: string;
  category: string;
  description: string;
  image: string;
  highlight: string;
}

export interface AchievementItem {
  year: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  category: string;
  comment: string;
  image: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  postUrl: string;
  date: string;
}

export const gymData = {
  info: {
    name: "Gracie Jiu-Jitsu",
    fullUnitName: "Academia Gracie Jiu-Jitsu (Matriz)",
    tagline: "A Origem da Arte Suave desde 1925",
    subtagline: "Metodologia autêntica criada por Carlos e Hélio Gracie para autodefesa, saúde e evolução humana.",
    instagram: "@academiagracie",
    instagramUrl: "https://www.instagram.com/academiagracie/",
    website: "https://academiagracie.com.br",
    phone: "+55 (21) 3437-5284",
    whatsapp: "+55 (21) 98765-5284",
    whatsappRaw: "5521987655284",
    email: "contato@academiagracie.com.br",
    address: {
      street: "Rua Vítor Maúrtua, 14 A",
      neighborhood: "Lagoa",
      city: "Rio de Janeiro",
      state: "RJ",
      zip: "22471-200",
      full: "Rua Vítor Maúrtua, 14 A – Lagoa, Rio de Janeiro – RJ, 22471-200"
    },
    mapsUrl: "https://maps.google.com/?q=Rua+Vítor+Maúrtua+14+A+Lagoa+Rio+de+Janeiro+RJ",
    openingHours: {
      weekdays: "Segunda a Sexta: 06:30 às 22:00",
      saturday: "Sábados: 08:00 às 14:00",
      sunday: "Domingos: Descanso / Eventos e Seminários Especiais"
    }
  },

  heroStats: [
    { value: "1925", label: "Origem do Jiu-Jitsu", sub: "Mais de um século de história" },
    { value: "100%", label: "Linhagem Oficial", sub: "Metodologia Hélio Gracie" },
    { value: "24k+", label: "Comunidade Ativa", sub: "Alunos e seguidores oficiais" },
    { value: "0 a 100", label: "Todas as Idades", sub: "Do Kids aos veteranos" },
  ],

  benefits: [
    {
      id: "disciplina",
      title: "DISCIPLINA & AUTOCONTROLE",
      subtitle: "Mente serena sob pressão",
      description: "Construção de hábitos sólidos, paciência e concentração mental que impactam positivamente seus estudos, carreira e rotina diária.",
      iconName: "Shield"
    },
    {
      id: "autodefesa",
      title: "AUTODEFESA EFICIENTE",
      subtitle: "A essência de Hélio Gracie",
      description: "Aprenda a arte da alavanca e técnica pura. Domine como neutralizar adversários mais pesados ou agressivos sem depender de força física bruta.",
      iconName: "UserCheck"
    },
    {
      id: "condicionamento",
      title: "CONDICIONAMENTO COMPLETO",
      subtitle: "Corpo funcional e saudável",
      description: "Queima calórica intensa, fortalecimento muscular profundo, ganho de flexibilidade e desenvolvimento de resistência cardiovascular duradoura.",
      iconName: "Activity"
    },
    {
      id: "confianca",
      title: "CONFIANÇA INABALÁVEL",
      subtitle: "Segurança em qualquer situação",
      description: "Ao superar desafios técnicos nos treinos todos os dias, você adquire uma postura firme, serena e segura diante dos obstáculos da vida.",
      iconName: "Zap"
    },
    {
      id: "comunidade",
      title: "COMUNIDADE & IRMANDADE",
      subtitle: "Ambiente familiar e respeitoso",
      description: "Um tatame seguro, limpo e acolhedor onde homens, mulheres e crianças se ajudam mutuamente para evoluir juntos a cada treino.",
      iconName: "Users"
    },
    {
      id: "evolucao",
      title: "EVOLUÇÃO CONTÍNUA",
      subtitle: "Jornada de vida duradoura",
      description: "Currículo estruturado de faixas da Família Gracie. Metas claras a cada aula com acompanhamento próximo dos mestres e instrutores.",
      iconName: "TrendingUp"
    }
  ],

  modalities: [
    {
      id: "iniciantes",
      title: "Jiu-Jitsu Iniciante (Fundamentos)",
      badge: "Passo Inicial Recomendado",
      description: "Programa especialmente desenhado para quem nunca vestiu um kimono. Aprenda a postura correta, amortecimento de quedas, defesas básicas e saídas essenciais com total segurança e respeito ao seu ritmo.",
      targetAudience: "Homens e mulheres a partir de 16 anos sem experiência prévia",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Turma exclusiva para fundamentos sem risco de lesão",
        "Aprenda os princípios de alavanca de Hélio Gracie",
        "Didática passo a passo com professores dedicados",
        "Ambiente leve, sem ego e altamente acolhedor"
      ]
    },
    {
      id: "adulto",
      title: "Jiu-Jitsu Adulto Avançado",
      badge: "Evolução Técnica & Sparring",
      description: "Para praticantes e faixas coloridas que buscam refinar transições de guarda, passagens modernas, finalizações cirúrgicas e treinos de combate com alto nível técnico e ritmo de luta.",
      targetAudience: "Praticantes a partir da faixa azul e alunos graduados",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Estudo aprofundado de sistemas de guarda e contra-ataques",
        "Treino de luta (sparring) supervisionado",
        "Aprimoramento de estratégias e timing de combate",
        "Linhagem técnica mais respeitada do mundo"
      ]
    },
    {
      id: "kids",
      title: "Gracie Kids & Juvenil",
      badge: "Formação de Caráter Infantil",
      description: "Mais do que ensinar técnicas, construímos respeito aos pais e professores, foco nos estudos escolares, espírito esportivo e confiança contra o bullying escolar através de jogos lúdicos educativos.",
      targetAudience: "Crianças e adolescentes de 4 a 15 anos divididos por faixa etária",
      image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Metodologia anti-bullying comprovada",
        "Desenvolvimento de coordenação motora e equilíbrio",
        "Aulas dinâmicas, divertidas e de respeito mútuo",
        "Valores morais de disciplina e honestidade"
      ]
    },
    {
      id: "competicao",
      title: "Equipe de Competição",
      badge: "Alta Performance & Campeonatos",
      description: "Treinos intensos para atletas que buscam representar a bandeira Gracie nos principais campeonatos nacionais e internacionais da CBJJ e IBJJF, com foco em pontuação, regras, condicionamento e mentalidade vencedora.",
      targetAudience: "Atletas amadores e profissionais focados em pódios",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Periodização e simulados de luta com árbitro",
        "Preparação física e gás específico de combate",
        "Suporte de equipe em campeonatos oficiais",
        "Histórico centenário de medalhas e títulos mundiais"
      ]
    },
    {
      id: "nogi",
      title: "Jiu-Jitsu No-Gi (Sem Kimono)",
      badge: "Velocidade & Wrestling",
      description: "Treino prático sem o kimono (utilizando bermuda e rashguard). Focado em adaptações de quedas do wrestling, pegadas de gola/pulso, chaves de perna legais e ritmo ágil de grappling moderno.",
      targetAudience: "Praticantes de todos os níveis que querem diversificar o jogo",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Adaptação de quedas da luta olímpica e judô",
        "Transições rápidas e defesas dinâmicas",
        "Excelente condicionamento cardiorrespiratório",
        "Treino técnico complementar essencial"
      ]
    },
    {
      id: "particulares",
      title: "Aulas Particulares (Private Lessons)",
      badge: "Tradição Original Gracie",
      description: "O método de ensino primário criado por Carlos e Hélio Gracie: atenção 100% individualizada com o mestre. Cada detalhe, ajuste de peso e dúvida é lapidado em um ritmo 4x mais rápido de aprendizado.",
      targetAudience: "Iniciantes tímidos, executivos com agenda restrita ou atletas",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Horários flexíveis conforme a sua conveniência",
        "Plano de treino desenhado exclusivamente para suas metas",
        "Feedback instantâneo a cada posição no tatame",
        "Máxima discrição e privacidade"
      ]
    }
  ],

  timetable: [
    {
      id: "t1",
      time: "07:00 - 08:00",
      modality: "Jiu-Jitsu Manhã (Misto)",
      category: "Adulto Geral",
      instructor: "Professores Certificados",
      days: ["Seg", "Qua", "Sex"]
    },
    {
      id: "t2",
      time: "08:15 - 09:15",
      modality: "Jiu-Jitsu Iniciantes",
      category: "Fundamentos & Defesa Pessoal",
      instructor: "Professores Certificados",
      days: ["Ter", "Qui"]
    },
    {
      id: "t3",
      time: "10:00 - 11:30",
      modality: "Treino de Competição",
      category: "Atletas & Avançado",
      instructor: "Coordenação Técnica Gracie",
      days: ["Seg", "Qua", "Sex"]
    },
    {
      id: "t4",
      time: "12:00 - 13:00",
      modality: "Jiu-Jitsu Horário de Almoço",
      category: "Adulto Todos os Níveis",
      instructor: "Professores Certificados",
      days: ["Seg", "Qua", "Sex"]
    },
    {
      id: "t5",
      time: "16:00 - 17:00",
      modality: "Gracie Kids (4 a 8 anos)",
      category: "Infantil Iniciante",
      instructor: "Professores Especializados Kids",
      days: ["Seg", "Qua", "Sex"]
    },
    {
      id: "t6",
      time: "17:15 - 18:15",
      modality: "Gracie Juvenil (9 a 15 anos)",
      category: "Infantojuvenil",
      instructor: "Professores Especializados Kids",
      days: ["Seg", "Qua", "Sex"]
    },
    {
      id: "t7",
      time: "18:30 - 19:30",
      modality: "Jiu-Jitsu Iniciante (Módulo 1)",
      category: "Fundamentos Básicos",
      instructor: "Professores Certificados",
      days: ["Seg", "Ter", "Qua", "Qui"]
    },
    {
      id: "t8",
      time: "19:45 - 21:00",
      modality: "Jiu-Jitsu Adulto Avançado",
      category: "Faixas Coloridas & Sparring",
      instructor: "Mestres & Faixas-Pretas",
      days: ["Seg", "Qua", "Sex"]
    },
    {
      id: "t9",
      time: "19:45 - 21:00",
      modality: "Jiu-Jitsu No-Gi (Sem Kimono)",
      category: "Grappling & Wrestling",
      instructor: "Professores Certificados",
      days: ["Ter", "Qui"]
    },
    {
      id: "t10",
      time: "09:00 - 11:00",
      modality: "Aulão Geral de Sábado & Graduações",
      category: "Comunidade Integrada",
      instructor: "Equipe Completa",
      days: ["Sáb"]
    }
  ],

  professors: [
    {
      name: "Grande Mestre Hélio Gracie",
      role: "Fundador do Gracie Jiu-Jitsu (1913 - 2009)",
      belt: "Faixa Vermelha 10º Grau",
      degree: "Patriarca da Arte Suave",
      bio: "Pioneiro que adaptou as técnicas tradicionais do Jiu-Jitsu às leis da física e alavanca, provando ao mundo que um indivíduo menor pode neutralizar qualquer agressor com técnica pura.",
      quote: "O Jiu-Jitsu que criei foi para dar aos fracos a chance de enfrentar os fortes.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      isHistorical: true
    },
    {
      name: "Mestre Rolker Gracie",
      role: "Líder e Guardião do Legado Matriz",
      belt: "Faixa Vermelha e Branca (Coral) 8º Grau",
      degree: "4º Filho de Hélio Gracie",
      bio: "Dedicado há mais de quatro décadas à preservação dos ensinamentos originais de seu pai. Comanda a Academia Gracie Humaitá no Rio de Janeiro, formando gerações de faixas-pretas e cidadãos de bem.",
      quote: "No tatame da Gracie, ensinamos mais do que golpes: ensinamos respeito, caráter e saúde para a vida toda.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      isHistorical: false
    },
    {
      name: "Corpo Docente de Faixas-Pretas",
      role: "Professores e Instrutores Certificados",
      belt: "Faixas Pretas Oficiais",
      degree: "Certificação da Linhagem Gracie",
      bio: "Instrutores com vasta experiência pedagógica, primeiros socorros e metodologia de ensino da família Gracie, dedicados ao progresso individual de cada aluno desde a primeira aula.",
      quote: "Aqui nenhum aluno fica para trás. Evoluímos juntos com paciência e técnica sólida.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      isHistorical: false
    }
  ],

  facilities: [
    {
      title: "Tatame de Absorção de Alto Impacto",
      category: "Segurança & Performance",
      description: "Área ampla e contínua com piso amortecido especial e higienização hospitalar rigorosa entre cada turno de aulas.",
      highlight: "Espaço amplo e seguro",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Espaço Histórico & Galeria dos Mestres",
      category: "Tradição & Respeito",
      description: "Ambiente que respira a história do Jiu-Jitsu brasileiro, com registros fotográficos raros da família Carlos e Hélio Gracie.",
      highlight: "Ambiente nobre e inspirador",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Vestiários Premium Completos",
      category: "Conforto do Aluno",
      description: "Armários individuais, duchas com aquecimento a gás, bancadas confortáveis e higiene impecável para você ir direto ao trabalho.",
      highlight: "Higiene nível hospitalar",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Lounge para Pais & Visitantes",
      category: "Família Gracie",
      description: "Visão panorâmica para o tatame, ar-condicionado e café para que os pais acompanhem o desenvolvimento dos seus filhos com comodidade.",
      highlight: "Visão total do tatame",
      image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Boutique Oficial de Equipamentos",
      category: "Material Oficial",
      description: "Kimonos oficiais com os patches tradicionais, rashguards de compressão, faixas e vestuário de alta durabilidade.",
      highlight: "Equipamentos autênticos",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Área Exclusiva de Aulas Particulares",
      category: "Privacidade",
      description: "Tatame reservado para quem deseja aulas 1 a 1 de defesa pessoal e acompanhamento técnico aprofundado com os professores.",
      highlight: "100% de foco no aluno",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80"
    }
  ],

  achievements: [
    {
      year: "1925",
      title: "Fundação da Primeira Academia Gracie",
      category: "Marco Histórico",
      description: "Carlos e Hélio Gracie abrem no Rio de Janeiro a academia que transformou o mundo das artes marciais para sempre.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "Tradição",
      title: "Campeonatos Mundiais e Nacionais",
      category: "Competição & Alto Rendimento",
      description: "Atletas formados no tatame da Gracie conquistando medalhas de ouro nas maiores federações internacionais de Jiu-Jitsu.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "Anual",
      title: "Seminários Oficiais com Mestres da Família",
      category: "Troca Técnica",
      description: "Eventos exclusivos onde alunos de todos os graus recebem correções detalhadas e histórias diretamente da linhagem principal.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "Semestral",
      title: "Cerimônia de Graduação e Troca de Faixas",
      category: "Reconhecimento & Honra",
      description: "Momento solene onde o esforço, assiduidade e evolução técnica e moral de cada aluno são coroados na presença da família.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
    }
  ],

  testimonials: [
    {
      name: "Rodrigo Mendonça",
      role: "Aluno Adulto • Faixa Azul",
      category: "Adulto Iniciante ao Avançado",
      comment: "Comecei com 38 anos sem nenhum preparo físico e com receio de me machucar. Na Gracie encontrei um ambiente acolhedor, professores pacientes e um método que realmente funciona para qualquer pessoa. Perdi 12kg e ganhei um foco absurdo no trabalho.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Patrícia Albuquerque",
      role: "Mãe do Bernardo (8 anos, Turma Kids)",
      category: "Família Gracie Kids",
      comment: "O Bernardo era tímido e tinha dificuldade de concentração na escola. Em seis meses de Gracie Kids a transformação foi nítida: aprendeu a ter postura, respeitar horários e hoje tem uma autoestima fantástica. Não troco essa academia por nada.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Camila Guimarães",
      role: "Aluna de Defesa Pessoal & Adulto",
      category: "Defesa Pessoal Feminina",
      comment: "A segurança que você adquire ao saber como sair de um estrangulamento ou imobilização é impagável. A didática dos professores é exemplar e o respeito com as mulheres no tatame é de 100%. Recomendo para todas as minhas amigas.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Felipe Siqueira",
      role: "Atleta Competidor • Faixa Marrom",
      category: "Competição & Alto Rendimento",
      comment: "A bagagem técnica e os detalhes de ajuste que você aprende aqui não existem em nenhum outro lugar. É a linhagem pura da Família Gracie. Quem treina aqui sabe que o nível de Jiu-Jitsu é outro patamar.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ],

  galleryImages: [
    {
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
      category: "Treino",
      caption: "Ajuste milimétrico de alavanca no tatame"
    },
    {
      url: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=900&q=80",
      category: "Kids",
      caption: "Turma infantil desenvolvendo respeito e equilíbrio"
    },
    {
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
      category: "Tradição",
      caption: "Saudação respeitosa aos mestres no início do treino"
    },
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
      category: "No-Gi",
      caption: "Grappling dinâmico e controle de transições"
    },
    {
      url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
      category: "Graduação",
      caption: "Celebração e entrega de graus e faixas"
    },
    {
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
      category: "Estrutura",
      caption: "Tatame profissional preparado para treinos de excelência"
    }
  ],

  instagramFeed: [
    {
      id: "post1",
      imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      caption: "Iniciante • Avançado • Competição. Agende sua visita e conheça a autêntica linhagem Gracie. #GracieJiuJitsu #DefesaPessoal",
      likes: 842,
      comments: 38,
      date: "Há 2 dias",
      postUrl: "https://www.instagram.com/academiagracie/"
    },
    {
      id: "post2",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=600&q=80",
      caption: "O Jiu-Jitsu Kids não ensina apenas autodefesa, ensina postura diante da vida. Turmas abertas a partir dos 4 anos. #GracieKids",
      likes: 1205,
      comments: 64,
      date: "Há 4 dias",
      postUrl: "https://www.instagram.com/academiagracie/"
    },
    {
      id: "post3",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
      caption: "\"O tatame é o espelho da alma. Quem aprende a manter a calma sob pressão no treino, mantém a calma na vida.\" #HelioGracie",
      likes: 1980,
      comments: 92,
      date: "Há 6 dias",
      postUrl: "https://www.instagram.com/academiagracie/"
    },
    {
      id: "post4",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
      caption: "Treino de No-Gi pegando fogo! Ritmo, transição e muito grappling técnico. Quem compareceu hoje? Oss! #GracieNoGi",
      likes: 754,
      comments: 29,
      date: "Há 1 semana",
      postUrl: "https://www.instagram.com/academiagracie/"
    }
  ],

  faqs: [
    {
      category: "Iniciantes",
      question: "Nunca treinei artes marciais na vida. Posso começar agora?",
      answer: "Com certeza! A maioria dos nossos alunos nunca havia pisado em um tatame antes. Criamos um módulo exclusivo para iniciantes onde você aprende os fundamentos de forma segura, pausada e sem risco de lesões. Não há contato agressivo nem sparring livre nas primeiras semanas."
    },
    {
      category: "Aulas",
      question: "Como funciona a aula experimental gratuita?",
      answer: "Você agenda previamente pelo nosso WhatsApp ou formulário online. No dia marcado, chega 15 minutos antes para conhecer o professor, emprestamos o kimono higienizado para sua aula teste e você vivencia na prática a dinâmica de aquecimento, defesa pessoal e conceitos básicos."
    },
    {
      category: "Equipamento",
      question: "Preciso ter meu próprio kimono para a primeira aula?",
      answer: "Não! Para a aula experimental gratuita nós fornecemos um kimono limpo e higienizado para você treinar com tranquilidade. Se decidir se matricular, temos kimonos oficiais à pronta entrega na recepção da academia."
    },
    {
      category: "Idade",
      question: "Qual a idade mínima e máxima para treinar Jiu-Jitsu?",
      answer: "Recebemos crianças a partir dos 4 anos de idade nas turmas infantis lúdicas. E para os adultos, não existe idade máxima: temos praticantes de 50, 60 e 70 anos que treinam com regularidade para manter a flexibilidade, saúde articular e bem-estar."
    },
    {
      category: "Kids",
      question: "O Jiu-Jitsu pode deixar meu filho agressivo?",
      answer: "Pelo contrário! O método Gracie ensina que a arte suave é exclusivamente para autodefesa e preservação. Crianças que treinam aprendem disciplina, respeito mútuo, ganham autocontrole emocional e tornam-se muito mais tranquilas e confiantes na escola e em casa."
    },
    {
      category: "Mulheres",
      question: "Existem turmas e suporte para mulheres?",
      answer: "Sim, nossas turmas são abertas e inclusivas para todos, além de oferecermos aulas e oficinas específicas de Defesa Pessoal Feminina. O Jiu-Jitsu é a arte marcial mais indicada para mulheres porque se baseia em alavancas contra adversários mais fortes."
    },
    {
      category: "Frequência",
      question: "Quantas vezes por semana devo treinar?",
      answer: "Para quem está começando, recomendamos uma frequência de 2 a 3 vezes por semana. Essa constância permite que o corpo assimile a técnica sem sobrecarga muscular e desenvolva o hábito do estilo de vida saudável."
    },
    {
      category: "Inscrição",
      question: "Como faço para agendar minha aula ou tirar dúvidas?",
      answer: "Basta clicar em qualquer botão 'AGENDAR AULA EXPERIMENTAL' aqui no site para abrir diretamente uma conversa no nosso WhatsApp oficial, ou preencher o formulário rápido de agendamento. Nossa equipe responderá em minutos!"
    }
  ]
};
