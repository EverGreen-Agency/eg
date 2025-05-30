import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_TdTUQuRP_ApBnRNCDPXggT1ii6r7Su9BP');

export async function POST(request: Request) {
  try {
    const body = await request.text();
    console.log('Dados recebidos (raw):', body);

    let data;
    try {
      data = JSON.parse(body);
    } catch (e) {
      return NextResponse.json(
        { success: false, error: 'Dados inválidos' },
        { status: 400 }
      );
    }

    const { nome, email, mensagem } = data;

    const emailResponse = await resend.emails.send({
      from: 'contato@evergreenmkt.com.br',
      to: 'contato@evergreenmkt.com.br',
      replyTo: email,
      subject: `Novo contato de ${nome}`,
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `
    });

    return NextResponse.json({ success: true, data: emailResponse });
  } catch (error) {
    console.error('Erro detalhado:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
