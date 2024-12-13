import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { DIFERENCIAIS } from '../constants/diferenciais';

const Diferenciais = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nossos Diferenciais"
          subtitle="O que nos torna únicos no cuidado com sua beleza"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {DIFERENCIAIS.map((diferencial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <diferencial.icon className="w-8 h-8 text-[#6AADA7] mr-3" />
                <h3 className="text-xl font-semibold text-[#3E6769]">{diferencial.title}</h3>
              </div>
              <p className="text-gray-600">{diferencial.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;