'use client';

import React from "react"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function AuthPage() {
  const router = useRouter();
  const [registerNumber, setRegisterNumber] = useState('');
  const [selectedYear, setSelectedYear] = useState<'25' | '24' | '23' | '22' | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const years = [
    { prefix: '25', label: '1st Year', color: 'bg-blue-500' },
    { prefix: '24', label: '2nd Year', color: 'bg-purple-500' },
    { prefix: '23', label: '3rd Year', color: 'bg-pink-500' },
    { prefix: '22', label: 'Final Year', color: 'bg-orange-500' }
  ];

  const validateRegisterNumber = (regNum: string): boolean => {
    if (!regNum || regNum.length !== 10) {
      setError('Register number must be 10 characters long');
      return false;
    }

    const prefix = regNum.substring(0, 2);
    if (!['25', '24', '23', '22'].includes(prefix)) {
      setError('Invalid register number format. Must start with 25, 24, 23, or 22');
      return false;
    }

    return true;
  };

  const handleYearClick = (prefix: string) => {
    setSelectedYear(prefix as '25' | '24' | '23' | '22');
    setRegisterNumber(prefix);
    setError('');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateRegisterNumber(registerNumber)) {
      return;
    }

    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      localStorage.setItem('studentId', registerNumber);
      localStorage.setItem('year', selectedYear || '');
      router.push('/projects');
    }, 1000);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center relative"
      style={{ backgroundImage: 'url(/campus-bg.jpg)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-md mx-auto">
          <Card className="p-8 space-y-6 bg-background/95 backdrop-blur border-white/20">
            <div>
              <h1 className="text-3xl font-bold mb-2">Student Login</h1>
              <p className="text-muted-foreground">
                Enter your register number to access your account
              </p>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-3 block">
                  Select Your Year
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {years.map((year) => (
                    <button
                      key={year.prefix}
                      type="button"
                      onClick={() => handleYearClick(year.prefix)}
                      className={`p-3 rounded-lg text-center transition-all ${
                        selectedYear === year.prefix
                          ? `${year.color} text-white shadow-lg`
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      <div className="font-semibold">{year.label}</div>
                      <div className="text-xs opacity-75">Starts with {year.prefix}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="register" className="text-sm font-medium mb-2 block">
                  Register Number
                </label>
                <Input
                  id="register"
                  type="text"
                  placeholder="e.g., 24B81A50Q1"
                  value={registerNumber}
                  onChange={(e) => {
                    setRegisterNumber(e.target.value.toUpperCase());
                    setError('');
                  }}
                  maxLength={10}
                  className="font-mono"
                  required
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Password is the same as your register number
                </p>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading || !registerNumber}
                size="lg"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>

            <div className="pt-4 border-t">
              <p className="text-sm text-center text-muted-foreground">
                First time? Your account will be created automatically on first login.
              </p>
            </div>
          </Card>

          {/* Info Card */}
          <Card className="mt-6 p-4 bg-background/95 backdrop-blur border-white/20">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium mb-1">Secure Login</p>
                <p className="text-muted-foreground">
                  Your data is protected. Only your register number is needed to login.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
