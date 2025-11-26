import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const faqItems: FaqItem[] = [
  {
    question: "Funciona pra quem nunca fez açaí?",
    answer: "Sim! O método foi criado exatamente pra iniciantes. Você só precisa seguir o passo a passo da receita e montagem."
  },
  {
    question: "Preciso de muito dinheiro pra começar?",
    answer: "Não. Você consegue iniciar com uma estrutura simples e ingredientes básicos, dentro da cozinha da sua casa."
  },
  {
    question: "Vou conseguir vender mesmo sem seguidores?",
    answer: "Sim! O método te ensina a vender usando WhatsApp, prova social e estratégias locais que funcionam mesmo com perfil pequeno ou pessoal."
  },
  {
    question: "Em quanto tempo posso ter resultado?",
    answer: "A maioria dos alunos tem as primeiras vendas no mesmo dia em que posta as primeiras fotos das garrafas montadas."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Assim que o pagamento for confirmado, você recebe um e-mail com seu login e senha para acessar a área de membros imediatamente."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 text-acai-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggle(index)}
              >
                <span className="font-semibold text-gray-800">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-acai-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 bg-gray-50 text-gray-600 border-t border-gray-100">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};