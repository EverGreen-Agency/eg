# EverGreen — Redesign do Site: Handoff & Contexto

> Documento vivo. Ponto de continuação para qualquer IA/dev retomar o redesenho do site
> institucional da EverGreen do ponto exato onde paramos. Atualizar ao fim de cada rodada.
>
> **Última atualização:** 2026-07-18 · **Branch de trabalho:** `main` (site) · **HEAD:** `4afcbea`

---

## 0. TL;DR — o que é isso

A EverGreen está saindo de "agência de marketing/growth 360" para **boutique de consultoria
comercial + tecnológica** (método próprio: **Sistema Raiz**). O site institucional
(`evergreenmkt.com.br`) ainda vendia a empresa antiga. Este trabalho faz, em fases:
**Fase 0** (higiene/segurança/SEO — CONCLUÍDA), **Fase 1** (transformação visual — EM ANDAMENTO),
**Fase 2** (rewrite de copy/arquitetura de informação em torno do Sistema Raiz — NÃO INICIADA),
e um **bridge Site↔Bioma** (portal de cliente + benchmark público — ESPECIFICADO, não implementado).

Regra de ouro do projeto: **o site é a fachada pública do Bioma** (a plataforma multitenant que
a EG constrói no outro repo), não um projeto isolado. Decisões de nomenclatura e posicionamento
têm que ficar coerentes nos dois repos.

---

## 1. Os dois repositórios

| Repo | Caminho local | O que é |
|---|---|---|
| **Site** | `C:\Users\Lenovo\Desktop\EG\eg` (`github.com/EGMKT/eg`, privado) | Site institucional. Next.js 14 App Router + Tailwind + WordPress headless. Deploy híbrido na HostGator (Apache serve `out/` estático via `next export` + WordPress lado a lado; ver `.htaccess`). |
| **Plataforma** | `C:\Users\Lenovo\Desktop\EG\evergreen-ai-os\bioma` | "Bioma": plataforma multitenant B2B. API FastAPI (Python) + web (React/Vite) + Postgres. Auth por sessão em cookie (NÃO Supabase). Deploy: web na Vercel (`bioma.evergreenmkt.com.br`), API+worker no Railway (`api.bioma.evergreenmkt.com.br`). |

A sessão de trabalho roda a partir do repo `evergreen-ai-os` de propósito, para reter o contexto
do Bioma/posicionamento; o site é editado no caminho absoluto acima.

---

## 2. Marca (fonte de verdade)

`_opensquad/_memory/knowledge/EverGreen - Manual de Marca.pdf` (15 pág., feito pela agência N7HUB, abr/2025)
e `EverGreen - Icone.png` (ícone oficial).

- **Verde Musgo Profundo** `#09231B` (Pantone 5535C) — fundo principal.
- **Amarelo Baunilha Claro** `#FFF4C7` (Pantone 7499C) — texto/ênfase sobre musgo.
- **Verde Menta Vivo** `#3AC97B` (Pantone 7479C) — acento, o "Green" do logo, bullets, bordas.
- **Tipografia:** Helvetica Neue em tudo. (No código: `font-sans` = Helvetica Neue → Inter fallback.)
- **Fonte técnica adicional (decisão desta sessão, não no manual):** IBM Plex Mono para rótulos de
  instrumento (eyebrows, números, labels). Token `font-mono`.
- **Marca/símbolo:** o **"E" em escada** — 3 degraus (traços do E) conectados por uma coluna
  escalonada à esquerda; o **vazado é o chão dos degraus** + conexões. Versão positiva (E escuro em
  quadrado menta) sobre fundo claro; versão negativa (E em menta, sem quadrado) sobre fundo escuro.
  **O motivo gráfico do site usa a versão negativa** (`src/components/brand/EStaircaseMark.tsx`).
- Tagline fixa: **"Crescimento previsível, escalável e tecnológico."**

⚠️ Bug corrigido nesta sessão: o Tailwind tinha o musgo como `#092B1B` (dígitos trocados). Correto: `#09231B`.

