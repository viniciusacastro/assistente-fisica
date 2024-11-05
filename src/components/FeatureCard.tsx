import { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <Icon className="w-6 h-6 text-blue-400 mb-2" />
      <h2 className="font-semibold mb-2">{title}</h2>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}