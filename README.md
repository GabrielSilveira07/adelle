# Adelle

Landing page conceitual de **Adelle**, clínica de dermatologia e estética de alto padrão. Projeto de portfólio: identidade visual e front-end.

## Conceito

A pele como matéria. A página funciona como uma galeria silenciosa: um grid de 12 colunas firme por baixo e fotos sem moldura por cima. Cada foto se funde ao fundo, porque a cor da seção é a cor do fundo da própria foto, e as bordas se dissolvem em curvas suaves.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, geração estática)
- TypeScript
- CSS Modules + tokens em CSS custom properties, sem framework de UI
- `next/font` (Google Fonts servidas localmente) e `next/image` (AVIF/WebP responsivos)

## Rodando

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm run typecheck
```

Deploy recomendado: Vercel (detecta Next.js sem configuração).

## Estrutura

```
src/
  app/
    layout.tsx            fontes, metadados, viewport
    page.tsx              composição das seções
    globals.css           importa tokens e base
  styles/
    tokens.css            cor, tipo, layout e máscaras
    base.css              reset e utilitários (.wrap, .grid, .lbl, .sm, .link, .mask-*)
  content/
    site.ts               textos, navegação, tratamentos, horários
  components/
    layout/               Header, Footer, BookingFab
    sections/             Hero, Intro, Filosofia, Ritual, Tratamentos, HomeCare, Espaco, Agendar
    ui/                   FusedImage (foto + máscara), Fuse (transição entre seções)
    booking/              BookingProvider (contexto), BookingDrawer, OpenBooking
public/img/               fotos em alta resolução
```

Conteúdo fica em `src/content/site.ts`. Para trocar um tratamento, um texto ou um horário, não é preciso mexer nos componentes.

## Sistema visual

### Cor

| Token | Hex | Uso |
|---|---|---|
| `--branco` | `#FFFFFF` | Fundo principal |
| `--onix` | `#0F0E0D` | Fundo escuro (ritual, tratamentos) |
| `--grafite` | `#262321` | Texto |
| `--taupe` | `#6F6055` | Texto secundário (AA sobre branco e areia) |
| `--pele` | `#D6BFAC` | Texto secundário sobre ônix |
| `--areia` | `#E9DFD3` | Superfície |
| `--nude` | `#E9DDCA` | Fundo da filosofia |
| `--linho` | `#E3DCD1` | Fundo do home care |

Nude sobre branco não é usado para texto (contraste insuficiente).

### Tipografia

- **Italiana**: títulos, marca e nomes de tratamento. Serifa fina e vertical. Não tem itálico, então os destaques usam a cor taupe.
- **Inter Tight 300/400**: texto corrido (13px) e legendas (10px, caixa alta, espaçamento 0.26em).

### Fotos fundidas

`FusedImage` recebe uma máscara:

| Máscara | Efeito |
|---|---|
| `b` | dissolve só embaixo (hero) |
| `long` | dissolve em cima e embaixo, em curva longa (ritual, espaço) |
| `edge-b` | laterais curtas + base (filosofia) |
| `lr-tb` | os quatro lados (home care) |

`Fuse` faz a transição de cor entre seções, interpolando em `oklab` com curva suave.

Regra para novas fotos: o fundo da foto deve ser liso e próximo da cor da seção. Retratos de modelo foram recortados e recompostos sobre o tom exato da seção.

## Agendamento

Fluxo em dois toques (procedimento → horário) num painel lateral. A disponibilidade é de demonstração (`isTaken` em `BookingDrawer.tsx`) e nada é enviado. Para produção, ligar a uma agenda real e à confirmação por WhatsApp.

## Créditos

Fotos do [Unsplash](https://unsplash.com), usadas como referência de direção de arte. Os retratos foram recortados e tratados em cor para o projeto.
