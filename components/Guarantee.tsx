import React from 'react';
import { Shield } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 inline-block">
          <Shield className="w-16 h-16 text-acai-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Garantia Incondicional de 7 Dias</h2>
          <p className="text-gray-600 mb-6">
            Se você entrar, assistir as aulas e perceber que não serve pra você, 
            eu devolvo seu dinheiro inteiro, sem perguntas.
            <br/><br/>
            <span className="font-bold text-acai-800">Você só paga se realmente sentir que valeu a pena.</span>
          </p>
        </div>
      </div>
    </section>
  );
};