### Direção visual (referências que o Eduardo curte)
21hrs.space (painel de instrumento: cantoneiras, rótulos mono, moldura técnica), Huly (quase-preto +
1 par de acento + feixe de luz único), n8n (símbolo gráfico vívido assimétrico), Longbow (tipografia
gigante sangrando + tagline em voz emotiva). Sentry ficou como referência do que **não** fazer no
tom (humor autodepreciativo é errado para a persona "Ricardo"). Screenshots + HTML fonte em
`../evergreen-ai-os/sites-ref-eg/`. **Essência destilada:** musgo já é o "quase-preto com tinte" que
todos usam; ganhar escala tipográfica + um dispositivo gráfico próprio (o E-escada como o "feixe de luz").

---

## 3. Design system implementado (Fase 1)

Tokens e utilitários já no código — **usar sempre estes, não hex solto:**

- **Cores Tailwind:** `bg-musgo` `#09231B`, `bg-musgo-deep` `#05170F`, `text-baunilha` `#FFF4C7`,
  `text-menta`/`bg-menta` `#3AC97B`. (Ver `tailwind.config.js`.)
- **Fontes:** `font-sans` (Helvetica Neue), `font-mono` (IBM Plex Mono). Registradas em `src/app/layout.tsx`.
- **Utilitários CSS** (`src/app/globals.css`):
  - `.mono-label` — rótulo de instrumento: mono, UPPERCASE, `tracking-[0.22em]`, `text-xs`.
  - `.hairline` — borda fina `border-menta/15` (divisórias da marca).
  - `.grain` — textura de filme sutil (aplicar no `<main>` de cada página).
  - `.animate-marquee` — marquee infinito (respeita `prefers-reduced-motion`).
- **Motion:** framer-motion. Padrões usados: headline entrando linha-a-linha com máscara
  (`overflow-hidden` + `y:110%→0%`), reveal por scroll (`whileInView`), `useReducedMotion` sempre.
- **Marca animada:** `EStaircaseMark` — **reescrita pelo CTO em 18/07** (commits `d36571b`, `5615819`,
  `5f21de4`) e é hoje o ativo visual mais original do site: contorno neon com *stroke-drawing*
  sequenciado (3 barras → espinha), filtros de glow SVG, stage em 3D com rotação idle e reflexo.
  Geometria correta do ícone oficial. **Manter e construir a partir dela.**

### ⚠️ Vocabulário visual — NÃO replicar como estava

**Esta seção era um guia de "repita este padrão em toda página". Isso foi rejeitado — e com razão.**

Em 18/07 o CTO apontou que o site ficou com cara de "feito por IA". A crítica é procedente e
quantificável (auditoria completa: `https://claude.ai/code/artifact/175db309-e79b-4a0a-b040-f4ec0af9a0bc`):

| Padrão | Ocorrências | Problema |
|---|---|---|
| `.mono-label` (eyebrow mono CAIXA ALTA) | 48× | É o tell nº 1 de design gerado por IA |
| Numeração `01 02 03` | 7 blocos | Usada em conteúdo que **não é sequência** (decoração fingindo informação) |
| Grid de cards com fio 1px (`gap-px`) | 8× | Mesmo dispositivo em 6 páginas |
| Brilho radial atrás de CTA | 11× | Mesmo truque repetido |
| Par de botões pílula | 16× | Idêntico em todas as páginas |
| Cantoneiras de instrumento | — | Copiadas do 21hrs.space; não derivam da marca EG |

**A raiz do problema não é nenhum elemento isolado — é um só template carimbado em 7 páginas.**
Toda página tem o mesmo ritmo. Trocar token ou cor não resolve; **quebrar a repetição resolve**.
Design de verdade diferencia o ritmo conforme o trabalho que cada página faz.

**Divisão de trabalho acordada (18/07):** estilização e identidade são do **CTO**; copy, estrutura e
alinhamento factual são do assistente. Ao retomar: **não** reintroduzir os padrões da tabela acima
sem falar com o CTO.

*(Observação: parte da numeração `01–04` deixou de ser enfeite quando a home passou a listar as 4
fases reais do Sistema Raiz — ali é sequência de verdade. O problema é usar numeração onde não há ordem.)*

---

## 4. Estado por página

