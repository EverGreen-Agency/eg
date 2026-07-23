# Briefing para iniciar sessão de IA no site da EG

> Cole o bloco abaixo como primeira mensagem na sessão da sua IA (Copilot, Cursor, Claude Code…),
> com o repositório `EGMKT/eg` aberto na branch `main`.
> Escrito em 23/07/2026. Se muito tempo passou, confira `docs/REDESIGN-HANDOFF.md` antes.

---

## Contexto

Você vai trabalhar no site institucional da **EverGreen** — Next.js 14 (App Router) + Tailwind +
WordPress headless. Repositório `EGMKT/eg`, branch `main`.

**Antes de qualquer coisa, leia `docs/REDESIGN-HANDOFF.md` por inteiro** — principalmente a **seção 3**,
que é a mais importante para o seu trabalho.

**O que aconteceu até aqui:** um assistente de IA executou três frentes no site — higiene técnica e de
segurança, uma transformação visual, e uma reescrita de copy/estrutura para o novo posicionamento da
empresa. A parte de conteúdo está boa. **A direção visual foi rejeitada: ficou com cara de "feito por
IA".** A crítica é procedente e está quantificada na seção 3 do handoff.

**Sua função nesta sessão: identidade visual e estilização.** Copy e estrutura de conteúdo **não** são
seu escopo — elas são validadas contra um documento de posicionamento interno que não está neste
repositório. Se precisar mudar texto, pergunte antes.

## Regras duras (quebrar qualquer uma causa dano real)

1. **Não reintroduza os padrões que foram rejeitados.** São eles, com a contagem que motivou a crítica:
   - `.mono-label` — eyebrow em mono, CAIXA ALTA, `tracking .22em` (48 ocorrências; é o tell nº 1)
   - numeração `01 02 03` em conteúdo que **não é sequência** (decoração fingindo informação)
   - grid de cards separados por fio de 1px (`gap-px bg-menta/15`) — mesmo dispositivo em 6 páginas
   - brilho radial atrás de CTA (11×) · par de botões pílula idêntico (16×)
   - cantoneiras de "instrumento" — foram copiadas do site 21hrs.space, não derivam da marca EG

   **A raiz do problema não é nenhum elemento isolado: é o mesmo template carimbado em 7 páginas.**
   Trocar token ou cor não resolve. Quebrar a repetição de ritmo entre páginas resolve.

2. **A marca é fixa** (manual de marca oficial, agência N7HUB):
   `#09231B` verde musgo · `#FFF4C7` amarelo baunilha · `#3AC97B` verde menta · **Helvetica Neue**.
   Já existem como tokens Tailwind: `musgo`, `musgo-deep`, `baunilha`, `menta`. Use os tokens, não hex solto.

3. **`src/components/brand/EStaircaseMark.tsx` é o melhor ativo visual do site** — o "E" em escada com
   contorno neon, stroke-drawing sequenciado e stage 3D. **Construa a linguagem a partir dele**, não do
   template genérico. (Foi trabalho do CTO, não da IA.)

4. **Nunca prometa faturamento, receita ou ROI na copy.** Regra da empresa: a garantia é de **cadência e
   execução**, nunca de resultado financeiro. Já houve que remover isso do site uma vez.

5. **Nunca publique afirmação que não dá para verificar.** Já apareceu no site um texto dizendo que o
   benchmark "cruza dados reais de dezenas de operações" — a tabela estava vazia. Se não existe, não escreve.

6. **Estrutura de página obrigatória (SEO):** cada rota tem `page.tsx` (componente **servidor**, exporta
   `metadata` com title/description únicos) + `XxxClient.tsx` (o componente client com `'use client'`).
   Não junte os dois — quebra o SEO, que foi corrigido recentemente.

7. **`_legacy/` é armazenamento morto.** Rotas e componentes cortados vivem lá, fora do roteamento e
   fora do typecheck (`tsconfig` já exclui). Não reative nada de lá sem perguntar.

8. **Commits sem `Co-Authored-By` de IA.** Mensagens em português.

## Verifique antes de começar

```bash
npm install
npm run dev          # sobe em :3000 (ou :3001 se ocupada)
npx tsc --noEmit     # precisa passar limpo
npm run build        # precisa passar limpo — 45 páginas estáticas
```

Se o `.env` não existir na raiz, o build quebra. Ele é gitignored; peça ao Eduardo (3 variáveis:
URL da API do WordPress, chave do Resend, ID do Pixel).

**Pergunta em aberto que ninguém respondeu ainda:** *como este site vai para produção?* Existe
`.htaccess` de Apache e build estático em `out/`, sem nenhum CI. Se a publicação for upload manual na
HostGator, **todo o trabalho recente está commitado mas pode não estar publicado** — o site no ar pode
ainda ser o antigo. Confirme isso antes de investir tempo, porque muda a urgência de tudo.

## Não mexa nisto sem falar com o Eduardo

- **Números dos cases em `/autoridade`** ("+350% em leads", "ROI positivo na 2ª campanha", CAC
  R$200→R$92): são dados de clientes reais, não verificados nem autorizados formalmente.
- **`/sobre`**: a linha do tempo foi removida de propósito (parava em Q1/2025 e citava um produto
  extinto). Só volta com os marcos reais.
- **Textos que citam o método** (Sistema Raiz, Raio-X Comercial, os degraus Raio-X → Sprint → Retainer,
  os níveis Semente/Muda/Árvore/Floresta): vêm do documento de posicionamento da empresa. Estilize à
  vontade, mas não reescreva o conteúdo.

## Contexto que NÃO está neste repositório

O documento de posicionamento (**Documento-Mestre**), o manual de marca em PDF e os screenshots de
referência visual vivem em outro repositório da EG. Se uma decisão depender deles, peça ao Eduardo —
**não invente a regra**.
