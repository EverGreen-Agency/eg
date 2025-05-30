import { Metadata } from 'next';
import Link from 'next/link';
import {
  Bot,
  CheckCircle,
  AlertTriangle,
  PhoneCall,
  MessageCircle,
  Mail,
  BarChart2,
  ClipboardList,
  Zap,
  Target,
  Brain,
  User,
  Users,
  ShieldCheck,
  Lock,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Evergreen CobrAI - Cobrança automática com IA',
  description: 'Automatize suas cobranças com inteligência artificial. WhatsApp, SMS e e-mail. Cobrança educada, eficiente e sem climão.',
};

export default function CobraiPage() {
  const verdeMusgo = '#09231B';
  const verdeMenta = '#3AC97B';
  const amareloBaunilha = '#FFF4C7';
  const sombraCard = '0 4px 24px 0 rgba(9,43,27,0.10)';
  const bordaCard = `1.5px solid ${verdeMenta}22`;
  const bgIcone = `${verdeMenta}22`;

  return (
    <main style={{ background: amareloBaunilha }} className="min-h-screen">
      {/* HERO */}
      <section style={{ background: verdeMusgo }} className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: amareloBaunilha }}>
              Cansado de cliente que some quando vence o boleto?
            </h1>
            <p className="text-xl mb-8 mt-4" style={{ color: verdeMenta }}>
              <Bot className="inline h-6 w-6 mr-2 align-middle" style={{ color: verdeMenta }} />
              O Evergreen CobrAI automatiza suas cobranças com inteligência artificial.<br />
              Seus clientes recebem lembretes educados no WhatsApp, SMS e e-mail — você só vê o dinheiro cair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                href="#planos" 
                className="px-8 py-4 rounded-lg font-semibold border-none shadow-md"
                style={{ background: verdeMenta, color: verdeMusgo }}
              >
                Quero automatizar minha cobrança
              </Link>
              <Link 
                href="#exemplo" 
                className="px-8 py-4 rounded-lg font-semibold border-2"
                style={{ color: verdeMenta, borderColor: verdeMenta, background: 'transparent' }}
              >
                Ver exemplo de mensagem
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
              Cobrar cliente é ruim. Perder dinheiro por falta de cobrança é pior.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 flex-shrink-0" style={{ color: verdeMusgo }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Cliente visualiza e ignora</h3>
                  <p className="text-gray-700">Você manda mensagem... o cliente vê e não responde.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 flex-shrink-0" style={{ color: verdeMusgo }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Medo de parecer chato</h3>
                  <p className="text-gray-700">Fica com receio de insistir e perder o cliente.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 flex-shrink-0" style={{ color: verdeMusgo }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Deixa passar inadimplentes</h3>
                  <p className="text-gray-700">Nem percebe quantos não pagaram até ser tarde demais.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 flex-shrink-0" style={{ color: verdeMusgo }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Fica sem grana e sem saber por quê</h3>
                  <p className="text-gray-700">No fim das contas, você se prejudica.</p>
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
              O Evergreen CobrAI resolve isso pra você:
            </h2>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <Bot className="h-12 w-12 mx-auto mb-4" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: amareloBaunilha }}>IA cobradora</h3>
                <p className="text-gray-300">Mensagens automáticas, educadas e personalizadas.</p>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <MessageCircle className="h-12 w-12 mx-auto mb-4" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: amareloBaunilha }}>Multicanal</h3>
                <p className="text-gray-300">WhatsApp, SMS e e-mail — tudo automático.</p>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <BarChart2 className="h-12 w-12 mx-auto mb-4" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: amareloBaunilha }}>Acompanhamento</h3>
                <p className="text-gray-300">Veja quem pagou, quem ignorou e quem clicou.</p>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <ClipboardList className="h-12 w-12 mx-auto mb-4" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3" style={{ color: amareloBaunilha }}>Sem climão</h3>
                <p className="text-gray-300">Linguagem humana, sem constrangimento.</p>
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
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Preencha a planilha</h3>
                  <p className="text-gray-700">Envie os clientes em atraso. Simples e rápido.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: verdeMusgo }}>
                  <span className="text-2xl font-bold" style={{ color: amareloBaunilha }}>2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>A IA dispara as mensagens</h3>
                  <p className="text-gray-700">Escolhe o canal certo e envia automaticamente.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: verdeMusgo }}>
                  <span className="text-2xl font-bold" style={{ color: amareloBaunilha }}>3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Receba o relatório</h3>
                  <p className="text-gray-700">Veja status de abertura, pagamento e conversão.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: verdeMusgo }}>
                  <Zap className="h-6 w-6" style={{ color: verdeMenta }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: verdeMusgo }}>Reenvio e agendamento</h3>
                  <p className="text-gray-700">Reenvio automático, agendamento e link de pagamento embutido.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONALIZAÇÃO POR PORTE */}
      <section style={{ background: verdeMusgo }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: amareloBaunilha }}>
              Se adapta ao seu tamanho e sistema
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead>
                  <tr style={{ background: verdeMenta }}>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: verdeMusgo }}>Perfil</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: verdeMusgo }}>Entrega personalizada</th>
                  </tr>
                </thead>
                <tbody style={{ background: 'rgba(255,255,255,0.95)' }}>
                  <tr>
                    <td className="px-6 py-4 font-semibold" style={{ color: verdeMusgo }}>MEI / Autônomo</td>
                    <td className="px-6 py-4">WhatsApp Business simples + lembretes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold" style={{ color: verdeMusgo }}>PME</td>
                    <td className="px-6 py-4">Whats + SMS + e-mail com templates</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold" style={{ color: verdeMusgo }}>Média Empresa</td>
                    <td className="px-6 py-4">Integração com CRM / ERP / RD Station</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* EXEMPLO DE MENSAGEM */}
      <section id="exemplo" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: verdeMusgo }}>
              Exemplo de mensagem
            </h2>
            <div className="p-8 rounded-2xl shadow-lg" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <Mail className="h-8 w-8 mb-4" style={{ color: verdeMenta }} />
              <p className="text-lg mb-4">
                "Olá [Nome], tudo bem?<br />
                Seu pagamento referente ao serviço de [Produto/Serviço] venceu em [Data].<br />
                Segue link pra regularizar: [Link]<br />
                Qualquer dúvida, estamos à disposição.<br />
                — Equipe [Sua Empresa]"
              </p>
              <p className="text-sm text-gray-500">Personalizamos o tom: mais firme, educado ou comercial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-20" style={{ background: verdeMusgo }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: amareloBaunilha }}>
              Resultados reais
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <User className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <p className="text-gray-300 mb-4">"Recuperei R$ 1.200 em 2 dias só com as mensagens automáticas."</p>
                <p className="font-semibold" style={{ color: amareloBaunilha }}>Júlia</p>
                <p className="text-sm text-gray-400">Terapeuta holística</p>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <User className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <p className="text-gray-300 mb-4">"Antes eu esquecia de cobrar. Agora a IA faz isso por mim, sem climão."</p>
                <p className="font-semibold" style={{ color: amareloBaunilha }}>Carlos</p>
                <p className="text-sm text-gray-400">Dono de gráfica</p>
              </div>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <User className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <p className="text-gray-300 mb-4">"Transformei boletos vencidos em caixa rápido. Recomendo demais."</p>
                <p className="font-semibold" style={{ color: amareloBaunilha }}>Ana</p>
                <p className="text-sm text-gray-400">Loja online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGURANÇA E HUMANIZAÇÃO */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: verdeMusgo }}>
              Segurança e humanização
            </h2>
            <ul className="mb-8 space-y-3 text-lg">
              <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" style={{ color: verdeMenta }} /> Mensagens seguem LGPD e boas práticas</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} /> Personalização de nome, tom e serviço</li>
              <li className="flex items-center gap-2"><Lock className="h-5 w-5" style={{ color: verdeMenta }} /> Aprovação prévia opcional</li>
              <li className="flex items-center gap-2"><Brain className="h-5 w-5" style={{ color: verdeMenta }} /> Nada robótico, nada ofensivo</li>
            </ul>
            <p className="text-lg font-semibold text-center" style={{ color: verdeMusgo }}>
              Só cobrança profissional e educada.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Dúvidas Frequentes
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: verdeMusgo }}>Preciso de sistema ou CRM?</h3>
                <p className="text-gray-700">Não. Basta preencher uma planilha com os dados. A IA faz o resto.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: verdeMusgo }}>E se o cliente responder?</h3>
                <p className="text-gray-700">Você recebe a resposta direto e pode seguir a conversa.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: verdeMusgo }}>Funciona com Pix e boleto?</h3>
                <p className="text-gray-700">Sim. Dá pra embutir o link ou código.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: verdeMusgo }}>Tenho poucos clientes inadimplentes. Vale a pena?</h3>
                <p className="text-gray-700">Sim. Cada real recuperado com zero esforço é lucro com margem infinita.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: verdeMusgo }}>E se o cliente reclamar?</h3>
                <p className="text-gray-700">Você pode pausar ou ajustar a comunicação em qualquer momento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS E OFERTA */}
      <section id="planos" style={{ background: verdeMusgo }} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: amareloBaunilha }}>
              Planos CobrAI
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
                <ClipboardList className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">Starter — R$49/mês</span>
                <span className="text-base mt-2">Até 20 cobranças / mês (Whats ou e-mail)</span>
              </div>
              <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
                <ClipboardList className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">Pro — R$89/mês</span>
                <span className="text-base mt-2">Até 100 cobranças / mês + SMS</span>
              </div>
              <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
                <ClipboardList className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">Business — R$199/mês</span>
                <span className="text-base mt-2">Cobrança ilimitada + integração com sistema + relatório IA</span>
              </div>
            </div>
            <div className="mt-8 text-base" style={{ color: amareloBaunilha }}>
              Combo EG.OS: contrate junto com o Evergreen Flow ou DRE e ganhe 15% de desconto.
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: verdeMusgo }}>
              Bora recuperar o dinheiro que é seu?
            </h2>
            <p className="text-xl mb-8" style={{ color: verdeMenta }}>
              A IA faz a cobrança. Você recebe o Pix.
            </p>
            <Link 
              href="#planos" 
              className="px-8 py-4 rounded-lg font-semibold inline-block"
              style={{ background: verdeMenta, color: verdeMusgo }}
            >
              Começar agora com o CobrAI
            </Link>
            <div className="mt-6 text-base" style={{ color: verdeMusgo }}>
              Bônus de lançamento: sua primeira campanha gratuita com até 10 cobranças
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-SELL */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: verdeMusgo }}>
            Outros produtos Evergreen para potencializar sua gestão:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <BarChart2 className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">Evergreen Flow</span>
              <span className="text-base mt-2">Preveja o impacto do inadimplente no caixa</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <FileText className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">Evergreen DRE</span>
              <span className="text-base mt-2">Calcule o quanto o não pagamento afeta o lucro</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <ShieldCheck className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">Evergreen LegalBot</span>
              <span className="text-base mt-2">Gere carta de cobrança ou aviso de débito</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
