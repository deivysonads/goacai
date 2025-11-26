import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-acai-950 text-gray-400 py-8 text-center text-sm border-t border-white/10">
      <div className="container mx-auto px-4">
        <p className="mb-2">&copy; {new Date().getFullYear()} Método Go Açaí. Todos os direitos reservados.</p>
        <p>Este site não faz parte do Facebook ou do Facebook Inc. Além disso, este site não é endossado pelo Facebook de nenhuma maneira.</p>
      </div>
    </footer>
  );
};