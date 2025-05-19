# Configuração do Facebook Pixel

Este documento contém instruções para configurar o rastreamento do Facebook Pixel no site Evergreen Finance.

## Configuração do ambiente

1. Crie um arquivo `.env.local` na raiz do projeto (ou edite o existente) e adicione:

```
# Facebook Pixel
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=seu_pixel_id_aqui
```

Substitua `seu_pixel_id_aqui` pelo ID do seu Pixel do Facebook.

## Eventos rastreados

Os seguintes eventos estão configurados:

1. **PageView** - Rastreado automaticamente em todas as páginas
2. **ViewContent** - Quando o usuário visualiza a seção de preços
3. **InitiateCheckout** - Quando o usuário clica para iniciar um checkout com um plano específico

## Adicionar novos eventos

Para adicionar novos eventos, você pode utilizar as funções disponíveis em `src/lib/fpixel.ts`:

```javascript
import * as fbq from '@/lib/fpixel';

// Rastrear evento personalizado
fbq.event('NomeDoEvento', { parametro1: 'valor1', parametro2: 'valor2' });

// Rastrear evento de compra
fbq.trackPurchase('BRL', 297);
```

## Eventos padrão do Facebook

Os eventos padrão recomendados pelo Facebook incluem:

- ViewContent
- AddToCart
- InitiateCheckout
- AddPaymentInfo
- Purchase
- Lead
- CompleteRegistration

## Teste do Pixel

Para verificar se o Pixel está funcionando corretamente:

1. Instale a extensão "Facebook Pixel Helper" no Chrome
2. Navegue pelo site e verifique se os eventos estão sendo disparados
3. Verifique no Gerenciador de Eventos do Facebook se os eventos estão sendo recebidos

## Páginas de conversão para tráfego pago

Recomenda-se configurar os seguintes eventos como conversões para campanhas de tráfego pago:

1. **InitiateCheckout** - Para campanhas focadas em geração de interesse
2. **Purchase** - Para campanhas focadas em vendas 