| Rota | Estilo novo? | Nota |
|---|---|---|
| `/` (home) | ✅ Refeita | `HomeClient.tsx` — hero E-escada, marquee, cards numerados, Kommo, CTA. |
| `/portfolio` | ✅ Refeita | `PortfolioClient.tsx` + `src/config/portfolio.ts`. |
| `/servicos` | ✅ Estrutura + copy refeitas | **Reescrita na escada de ofertas real** (Raio-X → Sprint → Retainer, com garantias). Saíram as submarcas descartadas. |
| `/niveis-de-cliente` | ✅ Conteúdo refeito | Funil de 5 níveis aposentado; entraram os 4 oficiais (Semente/Muda/Árvore/Floresta). Colisão "Raiz" resolvida. |
| `/sobre` `/contato` `/equipe` | ✅ Refeitas | Via `PageHeader`. `/sobre` teve missão/visão realinhadas e a linha do tempo **removida** (ver §7). |
| `/benchmark` | ✅ Refeita + ligada ao Bioma | Split client/server; consome `/public/benchmark`, estado "Em Breve" data-driven. Copy corrigida (afirmação falsa). |
| `/blog` `/autoridade` `/kommo_partners` | ❌ Antigos (estilo **e** conteúdo) | `/autoridade` é pesada (511 linhas, WP) e contém números de case **não verificados**. Ver §7. |
| Navbar/Footer | ✅ | Navbar (CTA pílula + item Portfólio) e Footer (tokens de marca + Portfólio) atualizados. |

**Split client/server:** toda página com `'use client'` foi dividida em `page.tsx` (servidor, exporta
`metadata` com title/description únicos) + `XxxClient.tsx` (o componente client original). Manter esse
padrão ao criar páginas novas (necessário para SEO — Fase 0).

---

## 5. Fase 0 — CONCLUÍDA (higiene, mergeada na `main`)

- **Rotas cortadas → `_legacy/`** (fora do roteamento, histórico preservado, recuperável): `eg-os`
  (+8 subrotas), `eg-tech`, `eg-lab`, `holding`, `investidores`, `agro-ai-guardian`, `caderno-memorias`,
  `eg-finance/landing`, e as 6 `ferramentas` genéricas (calculadora-roi, cold-email-builder, desafio-ia,
  maturidade-digital, scanner-funil, templates-notion). Motivo: narrativa de submarca/"império" e
  lead-magnet de agência 360, incompatíveis com o novo posicionamento. Site não gerava lead por elas.
- **Segurança:** `wp-config.php` e `.env` destrackeados (continham senha de banco, salts e API key
  Resend reais). Criado `wp-config.sample.php`. **PENDENTE (humano):** rotacionar a senha do banco no
  cPanel + colar os 8 salts novos (foram entregues ao Eduardo no chat) no `wp-config.php` do servidor.
- **Bug de URL do WordPress corrigido:** `constants.ts` e `services/wordpress.ts` divergiam; a env var
  `NEXT_PUBLIC_WORDPRESS_API_URL` estava morta e apontando errado. Agora o blog/autoridade puxam posts
  reais. ⚠️ **Atenção:** se o ambiente de build de produção (HostGator) tiver essa env var setada errada,
  corrigir lá também (`https://cms.evergreenmkt.com.br/wp-json/wp/v2`).
- **SEO:** title/description únicos por página, redirect 301 apex→www no `.htaccess`, `metadataBase` = www.
- ⚠️ **Gotcha de `.env`:** o `.env` é gitignored/untracked; `git checkout` entre branches **apaga** o
  arquivo local. Recriar (3 linhas) se sumir antes de `npm run dev`/`build`.

---

## 6. Fase 1 — Transformação visual — AGORA É DO CTO

**Feito:** fundação (tokens, fontes, grain, marquee), todas as páginas principais repaginadas,
Navbar + Footer, poc-hub (ver §8). A marca (`EStaircaseMark`) foi reescrita pelo CTO e é o melhor
ativo visual do site.

⚠️ **Mudança de responsabilidade (18/07):** a crítica do CTO (§3) foi aceita. **Estilização e
identidade visual passaram a ser dele.** O assistente não deve mais propor/aplicar tratamento visual
sem alinhamento — a contribuição daqui pra frente é copy, estrutura, dado e verdade factual.

