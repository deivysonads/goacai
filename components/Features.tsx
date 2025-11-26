import React from 'react';
import { BookOpen, Camera, Smartphone, Calculator, AlertTriangle, ChefHat, Package } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-acai-900 mb-4">O MÉTODO GO AÇAÍ</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            O passo a passo completo que te leva do zero às primeiras vendas em <span className="font-bold text-acai-700">24 horas</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-acai-200 transition-all">
            <ChefHat className="w-10 h-10 text-acai-600 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-gray-900">Preparo Perfeito</h3>
            <p className="text-gray-600">O jeito certo de preparar o açaí cremoso e padronizado, com a minha receita secreta.</p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-acai-200 transition-all">
            <Package className="w-10 h-10 text-acai-600 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-gray-900">Montagem Profissional</h3>
            <p className="text-gray-600">Como montar garrafas com qualidade e apresentação que dá água na boca.</p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-acai-200 transition-all">
            <Smartphone className="w-10 h-10 text-acai-600 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-gray-900">Vendas no WhatsApp</h3>
            <p className="text-gray-600">Como vender todos os dias usando apenas o seu celular, mesmo sem seguidores.</p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-acai-200 transition-all">
            <Calculator className="w-10 h-10 text-acai-600 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-gray-900">Precificação Lucrativa</h3>
            <p className="text-gray-600">Pare de perder dinheiro. Aprenda a cobrar o preço certo para lucrar DE VERDADE.</p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-acai-200 transition-all">
            <BookOpen className="w-10 h-10 text-acai-600 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-gray-900">Produção em Casa</h3>
            <p className="text-gray-600">Como montar sua linha de produção na sua cozinha, sem equipamentos caros.</p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-acai-200 transition-all">
            <AlertTriangle className="w-10 h-10 text-acai-600 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-gray-900">Anti-Prejuízo</h3>
            <p className="text-gray-600">Descubra como evitar os erros clássicos que fazem a maioria dos iniciantes desistir.</p>
          </div>
        </div>

        <div className="mt-12 text-center bg-acai-50 p-6 rounded-xl border border-acai-100">
          <p className="text-lg font-medium text-acai-800">
            "É o método real, vindo de quem vive disso e transformou açaí na garrafa num negócio lucrativo. <br/>
            <span className="font-bold">Nada de teoria. Só o que funciona.</span>"
          </p>
        </div>
      </div>
    </section>
  );
};