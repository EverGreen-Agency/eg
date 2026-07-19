"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function RefundPage() {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-lg dark:prose-invert mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">POLÍTICA DE CANCELAMENTO E REEMBOLSO</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">
          Versão: {currentDate}<br />
          Última atualização: {currentDate}
        </p>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
          <p>
            Esta Política aplica-se a todos os serviços prestados por EverGreen Marketing Ltda., inscrita no CNPJ sob o nº 51.684.292/0001-60, doravante denominada "Contratada", contratados pelo cliente, pessoa física ou jurídica, doravante denominado "Contratante" ou "Usuário".
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Sobre a Natureza dos Serviços</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p className="mb-4">
              1.1. Os serviços prestados pela Contratada consistem em soluções automatizadas de BPO (Business Process Outsourcing), com entregas periódicas e/ou contínuas, cujo início se dá imediatamente após a confirmação de contratação e envio de dados pelo Cliente.
            </p>
            <p>
              1.2. Em razão da natureza digital e sob demanda dos serviços, uma vez iniciado o ciclo de prestação, considera-se o serviço iniciado e parcialmente executado, mesmo que automatizado.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Cancelamento por Iniciativa do Contratante</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p className="mb-4">
              2.1. O Contratante poderá solicitar o cancelamento do serviço a qualquer momento, mediante aviso prévio de, no mínimo, 7 (sete) dias antes da data de renovação do próximo ciclo.
            </p>
            <p className="mb-4">
              2.2. O cancelamento deverá ser solicitado por escrito (via e-mail, WhatsApp corporativo ou formulário oficial da Contratada), e será considerado efetivado após confirmação de recebimento pela Contratada.
            </p>
            <p>
              2.3. Após o início de um novo ciclo, não haverá reembolso, integral ou parcial, salvo nos casos previstos nesta Política.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Reembolsos</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p className="mb-4">
              3.1. Não será concedido reembolso para serviços cujo ciclo já tenha sido iniciado ou quando já houver execução parcial ou total das atividades contratadas, mesmo que o relatório final ou resultado ainda não tenha sido entregue, exceto nos seguintes casos:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Inexecução total do serviço por falha da Contratada;</li>
              <li className="mb-2">Cobrança indevida ou duplicada, comprovadamente atribuível à Contratada;</li>
              <li>Erro técnico impeditivo não solucionado em até 10 (dez) dias úteis após notificação formal.</li>
            </ul>
            <p>
              3.2. Em casos de reembolso autorizado, o valor será restituído pelo mesmo meio de pagamento utilizado, em até 15 (quinze) dias úteis, descontadas eventuais taxas administrativas ou operacionais.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cancelamento por Iniciativa da Contratada</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p className="mb-4">
              4.1. A Contratada poderá encerrar unilateralmente a prestação do serviço em casos de:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Inadimplemento superior a 15 dias;</li>
              <li className="mb-2">Uso indevido dos serviços, incluindo má-fé, tentativa de fraude ou fornecimento de dados inverídicos;</li>
              <li>Descumprimento contratual pelo Cliente.</li>
            </ul>
            <p>
              4.2. Nesses casos, não será devido reembolso de valores pagos.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Renovação e Cobranças Recorrentes</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p className="mb-4">
              5.1. Os serviços contratados com periodicidade mensal serão renovados automaticamente, salvo solicitação expressa de cancelamento pelo Cliente, dentro do prazo estipulado.
            </p>
            <p>
              5.2. A Contratada enviará lembrete sobre a renovação, mas a ausência de manifestação do Cliente será interpretada como aceitação da renovação.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Foro</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p>
              6.1. Fica eleito o foro da Comarca de São Paulo/SP, com renúncia a qualquer outro, para dirimir eventuais controvérsias.
            </p>
          </div>
        </section>
      </motion.div>
    </main>
  );
} 