/**
 * Perguntas da pagina do Kommo.
 *
 * Fica FORA do KommoClient.tsx de proposito: aquele arquivo e 'use client', e
 * dado exportado de um modulo cliente vira referencia quando o servidor tenta
 * consumir — o page.tsx precisa deste array para montar o schema de FAQPage.
 *
 * As perguntas marcadas no schema tem que ser as mesmas que aparecem na tela.
 * Marcar FAQ que o visitante nao ve e violacao de diretriz do Google.
 */
export type KommoFaq = { pergunta: string; resposta: string }

export const kommoFaq: KommoFaq[] = [
  {
    pergunta: 'Contratar um parceiro Kommo encarece a assinatura?',
    resposta:
      'Não. A assinatura custa o mesmo. Parceiro não é revenda com desconto nem com acréscimo — o que muda é quem desenha o funil, quem define os critérios de qualificação e quem assume a adoção nas primeiras semanas.',
  },
  {
    pergunta: 'Quando vale assinar o Kommo sozinho?',
    resposta:
      'Quando a empresa responde três perguntas com clareza: quais são as etapas reais do seu processo comercial, o que precisa ser verdade para um lead avançar de uma para a próxima, e quem é o dono de cada etapa. Se responde as três, assine e configure — pagar por implementação nesse cenário é desperdício.',
  },
  {
    pergunta: 'O que um parceiro faz que a ferramenta não faz?',
    resposta:
      'Três coisas, e nenhuma é configurar o sistema: desenha o funil a partir da venda real (olhando negócios ganhos e perdidos, não perguntando como deveria ser), define o critério verificável de passagem entre etapas, e assume a adoção — implantação termina quando o time usa sem lembrete, não quando o sistema está configurado.',
  },
  {
    pergunta: 'Qual o erro mais comum na implantação de CRM?',
    resposta:
      'Contratar CRM como primeiro movimento de estruturação. A ordem que funciona é medir, priorizar, estruturar, evoluir — e CRM pertence à terceira etapa. Quando entra primeiro, a empresa configura etapas inventadas, cria campos que ninguém preenche, e conclui seis meses depois que "CRM não funciona para o nosso caso". Funcionava; chegou antes da hora.',
  },
  {
    pergunta: 'Como saber se o CRM é o meu próximo passo?',
    resposta:
      'Um teste de uma frase: se você pedisse hoje para dois vendedores diferentes classificarem os mesmos dez leads, eles chegariam ao mesmo resultado? Se sim, você tem processo — assine e configure. Se não, o CRM não é o que está faltando, e contratar quem só configura entrega o mesmo problema com uma interface melhor.',
  },
]
