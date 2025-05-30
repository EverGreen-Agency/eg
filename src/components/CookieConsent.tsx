"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setShow(true);
  }, []);

  function handleConsent(accepted: boolean) {
    localStorage.setItem("cookie_consent", accepted ? "accepted" : "rejected");
    setShow(false);
    // Aqui você pode disparar scripts/pixels se aceito
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <div className="bg-[#092B1B] text-[#FFF4C7] rounded-xl shadow-lg p-6 max-w-xl w-full flex flex-col md:flex-row items-center gap-4 border border-emerald-400">
        <span className="flex-1 text-base">
          Utilizamos cookies para melhorar sua experiência, analisar o tráfego e personalizar conteúdo. Saiba mais na <a href="/politica-de-privacidade" className="underline text-emerald-300">Política de Privacidade</a>.
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => handleConsent(true)}
            className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition"
          >
            Aceitar
          </button>
          <button
            onClick={() => handleConsent(false)}
            className="px-4 py-2 rounded-lg bg-transparent border border-emerald-500 text-emerald-300 font-bold hover:bg-emerald-900 transition"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
}
