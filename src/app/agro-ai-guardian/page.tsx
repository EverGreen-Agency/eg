'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AgroAIGuardianPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [countUp, setCountUp] = useState({ perdas: 0, economia: 0, produtividade: 0 });
  const [showSimulator, setShowSimulator] = useState(false);
  const [simulatorData, setSimulatorData] = useState({
    hectares: '',
    cultura: '',
    tipo: '',
    estado: '',
    sensores: ''
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animação dos números
    const animateNumbers = () => {
      let start = 0;
      const duration = 2000;
      const increment = duration / 100;
      
      const timer = setInterval(() => {
        start += increment / duration;
        if (start >= 1) {
          setCountUp({ perdas: 40, economia: 20, produtividade: 35 });
          clearInterval(timer);
        } else {
          setCountUp({
            perdas: Math.floor(40 * start),
            economia: Math.floor(20 * start),
            produtividade: Math.floor(35 * start)
          });
        }
      }, increment);
    };

    const timer = setTimeout(animateNumbers, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Função para calcular o custo estimado
  const calculateCost = () => {
    const hectares = parseFloat(simulatorData.hectares) || 0;
    const basePrice = 25; // R$ 25 por hectare
    
    // Desconto para cooperativas
    const cooperativeDiscount = simulatorData.tipo === 'cooperativa' ? 0.15 : 0;
    
    // Desconto por volume (escala)
    let volumeDiscount = 0;
    if (hectares >= 500) volumeDiscount = 0.20;
    else if (hectares >= 200) volumeDiscount = 0.15;
    else if (hectares >= 100) volumeDiscount = 0.10;
    else if (hectares >= 50) volumeDiscount = 0.05;
    
    const totalDiscount = Math.min(cooperativeDiscount + volumeDiscount, 0.30); // Máximo 30%
    const pricePerHectare = basePrice * (1 - totalDiscount);
    const monthlyTotal = hectares * pricePerHectare;
    const annualTotal = monthlyTotal * 12;
    
    // Estimativa de economia baseada no tamanho
    const economyPercentage = Math.min(20 + (hectares / 100) * 2, 35); // 20-35%
    const estimatedSavings = (hectares * 500) * (economyPercentage / 100); // R$ 500 custo médio por hectare
    
    return {
      pricePerHectare: pricePerHectare.toFixed(2),
      monthlyTotal: monthlyTotal.toFixed(2),
      annualTotal: annualTotal.toFixed(2),
      totalDiscount: (totalDiscount * 100).toFixed(0),
      estimatedSavings: estimatedSavings.toFixed(0),
      economyPercentage: economyPercentage.toFixed(0),
      paybackMonths: Math.ceil(annualTotal / (estimatedSavings / 12))
    };
  };

  const handleSimulatorChange = (field: string, value: string) => {
    setSimulatorData(prev => ({ ...prev, [field]: value }));
  };

  const closeSimulator = () => {
    setShowSimulator(false);
    setSimulatorData({
      hectares: '',
      cultura: '',
      tipo: '',
      estado: '',
      sensores: ''
    });
  };

  const steps = [
    {
      number: "01",
      title: "Conecte sensores ou use dados climáticos locais",
      description: "Instale sensores IoT no seu campo ou utilize nossa base de dados climáticos regionais."
    },
    {
      number: "02", 
      title: "IA analisa e prevê riscos",
      description: "Nossa inteligência artificial processa os dados e identifica padrões de risco para sua lavoura."
    },
    {
      number: "03",
      title: "Receba alertas e recomendações",
      description: "Receba notificações em tempo real via app ou WhatsApp com recomendações precisas."
    }
  ];

  const renderBenefitIcon = (iconType: string) => {
    switch(iconType) {
      case 'shield':
        return (
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'money':
        return (
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 'mobile':
        return (
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const benefits = [
    {
      icon: "shield",
      title: "Redução de Perdas",
      description: "Diminua até 40% das perdas por pragas e condições climáticas adversas",
      metric: `${countUp.perdas}%`
    },
    {
      icon: "money",
      title: "Economia em Insumos",
      description: "Reduza custos com defensivos e fertilizantes em até 20%",
      metric: `${countUp.economia}%`
    },
    {
      icon: "chart",
      title: "Aumento da Produtividade",
      description: "Incremente sua produtividade e lucro com decisões baseadas em dados",
      metric: `+${countUp.produtividade}%`
    },
    {
      icon: "mobile",
      title: "Interface Simples",
      description: "App intuitivo que funciona mesmo com conectividade limitada"
    }
  ];

  const renderProblemIcon = (iconType: string) => {
    switch(iconType) {
      case 'bug':
        return (
          <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        );
      case 'cloud-rain':
        return (
          <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21l3-9-3-9-3 9 3 9zm5-9l3 9 3-9-3-9-3 9z" />
          </svg>
        );
      case 'dollar-sign':
        return (
          <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        );
      default:
        return null;
    }
  };

  const features = [
    "Alertas em tempo real",
    "Painel web e mobile",
    "Relatórios em PDF",
    "Integração com cooperativas",
    "Suporte 24h via chatbot IA",
    "Mapas de calor de risco",
    "Histórico de safras",
    "Previsões climáticas"
  ];

  const faqs = [
    {
      question: "Preciso de internet constante na fazenda?",
      answer: "Não. O app armazena dados offline e sincroniza automaticamente quando há sinal (3G/4G ou Wi-Fi rural)."
    },
    {
      question: "Quais sensores IoT são compatíveis?",
      answer: "Trabalhamos com estações climáticas, sondas de umidade e sondas de solo padrão LoRa/4G. Fornecemos kit homologado ou integramos o que você já possui via API."
    },
    {
      question: "Como é a instalação dos sensores?",
      answer: "Plug & play: fixação em estaca, alimentação por painel solar e chip M2M. Tutorial em vídeo e suporte remoto gratuito."
    },
    {
      question: "Posso usar a plataforma sem sensores?",
      answer: "Sim. Você recebe previsões climáticas locais e pode inserir dados manualmente; depois decide se vale adicionar hardware para maior precisão."
    },
    {
      question: "Como a IA gera as previsões?",
      answer: "Os algoritmos cruzam histórico climático, dados de solo e padrões regionais para calcular probabilidade de pragas e estresse hídrico com até 7 dias de antecedência."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim. Criptografia AES-256 em trânsito e repouso, servidores AWS no Brasil e política de privacidade conforme LGPD."
    },
    {
      question: "Quanto tempo até ver resultado?",
      answer: "Em média 1 safra. Usuários piloto reduziram perdas em 15-30% e insumos em até 20% no primeiro ciclo."
    },
    {
      question: "Preciso treinar minha equipe?",
      answer: "O app é intuitivo; porém oferecemos onboarding por vídeo, webinars mensais e canal de dúvidas no WhatsApp."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Chatbot IA 24/7 integrado ao WhatsApp/app, e-mail em até 24h úteis e hotline para emergências agronômicas."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim. Modelo mês a mês, sem multa. Seus dados podem ser exportados antes do desligamento."
    },
    {
      question: "Há planos para cooperativas?",
      answer: "Sim. Preço por hectare escalonado, dashboard multi-propriedade e integração ao ERP da cooperativa."
    },
    {
      question: "E se meu talhão crescer ou diminuir?",
      answer: "O faturamento ajusta automaticamente ao número de hectares ativos no mês corrente."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Tecnologia Agro 4.0
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Preveja pragas e clima.{' '}
                  <span className="text-green-600 relative">
                    Proteja até 40%
                    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10">
                      <path d="M0,5 Q50,0 100,5" stroke="#16a34a" strokeWidth="2" fill="none" className="animate-draw-line"/>
                    </svg>
                  </span>{' '}
                  da sua colheita.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  IA + IoT acessíveis para pequenos e médios produtores. 
                  Tome decisões inteligentes e aumente sua produtividade.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl btn-primary">
                  Teste Gratuito por 30 Dias
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Ver Demonstração
                </button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Sem contrato de fidelidade
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Suporte 24/7
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 hover-lift">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Agro AI Guardian</h3>
                    <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-sm opacity-90">Risco de Praga</div>
                      <div className="text-2xl font-bold">12%</div>
                      <div className="text-xs opacity-75">↓ 8% vs. semana passada</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-sm opacity-90">Previsão Climática</div>
                      <div className="text-2xl font-bold">Favorável</div>
                      <div className="text-xs opacity-75">Próximos 7 dias</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-2 rounded-full text-sm font-medium animate-bounce">
                Economia: R$ 30k
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-medium animate-pulse">
                IA Ativa
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Os Desafios que Todo Produtor Enfrenta
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Perdas inesperadas, custos elevados com insumos e a constante imprevisibilidade climática
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                iconType: "bug",
                title: "Pragas Invisíveis",
                description: "Detectar pragas quando já causaram danos significativos",
                stat: "Até 30% de perdas"
              },
              {
                iconType: "cloud-rain",
                title: "Clima Imprevisível",
                description: "Mudanças climáticas tornam previsões cada vez mais difíceis",
                stat: "R$ 15 bi em perdas/ano"
              },
              {
                iconType: "dollar-sign",
                title: "Desperdício de Insumos",
                description: "Aplicação desnecessária de defensivos e fertilizantes",
                stat: "20-40% do custo"
              }
            ].map((problem, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
                <div className="mb-4">{renderProblemIcon(problem.iconType)}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 mb-4">{problem.description}</p>
                <div className="text-red-600 font-bold text-lg">{problem.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solução em 3 Passos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A Solução em 3 Passos Simples
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologia avançada com simplicidade de uso
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 animate-pulse-glow">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  
                  {/* Linha conectora (apenas no desktop e não no último item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-300 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Versão alternativa em linha para tablets */}
            <div className="hidden sm:block md:hidden mt-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center mb-8 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6 animate-pulse-glow">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Produtores que usam nossa solução veem melhorias imediatas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
                <div className="mb-4">{renderBenefitIcon(benefit.icon)}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                {benefit.metric && (
                  <div className="text-2xl font-bold text-green-600 gradient-text">{benefit.metric}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Completas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa para monitorar e proteger sua lavoura
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 hover:bg-green-50 rounded-lg p-4 transition-all duration-300 border-l-4 border-green-500 hover-lift">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium text-gray-900">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Resultados reais de produtores que já usam o Agro AI Guardian
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              {/* Depoimento Principal */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 glass-effect">
                <div className="flex items-center mb-6">
                  <svg className="w-12 h-12 text-green-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-gray-300">Avaliação: 5.0/5.0</div>
                  </div>
                </div>
                
                <blockquote className="text-2xl font-bold text-white mb-6">
                  "Economizei R$ 30 mil na safra com o Agro AI Guardian"
                </blockquote>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  "A plataforma me alertou sobre uma infestação de lagarta que eu nem tinha notado. 
                  Consegui agir rapidamente e salvei grande parte da minha plantação de soja. 
                  O retorno do investimento foi imediato!"
                </p>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl">
                    JS
                  </div>
                  <div>
                    <div className="font-bold text-lg text-white">João Inácio</div>
                    <div className="text-gray-400">Produtor de Soja - Mato Grosso</div>
                    <div className="text-sm text-green-400">Cliente há 2 anos • 150 hectares</div>
                  </div>
                </div>
              </div>
              
              {/* Métricas de Sucesso */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-400">98%</div>
                  <div className="text-sm text-gray-300">Satisfação</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-400">250+</div>
                  <div className="text-sm text-gray-300">Produtores</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-400">35%</div>
                  <div className="text-sm text-gray-300">Economia Média</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in-up">
              {/* Mais Depoimentos */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Mais histórias de sucesso</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        MR
                      </div>
                      <div>
                        <div className="font-semibold">Maria Regina</div>
                        <div className="text-xs text-gray-400">Produtora de Milho - GO</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      "Aumentei minha produtividade em 25% no primeiro ano. 
                      Os alertas de clima me salvaram da última geada."
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        CS
                      </div>
                      <div>
                        <div className="font-semibold">Carlos Santos</div>
                        <div className="text-xs text-gray-400">Cafeicultor - MG</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      "O sistema detectou broca-do-café antes que eu notasse. 
                      Economizei muito em defensivos."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Cooperativas Parceiras */}
              <div>
                <h3 className="text-xl font-bold mb-4">Cooperativas Parceiras</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'COAMO', members: '1.200+' },
                    { name: 'AgroUnião', members: '800+' },
                    { name: 'Campo Verde', members: '600+' },
                    { name: 'CooperMT', members: '900+' }
                  ].map((coop, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-3 text-center glass-effect hover-lift transition-all duration-300">
                      <div className="font-medium text-sm">{coop.name}</div>
                      <div className="text-xs text-green-400">{coop.members} produtores</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preços */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Investimento Simples
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um preço que cabe no seu bolso e se paga sozinho
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-green-500 relative overflow-hidden hover-lift">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 text-sm font-bold">
                POPULAR
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Completo</h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-5xl font-bold text-green-600 gradient-text">R$ 25</span>
                  <span className="text-gray-600 ml-2">/mês por hectare</span>
                </div>
                <p className="text-gray-500">Desconto para cooperativas</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Monitoramento 24/7',
                  'Alertas em tempo real',
                  'Previsões de IA',
                  'Relatórios detalhados',
                  'Suporte especializado',
                  'App mobile e web'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 mb-4 btn-primary"
                onClick={() => setShowSimulator(true)}
              >
                Simular Custo para Minha Propriedade
              </button>
              
              <p className="text-center text-sm text-gray-500">
                30 dias grátis • Cancele quando quiser
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas técnicas e comerciais sobre o Agro AI Guardian
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Categorias de FAQ */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Perguntas Técnicas */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Questões Técnicas
                </h3>
                {faqs.slice(0, 6).map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <button
                      className="w-full text-left p-6 flex justify-between items-start hover:text-green-600 transition-colors"
                      onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                    >
                      <span className="text-lg font-semibold pr-4">{faq.question}</span>
                      <svg 
                        className={`w-6 h-6 transition-transform flex-shrink-0 ${faqOpen === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {faqOpen === index && (
                      <div className="px-6 pb-6 animate-fade-in-up">
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Perguntas Comerciais */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Questões Comerciais
                </h3>
                {faqs.slice(6, 12).map((faq, index) => (
                  <div key={index + 6} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <button
                      className="w-full text-left p-6 flex justify-between items-start hover:text-green-600 transition-colors"
                      onClick={() => setFaqOpen(faqOpen === (index + 6) ? null : (index + 6))}
                    >
                      <span className="text-lg font-semibold pr-4">{faq.question}</span>
                      <svg 
                        className={`w-6 h-6 transition-transform flex-shrink-0 ${faqOpen === (index + 6) ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {faqOpen === (index + 6) && (
                      <div className="px-6 pb-6 animate-fade-in-up">
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA adicional no FAQ */}
            <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa equipe técnica está pronta para esclarecer qualquer questão específica sobre sua propriedade
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Falar com Especialista
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Agendar Demo Técnica
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white animate-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Comece hoje, pague só após ver resultado
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Teste gratuitamente por 30 dias e comprove o retorno do investimento na sua propriedade
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 btn-primary">
              Falar no WhatsApp
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Agendar Demonstração
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-75">
            <span>✓ Sem cartão de crédito</span>
            <span>✓ Suporte gratuito</span>
            <span>✓ Cancelamento fácil</span>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Agro AI Guardian</h3>
              <p className="text-gray-400 mb-4">
                Inteligência artificial para agricultura sustentável e produtiva.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover-lift">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover-lift">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demonstração</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Treinamentos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>suporte@agroaiguardian.com.br</p>
                <p>(11) 99999-9999</p>
                <p>São Paulo, SP</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">
              © 2024 Agro AI Guardian. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Simulador de Custo */}
      {showSimulator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header do Modal */}
            <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-200 p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Simulador de Custo</h3>
                  <p className="text-gray-600">Calcule o investimento para sua propriedade</p>
                </div>
                <button
                  onClick={closeSimulator}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Formulário */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Dados da Propriedade</h4>
                  
                  {/* Tamanho da Propriedade */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tamanho da propriedade (hectares) *
                    </label>
                    <input
                      type="number"
                      placeholder="Ex: 150"
                      value={simulatorData.hectares}
                      onChange={(e) => handleSimulatorChange('hectares', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  {/* Tipo de Cultura */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Principal cultura
                    </label>
                    <select
                      value={simulatorData.cultura}
                      onChange={(e) => handleSimulatorChange('cultura', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Selecione a cultura</option>
                      <option value="soja">Soja</option>
                      <option value="milho">Milho</option>
                      <option value="cafe">Café</option>
                      <option value="cana">Cana-de-açúcar</option>
                      <option value="algodao">Algodão</option>
                      <option value="frutas">Frutas</option>
                      <option value="hortalicas">Hortaliças</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  {/* Tipo de Produtor */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de produtor
                    </label>
                    <select
                      value={simulatorData.tipo}
                      onChange={(e) => handleSimulatorChange('tipo', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="individual">Produtor Individual</option>
                      <option value="cooperativa">Membro de Cooperativa</option>
                    </select>
                  </div>

                  {/* Estado */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estado
                    </label>
                    <select
                      value={simulatorData.estado}
                      onChange={(e) => handleSimulatorChange('estado', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Selecione o estado</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="GO">Goiás</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="SP">São Paulo</option>
                      <option value="PR">Paraná</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="BA">Bahia</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  {/* Sensores Existentes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Já possui sensores IoT?
                    </label>
                    <select
                      value={simulatorData.sensores}
                      onChange={(e) => handleSimulatorChange('sensores', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="nao">Não, vou começar do zero</option>
                      <option value="alguns">Sim, alguns equipamentos</option>
                      <option value="completo">Sim, estação meteorológica completa</option>
                    </select>
                  </div>
                </div>

                {/* Resultado da Simulação */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Sua Simulação</h4>
                  
                  {simulatorData.hectares ? (
                    <div className="space-y-4">
                      {(() => {
                        const result = calculateCost();
                        return (
                          <>
                            {/* Custo Mensal */}
                            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                              <div className="flex justify-between items-center">
                                <span className="text-gray-600">Custo mensal</span>
                                <span className="text-2xl font-bold text-green-600">
                                  R$ {result.monthlyTotal}
                                </span>
                              </div>
                                                             <div className="text-sm text-gray-500 mt-1">
                                 R$ {result.pricePerHectare}/hectare {parseFloat(result.totalDiscount) > 0 && `(${result.totalDiscount}% desconto)`}
                               </div>
                            </div>

                            {/* Custo Anual */}
                            <div className="bg-white rounded-lg p-4">
                              <div className="flex justify-between items-center">
                                <span className="text-gray-600">Custo anual</span>
                                <span className="text-xl font-bold text-gray-900">
                                  R$ {result.annualTotal}
                                </span>
                              </div>
                            </div>

                            {/* Economia Estimada */}
                            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                              <div className="flex justify-between items-center">
                                <span className="text-green-700 font-medium">Economia anual estimada</span>
                                <span className="text-xl font-bold text-green-700">
                                  R$ {result.estimatedSavings}
                                </span>
                              </div>
                              <div className="text-sm text-green-600 mt-1">
                                {result.economyPercentage}% de redução nos custos
                              </div>
                            </div>

                            {/* ROI */}
                            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                              <div className="text-center">
                                <div className="text-blue-700 font-medium">Retorno do investimento</div>
                                <div className="text-2xl font-bold text-blue-700 mt-1">
                                  {result.paybackMonths} meses
                                </div>
                                <div className="text-sm text-blue-600">
                                  ROI de {((parseFloat(result.estimatedSavings) / parseFloat(result.annualTotal) - 1) * 100).toFixed(0)}% ao ano
                                </div>
                              </div>
                            </div>

                            {/* CTAs */}
                            <div className="space-y-3 mt-6">
                              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                                Solicitar Proposta Personalizada
                              </button>
                              <button className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-lg font-semibold transition-all duration-300">
                                Agendar Demonstração
                              </button>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <p>Preencha o tamanho da propriedade para ver sua simulação</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex">
                  <svg className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  <div className="text-sm text-yellow-700">
                    <strong>Importante:</strong> Esta é uma simulação baseada em médias de mercado. 
                    Os valores reais podem variar conforme as características específicas da sua propriedade 
                    e necessidades operacionais.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}