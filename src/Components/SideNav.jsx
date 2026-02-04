import React, { useState, useEffect } from 'react';
// 1. Adicionei 'Droplets' aos imports para o ícone da Rainbow
import { Home, User, Sparkles, Image, MessageCircle, HelpCircle, Instagram, Star, Droplets } from 'lucide-react';
import SEO from './SEO.jsx';

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('Inicio');

  const navItems = [
    { id: 'Sobre', label: 'Sobre Nós', icon: <User size={20} /> },
    // 2. Adicionei a seção Rainbow aqui (Logo abaixo de Sobre Nós)
    { id: 'Rainbow', label: 'Rainbow', icon: <Droplets size={20} /> },
    { id: 'Servicos', label: 'Serviços', icon: <Sparkles size={20} /> },
    { id: 'Galeria', label: 'Resultados', icon: <Image size={20} /> },
    { id: 'Depoimentos', label: 'Depoimentos', icon: <Star size={20} /> },
    { id: 'FAQ', label: 'Dúvidas', icon: <HelpCircle size={20} /> },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // 3. Adicionei 'Rainbow' na lista de detecção do scroll (na ordem correta)
      const sections = ['Inicio', 'Sobre', 'Rainbow', 'Servicos', 'Galeria', 'Depoimentos', 'FAQ'].map(id => ({
        id,
        element: document.getElementById(id)
      }));
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(({ id, element }) => {
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
        <>
          <SEO 
            title="Limpeza de Sofás e Rainbow"
            description="Higienização profissional de estofados e assistência técnica autorizada Rainbow em São Paulo. Agende sua visita e elimine ácaros hoje."
            keywords="limpeza de sofá, higienização de estofados, rainbow aspirador, manutenção rainbow sp, matti ácaro"
            url="https://www.grupomattiacaro.com.br/"
          />
    <div 
      className={`
        fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 
        transition-all duration-700 ease-in-out
        ${activeSection === 'Inicio' ? '-translate-x-24 opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'}
      `}
    >
      
      <div className="bg-white/80 backdrop-blur-md border border-white/50 shadow-2xl rounded-full py-6 px-2 flex flex-col items-center gap-6">
        
        <button
            onClick={() => scrollTo('Inicio')}
            className="text-gray-300 hover:text-blue-600 transition-colors mb-2 cursor-pointer"
            title="Voltar ao Topo"
        >
            <Home size={18} />
        </button>

        {navItems.map((item) => (
          <div key={item.id} className="relative group flex items-center">
            
            {/* Tooltip */}
            <div className="absolute left-14 bg-blue-900 text-white text-xs font-bold py-1 px-3 rounded-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-lg pointer-events-none">
              {item.label}
              <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-900 rotate-45"></div>
            </div>

            {/* Ícone */}
            <button
              onClick={() => scrollTo(item.id)}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 relative cursor-pointer
                ${activeSection === item.id 
                  ? 'bg-blue-600 text-white shadow-blue-500/50 shadow-lg scale-110' 
                  : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50'
                }
              `}
            >
              {item.icon}
            </button>
          </div>
        ))}

        <div className="w-6 h-[1px] bg-gray-200"></div>

        {/* === BOTÃO INSTAGRAM === */}
        <a 
          href="https://www.instagram.com/mattiacaro.higienizacoes?igsh=N3dheHVtcDZ6NTI0" 
          target="_blank"
          className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white flex items-center justify-center shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 group relative"
        >
           <Instagram size={20} />
           <div className="absolute left-14 bg-pink-600 text-white text-xs font-bold py-1 px-3 rounded-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-lg pointer-events-none">
              Instagram
              <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-pink-600 rotate-45"></div>
            </div>
        </a>

        {/* === BOTÃO WHATSAPP === */}
        <a 
          href="https://wa.me/+5511921212503" 
          target="_blank"
          className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group relative"
        >
           <MessageCircle size={20} />
           <div className="absolute left-14 bg-green-600 text-white text-xs font-bold py-1 px-3 rounded-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-lg pointer-events-none">
              Orçamento
              <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-green-600 rotate-45"></div>
            </div>
        </a>

      </div>
    </div>
    </>
  );
}