import React from 'react';
import { Star } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const testimonials = [
  {
    name: 'Maria Silva',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    treatment: 'Limpeza de Pele CR SEDA',
    text: 'Experiência incrível! A limpeza de pele deixou minha pele super macia e radiante. A profissional foi super atenciosa e gentil durante todo o procedimento.',
    rating: 5,
    duration: '6 meses como cliente',
  },
  {
    name: 'Ana Santos',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    treatment: 'Drenagem Renata França',
    text: 'Resultados surpreendentes desde a primeira sessão! A drenagem reduziu muito o inchaço e me sinto muito mais leve. Super recomendo!',
    rating: 5,
    duration: '1 ano como cliente',
  },
  {
    name: 'Carolina Oliveira',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200',
    treatment: 'Dermaplaning',
    text: 'O dermaplaning transformou minha pele! Além de remover os pelos, deixou minha pele super lisa e com um brilho incrível. A maquiagem fica perfeita agora.',
    rating: 5,
    duration: '3 meses como cliente',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="O Que Dizem Nossos Clientes"
          subtitle="Experiências reais de quem já transformou sua beleza conosco"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.duration}
                  </p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#6AADA7] fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-4">{testimonial.text}</p>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-[#3E6769]">
                  Tratamento: {testimonial.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;