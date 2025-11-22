import { Outlet } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <MadeWithApplaa />
    </div>
  );
}