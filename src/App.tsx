import React, { useState } from 'react';
import { Atom, BookOpen, BrainCircuit, Lightbulb, Loader2 } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { FeatureCard } from './components/FeatureCard';
import { ChatInput } from './components/ChatInput';

function App() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([
    {
      role: 'assistant',
      content: 'Olá! Sou seu assistente especializado em física para ensino superior. Como posso ajudar você hoje? Você pode me perguntar sobre mecânica quântica, eletromagnetismo, termodinâmica, ou qualquer outro tópico de física.'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = { role: 'user', content: message };
    setChatHistory(prev => [...prev, newMessage]);
    setMessage('');
    setIsLoading(true);

    // Simulate AI response (replace this with actual OpenAI API call)
    setTimeout(() => {
      const response = {
        role: 'assistant',
        content: 'Esta é uma demonstração. Em um ambiente de produção, aqui seria integrada a resposta real da API do ChatGPT.'
      };
      setChatHistory(prev => [...prev, response]);
      setIsLoading(false);
    }, 1000);
  };

  const features = [
    {
      Icon: BookOpen,
      title: 'Conteúdo Especializado',
      description: 'Foco específico em física de nível superior'
    },
    {
      Icon: BrainCircuit,
      title: 'Aprendizado Interativo',
      description: 'Respostas detalhadas e explicativas'
    },
    {
      Icon: Lightbulb,
      title: 'Suporte Acadêmico',
      description: 'Auxílio em exercícios e conceitos'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Atom className="w-8 h-8 text-blue-400" />
          <h1 className="text-2xl font-bold">Assistente de Física</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Chat Interface */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 mb-4">
          <div className="h-[400px] overflow-y-auto p-4 space-y-4">
            {chatHistory.map((msg, index) => (
              <ChatMessage key={index} {...msg} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-700 rounded-lg p-3 flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processando resposta...</span>
                </div>
              </div>
            )}
          </div>

          <ChatInput
            message={message}
            isLoading={isLoading}
            onMessageChange={setMessage}
            onSubmit={handleSubmit}
          />
        </div>
      </main>
    </div>
  );
}

export default App;