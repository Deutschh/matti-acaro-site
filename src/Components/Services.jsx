import React, { useState, useEffect } from 'react';
import { Search, Wind, Sparkles, Droplets, Sun, ChevronRight, CheckCircle2, AlertCircle, ChevronLeft } from 'lucide-react';
import Inspecao from '../assets/Inspecao.png';
import SEO from './SEO.jsx';

export default function Services() {
  
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Inspeção",
      fullTitle: "Inspeção Detalhada",
      subtitle: "Análise Técnica",
      icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
      desc: "Nossa equipe técnica analisa o tipo de tecido (Suede, Linho, Veludo), grau de sujidade e manchas específicas. Isso define a escolha exata dos produtos (pH) para garantir segurança total.",
      techInfo: "Identificação de fibras sintéticas vs naturais.",
      image:"https://blogbauhausdesign.wordpress.com/wp-content/uploads/2019/02/limpeza-hidratacao-sofa-poltrona-couro.jpg?w=640"
    },
    {
      id: 1,
      title: "Aspiração",
      fullTitle: "Aspiração High-Power",
      subtitle: "Remoção Sólida",
      icon: <Wind className="w-6 h-6 md:w-8 md:h-8" />,
      desc: "Removemos a 'sujeira seca' (poeira, pele morta, cabelos) que está profunda na espuma. Essa etapa é crucial para não criar 'lama' na hora de molhar o tecido.",
      techInfo: "Sucção industrial de alta potência.",
      image: "https://kzacompleta.com.br/wp-content/uploads/2023/11/aspirador-para-limpar-sofa.png"
    },
    {
      id: 2,
      title: "Flotação",
      fullTitle: "Flotação Americana",
      subtitle: "Química Biodegradável",
      icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
      desc: "Aplicamos um flotador importado. A tecnologia faz com que as moléculas de sujeira se 'soltem' das fibras do tecido e flutuem para a superfície, facilitando a remoção.",
      techInfo: "Ação bactericida e fungicida.",
      image: "https://sofalimpo.com.br/wp-content/themes/sofalimpo/images/flotacao-e-limpeza-espuma.webp"
    },
    {
      id: 3,
      title: "Extração",
      fullTitle: "Extração à Vácuo",
      subtitle: "Limpeza Profunda",
      icon: <Droplets className="w-6 h-6 md:w-8 md:h-8" />,
      desc: "Nossa extratora injeta água limpa e suga simultaneamente a sujeira flotada, ácaros e bactérias. O sistema garante que a sujeira não volte para dentro do sofá.",
      techInfo: "Filtro HEPA que retém micropartículas.",
      image: "https://lavanderiaprimavera.net/limpeza%20estofados.jpg"
    },
    {
      id: 4,
      title: "Secagem",
      fullTitle: "Secagem Acelerada",
      subtitle: "Finalização",
      icon: <Sun className="w-6 h-6 md:w-8 md:h-8" />,
      desc: "Finalizamos com aspiração extra para remover a umidade residual. Seu estofado fica apenas levemente úmido e seca completamente em poucas horas.",
      techInfo: "Previne odor de umidade e mofo.",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Auto-play (pode comentar se preferir manual)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 20000); 
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
        <>
          <SEO 
            title="Limpeza de Sofás e Rainbow"
            description="Higienização profissional de estofados e assistência técnica autorizada Rainbow em São Paulo. Agende sua visita e elimine ácaros hoje."
            keywords="limpeza de sofá, higienização de estofados, rainbow aspirador, manutenção rainbow sp, matti ácaro"
            url="https://www.grupomattiacaro.com.br/"
          />
    <section id="Servicos" className="py-24 bg-slate-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">
            Processo Certificado
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Tecnologia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Ponta a Ponta</span>
          </h3>
        </div>

        {/* === NAVEGAÇÃO / LINHA DO TEMPO === */}
        {/* Adicionei 'px-4' para garantir que as bolhas da ponta não cortem no mobile */}
        <div className="relative mb-12 max-w-5xl mx-auto px-2 md:px-8">
          
          {/* Container da Linha para garantir posicionamento correto */}
          <div className="absolute top-6 md:top-10 sm:left-2 left-2 right-6 sm:right-3 md:left-8 md:right-8 h-1 z-0 pl-2 pr-2 ">
             {/* Linha Cinza de Fundo */}
             <div className="absolute w-11/12 h-full bg-gray-200 rounded-full"></div>
             {/* Linha de Progresso (Azul) */}
             <div 
                className=" absolute h-full bg-blue-600 rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${(activeStep / (steps.length - 1)) * 98}%` }}
             ></div>
          </div>
          
          <div className="flex justify-between items-start relative z-10">
            {steps.map((step, index) => (
                <button 
                key={step.id} 
                onClick={() => setActiveStep(index)}
                className="group flex flex-col items-center focus:outline-none w-16 md:w-24"
                >
                {/* Círculo do Ícone */}
                <div className={`
                    w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 border-[3px] md:border-[5px] bg-white
                    ${activeStep >= index 
                    ? 'border-blue-600 text-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-110' 
                    : 'border-gray-200 text-gray-300'
                    }
                    ${activeStep === index ? 'bg-blue-600 !' : ''} 
                `}>
                    <div className="transform scale-75 md:scale-100">
                    {step.icon}
                    </div>
                </div>

                {/* Título abaixo do ícone (AGORA SEMPRE VISÍVEL) */}
                <div className="mt-3 md:mt-4 text-center">
                    <span className={`
                        text-[10px] md:text-sm font-bold uppercase tracking-wide transition-colors duration-300 block
                        ${activeStep === index ? 'text-blue-700' : 'text-gray-400 group-hover:text-blue-400'}
                    `}>
                    {step.title}
                    </span>
                </div>
                </button>
            ))}
          </div>
        </div>

        {/* === O CARD DETALHADO === */}
        <div className="mt-8 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 max-w-6xl mx-auto min-h-[550px] flex flex-col md:flex-row relative">
          
          {/* Lado Esquerdo: Conteúdo */}
          <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-between relative z-20 bg-white">
            
            <div>
                {/* Tag da Etapa */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 text-blue-800 font-extrabold px-4 py-1.5 rounded-full text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                        ETAPA 0{activeStep + 1}
                    </div>
                    <span className="text-gray-400 font-medium text-xs md:text-sm tracking-widest uppercase hidden sm:block">{steps[activeStep].subtitle}</span>
                </div>

                {/* Título e Descrição */}
                <h4 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight animate-fade-in-up">
                {steps[activeStep].fullTitle}
                </h4>
                
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 animate-fade-in-up delay-100">
                {steps[activeStep].desc}
                </p>

                {/* Box "Info Técnica" */}
                <div className="bg-slate-50 border-l-4 border-blue-500 p-4 rounded-r-xl mb-6 animate-fade-in-up delay-200">
                    <div className="flex items-start gap-3">
                        <AlertCircle size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="text-xs font-bold text-blue-900 uppercase mb-1">Diferencial Técnico</p>
                            <p className="text-sm text-gray-700">{steps[activeStep].techInfo}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rodapé do Card: Botões de Navegação (AGORA REINSERIDOS) */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                <button 
                  onClick={() => setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))}
                  className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium transition-colors px-2 py-2"
                >
                    <ChevronLeft size={20} /> <span className="hidden sm:inline">Anterior</span>
                </button>

                <div className="flex gap-1">
                    {steps.map((_, idx) => (
                        <div key={idx} className={`w-2 h-2 rounded-full transition-all ${activeStep === idx ? 'bg-blue-600 w-6' : 'bg-gray-200'}`}></div>
                    ))}
                </div>

                <button 
                  onClick={() => setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold transition-colors px-2 py-2"
                >
                    <span className="hidden sm:inline">Próxima Etapa</span> <ChevronRight size={20} />
                </button>
            </div>
            
          </div>

          {/* Lado Direito: Imagem com Overlay */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-gray-100">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeStep === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[10000ms]"
                  />
                  {/* Gradiente para suavizar a transição lateral no desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:to-white/10"></div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
    </>
  );
}