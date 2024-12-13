import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { SERVICE_LIST } from '../constants/serviceList';

const AllServices = () => {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nossos Serviços"
          subtitle="Conheça todos os nossos tratamentos especializados"
        />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-primary-light/10 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Estética Facial</h3>
            <ul className="space-y-4">
              {SERVICE_LIST.facial.map((service, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-light rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary-light/10 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Estética Corporal</h3>
            <ul className="space-y-4">
              {SERVICE_LIST.corporal.map((service, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-light rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServices;