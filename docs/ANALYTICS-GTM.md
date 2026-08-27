# Analytics — Google Tag Manager

Como ligar a medição do site, e principalmente da `/growth`.

## O problema que isso resolve

A `/growth` empurra sete eventos para `window.dataLayer`. Sem o GTM carregado,
`window.dataLayer` é um array na memória do navegador que ninguém lê e que morre
quando a aba fecha. Foi assim que a página nasceu: instrumentada e sem destino.

O GTM **não guarda dado nenhum**. Ele é um roteador: lê o `dataLayer` e encaminha
para onde você configurar, sem precisar de deploy toda vez que mudar de ideia.

A corrente tem três elos, e ligar só o primeiro não produz relatório:

1. `NEXT_PUBLIC_GTM_ID` → carrega o roteador *(é o que o código faz)*
2. Dentro do GTM → uma tag do GA4 e um gatilho para os eventos
3. Uma propriedade GA4 → onde o dado aterrissa e vira relatório

## 1. Container

Em [tagmanager.google.com](https://tagmanager.google.com), se ainda não existir um
container para `evergreenmkt.com.br`: **Criar conta** → conta `EverGreen` →
container `evergreenmkt.com.br` → plataforma **Web**.

O ID aparece no topo do painel, no formato `GTM-XXXXXXX`. É esse o valor.

## 2. Variável de ambiente

**Na Vercel:** projeto do site → **Settings** → **Environment Variables** →
`NEXT_PUBLIC_GTM_ID` com o valor, marcando Production (e Preview, se quiser
testar antes de valer para todo mundo).

> **A parte que engana.** Variáveis `NEXT_PUBLIC_*` são embutidas no bundle **no
> momento do build**. Salvar na Vercel não muda o deploy que já está no ar — é
> preciso disparar um deploy novo depois. Foi exatamente esse o mecanismo do bug
> do CTA da `/growth`: a `NEXT_PUBLIC_EG_WHATSAPP_URL` estava documentada, o
> código a lia, e ela nunca existiu no ambiente.

**Local:** preencher a chave no `.env` (já está lá, vazia). Ver `.env.example`.

Sem a variável, `GoogleTagManager.tsx` retorna `null` e o build passa igual.

## 3. Tag e gatilho no GTM

Dá para criar sete gatilhos, um por evento. Não faça isso — um gatilho com regex
e uma tag resolvem tudo e não precisam de manutenção quando surgir evento novo.

**Gatilho** — *Acionadores → Novo → Evento personalizado*:

- Nome do evento:
  `^(presentation_started|section_viewed|method_viewed|case_viewed|cta_clicked|whatsapp_clicked|presentation_completed)$`
- Marque **usar correspondência de regex**

**Variáveis** — *Variáveis → Novo → Variável da camada de dados*, uma para cada
nome abaixo (o nome da variável da camada de dados tem que bater exatamente):

| Variável | Vem de |
|---|---|
| `prospect` | a etiqueta `?p=` do link enviado |
| `section` | `section_viewed` |
| `method` | `method_viewed` |
| `case` | `case_viewed` |

**Tag** — *Tags → Novo → Google Analytics: evento do GA4*:

- Nome do evento: `{{Event}}` — reaproveita o nome que veio do `dataLayer`
- Parâmetros do evento: `prospect`, `section`, `method`, `case`, cada um apontando
  para a variável correspondente
- Acionamento: o gatilho acima

Publique o container. Sem publicar, nada sai do rascunho.

## 4. GA4: registrar as dimensões

Parâmetro de evento que não vira **dimensão personalizada** não aparece em
relatório — o dado chega, fica guardado e você não consegue segmentar por ele.
É o passo que todo mundo esquece.

No GA4: **Admin → Definições personalizadas → Criar dimensão personalizada**,
escopo **Evento**, uma para cada parâmetro (`prospect`, `section`, `method`,
`case`).

Dimensão nova só passa a popular a partir do momento em que é criada. Ela não
preenche o histórico.

## 5. A etiqueta do prospect (`?p=`)

O GA4 sozinho responde *"23 pessoas viram a seção 5"*. Numa peça que acompanha
proposta, a pergunta real é **"o Rian abriu? chegou até onde?"**.

Por isso a `/growth` aceita `?p=` e manda o valor junto em **todos** os eventos:

```
https://evergreenmkt.com.br/growth?p=rian
https://evergreenmkt.com.br/growth?p=univet&case=univet
https://evergreenmkt.com.br/growth?p=kontes&lang=en
```

Combina com os outros parâmetros: dá para mandar o link já abrindo no case que
interessa àquele prospect, no idioma dele, e ainda saber que foi ele.

Regras do valor: minúsculas, letras, números, hífen e underscore, até 40
caracteres. Qualquer outra coisa é descartada — o valor vai parar em relatório.

O parâmetro **sobrevive à navegação**: abrir um módulo ou um case reescreve a URL
preservando `p` e `lang`. Antes disso a URL era remontada do zero e o `?lang=en`
se perdia ao abrir qualquer coisa.

Como usar na prática: uma etiqueta por proposta enviada, o nome da empresa serve
bem. No GA4, *Explorar* → dimensão `prospect` → aí você vê a sessão daquela
pessoa, quais seções ela viu e se chegou no `whatsapp_clicked`.

> Isso é identificação de quem recebeu o link, não de quem navega. Não use dado
> pessoal na etiqueta — nome de empresa ou apelido do negócio, nunca e-mail,
> telefone ou CPF.

## 6. Consentimento

`GoogleTagManager.tsx` só injeta o container **depois do aceite** no banner de
cookies (`localStorage.cookie_consent === 'accepted'`). O `CookieConsent` dispara
um evento de janela ao aceitar, e o componente escuta — não precisa recarregar.

Consequência prática: **quem recusa cookies não é medido**, e isso é o
comportamento correto. Se os números parecerem baixos, é essa a razão antes de
qualquer outra.

## 7. Testar

**Sem GTM ainda**, dá para conferir que os eventos saem. No console, na `/growth`:

```js
window.dataLayer
```

Deve listar `presentation_started` e um `section_viewed` a cada seção. Se estiver
vazio, você não aceitou os cookies ou está numa build sem a variável.

**Com GTM**, use o **Preview** do painel do GTM (botão *Visualizar*): ele abre o
site com o depurador acoplado e mostra cada evento chegando e cada tag disparando.

## Armadilhas conhecidas

- Salvar a variável na Vercel **sem redeploy** não muda nada.
- Publicar o container é um passo separado de salvar a tag.
- Dimensão personalizada não retroage — crie antes de precisar do relatório.
- O Pixel da Meta ainda está no código (`FacebookPixel.tsx`, desligado na
  `/growth` por decisão de produto). Depois que o GTM estiver de pé, vale mover o
  Pixel para dentro dele e tirar o componente.
- `presentation_started` dispara **uma vez por carregamento**, não a cada troca de
  idioma. Se voltar a duplicar, alguém mexeu na trava `bootstrapped`.
