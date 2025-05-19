'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import * as fbq from '@/lib/fpixel';

export default function PurchaseSuccessPage() {
  const searchParams = useSearchParams();
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    if (!loaded) {
      // Obter dados da transação da URL, enviados pelo Stripe
      const checkout_session_id = searchParams.get('checkout_session_id') || '';
      const amount = searchParams.get('amount') || '0';
      const currency = searchParams.get('currency') || 'BRL';
      const plan = searchParams.get('plan') || '';
      
      // Converter valor para número
      const numericAmount = parseFloat(amount) || 0;
      
      // Rastrear evento de compra
      if (numericAmount > 0) {
        fbq.trackPurchase(currency, numericAmount);
        
        // Evento personalizado com detalhes adicionais
        fbq.event('FinancePurchase', {
          currency,
          value: numericAmount,
          content_name: plan,
          transaction_id: checkout_session_id
        });
      }
      
      setLoaded(true);
    }
  }, [loaded, searchParams]);
  
  // Cores da marca
  const verdeMusgo = '#0b3a26';
  const verdeMenta = '#30c77b';
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: verdeMusgo }}>
      <div className="max-w-md w-full p-8 rounded-2xl bg-white shadow-xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6" style={{ background: `${verdeMenta}22` }}>
            <CheckCircle size={32} style={{ color: verdeMenta }} />
          </div>
          
          <h1 className="text-2xl font-bold mb-4" style={{ color: verdeMusgo }}>
            Compra realizada com sucesso!
          </h1>
          
          <p className="mb-8" style={{ color: verdeMusgo }}>
            Obrigado por escolher a Evergreen Finance. Você receberá um e-mail com os detalhes da sua compra e próximos passos.
          </p>
          
          <Link 
            href="/eg-finance"
            className="px-6 py-3 rounded-xl font-medium transition-colors"
            style={{ background: verdeMenta, color: verdeMusgo }}
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
} 