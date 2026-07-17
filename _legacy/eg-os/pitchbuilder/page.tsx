import { Metadata } from 'next';
import Link from 'next/link';
import {
  Mic,
  CheckCircle,
  AlertTriangle,
  Phone,
  MessageCircle,
  Users,
  User,
  FileText,
  BookOpen,
  BarChart2,
  ClipboardList,
  Video,
  Building2,
  Shield,
  HelpCircle,
  Star,
  Zap,
  Target,
  Brain,
  MessageSquare
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Evergreen PitchBuilder - Script de vendas com IA',
  description: 'Receba um script de vendas profissional, treinável e escalável, pronto para ligação, WhatsApp e presencial. Vendas com padrão e performance.',
};

export default function PitchBuilderPage() {
  const verdeMusgo = '#09231B';
  const verdeMenta = '#3AC97B';
  const amareloBaunilha = '#FFF4C7';

  return (
    <main style={{ background: amareloBaunilha }} className="min-h-screen">
      {/* HERO */}
      <section style={{ background: verdeMusgo }} className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: amareloBaunilha }}>
              Você não precisa ser bom de papo pra vender bem.
            </h1>
            <p className="text-xl mb-8 mt-4" style={{ color: verdeMenta }}>
              <Mic className="inline h-6 w-6 mr-2 align-middle" style={{ color: verdeMenta }} />
              O Evergreen PitchBuilder usa IA pra criar o script de vendas ideal pro seu produto, seu cliente e seu canal.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-base" style={{ color: amareloBaunilha }}>
                <Phone className="h-5 w-5" style={{ color: verdeMenta }} /> Ligação
              </div>
              <div className="flex items-center gap-2 text-base" style={{ color: amareloBaunilha }}>
                <MessageCircle className="h-5 w-5" style={{ color: verdeMenta }} /> WhatsApp
              </div>
              <div className="flex items-center gap-2 text-base" style={{ color: amareloBaunilha }}>
                <Users className="h-5 w-5" style={{ color: verdeMenta }} /> Presencial
              </div>
            </div>
            <p className="text-lg mb-8" style={{ color: '#fff', opacity: 0.85 }}>
              Tudo pronto em 24h — testado, validado e adaptado pro seu estilo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contato" 
                className="px-8 py-4 rounded-lg font-semibold border-none shadow-md"
                style={{ background: verdeMenta, color: verdeMusgo }}
              >
                Quero meu script de vendas
              </Link>
              <Link 
                href="#exemplo" 
                className="px-8 py-4 rounded-lg font-semibold border-2"
                style={{ color: verdeMenta, borderColor: verdeMenta, background: 'transparent' }}
              >
                Ver exemplo de script
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Você já passou por isso?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 flex-shrink-0" style={{ color: verdeMusgo }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Objeções sem resposta</h3>
                  <p className="text-gray-700">Não sabe como lidar com as principais objeções dos clientes e perde vendas por isso.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 flex-shrink-0" style={{ color: verdeMusgo }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Falta de estrutura</h3>
                  <p className="text-gray-700">Suas vendas dependem do humor do dia e não seguem um processo consistente.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 flex-shrink-0" style={{ color: verdeMusgo }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Time desalinhado</h3>
                  <p className="text-gray-700">Cada vendedor tem seu próprio jeito de vender, sem padrão ou treinamento.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 flex-shrink-0" style={{ color: verdeMusgo }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Resultados inconsistentes</h3>
                  <p className="text-gray-700">Alguns dias vende bem, outros mal, sem previsibilidade nos resultados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section style={{ background: verdeMusgo }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: amareloBaunilha }}>
              O script de vendas que vai transformar seus resultados
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <Brain className="h-12 w-12 mx-auto mb-4" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: amareloBaunilha }}>IA Avançada</h3>
                <p className="text-gray-300">Scripts personalizados baseados em dados reais de vendas e comportamento do cliente.</p>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <Target className="h-12 w-12 mx-auto mb-4" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: amareloBaunilha }}>Foco em Conversão</h3>
                <p className="text-gray-300">Estrutura testada e otimizada para maximizar a taxa de fechamento de vendas.</p>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <Zap className="h-12 w-12 mx-auto mb-4" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: amareloBaunilha }}>Rápido e Eficiente</h3>
                <p className="text-gray-300">Script pronto em 24h, com treinamento e suporte para implementação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Como funciona
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: verdeMusgo }}>
                  <span className="text-2xl font-bold" style={{ color: amareloBaunilha }}>1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Análise do Negócio</h3>
                  <p className="text-gray-700">Entendemos seu produto, público-alvo e objetivos de vendas.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: verdeMusgo }}>
                  <span className="text-2xl font-bold" style={{ color: amareloBaunilha }}>2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Criação do Script</h3>
                  <p className="text-gray-700">Nossa IA desenvolve um script personalizado para seu negócio.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: verdeMusgo }}>
                  <span className="text-2xl font-bold" style={{ color: amareloBaunilha }}>3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Treinamento</h3>
                  <p className="text-gray-700">Seu time recebe treinamento completo para usar o script com maestria.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section style={{ background: verdeMusgo }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: amareloBaunilha }}>
              O que nossos clientes dizem
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                </div>
                <p className="text-gray-300 mb-4">"O script transformou completamente nossa abordagem de vendas. Agora temos um processo consistente e resultados previsíveis."</p>
                <div className="flex items-center gap-3">
                  <User className="h-8 w-8" style={{ color: verdeMenta }} />
                  <div>
                    <p className="font-semibold" style={{ color: amareloBaunilha }}>João Silva</p>
                    <p className="text-sm text-gray-400">Diretor Comercial, TechCorp</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                  <Star className="h-5 w-5" style={{ color: verdeMenta }} />
                </div>
                <p className="text-gray-300 mb-4">"Aumentamos nossa taxa de conversão em 40% após implementar o script. O treinamento foi fundamental para o sucesso."</p>
                <div className="flex items-center gap-3">
                  <User className="h-8 w-8" style={{ color: verdeMenta }} />
                  <div>
                    <p className="font-semibold" style={{ color: amareloBaunilha }}>Maria Santos</p>
                    <p className="text-sm text-gray-400">CEO, InovaçãoTech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: verdeMusgo }}>Quanto tempo leva para receber o script?</h3>
                <p className="text-gray-700">O script fica pronto em até 24 horas após a análise do seu negócio.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: verdeMusgo }}>O script funciona para qualquer tipo de produto?</h3>
                <p className="text-gray-700">Sim, adaptamos o script para qualquer tipo de produto ou serviço, B2B ou B2C.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: verdeMusgo }}>Como é feito o treinamento da equipe?</h3>
                <p className="text-gray-700">Oferecemos treinamento online ou presencial, com suporte contínuo para ajustes e melhorias.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: verdeMusgo }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: amareloBaunilha }}>
              Transforme suas vendas hoje mesmo
            </h2>
            <p className="text-xl mb-8" style={{ color: verdeMenta }}>
              Receba seu script personalizado em 24h e comece a vender mais
            </p>
            <Link 
              href="#contato" 
              className="px-8 py-4 rounded-lg font-semibold inline-block"
              style={{ background: verdeMenta, color: verdeMusgo }}
            >
              Quero meu script de vendas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 