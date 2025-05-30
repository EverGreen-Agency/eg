# Estrutura de Campos ACF para Cases de Sucesso

## Configuração no WordPress (Advanced Custom Fields)

### Grupo de Campos: "Case Study Data"
**Localização:** Posts do tipo "autoridade" com categoria "cases"

### Campos Obrigatórios:

#### 1. **Informações Básicas**
```
client_name (Text)
- Label: Nome do Cliente
- Required: Yes

industry (Text)  
- Label: Setor/Indústria
- Required: Yes

category (Select)
- Label: Categoria
- Choices: B2B, B2C, E-commerce
- Required: Yes

project_duration (Text)
- Label: Duração do Projeto
- Placeholder: "6 meses", "1 ano"
- Required: Yes

roi (Text)
- Label: ROI
- Placeholder: "+300%", "R$ 2.5M"
- Required: No
```

#### 2. **Conteúdo Principal**
```
challenge (Textarea)
- Label: Desafio
- Required: Yes

solution (Textarea)  
- Label: Solução
- Required: Yes

implementation (Textarea)
- Label: Implementação (JSON Array)
- Instructions: Lista de itens separados por linha
- Required: No
```

#### 3. **Métricas (JSON)**
```
metrics (Textarea)
- Label: Métricas
- Instructions: JSON format
- Required: Yes

Exemplo:
{
  "leads_mensais": {
    "before": "60",
    "after": "270",
    "improvement": "+350%"
  },
  "cac": {
    "before": "R$ 200",
    "after": "R$ 92", 
    "improvement": "-54%"
  },
  "tempo_resposta": {
    "before": "18h",
    "after": "2h",
    "improvement": "-89%"
  }
}
```

#### 4. **Resultados (JSON Array)**
```
results (Textarea)
- Label: Resultados
- Instructions: JSON Array format
- Required: Yes

Exemplo:
[
  "+350% em geração de leads qualificados",
  "ROI positivo na 2ª campanha", 
  "Primeira fila de lançamento esgotada em 48h"
]
```

### Campos Opcionais:

#### 5. **Tecnologias**
```
technologies (Textarea)
- Label: Tecnologias Utilizadas
- Instructions: JSON Array format

Exemplo:
["IA Generativa", "CRM", "Automação", "Landing Pages"]
```

#### 6. **Depoimento**
```
testimonial (Textarea)
- Label: Depoimento
- Instructions: JSON format

Exemplo:
{
  "quote": "A Evergreen transformou completamente nossa operação comercial",
  "author": "João Silva",
  "position": "CEO, Casa Fatilli"
}
```

#### 7. **Timeline do Projeto**
```
timeline (Textarea)
- Label: Timeline
- Instructions: JSON Array format

Exemplo:
[
  {
    "phase": "Diagnóstico e Planejamento",
    "duration": "2 semanas",
    "description": "Análise completa dos processos atuais e definição da estratégia"
  },
  {
    "phase": "Implementação do Sistema",
    "duration": "4 semanas", 
    "description": "Desenvolvimento e configuração das automações"
  },
  {
    "phase": "Treinamento e Go-Live",
    "duration": "2 semanas",
    "description": "Capacitação da equipe e lançamento oficial"
  }
]
```

## Como o Frontend Consome os Dados

### 1. **Detecção Automática**
O componente `AutoridadeDetail` automaticamente detecta se um post tem dados estruturados ACF e renderiza o layout apropriado.

### 2. **Layout Estruturado vs Padrão**
- **Com ACF**: Layout rico com métricas, timeline, depoimentos
- **Sem ACF**: Layout padrão de artigo

### 3. **Campos Flexíveis**
Todos os campos opcionais são renderizados condicionalmente - se não existirem, não aparecem no frontend.

## Exemplo de Post Completo

```json
{
  "client_name": "Grupo Casa Fatilli",
  "industry": "Móveis Planejados",
  "category": "B2C", 
  "project_duration": "6 meses",
  "roi": "+450%",
  "challenge": "Time comercial sobrecarregado, resposta lenta e baixa conversão no WhatsApp.",
  "solution": "Desenvolvimento de sistema de SDR automatizado com IA generativa + integração ao CRM.",
  "implementation": [
    "Análise dos processos comerciais atuais",
    "Desenvolvimento de chatbot com IA",
    "Integração com CRM existente",
    "Treinamento da equipe comercial"
  ],
  "metrics": {
    "agendamentos_semanais": {
      "before": "10",
      "after": "55", 
      "improvement": "+450%"
    },
    "tempo_resposta": {
      "before": "18h",
      "after": "2h",
      "improvement": "-89%"
    },
    "taxa_qualificacao": {
      "before": "25%",
      "after": "60%",
      "improvement": "+140%"
    }
  },
  "results": [
    "Redução de 70% no tempo de resposta",
    "Aumento de 5x na taxa de agendamento", 
    "Padronização do atendimento comercial com IA"
  ],
  "technologies": ["IA Generativa", "CRM", "WhatsApp API", "Automação"],
  "testimonial": {
    "quote": "A Evergreen não só entregou resultados, mas transformou nossa cultura comercial",
    "author": "Carlos Fatilli",
    "position": "Diretor Comercial"
  },
  "timeline": [
    {
      "phase": "Diagnóstico",
      "duration": "2 semanas",
      "description": "Mapeamento completo dos processos e gargalos"
    },
    {
      "phase": "Desenvolvimento",
      "duration": "6 semanas", 
      "description": "Criação do sistema de automação e IA"
    },
    {
      "phase": "Implementação",
      "duration": "4 semanas",
      "description": "Deploy, testes e ajustes finos"
    },
    {
      "phase": "Treinamento",
      "duration": "2 semanas",
      "description": "Capacitação da equipe e acompanhamento"
    }
  ]
}
```

## Benefícios desta Estrutura

1. **Flexibilidade**: Campos opcionais permitem cases simples ou complexos
2. **Consistência**: Layout padronizado para todos os cases
3. **SEO**: Dados estruturados melhoram indexação
4. **Manutenibilidade**: Fácil de atualizar e expandir
5. **Performance**: Renderização condicional otimizada 