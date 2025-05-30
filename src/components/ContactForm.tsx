'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ ...status, loading: true });

    try {
      const payload = {
        nome: formData.nome.trim(),
        email: formData.email.trim(),
        mensagem: formData.mensagem.trim()
      };

      console.log('Enviando dados:', payload);

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('Resposta da API:', data);

      if (data.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Mensagem enviada com sucesso! Em breve entraremos em contato.'
        });
        setFormData({
          nome: '',
          email: '',
          mensagem: ''
        });
      } else {
        throw new Error(data.error || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: error instanceof Error ? 
          error.message : 
          'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
          Nome completo
        </label>
        <input
          type="text"
          value={formData.nome}
          onChange={(e) => setFormData({...formData, nome: e.target.value})}
          className="w-full px-4 py-3 rounded-xl bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] placeholder-[#FFF4C7]/50 focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
          placeholder="Seu nome"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
          Email corporativo
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-3 rounded-xl bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] placeholder-[#FFF4C7]/50 focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
          placeholder="seu@empresa.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
          Qual seu maior desafio hoje?
        </label>
        <textarea
          value={formData.mensagem}
          onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
          className="w-full px-4 py-3 rounded-xl bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] placeholder-[#FFF4C7]/50 focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
          rows={4}
          placeholder="Conte um pouco sobre o que você quer resolver/escalar"
          required
        />
      </div>

      {status.message && (
        <div className={`p-4 rounded-xl ${
          status.success ? 'bg-[#3AC97B]/10 text-[#FFF4C7] border border-[#3AC97B]/20' : 
          status.error ? 'bg-red-900/10 text-[#FFF4C7] border border-red-500/20' : ''
        }`}>
          {status.message}
        </div>
      )}

      <button 
        type="submit" 
        disabled={status.loading}
        className="w-full px-8 py-4 text-lg font-medium rounded-xl text-[#09231B] bg-[#3AC97B] hover:bg-[#3AC97B]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status.loading ? 'Enviando...' : 'Bora escalar isso juntos 🚀'}
      </button>
    </form>
  );
}
