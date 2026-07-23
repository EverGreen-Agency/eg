import Card from './Card'

const services = [
  {
    title: 'Tradução',
    description: 'Traduções profissionais para diversos idiomas',
    icon: '/icons/translate.svg',
    link: '/servicos/traducao'
  },
  {
    title: 'Fitness',
    description: 'Programas de treinamento personalizados',
    icon: '/icons/fitness.svg',
    link: '/servicos/fitness'
  },
  {
    title: 'CRM',
    description: 'Gestão de relacionamento com clientes',
    icon: '/icons/crm.svg',
    link: '/servicos/crm'
  },
  {
    title: 'Finanças',
    description: 'Consultoria financeira especializada',
    icon: '/icons/finance.svg',
    link: '/servicos/financas'
  },
  {
    title: 'Despesas',
    description: 'Controle e gestão de despesas',
    icon: '/icons/expenses.svg',
    link: '/servicos/despesas'
  },
  {
    title: 'Agro',
    description: 'Soluções para o agronegócio',
    icon: '/icons/agro.svg',
    link: '/servicos/agro'
  }
]

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Nossos Serviços
        </h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Conheça nossa variedade de serviços especializados para atender suas necessidades
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
} 