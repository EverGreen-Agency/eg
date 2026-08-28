/**
 * Config flat do ESLint 9.
 *
 * Por que nao e `.eslintrc.json` com `next lint`: o repo tem eslint ^9 e
 * eslint-config-next ^15 nas devDependencies, mas next ^14 — e o `next lint` do
 * Next 14 usa a API antiga do ESLint, que a v9 removeu. Rodar por config flat
 * evita mexer em versao de dependencia so para ter lint.
 *
 * O `eslint-config-next` ainda exporta no formato eslintrc, entao entra pelo
 * FlatCompat.
 *
 * Contexto: ate 28/08/2026 o repo nao tinha lint nenhum. `next build` pula o
 * lint quando nao ha config, e por isso nada barrava <img> cru, dependencia de
 * hook errada ou variavel morta — tres achados da auditoria da /growth seriam
 * avisos automaticos.
 */
import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) })

export default [
  {
    ignores: [
      '_legacy/**',      // rotas aposentadas na Fase 0; ja fora do tsconfig
      'poc-hub/**',
      'out/**',
      '.next/**',
      'next-sitemap.config.js',
      'public/**',
    ],
  },
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      // Aviso, nao erro: o next.config.js esta com images.unoptimized, entao
      // trocar para next/image nao resolveria sozinho — precisa reduzir na
      // origem antes. Sinalizar sem travar o build.
      '@next/next/no-img-element': 'warn',
      'react-hooks/exhaustive-deps': 'warn',

      // Aviso, nao erro. Os 22 casos existentes sao aspas retas dentro de texto
      // de paginas legais e da newsletter — renderizam corretamente, e reescrever
      // copy juridica por regra cosmetica troca risco real por ganho nenhum.
      // A regra fica ligada para pegar os proximos.
      'react/no-unescaped-entities': 'warn',
    },
  },
]
