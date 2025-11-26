import React from 'react';
import { UserCheck, DollarSign, Clock, MapPin } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-acai-900">
          Esse método é pra <span className="text-acai-600">você que:</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-acai-500 hover:shadow-md transition-shadow">
              <div className="bg-acai-100 p-3 rounded-full h-fit">
                <DollarSign className="w-6 h-6 text-acai-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Quer renda extra AGORA</h3>
                <p className="text-gray-600">Quer começar a faturar ainda este mês sem burocracia.</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-acai-500 hover:shadow-md transition-shadow">
              <div className="bg-acai-100 p-3 rounded-full h-fit">
                <UserCheck className="w-6 h-6 text-acai-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Começando do Zero</h3>
                <p className="text-gray-600">Sempre viu outros vendendo, mas nunca soube por onde começar.</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-acai-500 hover:shadow-md transition-shadow">
              <div className="bg-acai-100 p-3 rounded-full h-fit">
                <Clock className="w-6 h-6 text-acai-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Pouco dinheiro para investir</h3>
                <p className="text-gray-600">Precisa de algo barato, lucrativo e com retorno rápido.</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-acai-500 hover:shadow-md transition-shadow">
              <div className="bg-acai-100 p-3 rounded-full h-fit">
                <MapPin className="w-6 h-6 text-acai-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Trabalhar em Casa</h3>
                <p className="text-gray-600">Gosta da ideia de vender algo bonito, viral e fácil de divulgar no seu bairro.</p>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-acai-600 rounded-2xl transform rotate-3 opacity-20"></div>
             <div className="relative bg-acai-900 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Imagine o cenário...</h3>
                <p className="text-lg text-gray-200 mb-4 italic">
                  "Você acorda, monta suas garrafas bem cremosas pela manhã..."
                </p>
                <p className="text-lg text-gray-200 mb-4 italic">
                  "Tira uma foto linda, posta no status do WhatsApp..."
                </p>
                <p className="text-lg text-green-400 font-bold italic">
                  "E antes do almoço já tem mensagens chegando com pedidos."
                </p>
                <div className="mt-8 pt-6 border-t border-acai-700">
                  <p className="font-semibold text-center">Esse é o cenário que o Método GO AÇAÍ prepara você pra viver.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};