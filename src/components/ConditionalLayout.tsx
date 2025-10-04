'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isAgroAIGuardianPage = pathname === '/agro-ai-guardian';
  const isCadernoMemoriasPage = pathname === '/caderno-memorias';

  if (isAgroAIGuardianPage || isCadernoMemoriasPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
} 