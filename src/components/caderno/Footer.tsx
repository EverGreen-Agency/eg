'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#FFF0B5] to-[#2C3E50] py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#F5B6C1] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#A5D8F3] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#C1E8C5] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                Caderno de Memórias da Infância
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Cultive histórias, fortaleça laços. Transforme momentos simples em memórias eternas que seu filho vai guardar para sempre.
              </p>
              <div className="flex items-center gap-2 text-white/80">
                <span className="text-2xl">💖</span>
                <span className="text-lg font-semibold">Mais de 1000 famílias satisfeitas</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors duration-300">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#demonstracao" className="hover:text-white transition-colors duration-300">
                  Demonstração
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors duration-300">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-white transition-colors duration-300">
                  Oferta
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">
              Contato
            </h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-xl">📧</span>
                <span>contato@cadernomemorias.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📱</span>
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🕒</span>
                <span>Seg-Sex: 9h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Copyright */}
            <div className="text-white/60 text-center md:text-left">
              <p>&copy; 2024 Caderno de Memórias da Infância. Todos os direitos reservados.</p>
              <p className="mt-2">
                Feito com 💖 para famílias que valorizam momentos especiais
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <span className="text-xl">💬</span>
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para começar sua jornada de memórias?
            </h3>
            <p className="text-white/80 mb-6">
              Garante seu caderno agora e transforme momentos simples em tesouros eternos
            </p>
            <button className="bg-gradient-to-r from-[#F5B6C1] to-[#F8C4B4] hover:from-[#F8C4B4] hover:to-[#F5B6C1] text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Quero meu Caderno agora! ✨
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
