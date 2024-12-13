import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cleo Estética</h3>
            <p className="text-gray-400">Sua beleza em boas mãos</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-400">Rua de Santa Catarina, 1500</p>
            <p className="text-gray-400">4000-488 Porto</p>
            <p className="text-gray-400">Whatapp 932 323 332</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <p className="text-gray-400">Segunda a Sexta: 10h às 19h</p>
            <p className="text-gray-400">Sábado: 10h às 13h</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
