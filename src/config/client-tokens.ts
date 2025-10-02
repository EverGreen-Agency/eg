// Configuração de tokens de clientes para o sistema de check-in
// Em produção, considere usar um banco de dados para armazenar essas informações

export interface ClientInfo {
  name: string;
  email: string;
  company?: string;
  active: boolean;
}

export interface ClientToken {
  token: string;
  clientInfo: ClientInfo;
  createdAt: Date;
  lastUsed?: Date;
}

// Mapeamento de tokens válidos
export const CLIENT_TOKENS: Record<string, ClientInfo> = {
  'kontes-token-2025': {
    name: 'Kontes',
    email: 'contato@kontes.com.br',
    company: 'Kontes',
    active: true
  },
  'cliente-001-token-abc123': {
    name: 'Cliente 001',
    email: 'cliente001@empresa.com',
    company: 'Empresa ABC Ltda',
    active: true
  },
  'cliente-002-token-def456': {
    name: 'Cliente 002', 
    email: 'cliente002@empresa.com',
    company: 'Empresa XYZ S.A.',
    active: true
  },
  'cliente-003-token-ghi789': {
    name: 'Cliente 003',
    email: 'cliente003@empresa.com', 
    company: 'Startup Tech',
    active: true
  }
};

// Função para validar token
export function validateClientToken(token: string): boolean {
  return token in CLIENT_TOKENS && CLIENT_TOKENS[token].active;
}

// Função para obter informações do cliente
export function getClientInfo(token: string): ClientInfo | null {
  if (!validateClientToken(token)) {
    return null;
  }
  return CLIENT_TOKENS[token];
}

// Função para listar todos os tokens ativos
export function getActiveTokens(): string[] {
  return Object.keys(CLIENT_TOKENS).filter(token => CLIENT_TOKENS[token].active);
}

// Função para gerar novo token (em produção, use crypto.randomBytes)
export function generateClientToken(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `cliente-${timestamp}-${random}`;
}