⚠️ **Verificação visual:** até 18/07 nenhuma sessão do assistente conseguiu tirar screenshot do
localhost (Playwright registrado no meio da sessão, precisa de restart). Tudo foi validado por
`tsc --noEmit` + `npm run build` + HTTP 200 — **nunca por inspeção de pixel**. Se for validar visual,
usar Playwright numa sessão nova.

**Dev server:** `cd C:\Users\Lenovo\Desktop\EG\eg && npm run dev` → normalmente `http://localhost:3000`
(caiu em `:3001` nesta sessão porque a 3000 estava ocupada). Hot reload ativo.

---

## 7. Fase 2 — Copy & arquitetura de informação — GRANDE PARTE FEITA (18/07)

**Feito** (commits `daf611d`, `85cd536`, `55fc9f7`):
- **Sistema Raiz está no site.** Home: hero nomeia o método; os 4 cards viram Raiz/Tronco/Ramos/Copa
  (a numeração 01–04 passou a ser sequência real, não enfeite).
- **`/servicos` reestruturado na escada de ofertas** (Raio-X → Sprint → Retainer), cada degrau com sua
  garantia de execução. Saíram as submarcas descartadas (Máquina de Vendas / Growth Engine / EG.Tech).
  Nova seção deixa explícito que ferramenta (tráfego, CRM, automação) é **meio de entrega**, não cardápio —
  e que a frente tecnológica ainda não tem régua fechada como o Raio-X comercial.
- **`/niveis-de-cliente`**: funil de 5 níveis aposentado (resolvia a colisão "Raiz" e prometia Discord,
  mastermind, equity, acesso vitalício). Entraram os 4 oficiais — Semente/Muda/Árvore/Floresta — sem
  prometer benefício não-operante.
- **Riscos de copy eliminados**: afirmação falsa no Benchmark ("dezenas de operações" com tabela vazia)
  e promessas de faturamento na home e nos valores.
- **SEO/GEO**: title/description agora nomeiam Sistema Raiz, Raio-X Comercial e os 3 pilares.
- **28 componentes órfãos** movidos para `_legacy`; `tsconfig` passou a excluir `_legacy`/`poc-hub`/`out`.

**Pendente nesta frente:**
- `/autoridade` (511 linhas, WP) e `/blog` — conteúdo e estilo antigos.
- Verificar se os números dos cases em `/autoridade` (ex.: "+350% em leads", "ROI positivo na 2ª campanha")
  estão verificados e autorizados pelos clientes citados. **Não alterei** — é dado factual de terceiro.
- Decidir o verbo do CTA: o site convida para "diagnóstico" em toda página, mas o Raio-X é a Oferta 1 **paga**.
  Hoje os CTAs dizem "Falar com a EverGreen" / "Quero meu Raio-X" — falta a decisão de exibir preço ou não.

### Fase 2 — escopo original (referência)

Reescrever home/`/servicos`/`/niveis-de-cliente` em torno de **Sistema Raiz** (Raiz→Tronco→Ramos→Copa),
**Raio-X Comercial** (3 pilares: Oferta/Demanda/Conversão) e a **escada de ofertas** paga (Diagnóstico →
Sprint → Retainer → Growth Partnership). Fonte: `../evergreen-ai-os/_opensquad/_memory/knowledge/Documento-Mestre_EG.md`.

**Decisões travadas relevantes:**
- **Nicho:** core do site **setor-agnóstico** (não citar "solar"). Nichos viram **LPs descartáveis**
  em subdomínio (padrão `*.poc`/`eg-publish`), nunca a arquitetura permanente. (Solar é ICP teste, não estrutural.)
- **Colisão "Raiz":** o eixo de cultura (Broto/Raiz/Tronco/Guardião) é **interno**, nunca aparece no
  site. Site usa só **Semente/Muda/Árvore/Floresta** como nível de cliente. "Raiz" fica reservado ao Sistema Raiz.
- **Raio-X:** é a **Oferta 1 paga**, não brinde. Eduardo decidiu: **só pago**, sem versão grátis. Por isso
  "Recursos Gratuitos" ficou **só com Newsletter**.
