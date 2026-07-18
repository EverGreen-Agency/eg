# poc-hub

Projeto mínimo da Vercel que resolve o problema do `poc.evergreenmkt.com.br` "pelado":
qualquer acesso ao domínio base redireciona (302) para o Portfólio do site principal.

Os PoCs individuais continuam em subdomínios próprios (`rian.poc.evergreenmkt.com.br` etc.)
e NÃO passam por aqui — o wildcard `*.poc` já aponta cada um pro seu projeto.

## Deploy (uma vez)

```bash
cd poc-hub
vercel deploy --prod --yes --scope egmkts-projects
```

Depois, no dashboard da Vercel (passo humano, a CLI não faz):
Settings → Domains → Add `poc.evergreenmkt.com.br` (Production).

## DNS (HostGator — uma vez)

O wildcard `*.poc.evergreenmkt.com.br` NÃO cobre o domínio base `poc.evergreenmkt.com.br`.
Adicionar um CNAME dedicado:

```
poc.evergreenmkt.com.br → cname.vercel-dns.com
```
