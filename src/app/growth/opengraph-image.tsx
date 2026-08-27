import { ImageResponse } from 'next/og'

// O build node do @vercel/og quebra no Windows (fileURLToPath / Invalid URL).
export const runtime = 'edge'

export const alt = 'EverGreen — Consultoria Executiva de Growth pelo Sistema Raiz'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * A /growth e distribuida colando o link no WhatsApp, ao lado da proposta.
 * Sem esta imagem o preview vinha como texto cru — que e a primeira impressao
 * da apresentacao, e acontece antes do clique.
 */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#09231B',
          padding: '72px 80px',
          fontFamily: 'Helvetica, Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: '#3AC97B',
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: 25,
              color: '#FFF4C7',
              letterSpacing: '0.16em',
              fontWeight: 700,
            }}
          >
            EVERGREEN
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 30,
              color: '#3AC97B',
              letterSpacing: '0.2em',
              marginBottom: 26,
            }}
          >
            SISTEMA RAIZ EG
          </div>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.03,
              color: '#FFF4C7',
              fontWeight: 700,
              letterSpacing: '-0.035em',
            }}
          >
            Consultoria Executiva
          </div>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.03,
              color: '#3AC97B',
              fontWeight: 700,
              letterSpacing: '-0.035em',
            }}
          >
            de Growth.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 27,
            color: '#9FBBAA',
            letterSpacing: '0.06em',
          }}
        >
          Raiz · Tronco · Ramos · Copa — do Raio-X Comercial ao Retainer
        </div>
      </div>
    ),
    size,
  )
}
