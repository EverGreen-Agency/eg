import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { validateClientToken, getClientInfo } from '@/config/client-tokens';

const resend = new Resend('re_TdTUQuRP_ApBnRNCDPXggT1ii6r7Su9BP');

// Rate limiting - armazenamento em memória (em produção, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 1000; // 10 segundos
  const maxRequests = 1;

  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}


export async function POST(request: Request) {
  const startTime = Date.now();
  const clientIP = request.headers.get('x-forwarded-for') || 
                   request.headers.get('x-real-ip') || 
                   'unknown';

  try {
    // Rate limiting
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { success: false, error: 'Muitas tentativas. Tente novamente em 10 segundos.' },
        { status: 429 }
      );
    }

    const body = await request.text();
    console.log(`Check-in request from IP: ${clientIP}, timestamp: ${new Date().toISOString()}`);

    let data;
    try {
      data = JSON.parse(body);
    } catch (e) {
      console.log(`Invalid JSON from IP: ${clientIP}`);
      return NextResponse.json(
        { success: false, error: 'Dados inválidos' },
        { status: 400 }
      );
    }

    const {
      // Identificação
      data: dataRelatorio,
      clientSlug,
      honeypot,
      
      
      // Operação Loja Física
      fluxo_pessoas,
      atendimentos_realizados,
      vendas_loja,
      receita_loja,
      recompra,
      ruptura_estoque,
      ruptura_descricao,
      maquina_ociosa,
      tempo_ocioso,
      
      // Qualitativo
      obstaculos,
      observacoes
    } = data;

    // Validação de honeypot
    if (honeypot && honeypot.trim() !== '') {
      console.log(`Honeypot triggered from IP: ${clientIP}`);
      return NextResponse.json(
        { success: false, error: 'Requisição inválida' },
        { status: 400 }
      );
    }

    // Validação de token
    if (!clientSlug || !validateClientToken(clientSlug)) {
      console.log(`Invalid token from IP: ${clientIP}, token: ${clientSlug}`);
      return NextResponse.json(
        { success: false, error: 'Token de acesso inválido' },
        { status: 401 }
      );
    }

    // Validações básicas
    if (!dataRelatorio) {
      return NextResponse.json(
        { success: false, error: 'Data é obrigatória' },
        { status: 400 }
      );
    }

    // Cálculo de métricas da loja física
    const ticket_medio_loja = vendas_loja > 0 && receita_loja > 0 ? receita_loja / vendas_loja : 0;
    const conversao_loja = fluxo_pessoas > 0 && vendas_loja > 0 ? (vendas_loja / fluxo_pessoas) * 100 : 0;

    // Informações do cliente
    const clientInfo = getClientInfo(clientSlug);
    if (!clientInfo) {
      return NextResponse.json(
        { success: false, error: 'Cliente não encontrado' },
        { status: 404 }
      );
    }

    // Formatação da data
    const dataFormatada = new Date(dataRelatorio).toLocaleDateString('pt-BR');

    // Envio do email
    const emailResponse = await resend.emails.send({
      from: 'contato@evergreenmkt.com.br',
      to: 'adm@evergreenmkt.com.br',
      replyTo: clientInfo.email,
      subject: `Check-in Omnicanal - ${clientInfo.name} - ${dataFormatada}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #10b981, #3b82f6); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-size: 24px;">Check-in Omnicanal</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">${clientInfo.name} - ${dataFormatada}</p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #374151; margin-top: 0;">Métricas do Dia</h3>
              
              <!-- Operação Loja Física -->
              <div style="background: #fff7ed; padding: 15px; border-radius: 6px; margin-bottom: 15px; border-left: 4px solid #ea580c;">
                <h4 style="margin-top: 0; color: #9a3412;">Operação Loja Física</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
                  <div><strong>Fluxo de pessoas:</strong> ${fluxo_pessoas}</div>
                  <div><strong>Atendimentos realizados:</strong> ${atendimentos_realizados}</div>
                  <div><strong>Vendas loja:</strong> ${vendas_loja}</div>
                  <div><strong>Receita loja:</strong> R$ ${receita_loja.toFixed(2)}</div>
                  <div><strong>Recompra:</strong> ${recompra}</div>
                  ${maquina_ociosa ? `<div style="color: #dc2626;"><strong>Máquina ociosa:</strong> SIM${tempo_ocioso > 0 ? ` (${tempo_ocioso}h)` : ''}</div>` : ''}
                </div>
                ${ruptura_estoque ? `
                  <div style="background: #fef2f2; padding: 10px; border-radius: 4px; border-left: 4px solid #ef4444; margin-top: 10px;">
                    <strong>Ruptura de estoque:</strong><br>
                    ${ruptura_descricao}
                  </div>
                ` : ''}
              </div>
              
              <div style="background: #f0f9ff; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                <h4 style="margin-top: 0; color: #1e40af;">Métricas Calculadas</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                  ${ticket_medio_loja > 0 ? `<div><strong>Ticket Médio Loja:</strong> R$ ${ticket_medio_loja.toFixed(2)}</div>` : ''}
                  ${conversao_loja > 0 ? `<div><strong>Conversão Loja:</strong> ${conversao_loja.toFixed(1)}%</div>` : ''}
                </div>
              </div>
              
              
              ${obstaculos ? `
                <div style="margin-bottom: 15px;">
                  <strong>Principais obstáculos:</strong><br>
                  <div style="background: #fef2f2; padding: 10px; border-radius: 4px; border-left: 4px solid #ef4444;">
                    ${obstaculos}
                  </div>
                </div>
              ` : ''}
              
              ${observacoes ? `
                <div style="margin-bottom: 15px;">
                  <strong>📝 Observações:</strong><br>
                  <div style="background: #f0f9ff; padding: 10px; border-radius: 4px; border-left: 4px solid #3b82f6;">
                    ${observacoes}
                  </div>
                </div>
              ` : ''}
            </div>
            
            <div style="text-align: center; color: #6b7280; font-size: 14px;">
              <p>Relatório enviado automaticamente via sistema de check-in</p>
              <p>IP: ${clientIP} | Timestamp: ${new Date().toISOString()}</p>
            </div>
          </div>
        </div>
      `
    });

    // Log de sucesso
    const processingTime = Date.now() - startTime;
    console.log(`Check-in successful - Client: ${clientInfo.name}, IP: ${clientIP}, Processing time: ${processingTime}ms`);

    return NextResponse.json({ 
      success: true, 
      data: emailResponse,
      metrics: { 
        ticket_medio_loja, 
        conversao_loja
      }
    });

  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error(`Check-in error - IP: ${clientIP}, Processing time: ${processingTime}ms, Error:`, error);
    
    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
