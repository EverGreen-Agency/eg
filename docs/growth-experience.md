# Experiência comercial — `/growth`

Apresentação da frente de Growth da EverGreen. Rota do projeto principal, publicada em
`https://evergreenmkt.com.br/growth`.

**Ela não é uma página de captação.** É anexo de proposta: o link vai colado no WhatsApp,
ao lado do orçamento, para alguém que já está em conversa. Toda decisão de produto aqui sai
desse enquadramento — o CTA devolve a pessoa para a conversa, a peça é imersiva (sem navbar
e sem rodapé, via `ConditionalLayout`) e a navegação por teclado existe para que ela possa
ser conduzida ao vivo numa call.

## Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000/growth`.

## Método: a LP fala o mesmo idioma do resto do site

A apresentação está ancorada no **Sistema Raiz EG** (Documento-Mestre §9), o mesmo da home,
de `/servicos` e de `/niveis-de-cliente`. Os cinco módulos do método carregam a fase a que
pertencem — o campo `phase` em `MethodModule`:

| Fase | Ação | Módulo |
|---|---|---|
| Raiz | Diagnosticar | 01 Diagnóstico |
| Tronco | Priorizar | 02 Arquitetura |
| Ramos | Estruturar | 03 Implementação |
| Copa | Evoluir | 04 Operação · 05 Evolução |

A Copa é a única fase com dois módulos, e isso é proposital: ela não termina.

A roda da seção 02 mostra **três pilares medidos** — Oferta, Demanda e Conversão, os mesmos
que o Raio-X Comercial pontua de 0 a 10 e os mesmos da tabela `raio_x_scores` no Bioma — e
**quatro sustentações** que os seguram: Dados, Tecnologia, Pessoas e Processo. O campo `kind`
em `SystemLever` distingue os dois. Se mexer na ordem do array, ajuste `leverRelations` junto.

A escada de ofertas (Raio-X → Sprint → Retainer) aparece no rodapé da seção 04.

## Configuração

Todas as variáveis são opcionais — veja `.env.example`. O que muda com cada uma:

| Variável | Sem ela | Com ela |
|---|---|---|
| `NEXT_PUBLIC_GTM_ID` | os eventos abaixo não chegam a lugar nenhum | GTM carrega **após o aceite** no banner de cookies |
| `NEXT_PUBLIC_EG_WHATSAPP_URL` | CTA usa o `wa.me` padrão do código, com texto por idioma | troca número ou mensagem sem deploy |

O CTA principal nunca cai em `/contato`: essa rota não é imersiva e jogaria o prospect para
fora do deck, no site institucional.

## Links profundos

- `/growth#metodo`
- `/growth?explore=diagnostico` — abre o módulo já expandido
- `/growth?case=kontes` — abre o estudo de caso já aberto
- `/growth?lang=en`
- `/growth?p=rian` — etiqueta de quem recebeu o link, vai junto em todos os eventos

Combinam entre si. `?p=univet&case=univet` manda o link já aberto no case que interessa
àquela pessoa, e ainda diz nos relatórios que foi ela quem abriu. Os parâmetros sobrevivem
à navegação — abrir um módulo ou um case reescreve a URL preservando `p` e `lang`.

## Idiomas

PT e EN têm **paridade de conteúdo** — os três cases têm as mesmas 20 seções nos dois
idiomas. Ao editar `casesPt`, edite `casesEn` junto, ou o deck em inglês volta a ficar pela
metade. O `<html lang>` acompanha a escolha do visitante.

## Conteúdo

Textos, capacidades, cases e módulos ficam centralizados em `src/app/growth/data.ts`.

## Analytics

**Configuração completa em [ANALYTICS-GTM.md](ANALYTICS-GTM.md)** — container, variável na
Vercel, tag e gatilho no GTM, dimensões no GA4.

A experiência envia eventos para `window.dataLayer`. **Eles só chegam ao GTM depois do
aceite no banner de cookies** — antes disso o container nem carrega. E o GTM só carrega se
`NEXT_PUBLIC_GTM_ID` existir no build.

Todo evento carrega a etiqueta `prospect` quando o link foi enviado com `?p=`.

- `presentation_started` — uma vez por sessão, não a cada troca de idioma
- `section_viewed`
- `method_viewed`
- `case_viewed`
- `cta_clicked`
- `whatsapp_clicked`
- `presentation_completed`

## Preview do link

`src/app/growth/opengraph-image.tsx` gera a imagem 1200×630 do preview em runtime de edge.
Roda em `edge` porque o build node do `@vercel/og` quebra no Windows (`fileURLToPath`).

## Pendências conhecidas

- **CSS órfão**: a roda atual substituiu um layout de órbita/campo, e o CSS antigo ficou
  (`.leverNote`, `.capabilityField`, `.capCore`, `.capabilityNetwork`, `.exploreControl`,
  `.fieldHint`, `.relationships` — 21 regras). Está minificado com regras vivas na mesma
  linha; remover pede validação visual.
- **Banner de cookies** cobre o rodapé do hero em telas pequenas (`fixed bottom-4`).
- **Imagens pesadas**: `eduardo-profile-v2.png` tem 2,1 MB e `next.config.js` está com
  `images.unoptimized: true`.
- **Autorização dos cases**: a LP publica números de cliente nomeado (Dra. Sara, Kontes) e a
  página é indexável. Isso não passa pelo `leadConsent` de `src/config/portfolio.ts`.
