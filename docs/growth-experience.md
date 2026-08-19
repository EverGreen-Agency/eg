# Experiência Comercial — `/growth`

A apresentação é uma rota do projeto principal e será publicada em:

`https://evergreenmkt.com.br/growth`

## Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000/growth`.

## Configuração

O CTA principal usa `NEXT_PUBLIC_EG_WHATSAPP_URL`. Sem essa variável, o botão leva para `/contato`.

Exemplo:

```env
NEXT_PUBLIC_EG_WHATSAPP_URL=https://wa.me/55XXXXXXXXXXX?text=Quero%20conversar%20sobre%20Growth
```

## Links profundos

- `/growth#metodo`
- `/growth?explore=diagnostico`
- `/growth?case=kontes`

## Conteúdo

Textos, capacidades, cases e módulos do método ficam centralizados em `src/app/growth/data.ts`.

## Analytics

A experiência envia eventos para `window.dataLayer` quando ela existe:

- `presentation_started`
- `section_viewed`
- `method_viewed`
- `case_viewed`
- `cta_clicked`
- `whatsapp_clicked`
- `presentation_completed`
