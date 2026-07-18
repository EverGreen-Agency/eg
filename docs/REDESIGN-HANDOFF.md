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
- **Marca animada:** `EStaircaseMark` — o E-escada surge de baixo p/ cima (`clip-path inset(100%→0%)`)
  + float sutil + parallax no scroll. Geometria = polígono de 6 pontos por lado (fácil de recalibrar).

### Vocabulário visual do hero (padrão a repetir nas outras páginas)
Eyebrow `.mono-label` menta com traço → headline gigante `clamp()` → parágrafo curto baunilha/70 →
botões (pílula baunilha sólida + pílula outline menta) → cantoneiras de instrumento → marquee.
Cards = grid de linha fina (`gap-px bg-menta/15`), numerados `01–04`, hover escurece + acende título menta.

---

## 4. Estado por página

| Rota | Estilo novo? | Nota |
|---|---|---|
| `/` (home) | ✅ Refeita | `HomeClient.tsx` — hero E-escada, marquee, cards numerados, Kommo, CTA. |
| `/portfolio` | ⚠️ Estrutura nova, visual antigo | Existe (`PortfolioClient.tsx` + `src/config/portfolio.ts`), mas ainda não recebeu a linguagem visual. |
| `/sobre` `/servicos` `/equipe` `/blog` `/contato` `/autoridade` `/niveis-de-cliente` | ❌ Estilo antigo | Têm `page.tsx` (servidor, com metadata) + `*Client.tsx` (cliente). Só falta reestilizar o Client. |
| `/benchmark` `/kommo_partners` | ❌ Estilo antigo | — |
| Navbar/Footer | ⚠️ Parcial | Navbar já com CTA baunilha/pílula; falta passar tokens/estilo completo. Footer intocado. |

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

## 6. Fase 1 — Transformação visual — EM ANDAMENTO

**Feito:** fundação (tokens, fontes, grain, marquee), home inteira, Navbar parcial, marca E-escada
animada, poc-hub (ver §8). **A fazer:** replicar a linguagem em `/portfolio`, `/sobre`, `/contato`,
`/servicos`, `/equipe`, `/autoridade`, `/niveis-de-cliente`, `/benchmark`; Footer; revisar mobile.

⚠️ **Verificação visual:** nesta sessão não foi possível tirar screenshot do localhost (Playwright e
Higgsfield MCP registrados no meio da sessão — precisam de restart do Claude Code). A home foi validada
por `tsc --noEmit` + HTTP 200, mas **não** por inspeção de pixel. Na próxima sessão, tirar screenshot
via Playwright e auto-corrigir (principalmente a geometria do E-escada e responsividade).

**Dev server:** `cd C:\Users\Lenovo\Desktop\EG\eg && npm run dev` → normalmente `http://localhost:3000`
(caiu em `:3001` nesta sessão porque a 3000 estava ocupada). Hot reload ativo.

---

## 7. Fase 2 — Copy & arquitetura de informação — NÃO INICIADA

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

### 10b. Benchmark público (a implementar em seguida, após a replicação visual)
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

## 12. Próximos passos (ordem acordada com o Eduardo)

1. ✅ Este handoff.
2. ✅ poc-hub pronto para deploy (Eduardo faz Vercel + DNS).
3. ⏭️ **Replicar a linguagem visual** nas páginas restantes (começar por `/portfolio`, `/sobre`, `/contato`).
4. ⏭️ **Implementar o bridge Bioma↔benchmark público** (§10b) — feature no repo `bioma` + consumo no site.
5. (depois) Fase 2 — copy/arquitetura Sistema Raiz.
6. (humano) Rotação da senha do WordPress; confirmar env var de produção; deploy do site em produção
   (mecanismo de deploy do site principal ainda não confirmado — hoje é upload manual do `out/` na HostGator?).

**Memória persistente** (contexto entre sessões) em
`C:\Users\Lenovo\.claude\projects\c--Users-Lenovo-Desktop-EG-evergreen-ai-os\memory\eg-site-redesign.md`.
