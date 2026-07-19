# 🧠 Instrução Criativa de Execução: Site EverGreen MKT

> Construir um site digital de próxima geração. Um hub vivo, responsivo, estrategicamente projetado para escalar a marca **EverGreen MKT** como autoridade absoluta no ecossistema de growth, tecnologia, IA e execução de resultados reais.

## 🎯 Objetivo Geral

Criar um site que seja:
- Uma plataforma de **autoridade** e **prova social**
- Um canal de **educação, captura e conversão**
- Uma experiência de marca viva, envolvente, fluida e poderosa
- Um reflexo de **visão exponencial e cultura de resultado**

---

## 🧱 Arquitetura (Sitemap + Naming)

| Página                      | Nome Estratégico        | Função |
|----------------------------|--------------------------|--------|
| /                          | EverGreen Frontline      | Home com CTA principal | ✅
| /sobre                     | EverGreen Culture        | Missão, visão, filosofia | ✅
| /servicos                  | EverGreen Systems        | Apresenta os 3 grandes sistemas | ✅
| /cases                     | EverGreen Impact         | Prova social e resultados reais |
| /blog                      | EverGreen Brain          | Conteúdo educacional | ✅
| /newsletter                | EverGreen Weekly         | Lead capture e nurtura | ✅
| /contato                   | Talk to EG               | Conversão | ✅
| /equipe                    | EverGreen People         | Cultura e talentos | ✅
| /autoridade                | EverGreen Authority      | Certificações e prêmios | ✅
| /investidores              | EverGreen Capital        | Captação e equity deals |
| /holding                   | EverGreen Group          | Visão corporativa |✅
| /niveis-de-clientes        | EverGreen Journey        | Cultura de clientes | ✅
| /legal                     | EverGreen Legal          | Termos, cookies, etc | ✅

---

## 🖼 Design e Web 5.0

### Identidade Visual
- Tipografia moderna (Inter / Satoshi)
- Cores sofisticadas (Verde EG, Preto, Offwhite)
- Microinterações suaves com framer-motion
- Grid responsivo de 12 colunas
- Botões com bordas 2xl e sombras suaves

### Conceito Web 5.0
- Site dinâmico: conteúdo que responde ao comportamento do usuário
- Personalização contextual: bloco “Recomendado para você” baseado em interações
- Componentes auto-atualizáveis (hooks com CMS)
- Utilização de AI no frontend para:
  - Recomendar artigos
  - Preencher formulários automaticamente com base no perfil

---

## 🧠 Componentização Modular (Next.js + Tailwind)

Componentização pensada para escalabilidade, manutenção e reuso em Web 5.0:

### Núcleo de Navegação & Branding
- `<Navbar />` — Navegação principal com branding dinâmico e sticky scroll
- `<PageFooter />` — Rodapé responsivo com links contextuais e call-to-action final

### Hero & Conversão
- `<HeroSection />` — Bloco de entrada com headline dinâmica, animações suaves e botão primário
- `<CTAGroup />` — Grupo de CTAs modulares e reusáveis com destaque para "Diagnóstico", "Ver Casos", "Material Exclusivo"

### Conteúdo Estratégico
- `<QuoteBlock />` — Blocos com frases de impacto e provas sociais
- `<LeadForm />` — Formulário responsivo com validação e integração com Resend/Upstash
- `<TestimonialWall />` — Mosaico de depoimentos em cards interativos (texto + vídeo)

### Produtos & Prova
- `<ServiceGrid />` — Bloco com cards modulares dos 3 Sistemas: Vendas, Growth, Tech
- `<CaseCarousel />` — Slider de cases "antes/depois" com solução aplicada e KPI principal
- `<PostPreview />` — Cards de posts/blog com preview inteligente e tags dinâmicas

Todos os componentes com:
- Estilização via TailwindCSS
- Transições via Framer Motion
- Suporte a dark/light mode
- Props configuráveis para personalização máxima

---

## 🔌 Integrações e Backend

- CMS: Payload, Strapi ou Sanity (headless e escalável)
- Auth e gated content: Clerk ou Firebase
- Lead capture: Resend para emails + Upstash para armazenar dados
- Calendly para agendamentos embutidos
- Google Tag Manager + GA4 para dados

---

## 🚀 Conteúdo Estruturado por Página

### Home (EverGreen Frontline)
- Headline matadora
- Subheadline clara
- CTA triplo (Agendar, Ver Casos, Material)
- Como funcionamos
- Resultados reais (cards interativos)
- Clientes que confiam (logos)
- Oferta de entrada

### Sobre (EverGreen Culture)
- Missão / Visão / Valores
- Fundadores + história
- Cultura de execução
- CTA para modelo de parceria

### Serviços (EverGreen Systems)
3 Sistemas:
1. Máquina de Vendas EverGreen
2. Growth Engine
3. EG.Tech

Cada um com:
- Problema
- Solução
- Transformação
- CTA específico (Sprint / Diagnóstico)

### Blog / Newsletter (EverGreen Brain)
- Tags: Growth, Vendas, IA, Bastidores
- Lead magnet: quiz, guias, calculadora de ROI

### Cases (EverGreen Impact)
- Antes e depois
- Solução aplicada
- Depoimentos em texto/vídeo

### Contato (Talk to EG)
- Calendly embed + WhatsApp link + Email
- CTA: "Quero ser cliente"

---

## 🌱 Nomes de Submarcas (EG.MKT/EG.Growth, EG.Tech, EG.Lab, EG.OS)
- Landing pages distintas com visual e copy alinhada ao ecossistema
- Não criar marcas separadas ainda
- Cada uma é um "território" dentro do império EG

---

## 💡 Ativos Digitais Extras
- Calculadora de ROI
- Teste de maturidade digital
- Desafio 7 dias de IA
- Templates Notion de IA favoritos

---

## 🔚 Conclusão

Criar uma experiência digital viva, modulada e escalável. Um site que seja:
- Um ativo de marketing
- Um centro de autoridade
- Um ecossistema interativo
- Incubadora de Projetos

**Execução começa com: estrutura Next.js + Tailwind + CMS headless.**

