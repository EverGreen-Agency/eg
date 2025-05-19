import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  BarChart3,
  Smartphone,
  Brain,
  Plus,
  Check,
  Circle,
  FileText,
  AreaChart,
  Bot,
  MessageCircle,
  MonitorSmartphone,
  BarChartHorizontal,
  Bell,
  Clock,
  Users,
  Calendar,
  Clock12,
  ShieldCheck,
  Mail,
  Video
} from 'lucide-react';

interface PricePackagesProps {
  title?: string;
  subtitle?: string;
}

const PricePackages: React.FC<PricePackagesProps> = ({ 
  title = "PACOTE EG FINANCE", 
  subtitle = "A solução completa para gestão financeira do seu negócio" 
}) => {
  const [isAnnual, setIsAnnual] = useState(false);

  // Cores da marca
  const verdeMusgo = '#092B1B';
  const verdeMenta = '#3AC97B';
  const amareloBaunilha = '#FFF4C7';
  const sombraCard = '0 4px 24px 0 rgba(9,43,27,0.10)';
  const bordaCard = `1.5px solid ${verdeMenta}22`;
  const bgIcone = `${verdeMenta}22`;
  
  // Stripe checkout URLs for Finance packages
  const stripeCheckoutUrls = {
    mei: {
      monthly: "https://buy.stripe.com/9B628rez7dLm7GK53P08g07",
      annual: "https://buy.stripe.com/cNicN50Ih0YA7GKdAl08g06"
    },
    pme: {
      monthly: "https://buy.stripe.com/00w4gzfDb9v6aSW0Nz08g05",
      annual: "https://buy.stripe.com/bJe8wPdv34aM4uyfIt08g04"
    },
    media: {
      monthly: "https://buy.stripe.com/cN2eUW5V6fUKeo8aEE",
      annual: "https://buy.stripe.com/7sY5kD76F4aM8KOao908g03"
    }
  };
  
  // Function to handle checkout
  const handleCheckout = (planType: 'mei' | 'pme' | 'media') => {
    const planUrl = isAnnual 
      ? stripeCheckoutUrls[planType].annual 
      : stripeCheckoutUrls[planType].monthly;
    
    window.location.href = planUrl;
  };

  return (
    <section className="py-16" style={{ background: `${verdeMenta}22` }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" 
            style={{ background: verdeMenta, color: '#fff' }}>
            {title}
          </span>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#fff' }}>
            DRE + Flow + Suporte Automatizado
          </h2>
          <p className="text-xl" style={{ color: amareloBaunilha }}>
            {subtitle}
          </p>
        </div>

        {/* Toggle Anual/Mensal */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <span style={{ color: isAnnual ? `${amareloBaunilha}88` : amareloBaunilha }}>Mensal</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
            style={{ background: isAnnual ? verdeMenta : `${verdeMenta}44` }}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span style={{ color: isAnnual ? amareloBaunilha : `${amareloBaunilha}88` }}>
            Anual <span className="text-sm" style={{ color: verdeMenta }}>(2 meses grátis)</span>
            <span className="ml-2 px-2 py-0.5 text-xs rounded-full" style={{ background: verdeMenta, color: verdeMusgo }}>
              Recomendado
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pacote Base MEI */}
          <div className="p-8 pb-20 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full relative" 
            style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <div className="flex items-center justify-center mb-4">
              <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                <Smartphone className="h-8 w-8" style={{ color: verdeMenta }} />
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">Pacote MEI</h3>
            <div className="text-center mb-6">
              <p className="text-3xl font-bold" style={{ color: verdeMenta }}>{isAnnual ? 'R$2.970' : 'R$297'}</p>
              <p className="text-sm" style={{ opacity: 0.8 }}>{isAnnual ? 'por ano' : 'por mês'}</p>
              {isAnnual && (
                <p className="text-xs mt-1" style={{ color: verdeMenta }}>Economia de R$594</p>
              )}
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <FileText className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>DRE automatizado mensal</span>
              </li>
              <li className="flex items-start gap-2">
                <AreaChart className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Projeção de fluxo de caixa semanal</span>
              </li>
              <li className="flex items-start gap-2">
                <Bot className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Diagnóstico financeiro mensal por IA</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Suporte automatizado por WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <MonitorSmartphone className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Acesso ao painel de resultados</span>
              </li>
            </ul>
            <div className="absolute bottom-8 left-8 right-8">
              <Button className="w-full" style={{ background: verdeMenta, color: verdeMusgo }} onClick={() => handleCheckout('mei')}>
                {isAnnual ? 'Assinar Plano Anual MEI' : 'Começar Agora'}
              </Button>
            </div>
          </div>

          {/* Pacote PME */}
          <div className="p-8 pb-20 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 scale-105 flex flex-col h-full relative" 
            style={{ background: verdeMusgo, color: '#fff', boxShadow: sombraCard }}>
            <div className="flex items-center justify-center mb-4">
              <span style={{ background: verdeMenta, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                <BarChart3 className="h-8 w-8" style={{ color: verdeMusgo }} />
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">Pacote PME</h3>
            <div className="text-center mb-6">
              <p className="text-3xl font-bold" style={{ color: verdeMenta }}>{isAnnual ? 'R$4.970' : 'R$497'}</p>
              <p className="text-sm" style={{ opacity: 0.8 }}>{isAnnual ? 'por ano' : 'por mês'}</p>
              {isAnnual && (
                <p className="text-xs mt-1" style={{ color: verdeMenta }}>Economia de R$994</p>
              )}
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Tudo do pacote MEI</span>
              </li>
              <li className="flex items-start gap-2">
                <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Benchmarks de mercado por segmento</span>
              </li>
              <li className="flex items-start gap-2">
                <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Alertas automáticos (saldo, riscos, investimentos)</span>
              </li>
              <li className="flex items-start gap-2">
                <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Painel 24/7 com dados históricos</span>
              </li>
              <li className="flex items-start gap-2">
                <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Atendimento humano em horário comercial</span>
              </li>
            </ul>
            <div className="absolute bottom-8 left-8 right-8">
              <Button className="w-full" style={{ background: verdeMenta, color: verdeMusgo }} onClick={() => handleCheckout('pme')}>
                {isAnnual ? 'Assinar Plano Anual PME' : 'Escolher PME'}
              </Button>
            </div>
          </div>

          {/* Pacote Média Empresa */}
          <div className="p-8 pb-20 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full relative" 
            style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <div className="flex items-center justify-center mb-4">
              <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                <Brain className="h-8 w-8" style={{ color: verdeMenta }} />
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">Pacote Média</h3>
            <div className="text-center mb-6">
              <p className="text-3xl font-bold" style={{ color: verdeMenta }}>{isAnnual ? 'R$6.970' : 'R$697'}</p>
              <p className="text-sm" style={{ opacity: 0.8 }}>{isAnnual ? 'por ano' : 'a partir de'}</p>
              {isAnnual && (
                <p className="text-xs mt-1" style={{ color: verdeMenta }}>Economia de R$1.394</p>
              )}
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Tudo do pacote PME</span>
              </li>
              <li className="flex items-start gap-2">
                <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Diagnóstico com especialista ao vivo (mensal)</span>
              </li>
              <li className="flex items-start gap-2">
                <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Histórico acumulado completo (anual + comparativos)</span>
              </li>
              <li className="flex items-start gap-2">
                <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Suporte prioritário com SLA</span>
              </li>
              <li className="flex items-start gap-2">
                <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                <span>Canal direto para tomada de decisão (por e-mail ou reunião)</span>
              </li>
            </ul>
            <div className="absolute bottom-8 left-8 right-8">
              <Button className="w-full" style={{ background: verdeMenta, color: verdeMusgo }} onClick={() => handleCheckout('media')}>
                {isAnnual ? 'Assinar Plano Anual Média' : 'Escolher Média'}
              </Button>
            </div>
          </div>
        </div>

        {/* Bonus Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-xl text-center" style={{ background: '#fff', color: verdeMusgo }}>
            <Brain className="h-8 w-8 mx-auto mb-4" style={{ color: verdeMenta }} />
            <h4 className="font-semibold mb-2">Diagnóstico Mensal</h4>
            <p className="text-sm opacity-80">Por IA ou especialista dedicado</p>
          </div>
          <div className="p-6 rounded-xl text-center" style={{ background: '#fff', color: verdeMusgo }}>
            <BarChart3 className="h-8 w-8 mx-auto mb-4" style={{ color: verdeMenta }} />
            <h4 className="font-semibold mb-2">Benchmarks</h4>
            <p className="text-sm opacity-80">Compare com o mercado</p>
          </div>
          <div className="p-6 rounded-xl text-center" style={{ background: '#fff', color: verdeMusgo }}>
            <Bell className="h-8 w-8 mx-auto mb-4" style={{ color: verdeMenta }} />
            <h4 className="font-semibold mb-2">Alertas Automáticos</h4>
            <p className="text-sm opacity-80">Acompanhamento proativo</p>
          </div>
          <div className="p-6 rounded-xl text-center" style={{ background: '#fff', color: verdeMusgo }}>
            <BarChartHorizontal className="h-8 w-8 mx-auto mb-4" style={{ color: verdeMenta }} />
            <h4 className="font-semibold mb-2">Painel 24/7</h4>
            <p className="text-sm opacity-80">Histórico sempre disponível</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricePackages; 