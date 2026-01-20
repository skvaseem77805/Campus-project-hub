'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi! I\'m your AI Problem Solver. I can help you with project ideas, coding issues, best practices, and more. What would you like help with?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (in production, this would call an API)
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Great question! Based on your inquiry about "${input}", here are some helpful suggestions:\n\n1. Start by understanding the core concepts\n2. Break down your problem into smaller tasks\n3. Look for similar projects in our database\n4. Reach out to your peers for collaboration\n5. Check the documentation and best practices\n\nWould you like more specific guidance on any of these points?`
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const quickSuggestions = [
    { title: 'Project Ideas for my Year', icon: '💡' },
    { title: 'How to Solve Coding Errors', icon: '🐛' },
    { title: 'Best Practices for Documentation', icon: '📚' }
  ];

  return (
    <div className="space-y-4">
      {!isOpen ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {quickSuggestions.map((suggestion) => (
            <Button
              key={suggestion.title}
              variant="outline"
              className="justify-start h-auto py-3 bg-transparent"
              onClick={() => {
                setInput(suggestion.title);
                setIsOpen(true);
              }}
            >
              <span className="mr-2">{suggestion.icon}</span>
              <span className="text-left">{suggestion.title}</span>
            </Button>
          ))}
        </div>
      ) : (
        <Card className="p-4 space-y-4">
          <ScrollArea className="h-64 pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="flex gap-2">
            <Input
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              size="icon"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>

          <Button
            variant="ghost"
            className="w-full"
            onClick={() => setIsOpen(false)}
          >
            Close Chat
          </Button>
        </Card>
      )}
    </div>
  );
}
