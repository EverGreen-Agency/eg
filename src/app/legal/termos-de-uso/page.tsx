"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">TERMO DE SERVIÇO – BPO AUTOMATIZADO</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">
          Versão: {currentDate}<br />
          Última atualização: {currentDate}
        </p>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
          <p>
            Estes Termos de Serviço regulam a relação jurídica entre o cliente ("Usuário" ou "Contratante") e a EverGreen Marketing Ltda., CNPJ 51.684.292/0001-60, doravante "Contratada", para a prestação de serviços automatizados de apoio à gestão empresarial, nos seguintes termos:
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Objeto</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p className="mb-4">
              1.1. A Contratada presta serviços de Business Process Outsourcing (BPO) automatizados, de natureza operacional, com foco em:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Controle de fluxo de caixa;</li>
              <li className="mb-2">Geração automatizada de DRE;</li>
              <li className="mb-2">Atendimento automatizado via IA;</li>
              <li className="mb-2">Criação de dashboards, relatórios e alertas;</li>
              <li>Outros serviços listados no momento da contratação.</li>
            </ul>
            <p className="mb-4">
              1.2. A natureza do serviço é remota, automatizada e baseada em dados fornecidos pelo cliente, sem caráter fiscal ou contábil oficial.
            </p>
            <p>
              1.3. O serviço será prestado inicialmente por meio de canais como WhatsApp, e-mail, formulário eletrônico e videochamada. Quando disponível, poderá ser migrado para uma plataforma digital com login e acesso exclusivo, mediante aviso prévio ao cliente e aceite dos novos termos de uso.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Obrigações do Cliente</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Enviar os dados solicitados, nos prazos estabelecidos;</li>
              <li className="mb-2">Informar corretamente as receitas, despesas, encargos, valores e prazos;</li>
              <li className="mb-2">Respeitar os limites de uso dos sistemas e canais contratados;</li>
              <li>Não exigir entregas ou interpretações que extrapolem o escopo contratado.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Responsabilidades da Contratada</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Tratar os dados recebidos de forma segura e sigilosa;</li>
              <li className="mb-2">Prestar os serviços de acordo com a periodicidade e o escopo contratados;</li>
              <li>Informar o cliente sobre mudanças relevantes nos serviços ou meios de acesso.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitações</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Os relatórios gerados não têm caráter contábil oficial;</li>
              <li className="mb-2">A Contratada não responde por decisões tomadas pelo cliente com base em previsões ou relatórios gerenciais;</li>
              <li>A responsabilidade da Contratada é limitada ao valor pago pelo cliente nos últimos 3 (três) meses.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cancelamento e Reembolso</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">O cliente poderá cancelar o serviço a qualquer momento, com aviso prévio de 7 dias;</li>
              <li className="mb-2">Não há reembolso proporcional em caso de cancelamento após início da execução do ciclo vigente;</li>
              <li>A Contratada se reserva o direito de encerrar o serviço em caso de inadimplência, uso indevido ou má-fé.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Dados e LGPD</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">A Contratada cumpre a Lei Geral de Proteção de Dados (Lei nº 13.709/2018);</li>
              <li className="mb-2">Os dados fornecidos serão usados apenas para a finalidade contratada;</li>
              <li>O cliente poderá solicitar a exclusão de seus dados, respeitados os prazos legais.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Foro</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p>
              As partes elegem o foro da comarca de São Paulo/SP para dirimir eventuais controvérsias.
            </p>
          </div>
        </section>
      </motion.div>
    </main>
  );
} 