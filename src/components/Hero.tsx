import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  const handleCallNow = () => {
    window.location.href = 'tel:935820772';
  };

  const handleSchedule = () => {
    window.open('https://wa.me/351935820772', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://i.ibb.co/VxhcDvr/Tenha-mais-resultados-com-Intelig-ncia-artificial-e-automa-o.png)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Cleo Estética
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up">
            Destaque sua beleza natural com tratamentos personalizados e
            tecnologia avançada
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleCallNow}
              className="group bg-primary-light hover:bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5 text-white group-hover:animate-bounce" />
              <span>Ligue Agora</span>
            </button>
            <button
              onClick={handleSchedule}
              className="group bg-white hover:bg-gray-100 text-primary-light px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5 text-primary-light group-hover:animate-bounce" />
              <span>Marque Pelo WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/351935820772"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-primary-light hover:bg-primary text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-50 animate-pulse hover:animate-none"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
