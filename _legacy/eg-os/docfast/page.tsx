import { Metadata } from 'next';
import Link from 'next/link';
import {
  FileStack,
  FileText,
  User,
  Users,
  Building2,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
  BookOpen,
  MessageCircle,
  Timer,
  Mail,
  ClipboardList,
  PhoneCall,
  BarChart2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Evergreen DocFast - Formalização sem Burocracia',
  description: 'Abra empresa, registre marca e emita nota sem fila, sem erro e sem estresse. O DocFast resolve o caos burocrático pra você.',
};

export default function DocFastPage() {
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
              Abrir empresa, emitir nota e registrar marca.<br />
              <span style={{ color: verdeMenta }}>Tudo sem fila, sem estresse, sem erro.</span>
            </h1>
            <p className="text-xl mb-8 mt-4" style={{ color: verdeMenta }}>
              O <b>Evergreen DocFast</b> cuida da parte chata — pra você cuidar da parte que vende.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-base" style={{ color: amareloBaunilha }}>
                <FileStack className="h-5 w-5" style={{ color: verdeMenta }} /> Formalização completa
              </div>
              <div className="flex items-center gap-2 text-base" style={{ color: amareloBaunilha }}>
                <FileText className="h-5 w-5" style={{ color: verdeMenta }} /> Nota fiscal ativada
              </div>
              <div className="flex items-center gap-2 text-base" style={{ color: amareloBaunilha }}>
                <ShieldCheck className="h-5 w-5" style={{ color: verdeMenta }} /> Marca registrada
              </div>
              <div className="flex items-center gap-2 text-base" style={{ color: amareloBaunilha }}>
                <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} /> Orientação de especialistas + IA
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contato" 
                className="px-8 py-4 rounded-lg font-semibold border-none shadow-md"
                style={{ background: verdeMenta, color: verdeMusgo }}
              >
                Quero formalizar minha empresa
              </Link>
              <Link 
                href="#etapas" 
                className="px-8 py-4 rounded-lg font-semibold border-2"
                style={{ color: verdeMenta, borderColor: verdeMenta, background: 'transparent' }}
              >
                Ver etapas do processo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="py-20" style={{ background: amareloBaunilha }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: verdeMusgo }}>
              Por que a maioria desiste de formalizar?
            </h2>
            <div className="p-8 rounded-2xl shadow-lg mb-8" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><AlertTriangle className="h-6 w-6" style={{ color: '#e53e3e' }} />Formulários confusos no gov.br</li>
                <li className="flex items-center gap-3"><AlertTriangle className="h-6 w-6" style={{ color: '#e53e3e' }} />Falta de tempo pra ir na Junta Comercial</li>
                <li className="flex items-center gap-3"><AlertTriangle className="h-6 w-6" style={{ color: '#e53e3e' }} />Medo de errar e pagar multa</li>
                <li className="flex items-center gap-3"><AlertTriangle className="h-6 w-6" style={{ color: '#e53e3e' }} />Preguiça de entender alvará, MEI, CNPJ, ISS, INPI...</li>
              </ul>
              <div className="text-lg font-bold mt-6 text-center" style={{ color: '#e53e3e' }}>
                O resultado? Vende na informalidade, trava no crescimento e se esconde do cliente grande.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-20" style={{ background: verdeMenta + '22' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: verdeMusgo }}>
              O Evergreen DocFast resolve pra você:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <ClipboardList className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">Mapeamos tudo com formulário simples</span>
              </div>
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <FileText className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">Checklist de documentos e links oficiais</span>
              </div>
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <PhoneCall className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">Agendamento com parceiro especialista</span>
              </div>
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <Mail className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">Acompanhamento via WhatsApp até formalizar</span>
              </div>
            </div>
            <div className="text-center mt-10 text-base" style={{ color: verdeMusgo }}>
              Você não se perde. A gente te leva até o fim.
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20" style={{ background: amareloBaunilha }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Como Funciona
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <div className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: verdeMenta + '33', color: verdeMusgo }}>1</div>
                <ClipboardList className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <span className="text-center">Você responde um questionário inicial (em 3 minutos)</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <div className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: verdeMenta + '33', color: verdeMusgo }}>2</div>
                <FileText className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <span className="text-center">Recebe o passo a passo com links e documentos</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <div className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: verdeMenta + '33', color: verdeMusgo }}>3</div>
                <PhoneCall className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <span className="text-center">Conectamos com parceiro pra executar</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <div className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: verdeMenta + '33', color: verdeMusgo }}>4</div>
                <Mail className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <span className="text-center">Acompanhamos até finalizar com sucesso</span>
              </div>
            </div>
            <div className="mt-10 text-center" style={{ color: verdeMusgo }}>
              <BookOpen className="h-6 w-6 mx-auto mb-2" style={{ color: verdeMenta }} />
              <span>IA te avisa das etapas pendentes. Lembretes por WhatsApp. Tempo médio: 7 a 10 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONALIZAÇÃO */}
      <section className="py-20" style={{ background: verdeMenta + '22' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: verdeMusgo }}>
              Serve pra quem está começando — ou pra quem precisa colocar ordem na casa.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <User className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">MEI / Autônomo</span>
                <span className="text-sm text-center">Abertura de MEI, nota fiscal, marca</span>
              </div>
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <Users className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">PME</span>
                <span className="text-sm text-center">Contrato social, CNPJ, marca, emissão de nota</span>
              </div>
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <Building2 className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">Empresa média</span>
                <span className="text-sm text-center">Via contador/jurídico parceiro com acompanhamento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Depoimentos Reais
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center">
                <User className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <p className="text-gray-700 mb-4">“Eu tava 2 anos vendendo sem nota. Em 5 dias tava com tudo pronto.”</p>
                <p className="font-semibold text-gray-900">— Bianca, artesã</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center">
                <User className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <p className="text-gray-700 mb-4">“Abri meu MEI, emiti nota, e ainda registrei a marca. Sem sair de casa.”</p>
                <p className="font-semibold text-gray-900">— Paulo, designer</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center">
                <User className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <p className="text-gray-700 mb-4">“Minha marca tava sendo copiada. Agora tenho registro oficial e segurança.”</p>
                <p className="font-semibold text-gray-900">— Jéssica, cosméticos naturais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGURANÇA */}
      <section className="py-20" style={{ background: amareloBaunilha }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl shadow-lg text-center" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <ShieldCheck className="h-7 w-7" style={{ color: verdeMenta }} /> Segurança e Confiança
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <BookOpen className="h-5 w-5" style={{ color: verdeMenta }} />
                  <span>Usamos caminhos oficiais (gov.br, INPI, SEFAZ)</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                  <span>Você assina o que precisa com orientação</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <User className="h-5 w-5" style={{ color: verdeMenta }} />
                  <span>Entrega com acompanhamento humano + IA</span>
                </div>
              </div>
              <blockquote className="italic border-l-4 pl-4 mb-4" style={{ borderColor: verdeMenta }}>
                Nada de jeitinho. Tudo dentro da lei, e mais rápido.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: verdeMenta + '22' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Dúvidas Comuns
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <MessageCircle className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">Preciso sair de casa?</h3>
                <p className="text-gray-600">Não. Tudo é feito online com apoio de parceiros.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <Users className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">Vocês são contadores ou advogados?</h3>
                <p className="text-gray-600">Trabalhamos com parceiros registrados. A EG faz a ponte e organiza o processo.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <Timer className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">Demora quanto tempo pra ficar tudo pronto?</h3>
                <p className="text-gray-600">Em média 7 a 10 dias úteis, dependendo da sua cidade e tipo de serviço.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <ShieldCheck className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">Dá pra registrar só a marca?</h3>
                <p className="text-gray-600">Sim! Você pode contratar só a parte de INPI também.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <FileText className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">E se eu já tiver empresa?</h3>
                <p className="text-gray-600">A gente te ajuda a organizar a documentação e regularizar o que estiver pendente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Planos & Oferta
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-4">DocFast Start</h3>
                <p className="text-4xl font-bold" style={{ color: verdeMenta }}>R$149</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />Abertura de MEI + emissão de nota + checklist</li>
                </ul>
                <Link 
                  href="#contato" 
                  className="block w-full py-3 rounded-lg font-bold text-center transition shadow-md hover:brightness-90"
                  style={{ background: verdeMenta, color: verdeMusgo, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px 0 rgba(58,201,123,0.10)' }}
                >
                  Começar Agora
                </Link>
              </div>
              <div className="bg-white p-8 rounded-lg border-2 border-green-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" style={{ background: verdeMenta, color: verdeMusgo, padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600 }}>
                  Mais Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">DocFast Pro</h3>
                <p className="text-4xl font-bold" style={{ color: verdeMenta }}>R$297</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />Contrato Social + nota + registro de marca</li>
                </ul>
                <Link 
                  href="#contato" 
                  className="block w-full py-3 rounded-lg font-bold text-center transition shadow-md hover:brightness-90"
                  style={{ background: verdeMenta, color: verdeMusgo, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px 0 rgba(58,201,123,0.10)' }}
                >
                  Começar Agora
                </Link>
              </div>
              <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-4">DocFast Corporate</h3>
                <p className="text-4xl font-bold" style={{ color: verdeMenta }}>R$497</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />Via parceiro jurídico contábil com toda documentação + assinatura</li>
                </ul>
                <Link 
                  href="#contato" 
                  className="block w-full py-3 rounded-lg font-bold text-center transition shadow-md hover:brightness-90"
                  style={{ background: verdeMenta, color: verdeMusgo, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px 0 rgba(58,201,123,0.10)' }}
                >
                  Começar Agora
                </Link>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="font-semibold">Combo EG.OS: Contrate junto com LegalBot ou Evergreen Flow com desconto de 15%</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20" style={{ background: verdeMusgo }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center gap-6" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
              <h2 className="text-2xl font-bold mb-2" style={{ color: verdeMenta }}>
                Pronto pra deixar a informalidade pra trás?
              </h2>
              <p className="mb-4 text-lg" style={{ color: verdeMusgo, opacity: 0.85 }}>
                O DocFast te leva da ideia à empresa legalizada.<br />
                Sem fila. Sem erro. Sem estresse.
              </p>
              <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
                <Link 
                  href="#contato" 
                  className="px-8 py-4 rounded-lg font-bold text-center transition shadow-md hover:brightness-90"
                  style={{ background: verdeMenta, color: verdeMusgo, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px 0 rgba(58,201,123,0.10)' }}
                >
                  Começar minha formalização
                </Link>
                <Link 
                  href="#especialista" 
                  className="px-8 py-4 rounded-lg font-bold text-center border-2 transition hover:bg-[#0e3a27]"
                  style={{ color: verdeMenta, borderColor: verdeMenta, background: 'transparent', minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem' }}
                >
                  Falar com um especialista agora
                </Link>
              </div>
              <div className="mt-4 p-4 rounded-lg" style={{ background: amareloBaunilha }}>
                <p className="font-bold" style={{ color: verdeMenta }}>
                  Bônus: Registro de marca com taxa reduzida até sexta-feira!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-SELL */}
      <section className="py-20" style={{ background: verdeMenta + '22' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Soluções Completas para seu Negócio
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/eg-os/legalbot" className="block">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center">
                  <FileText className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                  <h3 className="text-xl font-semibold mb-3">Evergreen LegalBot</h3>
                  <p className="text-gray-600 text-center">Gera contratos e propostas</p>
                </div>
              </Link>
              <Link href="/eg-os/flow" className="block">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center">
                  <BarChart2 className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                  <h3 className="text-xl font-semibold mb-3">Evergreen Flow</h3>
                  <p className="text-gray-600 text-center">Organiza entradas e saídas da empresa nova</p>
                </div>
              </Link>
              <Link href="/eg-os/dre" className="block">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center">
                  <FileStack className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                  <h3 className="text-xl font-semibold mb-3">Evergreen DRE</h3>
                  <p className="text-gray-600 text-center">Relatório financeiro mensal já com CNPJ</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 