- **Razão social** mudando para **"EVERGREEN CONSULTORIA E TECNOLOGIA LTDA"** (fantasia idem) — larga o
  "MKT". Domínio `evergreenmkt.com.br` mantido por ora. Redesign e mudança de razão social são independentes.

---

## 8. poc.evergreenmkt.com.br — PRONTO para deploy manual

**Problema:** o wildcard DNS `*.poc.evergreenmkt.com.br` cobre `algo.poc` (rian.poc etc.) mas **não** o
`poc` pelado — em DNS `*` casa exatamente um nível. Por isso `poc.evergreenmkt.com.br` fica vazio ("feio").

**Solução (no repo, pasta `poc-hub/`):** projeto mínimo que redireciona qualquer acesso ao `poc` base →
`https://www.evergreenmkt.com.br/portfolio`. Redirect 302 no `vercel.json` + fallback `index.html`
(meta-refresh, `noindex`). Os `*.poc` individuais **não** passam por aqui.

**Passos manuais (Eduardo vai fazer):**
1. Vercel: deploy da pasta `poc-hub/` (`vercel deploy --prod`), depois Settings→Domains→add `poc.evergreenmkt.com.br`.
2. HostGator cPanel → Zone Editor: adicionar `CNAME` `poc` → `cname.vercel-dns.com` (registro dedicado,
   separado do wildcard). Detalhes no `poc-hub/README.md`.

**Visão de longo prazo do poc (decisão do Eduardo):** transformar em local de inspiração/portfólio —
projetos autorais/hackathons, PoCs de leads perdidos e sites de estudo de caso. Isso já começou como a
página `/portfolio` no site principal (indexável); os PoCs individuais seguem nos subdomínios `*.poc`.

---

## 9. Portfólio (`/portfolio`) — estrutura pronta

`src/config/portfolio.ts` define 3 categorias com regra de exposição embutida no schema:
- `autoral` — hackathon/projeto próprio da EG, sem dono externo. Aberto, pode linkar demo.
- `poc-lead` — protótipo de lead que **não** converteu. Só publica com `leadConsent.leadClosedLostAt`
  preenchido (lead formalmente perdido, não "em negociação") e `courtesyNotice: 'sent' | 'waived'`. Não baixável.
- `estudo-de-caso` — site produzido pela EG para estudo, sem dado de cliente real.

**Entrada #1 já publicada:** PoC do Rian (automação PJe), lead marcado como perdido em 2026-07-17
(parou de responder após múltiplas tentativas → `courtesyNotice: 'waived'`). Aponta para `rian.poc.evergreenmkt.com.br`.

⚠️ Regra permanente: **nunca** publicar PoC de cliente **ativo**; PoC de lead exige status "perdido" + registro.

### ⚠️ Portfólio é 100% hardcoded — dívida técnica conhecida

Não há automação: `portfolioItems` é um array TypeScript editado à mão, com commit a cada projeto novo.
Os campos de `leadConsent` (data de perda do lead, aviso de cortesia) são digitados manualmente.

**Isso é inconsistente com o Benchmark** (§10b), que segue a arquitetura correta: Bioma é a fonte,
agrega/valida no backend, site só lê. O dado que hoje é digitado à mão — "lead perdido em tal data" —
**o CRM do Bioma já tem**.

**Decisão (18/07):** manter hardcoded por ora. Com 1 item, automatizar é over-engineering.
**Quando passar de ~5 itens**, portar para o mesmo padrão do benchmark: endpoint público no Bioma +
toggle de publicar/ocultar, lendo `clients`/leads com status "perdido" e flag de consentimento.

---

## 9b. CMS / Blog — decidido em princípio, NADA implementado

**Estado real:** o WordPress (`cms.evergreenmkt.com.br`, HostGator) continua sendo o backend vivo de
**`/blog` E `/autoridade`** — fetch em runtime via `wordpressService`. **Não existe MDX nem pasta de
conteúdo local no repo.**

**Recomendação revisada (18/07)** — substitui a anterior, que dizia "migrar para MDX no repo":

O Eduardo confirmou que **squads vão escrever, com picos de volume**. MDX no repositório significa um
PR por post — atrito alto para quem não é dev, justamente o perfil que vai produzir. As duas saídas
melhores:

