# Briefing — sessão no repo do site depois da auditoria da `/growth`

> Escrito em 27/08/2026, no fim da sessão que auditou e ajustou a `/growth`.
> A parte entre as linhas é para colar como **primeira mensagem** numa sessão de IA
> aberta dentro de `C:\Users\Lenovo\Desktop\EG\eg`.
> Se muito tempo passou, confira `git log` antes — o estado descrito aqui pode ter mudado.

---

## Prompt para colar

```
Você vai trabalhar no site institucional da EverGreen — Next.js 14 (App Router) +
Tailwind + WordPress headless, repo EGMKT/eg, hospedado na Vercel.

LEIA PRIMEIRO, NESTA ORDEM:
1. docs/BRIEFING-POS-AUDITORIA.md (este arquivo) — o estado de agora
2. docs/growth-experience.md — como a /growth funciona e por quê
3. docs/REDESIGN-HANDOFF.md — o histórico longo do redesign
4. docs/BRIEFING-CTO.md, seção "Regras duras" — os padrões visuais que foram
   rejeitados e não podem voltar

Há um índice CodeGraph e um graphify-out/ neste repo. Use `codegraph explore
"<pergunta>"` ou `graphify query "<pergunta>"` antes de sair lendo arquivo por
arquivo — respondem em uma chamada o que levaria dezenas de greps.

ONDE O TRABALHO PAROU

Existe uma branch local `claude/growth-auditoria-ajustes`, com dois commits e
SEM PUSH, à frente de `main`. Ela nasceu de uma auditoria completa da /growth
(22 achados). O que ela já resolveu:

- CTA principal ia para /contato porque NEXT_PUBLIC_EG_WHATSAPP_URL nunca foi
  setada na Vercel; agora tem fallback wa.me real (5511989966989)
- link sem preview: opengraph-image.tsx gera a imagem 1200x630
- os 7 eventos de analytics não chegavam a lugar nenhum (não havia GTM);
  agora há GoogleTagManager gated em NEXT_PUBLIC_GTM_ID, carregando só após
  o aceite de cookies
- banner de cookies linkava /politica-de-privacidade, que dá 404
- a LP rodava uma metodologia própria; agora está ancorada no Sistema Raiz
- deck em inglês estava pela metade; PT e EN agora têm as mesmas 20 seções
- vários bugs de i18n, código morto e o H1 que renderizava "Consulting.Growth."

O QUE FALTA, EM ORDEM

1. Fazer o build e revisar a /growth no navegador em PT e EN, desktop e mobile.
   Nada disso foi validado visualmente — só por tsc e build.
2. Setar NEXT_PUBLIC_GTM_ID na Vercel. Sem isso o analytics continua sem chegar.
3. CSS órfão: .leverNote, .capabilityField, .capCore, .capabilityNetwork,
   .exploreControl, .fieldHint, .relationships — 21 regras de uma iteração que
   foi substituída pela roda atual. Está minificado com regras VIVAS na mesma
   linha (a linha 82 tem .exploreControl morto e .langSwitch vivo juntos), então
   remover pede olho e validação visual, não regex.
4. Banner de cookies colide com o rodapé do hero em telas pequenas.
5. eduardo-profile-v2.png tem 2,1 MB e next.config.js está com
   images.unoptimized: true. Reduzir na origem.
6. Não existe ESLint configurado — `next lint` abre o wizard e `next build`
   pula o lint. Nada barra <img> cru, dep de hook errada ou variável morta.

REGRAS

- Estilização e identidade visual são do CTO (Gustavo). Conteúdo, estrutura e
  verdade factual são a outra lane. Se for mexer em copy de método, confira
  antes com o Documento-Mestre — a /growth acabou de ser alinhada a ele.
- Não reintroduza os padrões rejeitados listados em docs/BRIEFING-CTO.md.
- A marca é fixa: #09231B musgo, #FFF4C7 baunilha, #3AC97B menta, Helvetica Neue.
  Use os tokens do Tailwind (musgo, musgo-deep, baunilha, menta), não hex solto.
- Não faça push sem pedir. A branch está local de propósito.
- Sem Co-Authored-By nos commits.

ARMADILHA CONHECIDA: .env é gitignored e untracked; trocar de branch no meio da
sessão faz o arquivo sumir. Há uma cópia em .env.example com as chaves (sem
valores). Confira que .env existe antes de rodar build.
```

---

## Contexto que não cabe no prompt

### Por que o Sistema Raiz venceu

A LP e o site pareciam ter duas metodologias. Colocando lado a lado, era a mesma
com dois conjuntos de rótulos:

| Sistema Raiz (site) | Ação | Módulo da LP |
|---|---|---|
| Raiz | Diagnosticar | 01 Diagnóstico |
| Tronco | Priorizar | 02 Arquitetura |
| Ramos | Estruturar | 03 Implementação |
| Copa | Evoluir | 04 Operação · 05 Evolução |

O site já dizia *"A Copa não termina: é melhoria contínua"*; a LP dizia *"O sistema
não termina: ele ganha novas capacidades"*. E a escada bate: Raio-X é o módulo
Diagnóstico, Sprint é Arquitetura + Implementação, Retainer é literalmente
descrito em `/servicos` como *"a fase Copa, que não termina"*.

O Sistema Raiz venceu porque já estava em 45 rotas contra uma, porque os 3 pilares
são o schema real do Bioma (`raio_x_scores` — se as 7 alavancas virassem padrão,
o Raio-X não teria onde pontuar e o benchmark público quebraria), e porque
"Diagnóstico → Arquitetura → Implementação" é o que toda consultoria diz enquanto
Raiz/Tronco/Ramos/Copa é proprietário.

### Decisões tomadas pelo Eduardo nesta sessão

- **A `/growth` continua pública e indexada.** A recomendação da auditoria era
  `noindex` + fora do sitemap, por causa dos números de cliente nomeado. Ele optou
  por manter. Por isso a metadata da rota foi tratada como SEO de verdade.
- **CTA usa 5511989966989** (o número que estava em `/kommo_partners`), não o
  5511959780701 de `/contato`.

### O que NÃO foi mexido, de propósito

- **"EverGreen MKT"** aparece em 29 lugares, 17 arquivos, incluindo as páginas
  legais. A decisão registrada é largar o "MKT" (razão social virando EverGreen
  Consultoria e Tecnologia), mas isso ainda não foi formalizado no contrato
  societário. Trocar só na `/growth` criaria inconsistência nova; trocar nas
  páginas legais é decisão jurídica. Fica parado até a formalização.
- **Favicon.** O ícone é um quadrado menta com o E em branco, e ele desaparece
  contra temas de navegador esverdeados. O truque de favicon SVG com
  `prefers-color-scheme` **não resolve** — ele só distingue claro de escuro, e um
  tema verde continua sendo light mode. O que resolve é o desenho: inverter para
  musgo, ou dar contorno claro ao menta. É lane do CTO. Bugs menores no mesmo
  ponto: `apple:` aponta para um `.ico` (deveria ser PNG 180×180) e não existe
  `<meta name="theme-color">`.

### Pendência que não é de código

A `/growth` publica funil e custo de aquisição da Dra. Sara Michelon e auditoria
de conta da Kontes, com nome. Esses cases **não passam** pelo mecanismo de
`leadConsent` de `src/config/portfolio.ts`, que existe justamente para isso — são
um segundo caminho, sem trava e sem registro de autorização. Como a página segue
indexada, a autorização por escrito ficou mais urgente, não menos. Mesma pendência
já aberta em `/autoridade` para os números de case de lá.
