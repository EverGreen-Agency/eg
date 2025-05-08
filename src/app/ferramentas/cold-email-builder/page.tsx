'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCopy, FiRefreshCw } from 'react-icons/fi'

interface EmailForm {
  produto: string
  beneficio: string
  perfilCliente: string
  cta: string
  estilo: 'dor' | 'curiosidade' | 'desafio'
  resultadoNegativo?: string
  resultadoPositivo?: string
  tempoImplementacao?: string
}

const estilosEmail = [
  {
    id: 'dor',
    nome: 'Dor Direta',
    descricao: 'Ideal para leads que já sentem o problema e precisam de solução',
    icone: '🚑'
  },
  {
    id: 'curiosidade',
    nome: 'Curiosidade',
    descricao: 'Para leads mais frios que precisam ser atraídos',
    icone: '👀'
  },
  {
    id: 'desafio',
    nome: 'Desafio/Audácia',
    descricao: 'Para leads competitivos e ambiciosos',
    icone: '⚡'
  }
]

export default function ColdEmailBuilderPage() {
  const [formData, setFormData] = useState<EmailForm>({
    produto: '',
    beneficio: '',
    perfilCliente: '',
    cta: '',
    estilo: 'dor',
    resultadoNegativo: '',
    resultadoPositivo: '',
    tempoImplementacao: ''
  })
  const [generatedEmail, setGeneratedEmail] = useState<string>('')
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    generateEmail()
  }

  const generateEmail = () => {
    let assunto = ''
    let corpo = ''

    switch (formData.estilo) {
      case 'dor':
        assunto = `🚑 ${formData.beneficio} está te custando ${formData.resultadoNegativo}?`
        corpo = `Olá [Nome do Lead],

Sei que muitas empresas ${formData.perfilCliente} acabam sofrendo com problemas para alcançar ${formData.beneficio} — e isso impacta diretamente ${formData.resultadoNegativo}.

Nós desenvolvemos o ${formData.produto} justamente pra resolver esse gargalo: ${formData.beneficio}.

Se quiser, posso te mostrar em ${formData.cta} como podemos mudar esse cenário.

Que tal agendarmos uma conversa rápida?

Abraço,
[Seu Nome]
[Empresa]`
        break

      case 'curiosidade':
        assunto = `👀 Você já viu como empresas ${formData.perfilCliente} estão ${formData.resultadoPositivo}?`
        corpo = `Olá [Nome do Lead],

Descobrimos uma forma simples de ${formData.beneficio} para empresas ${formData.perfilCliente}, usando ${formData.produto} de maneira inteligente.

Sem promessas milagrosas — só uma aplicação prática que tem feito diferença real.

Se quiser, te mostro como funciona em ${formData.cta}.

Topa?

Abraço,
[Seu Nome]
[Empresa]`
        break

      case 'desafio':
        assunto = `⚡ A próxima empresa a ${formData.beneficio} pode ser a sua.`
        corpo = `Olá [Nome do Lead],

Empresas como ${formData.perfilCliente} que agem rápido conseguem ${formData.resultadoPositivo} antes dos concorrentes perceberem.

Com o ${formData.produto}, aceleramos ${formData.beneficio} em projetos que saíram do papel em menos de ${formData.tempoImplementacao}.

Quer ver como aplicar isso no seu negócio ainda este mês?

Só responder aqui. Vamos construir algo grande.

Abraço,
[Seu Nome]
[Empresa]`
        break
    }

    setGeneratedEmail(`${assunto}\n\n${corpo}`)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedEmail)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Falha ao copiar:', err)
    }
  }

  return (
    <main className="min-h-screen bg-[#09231B] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#3AC97B]">
              Cold Email Builder EG
            </h1>
            <p className="text-xl text-[#FFF4C7]/80 max-w-3xl mx-auto">
              Gere emails personalizados de alta conversão em segundos.<br />
              Escolha o estilo que mais combina com seu lead.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-[#09231B] rounded-2xl border border-[#3AC97B]/20 p-8 mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Estilo do Email */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {estilosEmail.map((estilo) => (
                  <div
                    key={estilo.id}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                      formData.estilo === estilo.id
                        ? 'border-[#3AC97B] bg-[#3AC97B]/10'
                        : 'border-[#3AC97B]/20 hover:border-[#3AC97B]/40'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, estilo: estilo.id as EmailForm['estilo'] }))}
                  >
                    <div className="text-2xl mb-2">{estilo.icone}</div>
                    <h3 className="font-bold mb-1 text-[#FFF4C7]">{estilo.nome}</h3>
                    <p className="text-sm text-[#FFF4C7]/80">{estilo.descricao}</p>
                  </div>
                ))}
              </div>

              {/* Campos base */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
                    Produto ou serviço
                  </label>
                  <input
                    type="text"
                    name="produto"
                    value={formData.produto}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
                    placeholder="Ex: Software de automação"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
                    Benefício principal
                  </label>
                  <input
                    type="text"
                    name="beneficio"
                    value={formData.beneficio}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
                    placeholder="Ex: aumentar vendas em 3x"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
                    Perfil do cliente ideal
                  </label>
                  <input
                    type="text"
                    name="perfilCliente"
                    value={formData.perfilCliente}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
                    placeholder="Ex: empresas B2B de tecnologia"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
                    Call to Action (CTA)
                  </label>
                  <input
                    type="text"
                    name="cta"
                    value={formData.cta}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
                    placeholder="Ex: uma demonstração de 30 minutos"
                    required
                  />
                </div>

                {/* Campos condicionais baseados no estilo */}
                {formData.estilo === 'dor' && (
                  <div>
                    <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
                      Resultado negativo
                    </label>
                    <input
                      type="text"
                      name="resultadoNegativo"
                      value={formData.resultadoNegativo}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
                      placeholder="Ex: perda de 30% em vendas"
                    />
                  </div>
                )}

                {formData.estilo === 'curiosidade' && (
                  <div>
                    <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
                      Resultado positivo
                    </label>
                    <input
                      type="text"
                      name="resultadoPositivo"
                      value={formData.resultadoPositivo}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
                      placeholder="Ex: dobrando o faturamento"
                    />
                  </div>
                )}

                {formData.estilo === 'desafio' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
                        Resultado positivo
                      </label>
                      <input
                        type="text"
                        name="resultadoPositivo"
                        value={formData.resultadoPositivo}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
                        placeholder="Ex: crescer 10x mais rápido"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
                        Tempo de implementação
                      </label>
                      <input
                        type="text"
                        name="tempoImplementacao"
                        value={formData.tempoImplementacao}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
                        placeholder="Ex: 2 semanas"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-[#3AC97B] text-[#09231B] px-8 py-3 rounded-xl hover:bg-[#3AC97B]/90 transition-colors font-medium"
                >
                  Gerar Email
                </button>
              </div>
            </form>

            {generatedEmail && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-[#FFF4C7]">Email Gerado</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={generateEmail}
                      className="p-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#3AC97B] hover:bg-[#3AC97B]/10 transition-colors"
                    >
                      <FiRefreshCw className="w-5 h-5" />
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className="p-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#3AC97B] hover:bg-[#3AC97B]/10 transition-colors"
                    >
                      <FiCopy className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-6">
                  <pre className="whitespace-pre-wrap font-mono text-[#FFF4C7]/90">
                    {generatedEmail}
                  </pre>
                </div>
                {copied && (
                  <p className="text-[#3AC97B] text-sm mt-2">
                    ✓ Copiado para a área de transferência
                  </p>
                )}
              </motion.div>
            )}
          </div>

          {/* CTA Final */}
          <div className="text-center">
            <Link href="/contato">
              <button className="inline-block bg-[#3AC97B] text-[#09231B] px-8 py-3 rounded-xl hover:bg-[#3AC97B]/90 transition-colors font-medium">
                Quero ajuda para otimizar minhas campanhas
              </button>
            </Link>
            <p className="mt-4 text-sm text-[#FFF4C7]/60">
              Agende uma consultoria gratuita para descobrir como podemos potencializar seus resultados
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
