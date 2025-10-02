'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface CheckInData {
  // Identificação
  data: string;
  clientSlug: string;
  honeypot?: string;
  
  
  // Operação Loja Física
  fluxo_pessoas: number;
  atendimentos_realizados: number;
  vendas_loja: number;
  receita_loja: number;
  recompra: number;
  ruptura_estoque: boolean;
  ruptura_descricao: string;
  maquina_ociosa: boolean;
  tempo_ocioso: number;
  
  // Qualitativo
  obstaculos: string;
  observacoes: string;
}



function CheckInForm() {
  const searchParams = useSearchParams();
  const clientToken = searchParams.get('k');
  
  const [formData, setFormData] = useState<CheckInData>({
    // Identificação
    data: new Date().toISOString().split('T')[0],
    clientSlug: clientToken || '',
    honeypot: '',
    
    
    // Operação Loja Física
    fluxo_pessoas: 0,
    atendimentos_realizados: 0,
    vendas_loja: 0,
    receita_loja: 0,
    recompra: 0,
    ruptura_estoque: false,
    ruptura_descricao: '',
    maquina_ociosa: false,
    tempo_ocioso: 0,
    
    // Qualitativo
    obstaculos: '',
    observacoes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validação de token
  useEffect(() => {
    if (!clientToken) {
      setErrors({ token: 'Token de acesso inválido ou ausente' });
    }
  }, [clientToken]);

  const handleInputChange = (field: keyof CheckInData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Limpar erro do campo quando usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };


  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Identificação
    if (!formData.data) newErrors.data = 'Data é obrigatória';
    
    
    // Operação Loja Física
    if (formData.fluxo_pessoas < 0) newErrors.fluxo_pessoas = 'Fluxo de pessoas não pode ser negativo';
    if (formData.atendimentos_realizados < 0) newErrors.atendimentos_realizados = 'Atendimentos realizados não pode ser negativo';
    if (formData.vendas_loja < 0) newErrors.vendas_loja = 'Vendas na loja não pode ser negativo';
    if (formData.receita_loja < 0) newErrors.receita_loja = 'Receita da loja não pode ser negativa';
    if (formData.recompra < 0) newErrors.recompra = 'Recompra não pode ser negativa';
    if (formData.tempo_ocioso < 0) newErrors.tempo_ocioso = 'Tempo ocioso não pode ser negativo';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateMetrics = () => {
    // Métricas da loja física
    const ticket_medio_loja = formData.vendas_loja > 0 && formData.receita_loja > 0
      ? formData.receita_loja / formData.vendas_loja
      : 0;

    const conversao_loja = formData.fluxo_pessoas > 0 && formData.vendas_loja > 0
      ? (formData.vendas_loja / formData.fluxo_pessoas) * 100
      : 0;

    return { ticket_medio_loja, conversao_loja };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrors({ submit: result.error || 'Erro ao enviar dados' });
      }
    } catch (error) {
      setErrors({ submit: 'Erro de conexão. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { ticket_medio_loja, conversao_loja } = calculateMetrics();

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Enviado com sucesso! ✓</h2>
          <p className="text-gray-600 mb-6">Seus dados foram registrados com sucesso.</p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                // Identificação
                data: new Date().toISOString().split('T')[0],
                clientSlug: clientToken || '',
                honeypot: '',
                
                
                // Operação Loja Física
                fluxo_pessoas: 0,
                atendimentos_realizados: 0,
                vendas_loja: 0,
                receita_loja: 0,
                recompra: 0,
                ruptura_estoque: false,
                ruptura_descricao: '',
                maquina_ociosa: false,
                tempo_ocioso: 0,
                
                // Qualitativo
                obstaculos: '',
                observacoes: ''
              });
            }}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Enviar outro relatório
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Check-in Omnicanal</h1>
            <p className="text-green-100">Relatório de operação do dia</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Honeypot - campo invisível */}
            <input
              type="text"
              name="website"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => handleInputChange('honeypot', e.target.value)}
            />

            {/* 1. IDENTIFICAÇÃO */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-blue-900 mb-4">
                Identificação
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Data *
                </label>
                <input
                  type="date"
                  value={formData.data}
                  onChange={(e) => handleInputChange('data', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.data ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.data && <p className="text-red-500 text-sm mt-1">{errors.data}</p>}
              </div>
            </div>

            {/* 2. OPERAÇÃO LOJA FÍSICA */}
            <div className="bg-orange-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-orange-900 mb-4">
                Operação Loja Física
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fluxo de pessoas (footfall, quem entrou)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.fluxo_pessoas}
                    onChange={(e) => handleInputChange('fluxo_pessoas', parseInt(e.target.value) || 0)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                      errors.fluxo_pessoas ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.fluxo_pessoas && <p className="text-red-500 text-sm mt-1">{errors.fluxo_pessoas}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Atendimentos realizados (quem chegou a ser atendido)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.atendimentos_realizados}
                    onChange={(e) => handleInputChange('atendimentos_realizados', parseInt(e.target.value) || 0)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                      errors.atendimentos_realizados ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.atendimentos_realizados && <p className="text-red-500 text-sm mt-1">{errors.atendimentos_realizados}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vendas loja (qtd.)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.vendas_loja}
                    onChange={(e) => handleInputChange('vendas_loja', parseInt(e.target.value) || 0)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                      errors.vendas_loja ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.vendas_loja && <p className="text-red-500 text-sm mt-1">{errors.vendas_loja}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Receita loja (R$)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.receita_loja}
                    onChange={(e) => handleInputChange('receita_loja', parseFloat(e.target.value) || 0)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                      errors.receita_loja ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.receita_loja && <p className="text-red-500 text-sm mt-1">{errors.receita_loja}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recompra
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.recompra}
                    onChange={(e) => handleInputChange('recompra', parseInt(e.target.value) || 0)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                      errors.recompra ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.recompra && <p className="text-red-500 text-sm mt-1">{errors.recompra}</p>}
                </div>
              </div>

              {/* Ruptura de estoque */}
              <div className="mb-4">
                <label className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    checked={formData.ruptura_estoque}
                    onChange={(e) => handleInputChange('ruptura_estoque', e.target.checked)}
                    className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Houve ruptura de estoque hoje
                  </span>
                </label>
                {formData.ruptura_estoque && (
                  <textarea
                    value={formData.ruptura_descricao}
                    onChange={(e) => handleInputChange('ruptura_descricao', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Quais produtos ficaram em falta?"
                  />
                )}
              </div>

              {/* Máquina ociosa */}
              <div className="mb-4">
                <label className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    checked={formData.maquina_ociosa}
                    onChange={(e) => handleInputChange('maquina_ociosa', e.target.checked)}
                    className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    A máquina ficou ociosa durante o dia
                  </span>
                </label>
                {formData.maquina_ociosa && (
                  <div className="ml-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Por quanto tempo ficou ociosa? (horas)
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="0.5"
                      value={formData.tempo_ocioso}
                      onChange={(e) => handleInputChange('tempo_ocioso', parseFloat(e.target.value) || 0)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                        errors.tempo_ocioso ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Ex: 2.5"
                    />
                    {errors.tempo_ocioso && <p className="text-red-500 text-sm mt-1">{errors.tempo_ocioso}</p>}
                  </div>
                )}
              </div>
            </div>

            {/* Métricas calculadas */}
            {(ticket_medio_loja > 0 || conversao_loja > 0) && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-700 mb-2">Métricas calculadas:</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {ticket_medio_loja > 0 && (
                    <div>
                      <span className="text-gray-600">Ticket Médio Loja:</span>
                      <span className="ml-2 font-medium">R$ {ticket_medio_loja.toFixed(2)}</span>
                    </div>
                  )}
                  {conversao_loja > 0 && (
                    <div>
                      <span className="text-gray-600">Conversão Loja:</span>
                      <span className="ml-2 font-medium">{conversao_loja.toFixed(1)}%</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 3. QUALITATIVO */}
            <div className="bg-purple-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-purple-900 mb-4">
                Qualitativo
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Principais obstáculos (texto curto, para entender travas reais)
                  </label>
                  <textarea
                    value={formData.obstaculos}
                    onChange={(e) => handleInputChange('obstaculos', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Descreva brevemente os principais obstáculos encontrados..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Observações gerais (insights, algo que não aparece nos números)
                  </label>
                  <textarea
                    value={formData.observacoes}
                    onChange={(e) => handleInputChange('observacoes', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Adicione insights importantes sobre o dia..."
                  />
                </div>
              </div>
            </div>

            {/* Erro de submit */}
            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm">{errors.submit}</p>
              </div>
            )}

            {/* Botão de submit */}
            <button
              type="submit"
              disabled={isSubmitting || !clientToken}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Relatório'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function CheckInPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <CheckInForm />
    </Suspense>
  );
}
