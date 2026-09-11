import { getPaginaServico } from '@/config/paginas-servico'
import ServicoPage from '@/components/servico/ServicoPage'
import { servicoMetadata, servicoSchema } from '@/components/servico/seo'

const SLUG = 'consultoria-comercial'

export const metadata = servicoMetadata(SLUG)

export default function Page() {
  const dados = getPaginaServico(SLUG)!
  const schema = servicoSchema(SLUG)
  return (
    <>
      {schema?.map((bloco, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bloco) }}
        />
      ))}
      <ServicoPage dados={dados} />
    </>
  )
}
