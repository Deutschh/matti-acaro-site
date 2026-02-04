import React, { useState } from 'react';
import { Sparkles, ArrowRightLeft, ZoomIn, CheckCircle2 } from 'lucide-react';
import Antes from '../assets/Antes.jpeg'; // Substitua pelo caminho real da imagem
import Depois from '../assets/Depois.jpeg'; // Substitua pelo caminho real da imagem
import Colchao from '../assets/Colchao.jpeg'; // Substitua pelo caminho real da imagem
import SEO from './SEO.jsx';

// === COMPONENTE DO SLIDER ANTES/DEPOIS ===
const ComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // Imagens de Exemplo (Tente pegar uma foto EXATAMENTE do mesmo ângulo do seu cliente depois)
  const imgAfter = Depois; // Sofá Limpo (Claro)
  const imgBefore = Antes; // Sofá Sujo/Escuro (Usei uma cor diferente para simular o contraste extremo)

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[500px] rounded-3xl overflow-hidden cursor-col-resize shadow-2xl border-4 border-white select-none group"
      onMouseMove={handleMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
    >
      {/* Imagem do DEPOIS (Fundo - Full Width) */}
      <img src={imgAfter} alt="Depois" className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
        DEPOIS
      </div>

      {/* Imagem do ANTES (Sobreposta - Cortada pelo Width) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden border-r-4 border-white"
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={imgBefore} alt="Antes" className="absolute top-0 left-0 w-full h-full object-cover max-w-none" style={{ width: '100%' }} /> {/* Trick para manter aspect ratio */}
        <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          ANTES
        </div>
      </div>

      {/* O Manipulador (A bolinha do meio) */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-lg transform transition-transform group-hover:scale-110">
          <ArrowRightLeft size={20} />
        </div>
      </div>

      {/* Instrução flutuante (Desaparece ao interagir) */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium transition-opacity duration-500 ${sliderPosition !== 50 ? 'opacity-0' : 'opacity-100'}`}>
        Arraste para comparar
      </div>
    </div>
  );
};

// === GALERIA PRINCIPAL ===
export default function Gallery() {
  
  const projects = [
    { id: 1, title: "Sofá Retrátil 3 Lugares", tag: "Remoção de Manchas", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Poltronas de Veludo", tag: "Higienização Profunda", img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Colchão King Size", tag: "Anti-Ácaros", img: Colchao },
    { id: 4, title: "Cadeiras de Jantar", tag: "Revitalização de Cor", img: "https://cdn.awsli.com.br/2500x2500/2600/2600636/produto/262126827/cadeira-para-mesa-de-jantar-4-lara-superior-preta-ctjnjuyw0z.jpeg" },
  ];

  return (
        <>
          <SEO 
            title="Limpeza de Sofás e Rainbow"
            description="Higienização profissional de estofados e assistência técnica autorizada Rainbow em São Paulo. Agende sua visita e elimine ácaros hoje."
            keywords="limpeza de sofá, higienização de estofados, rainbow aspirador, manutenção rainbow sp, matti ácaro"
            url="https://www.grupomattiacaro.com.br/"
          />
    <section id="Galeria" className="py-24 bg-white w-full overflow-hidden relative">
      
      {/* Elementos Decorativos de Fundo (Brilhos) */}
      <div className="absolute top-20 left-10 text-blue-100 animate-pulse delay-700">
        <Sparkles size={60} />
      </div>
      <div className="absolute bottom-20 right-10 text-yellow-100 animate-pulse">
        <Sparkles size={80} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">
            Resultados Reais
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            A Diferença é <span className="text-blue-600">Visível</span>
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Não acredite apenas na nossa palavra. Veja como transformamos estofados condenados em peças novas novamente.
          </p>
        </div>

        {/* === DESTAQUE: SLIDER ANTES E DEPOIS === */}
        <div className="mb-20">
            <ComparisonSlider />
            <p className="text-center text-gray-400 text-sm mt-4 italic">
                *Arraste a barra central para ver a mágica acontecer
            </p>
        </div>

        {/* === GRID DE PROJETOS === */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              {/* Imagem de Fundo */}
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay (Camada Escura que sobe) */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                
                <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.tag}
                </span>
                
                <h4 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h4>

                <div className="mt-4 flex items-center gap-2 text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 border-t border-white/20 pt-4">
                  <CheckCircle2 size={16} className="text-green-400" /> Resultado Garantido
                </div>

              </div>

              {/* Ícone de Zoom (Canto Superior) */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* Botão de CTA Final */}
        <div className="mt-16 text-center">
            <a 
                href="https://wa.me/5511921212503"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:shadow-green-500/40 transform hover:-translate-y-1 transition-all duration-300 gap-2"
            >
                Quero meu sofá assim! <Sparkles size={20} />
            </a>
        </div>

      </div>
    </section>
    </>
  );
}