- **(a) Manter o WordPress só como editor** e seguir consumindo via API. Custo zero de migração, mas
  mantém a dependência e o problema de segurança (senha ainda não rotacionada — §5).
- **(b) Headless leve** (Sanity/Storyblok): editor decente para não-dev e tira o WP da jogada.

**Não decidido.** Em qualquer cenário, a rotação da senha do WordPress continua pendente.

---

## 10. Bridge Bioma ↔ Site — ESPECIFICADO, não implementado

Duas features futuras que ligam o site à plataforma. **Ambas são trabalho no repo `bioma` + consumo no site.**

### 10a. Acesso do cliente ao Bioma pelo site + cartão NFC
- O site ganha um ponto de acesso ao Bioma (login), destacado mas discreto — gera branding/movimento.
- A página é **login travado**: sem cadastro público. Quem indexar via SEO só vê a tela de login.
  Conta só é provisionada internamente (modelo invite-only já existente no Bioma).
- O **cartão NFC** do kit físico (kit de onboarding, ver Documento-Mestre §14) leva direto ao **Hub do
  cliente** dentro do Bioma.
- **Como construir:** forkar o fluxo de convite do Bioma (`bioma/apps/api/bioma_api/services/invites.py`
  — token opaco `token_urlsafe(32)` em `/convite/{token}`, hash no banco, uso único, seta sessão). Criar um
  "token de acesso ao Hub" por cliente, mintado por admin EG, codificado no NFC, redirecionando para
  `/clientes/{client_id}` autenticado. Migration + endpoint novos. Bioma roda em `bioma.evergreenmkt.com.br`.

### 10b. Benchmark público — BACKEND IMPLEMENTADO (falta só ligar em produção)

**Site (feito):** `/benchmark` consome `BENCHMARK_ENDPOINT` (`src/config/benchmark.ts`,
default `https://api.bioma.evergreenmkt.com.br/public/benchmark`). Estado "Em Breve" é
data-driven: enquanto o payload não for `ao_vivo` com base suficiente, mostra "Em Breve".

**Bioma (feito, repo `evergreen-ai-os`, commit `eadbe73`):**
- Migration `0012_benchmark.sql`: `organizations.benchmark_segment`/`benchmark_consent`,
  tabela `raio_x_scores` (fonte dos 3 pilares), `benchmark_settings` (toggle singleton + `min_sample`).
- `services/benchmark.py`: agrega mediana/mín/máx por pilar por segmento (avaliação mais recente
  de cada org), só publica segmento com `>= min_sample` orgs consentidas (k-anonimato), Raio-X geral =
  média dos 3 pilares. Em_breve / sem base → payload vazio.
- `routers/benchmark.py`: `GET /public/benchmark` (sem auth) + `GET/PATCH /benchmark/settings` (EG admin,
  vira o toggle). Registrados no `main.py`. Smoke `scripts/smoke_benchmark.py` (e2e, precisa do Postgres).

**Para ATIVAR em produção (passos que faltam):**
1. Rodar a migration `0012` no banco de produção (`python scripts/migrate.py`).
2. **CORS:** adicionar `https://www.evergreenmkt.com.br` (e `https://evergreenmkt.com.br`) ao
   `CORS_ORIGINS` da API do Bioma em produção — o site faz fetch client-side cross-origin; sem isso o
   browser bloqueia. O endpoint é público (sem credenciais), então só precisa da origem liberada.
3. Preencher `raio_x_scores` + marcar `benchmark_consent`/`benchmark_segment` nas orgs (a UI de
   preenchimento do Raio-X é Fase 2; por ora dá pra semear via SQL/admin).
4. Virar o toggle para `ao_vivo` via `PATCH /benchmark/settings` — o site sai do "Em Breve" sozinho.

### 10b-ref. Especificação original (mantida para contexto)
Requisito do Eduardo: o Benchmark do site deve ser **gerado/gerido a partir dos projetos de cliente no
Bioma**, com dado **totalmente anonimizado** ao chegar no site, e um **toggle "ocultar"** nas configs do
Bioma para tirar do "Em Breve" sem hardcodar.

