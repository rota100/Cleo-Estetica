import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-primary-light mb-4">{title}</h2>
      <p className="text-primary text-lg">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;