/* Conteúdo da página. Textos e dados ficam aqui, separados dos componentes. */

export type Treatment = { name: string; summary: string; duration: string };

export const site = {
  name: "Adelle",
  tagline: "clínica estética",
  description:
    "Dermatologia e estética em escala humana. Diagnóstico preciso e resultado que não se anuncia.",
  nav: [
    { label: "Clínica", href: "#clinica" },
    { label: "Filosofia", href: "#filosofia" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Home care", href: "#home-care" },
    { label: "Espaço", href: "#espaco" },
  ],
  heroFacts: ["Dermatologia clínica", "Estética avançada", "Atendimento individual", "Somente com hora marcada"],
} as const;

export const treatments: Treatment[] = [
  { name: "Consulta dermatológica", summary: "Diagnóstico, histórico e objetivos, com tempo.", duration: "50 min" },
  { name: "Bioestimuladores", summary: "Firmeza progressiva, sem alterar a expressão.", duration: "60 min" },
  { name: "Toxina botulínica", summary: "Doses mínimas, para suavizar e não congelar.", duration: "30 min" },
  { name: "Laser fracionado", summary: "Textura, poros e manchas, em camadas.", duration: "45 min" },
  { name: "Skinbooster", summary: "Hidratação profunda para uma pele com luz própria.", duration: "40 min" },
  { name: "Peeling químico", summary: "Renovação controlada, indicada após avaliação.", duration: "30 min" },
];

export const homeCareSteps = [
  { label: "Manhã", text: "Limpeza suave, antioxidante e proteção solar." },
  { label: "Noite", text: "Ativo prescrito e hidratação de barreira." },
  { label: "Retorno", text: "Ajuste da rotina a cada sessão." },
];

export const bookingSlots = ["09:00", "10:30", "11:30", "14:00", "15:30", "17:00"];
