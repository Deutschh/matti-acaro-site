import React from 'react';
import { MessageCircle, ShieldCheck, Star, Clock } from 'lucide-react';
import HeroImg from "../assets/Imagen-inicio.png"; 
import Aspirador from "../assets/Aspirador.svg";

// --- COLOQUE O COMPONENTE DO BOTÃO AQUI OU IMPORTE DE UM ARQUIVO ---
const CleaningButton = () => (
  <a 
    href="https://wa.me/5511921212503" 
    target="_blank"
    // Mudei para bg-blue-400 (mais claro) para dar contraste quando "limpar"
    className="group relative flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-400 rounded-full shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-blue-500/50"
  >
    {/* Camada Azul Escura (A "Limpeza") que cresce da esquerda para direita */}
    <div className="absolute top-0 left-0 h-full w-0 bg-blue-600 transition-all duration-[2000ms] ease-in-out group-hover:w-full">
        {/* Ícone do Aspirador na ponta da barra azul escura */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100">
            <img src={Aspirador} alt="Aspirador" className='mb-10' />
        </div>
    </div>
    
    {/* Texto (z-10 para ficar em cima da cor) */}
    <span className="relative z-10 flex items-center gap-2">
      <MessageCircle size={24} />
      Orçamento Grátis
    </span>
  </a>
);

export default function Hero() {
  return (
    <section id="Inicio" className="relative pt-24 pb-12 lg:pt-28 lg:pb-24 ">
      
      <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* === LADO ESQUERDO: Texto e CTA === */}
          <div className="text-center lg:text-left">
            
            {/* Tag de "Destaque" */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6 animate-fade-in-up">
              <ShieldCheck size={16} className="mr-2" />
              Especialistas em Eliminação de Ácaros
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
              Seu estofado limpo, <br className="hidden lg:block"/>
              <span className="text-blue-600">novo e saudável.</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A <b>Matti Ácaro</b> devolve a vida ao seu sofá e protege sua família. Higienização profunda com produtos biodegradáveis e secagem rápida.
            </p>

            {/* Ícones de Benefícios Rápidos */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Clock size={18} className="text-green-500"/> Secagem Rápida
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <ShieldCheck size={18} className="text-blue-500"/> Anti-Bactericida
                </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              {/* AQUI ESTÁ O NOVO BOTÃO ANIMADO */}
              <CleaningButton />
              
              <button 
                onClick={() => document.getElementById('Galeria').scrollIntoView({ behavior: 'smooth' })}
                className="flex cursor-pointer items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white border-2 border-blue-100 rounded-full hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
              >
                Ver Resultados
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              * Aceitamos Pix e Cartão de Crédito
            </p>
          </div>

          {/* === LADO DIREITO: Imagem Principal === */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-lg lg:max-w-none">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-500">
              <img 
                src={HeroImg} 
                alt="Sofá sendo limpo profissionalmente" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce-slow">
                <div className="bg-yellow-100 p-2 rounded-full">
                    <Star size={24} className="text-yellow-500 fill-yellow-500" />
                </div>
                <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Avaliação</p>
                    <p className="text-blue-900 font-bold text-lg">5.0/5.0</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}