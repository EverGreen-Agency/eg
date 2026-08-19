'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const immersiveRoute = pathname === '/growth' || pathname.startsWith('/growth/');

  if (immersiveRoute) return <>{children}</>;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
