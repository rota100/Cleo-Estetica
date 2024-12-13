import React from 'react';
import SectionTitle from './ui/SectionTitle';

const AboutProfessional = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Conheça Nossa Especialista"
          subtitle="Profissionalismo e dedicação para cuidar da sua beleza"
        />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-light to-primary rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative">
              <img
                src="https://i.ibb.co/TBVF2gt/IMG-20241212-WA0012.jpg"
                alt="Profissional de Estética"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">
              Especialista em Estética Avançada
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Cleo, uma profissional que chegou a Portugal há 30 anos e, em
                2000, decidiu dedicar-se à sua grande paixão: a estética. Após
                concluir o curso em 2003, começou de imediato a sua carreira na
                área, sempre em busca de aperfeiçoamento e novas formas de
                cuidar das suas clientes.
              </p>
              <p>
                Em 2014, Cleo abraçou um novo desafio e formou-se como
                formadora, com o objetivo de transmitir os seus conhecimentos e
                formar novos profissionais de estética. Durante o confinamento,
                movida pela vontade de oferecer um cuidado ainda mais atencioso
                e inovador, dedicou-se a estudar técnicas de limpeza de pele,
                com o foco em eliminar a dor e o desconforto na extração.
              </p>
              <p>
                Após muita pesquisa e experimentação, Cleo descobriu uma técnica
                americana que aprimorou ao longo dos anos. E foi em 2024 que
                alcançou o resultado desejado: o Método CR SEDA (Cleo Ribeiro),
                uma técnica totalmente indolor e sem o uso de aparelhos, que tem
                revolucionado a forma como tratamos a pele. Hoje, ela
                orgulhosamente ensina essa metodologia às suas alunas,
                transformando o mundo da estética!
              </p>
            </div>
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-primary-light mb-4">
                Especializações:
              </h4>
              <ul className="grid grid-cols-2 gap-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-light rounded-full mr-2"></span>
                  Estética Facial Avançada
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-light rounded-full mr-2"></span>
                  Drenagem Linfática
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-light rounded-full mr-2"></span>
                  Tratamentos Corporais
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-light rounded-full mr-2"></span>
                  Procedimentos Estéticos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProfessional;
