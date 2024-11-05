import { Send } from 'lucide-react';

type ChatInputProps = {
  message: string;
  isLoading: boolean;
  onMessageChange: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export function ChatInput({ message, isLoading, onMessageChange, onSubmit }: ChatInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onMessageChange((e.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={onSubmit} className="border-t border-gray-700 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Digite sua pergunta sobre física..."
          className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          Enviar
        </button>
      </div>
    </form>
  );
}
