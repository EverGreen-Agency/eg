# Diretriz de Inteligência SEO & GEO da EverGreen

## 1. Stack de Ferramentas (Dupla Estratégica)
- **Mangools (MCP):**
  - **Uso:** Pesquisa de palavras-chave (KWFinder), análise de SERP (SERPChecker), autoridade de domínio e métricas (SiteProfiler) e visibilidade da marca em IAs (AI Search Watcher).
  - **Melhor para:** Análises estratégicas qualitativas, benchmarking de termos de cauda longa e monitoramento contínuo em LLMs (ChatGPT, Gemini, Claude, Google AI Overviews).
- **DataForSEO (MCP):**
  - **Uso:** Auditorias técnicas profundas de páginas (On-Page API), volume de buscas em massa, dados brutos de SERP e backlinks via modelo Pay-As-You-Go.
  - **Melhor para:** Automações programáticas via agentes de IA, diagnósticos técnicos de clientes de qualquer porte sem necessidade de comprovação de DNS e com custo irrisório por requisição.

## 2. Conectores MCP Ativos
- `mangools`: Endpoint `https://mcp.mangools.com/mcp` via proxy local `C:\Users\Lenovo\.gemini\antigravity-ide\mcp\mangools\mangools_proxy.js`.
- `dataforseo`: Endpoint `https://mcp.dataforseo.com/v3/mcp` via proxy local `C:\Users\Lenovo\.gemini\antigravity-ide\mcp\dataforseo\dataforseo_proxy.js`.
- Ambos configurados globalmente no Antigravity (`mcp_config.json`), Claude Code (`.claude.json`) e Codex (`config.toml`).

## 3. Padrão de Rastreamento ABM (Account-Based Marketing)
- Decks comerciais interativos (`/growth`, `/tech`) capturam o parâmetro de URL `?p=nome_do_cliente`.
- O código (`src/components/deck/deck.ts`) injeta a propriedade `prospect` em todos os eventos do `window.dataLayer`:
  - `presentation_started`: Prospect abriu a apresentação.
  - `section_viewed`: Prospect navegou entre seções (com parâmetro `section`).
  - `method_viewed`: Prospect inspecionou um método específico (com parâmetro `method`).
  - `case_viewed`: Prospect abriu o modal de um case de sucesso (com parâmetro `case`).
  - `presentation_completed`: Prospect chegou à seção final de contato.
  - `whatsapp_clicked`: Prospect clicou no CTA principal de conversa comercial via WhatsApp.
  - `cta_clicked`: Prospect clicou no link institucional do site.
- No Google Tag Manager, as variáveis `dlv - prospect`, `dlv - deck`, `dlv - section`, `dlv - method` e `dlv - case` despacham esses dados como parâmetros de evento do GA4, registrando o histórico de leitura de cada proposta enviada.
