import React from 'react';
import { Sparkles } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <div
      className="group relative h-[400px] rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105"
      style={{ perspective: '1000px' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#3E6769]/90 via-[#3E6769]/60 to-transparent" />
      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#6AADA7]" />
          {title}
        </h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;