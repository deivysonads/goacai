import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialProps } from '../types';

const testimonials: TestimonialProps[] = [
  {
    name: "Ana Carla",
    text: "Segui o método e no mesmo dia vendi 8 garrafas. É surreal como funciona! A receita é muito boa.",
    avatar: "https://picsum.photos/seed/ana/100/100"
  },
  {
    name: "Marcos Paulo",
    text: "Eu nunca tinha vendido nada na vida. Fiz a receita, postei e já apareceu gente querendo comprar. O lucro é real.",
    avatar: "https://picsum.photos/seed/marcos/100/100"
  },
  {
    name: "Júlia Mendes",
    text: "O melhor do método é que ele ensina vender, não só fazer o açaí. Hoje tenho clientes fiéis todos os dias.",
    avatar: "https://picsum.photos/seed/julia/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-acai-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Quem aplicou, <span className="text-green-400">aprovou</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-acai-500 transition-all">
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-gray-200 mb-6 italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-acai-500 grayscale" />
                <span className="font-bold text-white">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};