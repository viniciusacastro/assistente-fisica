type ChatMessageProps = {
  role: string;
  content: string;
};

export function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'
        }`}
      >
        {content}
      </div>
    </div>
  );
}