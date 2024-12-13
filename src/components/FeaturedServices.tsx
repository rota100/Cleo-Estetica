import React from 'react';
import ServiceCard from './ui/ServiceCard';
import SectionTitle from './ui/SectionTitle';
import { FEATURED_SERVICES } from '../constants/services';

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Tratamentos em Destaque"
          subtitle="Conheça nossos tratamentos mais procurados"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;