Arquitetura decidida (**Bioma é a fonte; agrega e anonimiza no backend; o site só lê**):
1. **Fonte:** dados já existentes no `client_hub` do Bioma (métricas/finance/leads). Sem entrada dupla.
2. **Consentimento:** flag por cliente `consent_benchmark: bool` no `client_hub`. Só entra quem consentiu
   (Eduardo confirmou que a autorização será completa).
3. **Anonimização:** job de agregação que produz **só agregados por segmento** (mediana/faixa), nunca
   cliente individual. **k-anonimato:** exigir mínimo de N clientes por segmento antes de publicar (senão
   dá pra deduzir quem é). Nada de nome/CNPJ/valor bruto sai do Bioma.
4. **Toggle:** config no Bioma — `benchmark_publico: bool` (por segmento e/ou global) + estado
   `em_breve | ao_vivo`. O site lê via endpoint público read-only (ex.: `/api/benchmark`) que serve só o
   agregado. Virar a chave no Bioma tira o site do "Em Breve" sozinho — zero deploy, zero hardcode.
5. **Site:** `/benchmark` consome o endpoint; enquanto `em_breve`, mostra estado "Em Breve" (sem hardcode
   de conteúdo — vem do toggle).

---

## 11. Ferramentas/infra da sessão

- **Higgsfield MCP** registrado (`--scope user`, `https://mcp.higgsfield.ai/mcp`), login OAuth **feito**.
  Geração de imagem/vídeo/3D disponível (não usado ainda no site; candidato para assets de marca/hero).
- **Playwright MCP** disponível no projeto — usar para screenshot/auto-verificação visual (precisou de
  restart do Claude Code nesta sessão).
- **Verificação:** `npx tsc --noEmit` (typecheck) e `npm run build` (build estático) rodam limpos.
- **Commits:** sem `Co-Authored-By` de IA (regra do Eduardo). Mensagens em pt-BR, `fix()/feat()/chore()`.

---

## 12. Próximos passos — atualizado 18/07

**Concluído:** handoff · poc-hub pronto · linguagem visual replicada · bridge do benchmark (backend) ·
Fase 2 (Sistema Raiz + escada de ofertas no site) · riscos de copy eliminados · 28 órfãos limpos.

### Decisões que dependem do Eduardo (bloqueiam trabalho)
1. **Verbo do CTA.** O site convida para "diagnóstico" em toda página, mas o Raio-X é a Oferta 1
   **paga**. Exibir preço? Qualificar antes? Hoje os CTAs dizem "Falar com a EverGreen" / "Quero meu Raio-X".
2. **Números dos cases em `/autoridade`** ("+350% em leads", "ROI positivo na 2ª campanha", CAC
   R$200→R$92): verificados e autorizados pelos clientes citados? **Não foram alterados** — é dado
   factual de terceiro, não cabe ao assistente reescrever.
3. **Linha do tempo do `/sobre`**: removida (parava em Q1/2025, citava "EG Systems" extinto). Para
   voltar, precisa dos marcos reais.
4. **CMS** (§9b): manter WordPress como editor ou migrar para headless leve.

### Trabalho do CTO
5. Estilização/identidade (§3) — arrancar os tells, quebrar a repetição de ritmo entre páginas.

### Trabalho do assistente (não bloqueado)
6. `/autoridade` e `/blog`: revisar conteúdo e estrutura (estilo fica com o CTO).
7. Portar o Portfólio para o Bioma quando passar de ~5 itens (§9).

### Operacional (humano)
8. **Rotação da senha do WordPress** + salts (§5) — pendente desde 17/07.
9. Deploy do `poc-hub` (Vercel + CNAME dedicado, §8).
10. Ativar o benchmark em produção: migration `0012`, **CORS com as origens do site**, semear scores,
    virar o toggle (§10b).
11. Confirmar a env var do WordPress no build de produção e **como o site é publicado hoje**
    (mecanismo ainda não confirmado — upload manual do `out/` na HostGator?).

**Memória persistente** (contexto entre sessões) em
`C:\Users\Lenovo\.claude\projects\c--Users-Lenovo-Desktop-EG-evergreen-ai-os\memory\eg-site-redesign.md`.
