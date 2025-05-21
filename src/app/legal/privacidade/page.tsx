"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS PESSOAIS</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">
          Versão: {currentDate}<br />
          Última atualização: {currentDate}
        </p>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
          <p>
            Esta Política tem por finalidade esclarecer como a Evergreen Marketing Ltda., inscrita no CNPJ sob o nº 51.684.292/0001-60, doravante "Contratada", realiza o tratamento de dados pessoais e sensíveis, nos termos da Lei Geral de Proteção de Dados – LGPD (Lei nº 13.709/2018).
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Controlador e Operador</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p className="mb-4">
              1.1. O Cliente (Contratante) é o Controlador dos dados fornecidos; a Contratada atua como Operadora, realizando o tratamento apenas dentro do escopo dos serviços contratados.
            </p>
            <p>
              1.2. Para os dados internos do site e CRM (como leads, contatos de WhatsApp e e-mail), a Contratada atua como Controladora, respeitando as finalidades aqui descritas.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Tipos de Dados Coletados</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p className="mb-4">
              2.1. No uso dos serviços prestados, poderão ser coletados e tratados os seguintes dados:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Dados cadastrais (nome, CNPJ, e-mail, telefone, endereço);</li>
              <li className="mb-2">Dados operacionais (informações sobre vendas, despesas, fluxo de caixa, DRE);</li>
              <li className="mb-2">Dados financeiros (receitas, custos, folha de pagamento, investimentos);</li>
              <li>Dados sensíveis (quando envolver informações relacionadas à saúde financeira, crédito, etc.).</li>
            </ul>
            <p>
              2.2. A coleta ocorre por meio de formulários, planilhas, integrações com plataformas, e canais digitais (WhatsApp, e-mail, entre outros).
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Finalidade do Tratamento</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p className="mb-4">
              3.1. Os dados serão utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Prestação dos serviços contratados;</li>
              <li className="mb-2">Emissão de relatórios e análises gerenciais;</li>
              <li className="mb-2">Atendimento técnico e suporte;</li>
              <li>Cumprimento de obrigações legais e regulatórias.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Armazenamento e Segurança</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p className="mb-4">
              4.1. Os dados serão armazenados em servidores seguros, com acesso restrito e controlado por autenticação e criptografia.
            </p>
            <p>
              4.2. A Contratada adota medidas técnicas e organizacionais para proteger os dados contra acesso não autorizado, perda, destruição ou vazamento.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Compartilhamento de Dados</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p className="mb-4">
              5.1. A Contratada não compartilha os dados com terceiros, salvo:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Com prestadores de serviços vinculados à operação técnica do sistema, sob cláusula de confidencialidade;</li>
              <li className="mb-2">Por obrigação legal ou ordem judicial;</li>
              <li>Com consentimento expresso do Cliente.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Direitos do Titular</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p className="mb-4">
              6.1. O Cliente tem direito a:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Confirmar a existência de tratamento;</li>
              <li className="mb-2">Acessar, corrigir, atualizar ou solicitar a exclusão de seus dados;</li>
              <li className="mb-2">Solicitar a portabilidade para outro fornecedor;</li>
              <li>Revogar o consentimento.</li>
            </ul>
            <p>
              6.2. As solicitações poderão ser feitas pelo canal oficial: contato@evergreenmkt.com.br.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Retenção de Dados</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p>
              7.1. Os dados serão mantidos pelo tempo necessário à execução dos serviços e cumprimento das obrigações legais e contratuais, sendo posteriormente descartados de forma segura.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Alterações</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p>
              8.1. A Contratada poderá alterar esta política a qualquer tempo, comunicando o Cliente por e-mail ou publicação no site. O uso continuado dos serviços após a comunicação implica concordância com as alterações.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Foro</h2>
          <div className="pl-4 border-l-4 border-emerald-500">
            <p>
              9.1. Fica eleito o foro da Comarca de São Paulo/SP, com renúncia a qualquer outro, para dirimir eventuais controvérsias relacionadas a esta Política.
            </p>
          </div>
        </section>
      </motion.div>
    </main>
  );
} 