import React from 'react';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-acai-950 text-white overflow-hidden pb-12 pt-8 md:py-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://picsum.photos/id/102/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-4xl">
        
        <div className="inline-flex items-center gap-2 bg-acai-800/50 px-4 py-2 rounded-full border border-acai-600 mb-6 animate-fade-in-up">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <span className="text-sm font-semibold text-green-300 tracking-wider">MÉTODO COMPROVADO • RENDA EM 24H</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight drop-shadow-xl">
          Transforme <span className="text-purple-400">Açaí</span> em <br className="hidden md:block"/>
          <span className="text-green-400">Renda Diária</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl font-medium leading-relaxed">
          Aprenda o método real que te coloca fazendo suas primeiras vendas em até <span className="text-white font-bold bg-acai-600 px-2">24 horas</span>, mesmo começando do zero.
        </p>

        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-8 w-full max-w-lg">
           <ul className="text-left space-y-3">
             <li className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
               <span className="text-gray-100 font-medium">Você não precisa de loja física</span>
             </li>
             <li className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
               <span className="text-gray-100 font-medium">Você não precisa de experiência prévia</span>
             </li>
             <li className="flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
               <span className="text-gray-100 font-medium">Passo a passo validado para iniciantes</span>
             </li>
           </ul>
        </div>

        <div className="w-full max-w-md">
           <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest font-bold">Oferta por tempo limitado</p>
           <Button onClick={scrollToOffer} fullWidth pulse>
             QUERO COMEÇAR POR R$ 19,90
           </Button>
           <p className="mt-4 text-xs text-gray-400 opacity-80 flex justify-center items-center gap-2">
             🔒 Pagamento 100% Seguro
           </p>
        </div>

      </div>
    </section>
  );
};