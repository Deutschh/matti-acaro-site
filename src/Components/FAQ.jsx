import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, HelpCircle } from 'lucide-react';

export default function FAQ() {
  
  // Estado para controlar qual pergunta está aberta (null = todas fechadas)
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Quanto tempo demora para o sofá secar?",
      answer: "Graças à nossa tecnologia de extração à vácuo de alta potência, o estofado fica apenas levemente úmido. Em dias normais, a secagem completa ocorre entre 4 a 6 horas. Recomendamos deixar o ambiente ventilado para acelerar o processo."
    },
    {
      question: "O produto utilizado é seguro para pets e crianças?",
      answer: "Sim! Utilizamos exclusivamente produtos biodegradáveis, com pH neutro e certificados pela ANVISA. Eles são hipoalergênicos e não deixam resíduos tóxicos, garantindo a segurança total do seu bebê e do seu pet logo após a aplicação."
    },
    {
      question: "Vocês atendem em domicílio? Preciso preparar algo?",
      answer: "Sim, vamos até você! Nossa equipe leva todo o equipamento necessário. Só precisamos de uma tomada comum (110v ou 220v) e acesso a uma torneira. Não se preocupe em arrastar móveis pesados, nós cuidamos da proteção do piso ao redor."
    },
    {
      question: "Removem todos os tipos de manchas?",
      answer: "Removemos cerca de 90% a 95% das manchas visíveis. Manchas orgânicas (suco, comida, urina recente) saem facilmente. Porém, manchas muito antigas ou químicas (tinta, esmalte) que já tingiram a fibra do tecido podem ter apenas uma melhora visual, mas garantimos a higienização total."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Para facilitar sua vida, aceitamos PIX (com 5% de desconto), dinheiro e cartões de crédito em até 3x sem juros. O pagamento é feito apenas após a conclusão do serviço e sua aprovação."
    },
    {
      question: "Removem cheiro de urina de gato/cachorro?",
      answer: "Com certeza! Nosso tratamento inclui a aplicação de um neutralizador de odores específico que quebra as moléculas da urina e mata as bactérias causadoras do mau cheiro, não apenas disfarçando com perfume."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Elemento Decorativo (Círculo Sutil) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* === LADO ESQUERDO: CTA FIXO === */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <div className="sticky top-32"> {/* Faz o box acompanhar o scroll no desktop */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6">
                    <HelpCircle size={16} /> Tira-Dúvidas
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                    Perguntas <br/> <span className="text-blue-600">Frequentes</span>
                </h2>
                
                <p className="text-gray-500 mb-8 text-lg">
                    Separamos as dúvidas mais comuns dos nossos clientes. Se a sua não estiver aqui, nossa equipe está pronta para responder no WhatsApp.
                </p>

                <a 
                    href="https://wa.me/5511921212503" 
                    target="_blank"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-green-500 rounded-xl shadow-lg hover:bg-green-600 hover:shadow-green-500/30 transform hover:-translate-y-1 transition-all duration-300 gap-3 group"
                >
                    <MessageCircle className="group-hover:rotate-12 transition-transform" />
                    Chamar no WhatsApp
                </a>
            </div>
          </div>

          {/* === LADO DIREITO: LISTA DE PERGUNTAS (ACORDEÃO) === */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`
                    border rounded-2xl transition-all duration-300 overflow-hidden
                    ${openIndex === index 
                        ? 'bg-white border-blue-200 shadow-lg scale-[1.02]' // Estilo quando aberto
                        : 'bg-white border-transparent hover:border-blue-100 hover:bg-blue-50/50' // Estilo quando fechado
                    }
                  `}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg ${openIndex === index ? 'text-blue-600' : 'text-gray-700'}`}>
                        {faq.question}
                    </span>
                    <div className={`
                        p-2 rounded-full transition-colors duration-300
                        ${openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}
                    `}>
                        {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`
                        transition-all duration-500 ease-in-out overflow-hidden
                        ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-dashed border-gray-100 mt-2">
                        {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}