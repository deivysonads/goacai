import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';

export const Pricing: React.FC = () => {
  return (
    <section id="offer" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-acai-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-acai-950 p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Oferta Especial de Lançamento</h2>
            <p className="text-acai-200">Acesso Imediato e Vitalício</p>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-gray-500 line-through">
                  <span>Receita Secreta</span>
                  <span>R$ 97,00</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 line-through">
                  <span>Estratégias de Venda</span>
                  <span>R$ 147,00</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 line-through">
                  <span>Precificação Profissional</span>
                  <span>R$ 59,00</span>
                </div>
                
                <div className="h-px bg-gray-200 my-6"></div>

                <ul className="space-y-3">
                   <li className="flex items-center gap-2 text-gray-700">
                     <Check className="text-green-500 w-5 h-5" />
                     <span>Acesso Vitalício ao Método</span>
                   </li>
                   <li className="flex items-center gap-2 text-gray-700">
                     <Check className="text-green-500 w-5 h-5" />
                     <span>Suporte para Dúvidas</span>
                   </li>
                   <li className="flex items-center gap-2 text-gray-700">
                     <Check className="text-green-500 w-5 h-5" />
                     <span>Atualizações Gratuitas</span>
                   </li>
                </ul>
              </div>

              <div className="text-center space-y-6">
                <p className="text-gray-600 font-medium">Você leva tudo isso hoje por:</p>
                <div className="flex justify-center items-end gap-2 text-acai-900">
                   <span className="text-2xl font-bold mb-2">R$</span>
                   <span className="text-7xl font-black tracking-tighter text-green-600">19,90</span>
                </div>
                
                <div className="w-full">
                  <Button fullWidth pulse>
                    QUERO VENDER AÇAÍ AGORA
                  </Button>
                </div>

                <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Compra 100% Segura</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};