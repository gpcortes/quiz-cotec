const questions = [
  {
    title: "Como é a sua personalidade?",
    options: [
      { value: "a", label: "Transformador" },
      { value: "b", label: "Financista" },
      { value: "c", label: "Criativo" },
      { value: "d", label: "Comprometido" },
      { value: "e", label: "Ecológico" },
    ],
    shuffle: true,
    weigh: true,
  },
  {
    title: "Quais assuntos você tem mais afinidade?",
    options: [
      { value: "a", label: "Informação e Comunicação" },
      { value: "b", label: "Gestão e Negócios" },
      { value: "c", label: "Infraestrutura" },
      { value: "d", label: "Turismo, Hospitalidade e Lazer" },
      { value: "e", label: "Recursos Naturais" },
    ],
    shuffle: true,
    weigh: false,
  },
  {
    title: "Com o que você mais se identifica?",
    options: [
      { value: "a", label: "Controle do tempo, comando e execução" },
      { value: "b", label: "Discurso, Argumentação e persuasão" },
      { value: "c", label: "Sistemas e construção" },
      { value: "d", label: "Praticidade e curiosidade" },
      { value: "e", label: "Pessoas de todos os níveis sociais e culturais" },
    ],
    shuffle: true,
    weigh: true,
  },
  {
    title: "Qual área mais desperta seu interesse?",
    options: [
      { value: "a", label: "Inteligência artificial" },
      { value: "b", label: "Economia" },
      { value: "c", label: "Criatividade" },
      { value: "d", label: "Empreendedorismo" },
      { value: "e", label: "Produção" },
    ],
    shuffle: true,
    weigh: true,
  },
  {
    title: "O que você quer aprender?",
    options: [
      { value: "a", label: "Desenvolver a criatividade, a autonomia intelectual, o pensamento crítico e a autoaprendizagem para a sistematização e/ou construção do conhecimento, sustentada na relação entre teoria e prática" },
      { value: "b", label: "Compreender as rotinas administrativas das organizações" },
      { value: "c", label: "Estabelecer relações entre o trabalho, a ciência, a cultura e a tecnologia e suas implicações para a educação profissional e tecnológica, além de comprometer-se com a formação humana, buscando responder às necessidades do mundo do trabalho" },
      { value: "d", label: "Compreender os processos culinários, envolvendo os procedimentos de pré-preparo, preparo e finalização de preparações culinárias" },
      { value: "e", label: "Apresentar conteúdo sobre noções básicas da agricultura desenvolvendo reflexões sobre normas e práticas iniciais aplicadas ao processo produtivo" },
    ],
    shuffle: true,
    weigh: true,
  },
  {
    title: "Quanto você quer ganhar?",
    options: [
      { value: "a", label: "+ R$3.000,00" },
      { value: "b", label: "+ R$4.000,00" },
      { value: "c", label: "+ R$5.000,00" },
      { value: "d", label: "+ R$10.000,00" },
      { value: "e", label: "Quero ficar milionário!" },
    ],
    shuffle: false,
    weigh: false,
  }
];

export default questions;