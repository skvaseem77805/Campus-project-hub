'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { AIChat } from '@/components/AIChat';
import { Upload, Compass, Users, ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const studentId = localStorage.getItem('studentId');
    if (!studentId) {
      router.push('/auth');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Welcome to CRR PROJECT HUB</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Your Work Matters.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Your Campus Sees You.
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Showcase your academic projects to your campus community. Discover amazing work from your peers. Collaborate and grow together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/projects">
              <Button size="lg" className="gap-2">
                Explore Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/auth">
              <Button size="lg" variant="outline">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Problem Solver Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-y">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">AI Problem Solver</h2>
            <p className="text-muted-foreground">Get help with your projects based on your year</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { year: '1st Year', starts: '25', color: 'from-blue-500 to-blue-600' },
              { year: '2nd Year', starts: '24', color: 'from-purple-500 to-purple-600' },
              { year: '3rd Year', starts: '23', color: 'from-pink-500 to-pink-600' },
              { year: 'Final Year', starts: '22', color: 'from-orange-500 to-orange-600' }
            ].map((item) => (
              <div 
                key={item.year}
                className={`p-4 rounded-lg bg-gradient-to-br ${item.color} text-white text-center cursor-pointer hover:shadow-lg transition-shadow`}
              >
                <div className="font-semibold">{item.year}</div>
                <div className="text-sm opacity-90">Starts with {item.starts}</div>
              </div>
            ))}
          </div>
          
          <AIChat />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join CRR PROJECT HUB?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/upload">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Easy Upload</h3>
                <p className="text-sm text-muted-foreground">
                  Share your projects with just a link and description. Support for images, videos, and live demos.
                </p>
              </Card>
            </Link>
            
            <Link href="/projects">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Discover & Explore</h3>
                <p className="text-sm text-muted-foreground">
                  Browse amazing projects from your peers. Filter by year, department, and category.
                </p>
              </Card>
            </Link>
            
            <Link href="/collaborate">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Connect & Collaborate</h3>
                <p className="text-sm text-muted-foreground">
                  Find peers working on similar projects and form teams for future collaborations.
                </p>
              </Card>
            </Link>

            <Link href="/ai-generator">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">AI Code Generator</h3>
                <p className="text-sm text-muted-foreground">
                  Describe your project idea and let AI generate code with live preview. Perfect for learning.
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Showcase Your Work?</h2>
          <p className="text-lg opacity-90">
            Join hundreds of students who are already sharing their projects and growing their skills.
          </p>
          <Link href="/auth">
            <Button size="lg" variant="secondary">
              Start Uploading Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
