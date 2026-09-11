# Experiência comercial — `/tech`

Apresentação da frente de Tecnologia da EverGreen. Mesmo formato da
[`/growth`](growth-experience.md): anexo de proposta, imersiva, PT/EN, navegação
por teclado, deep links e etiqueta `?p=`.

As sete dimensões foram confirmadas em 28/08/2026 — a régua está fechada e a página
pode publicar.

## Método: o mesmo Sistema Raiz

`/servicos` já diz que *"a frente tecnológica segue a mesma lógica"*. Então a
`/tech` não inventa vocabulário: usa as mesmas quatro fases, com os módulos
mapeados na Escada de Oferta de Tecnologia (Documento-Mestre §10.1).

| Fase | Ação | Módulo | Degrau |
|---|---|---|---|
| Raiz | Diagnosticar | 01 Raio-X Tecnológico | Tech 1 |
| Tronco | Priorizar | 02 Arquitetura | — |
| Ramos | Estruturar | 03 Sprint de Estruturação | Tech 2 |
| Copa | Evoluir | 04 Operação · 05 Evolução | Tech 3 |

Tech 4 (Growth Partnership Tech) **não vai público**, mesma regra da Oferta 4
comercial. A seção 04 da LP mostra os três degraus com a garantia escrita de cada.

## Evidências

Três, e a escolha foi deliberada:

- **Univet Safety** — plataforma de EPI entregue (web + mobile, uso offline).
  É a metade tecnológica do case que a `/growth` conta pelo lado comercial.
- **Bioma** — a infraestrutura da própria EG, com as 5 frentes do Documento-Mestre.
  Não precisa de autorização de terceiro e é a prova mais forte da política
  AI-First: a operação da agência roda no software que ela construiu.
- **PoC de protocolo judicial** — protótipo entregue junto da proposta. **Sem
  nomear o lead nem linkar o subdomínio**, seguindo a mesma regra do
  `leadConsent` em `src/config/portfolio.ts`.

## Casco compartilhado

`/growth` e `/tech` dividem `src/components/deck/`:

| Arquivo | O que tem |
|---|---|
| `deck.module.css` | o CSS das duas (era `growth.module.css`) |
| `deck.ts` | `track`, etiqueta `?p=`, `replaceExperienceUrl`, geometria das rodas |
| `DeckPrimitives.tsx` | `Eyebrow`, `SectionTitle`, `CaseSectionCopy` |
| `types.ts` | `CaseStudy`, `Language`, `RaizPhase` |
| `routes.ts` | **a lista de rotas imersivas** |

`routes.ts` é a que mais importa: `ConditionalLayout` e `FacebookPixel` leem dela.
**Deck novo que não for adicionado ali nasce com navbar, rodapé e Pixel em cima** —
foi quase o que aconteceu com esta.

Os eventos de analytics carregam `deck: 'tech'`, então dá para separar os dois
funis no GA4 sem criar tag nova. Ver [ANALYTICS-GTM.md](ANALYTICS-GTM.md).

## Sobre as 7 dimensões

Vieram de `EG_Raio-X_Tecnologico.md` (repo `evergreen-ai-os`), confirmadas em
28/08/2026. Ao mexer nelas, mexa **junto**: o array `dimensionsPt`/`dimensionsEn`
em `src/app/tech/data.ts`, o documento da régua, e a copy de `/servicos`. Foi a
divergência entre esses três que travou a publicação por um dia.

A ordem das dimensões importa: `dimensionRelations` em `TechExperience.tsx` indexa
por posição.
