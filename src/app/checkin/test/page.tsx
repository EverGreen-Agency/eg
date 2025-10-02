'use client';

import { useState } from 'react';

export default function TestPage() {
  const [testResults, setTestResults] = useState<string[]>([]);

  const addResult = (message: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const testAPI = async () => {
    addResult('Iniciando teste da API...');
    
    try {
      const testData = {
        // Identificação
        data: new Date().toISOString().split('T')[0],
        clientSlug: 'cliente-001-token-abc123',
        honeypot: '',
        
        
        // Operação Loja Física
        fluxo_pessoas: 120,
        atendimentos_realizados: 20,
        vendas_loja: 8,
        receita_loja: 1200.00,
        recompra: 1,
        ruptura_estoque: true,
        ruptura_descricao: 'Produto X em falta, estoque baixo do produto Y',
        maquina_ociosa: true,
        tempo_ocioso: 2.5,
        
        // Qualitativo
        obstaculos: 'Teste de obstáculos',
        observacoes: 'Teste de observações'
      };

      addResult('Enviando dados de teste...');
      
      const response = await fetch('/api/checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      const result = await response.json();
      
      if (result.success) {
        addResult('✅ Teste bem-sucedido! Email enviado.');
      } else {
        addResult(`❌ Erro: ${result.error}`);
      }
    } catch (error) {
      addResult(`❌ Erro de conexão: ${error}`);
    }
  };

  const testInvalidToken = async () => {
    addResult('Testando token inválido...');
    
    try {
      const testData = {
        data: new Date().toISOString().split('T')[0],
        canais: ['Google Ads'],
        leads: 1,
        oportunidades: 0,
        vendas: 0,
        recompra: 0,
        receita: 0,
        investimento: 0,
        atendimentos: 0,
        obstaculos: '',
        observacoes: '',
        clientSlug: 'token-invalido',
        honeypot: ''
      };

      const response = await fetch('/api/checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      const result = await response.json();
      
      if (!result.success) {
        addResult(`✅ Token inválido rejeitado corretamente: ${result.error}`);
      } else {
        addResult('❌ Token inválido foi aceito (problema de segurança!)');
      }
    } catch (error) {
      addResult(`❌ Erro de conexão: ${error}`);
    }
  };

  const testHoneypot = async () => {
    addResult('Testando honeypot...');
    
    try {
      const testData = {
        data: new Date().toISOString().split('T')[0],
        canais: ['Google Ads'],
        leads: 1,
        oportunidades: 0,
        vendas: 0,
        recompra: 0,
        receita: 0,
        investimento: 0,
        atendimentos: 0,
        obstaculos: '',
        observacoes: '',
        clientSlug: 'cliente-001-token-abc123',
        honeypot: 'bot-detected'
      };

      const response = await fetch('/api/checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      const result = await response.json();
      
      if (!result.success) {
        addResult(`✅ Honeypot funcionando: ${result.error}`);
      } else {
        addResult('❌ Honeypot não funcionou (problema de segurança!)');
      }
    } catch (error) {
      addResult(`❌ Erro de conexão: ${error}`);
    }
  };

  const clearResults = () => {
    setTestResults([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            🧪 Teste do Sistema de Check-in
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <button
              onClick={testAPI}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              Teste Normal
            </button>
            
            <button
              onClick={testInvalidToken}
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Teste Token Inválido
            </button>
            
            <button
              onClick={testHoneypot}
              className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors"
            >
              Teste Honeypot
            </button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Resultados dos Testes:</h2>
            <button
              onClick={clearResults}
              className="bg-gray-500 text-white py-1 px-3 rounded text-sm hover:bg-gray-600 transition-colors"
            >
              Limpar
            </button>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 max-h-96 overflow-y-auto">
            {testResults.length === 0 ? (
              <p className="text-gray-500 italic">Nenhum teste executado ainda.</p>
            ) : (
              <div className="space-y-2">
                {testResults.map((result, index) => (
                  <div key={index} className="text-sm font-mono text-gray-700">
                    {result}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Links de Teste:</h3>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Kontes:</strong>{' '}
                <a 
                  href="/checkin?k=kontes-token-2024" 
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /checkin?k=kontes-token-2024
                </a>
              </div>
              <div>
                <strong>Cliente 001:</strong>{' '}
                <a 
                  href="/checkin?k=cliente-001-token-abc123" 
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /checkin?k=cliente-001-token-abc123
                </a>
              </div>
              <div>
                <strong>Cliente 002:</strong>{' '}
                <a 
                  href="/checkin?k=cliente-002-token-def456" 
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /checkin?k=cliente-002-token-def456
                </a>
              </div>
              <div>
                <strong>Cliente 003:</strong>{' '}
                <a 
                  href="/checkin?k=cliente-003-token-ghi789" 
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /checkin?k=cliente-003-token-ghi789
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
