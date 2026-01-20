'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Compass, Upload, Users, LogOut, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear session/auth data
    localStorage.removeItem('studentId');
    localStorage.removeItem('year');
    router.push('/');
  };

  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('studentId');

  return (
    <nav className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">CRR</span>
            </div>
            <span className="font-bold hidden sm:inline">PROJECT HUB</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="gap-2">
                <Compass className="w-4 h-4" />
                Projects
              </Button>
            </Link>
            <Link href="/upload">
              <Button variant="ghost" size="sm" className="gap-2">
                <Upload className="w-4 h-4" />
                Upload
              </Button>
            </Link>
            <Link href="/collaborate">
              <Button variant="ghost" size="sm" className="gap-2">
                <Users className="w-4 h-4" />
                Collaborate
              </Button>
            </Link>
            <Link href="/ai-generator">
              <Button variant="ghost" size="sm" className="gap-2">
                <Zap className="w-4 h-4" />
                AI Generator
              </Button>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            ) : (
              <Link href="/auth">
                <Button size="sm">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
