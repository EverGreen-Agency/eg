# 📸 Guia de Imagens - Caderno de Memórias da Infância

## 🎯 Imagens Atuais

### ✅ Imagens Disponíveis
- **Logo**: `/images/caderno-logo.png` - Logo principal do produto
- **Mockup Principal**: `/images/3dLivro.png` - Imagem 3D do caderno

### 📋 Imagens Necessárias

#### Mockups das Páginas do Caderno
Para uma demonstração completa, seria ideal ter imagens específicas de cada página:

1. **Página da Árvore Genealógica** (`/images/caderno/pagina-arvore.png`)
   - Mostrar espaço para desenhar árvore genealógica
   - Incluir avós, pais, tios, primos
   - Elementos aquarela

2. **Página dos Sonhos** (`/images/caderno/pagina-sonhos.png`)
   - Espaço para desenhar sonhos
   - Texto explicativo
   - Elementos oníricos

3. **Mensagem dos Pais** (`/images/caderno/pagina-mensagem.png`)
   - Espaço para mensagem especial
   - Moldura decorativa
   - Data e assinatura

4. **Página de Conquistas** (`/images/caderno/pagina-conquistas.png`)
   - Espaço para certificados
   - Medalhas e troféus
   - Momentos de orgulho

5. **Sobre Mim** (`/images/caderno/pagina-sobre-mim.png`)
   - Dados pessoais
   - Preferências
   - Características físicas

6. **Minha Família** (`/images/caderno/pagina-familia.png`)
   - Fotos da família
   - Tradições
   - Momentos especiais

7. **Meus Amigos** (`/images/caderno/pagina-amigos.png`)
   - Lista de amigos
   - Brincadeiras favoritas
   - Escola

8. **Viagens e Passeios** (`/images/caderno/pagina-viagens.png`)
   - Lugares visitados
   - Experiências
   - Fotos de viagens

9. **Festas Especiais** (`/images/caderno/pagina-festas.png`)
   - Aniversários
   - Natal
   - Dia das Crianças

10. **Sentimentos e Sonhos** (`/images/caderno/pagina-sentimentos.png`)
    - O que me faz feliz
    - Medos e preocupações
    - Sonhos para o futuro

## 🎨 Especificações Técnicas

### Dimensões Recomendadas
- **Logo**: 200x200px (PNG com transparência)
- **Mockups**: 400x500px (PNG ou JPG)
- **Páginas**: 400x500px (PNG com transparência)

### Estilo Visual
- **Estética**: Aquarela suave
- **Cores**: Paleta pastel (rosa, azul, amarelo, verde)
- **Elementos**: Bordas irregulares, texturas translúcidas
- **Tipografia**: Manuscrita e arredondada

## 🔧 Como Adicionar Novas Imagens

### 1. Colocar a imagem no diretório correto
```bash
# Para mockups principais
/public/images/nome-da-imagem.png

# Para páginas específicas
/public/images/caderno/pagina-nome.png
```

### 2. Atualizar a configuração
Editar o arquivo `src/config/caderno-images.ts`:

```typescript
export const cadernoImages = {
  // Adicionar nova imagem
  novaImagem: '/images/nova-imagem.png',
  
  pages: {
    // Adicionar nova página
    novaPagina: '/images/caderno/pagina-nova.png'
  }
};
```

### 3. Usar nos componentes
```tsx
import { cadernoImages } from '@/config/caderno-images';

// Usar a imagem
<Image src={cadernoImages.novaImagem} alt="Descrição" />
```

## 📱 Responsividade

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

### Otimizações
- **Lazy Loading**: Imagens carregam conforme necessário
- **WebP**: Formato otimizado quando disponível
- **Compressão**: Imagens otimizadas para web

## 🎯 Elementos Flutuantes

### Configuração por Seção
```typescript
export const floatingElements = {
  hero: ["💖", "⭐", "🎨", "🌟"],
  demo: ["✨", "💖", "🎨", "⭐"],
  benefits: ["💝", "✏️", "🎨", "🌟"],
  // ... outras seções
};
```

### Personalização
- **Ícones**: Emojis ou ícones SVG
- **Animações**: Bounce, pulse, fade
- **Posições**: Top, bottom, left, right
- **Delays**: Diferentes tempos de animação

## 🚀 Próximos Passos

### Imagens Prioritárias
1. ✅ Logo principal
2. ✅ Mockup 3D principal
3. 🔄 Mockups das páginas específicas
4. 🔄 Screenshots de uso real
5. 🔄 Depoimentos com fotos

### Melhorias Futuras
- **GIFs animados** para demonstração
- **Vídeos** de uso do produto
- **Galeria interativa** de páginas
- **Zoom** nas imagens
- **Comparação** antes/depois

## 📊 Performance

### Métricas Importantes
- **Tempo de carregamento**: < 3s
- **Tamanho das imagens**: < 500KB cada
- **Formato**: PNG para transparência, JPG para fotos
- **Lazy loading**: Implementado

### Ferramentas Recomendadas
- **TinyPNG**: Compressão de imagens
- **Squoosh**: Otimização online
- **ImageOptim**: Ferramenta desktop
- **Next.js Image**: Otimização automática
