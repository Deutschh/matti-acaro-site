import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import LogoGrande from '../assets/Logo-Grande.svg'; 
import SEO from './SEO.jsx';
export default function Testimonials() {

  // Dados dos depoimentos (Use fotos reais se tiver, senão use essas genéricas de banco)
  const reviews = [
    {
      id: 1,
      name: "Mariana Costa",
      role: "Mãe de 2 filhos",
      text: "Eu achava que meu sofá não tinha salvação depois que meu caçula derramou suco de uva. O serviço da Matti Ácaro foi inacreditável, saiu TUDO! Virei cliente fiel.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Dr. Ricardo Alves",
      role: "Alergista",
      text: "Como médico, eu sei o perigo dos ácaros. O equipamento que eles usam com filtro HEPA é realmente diferenciado. Minha rinite melhorou 100% depois da limpeza.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Fernanda Lima",
      role: "Dona de Pets",
      text: "Tenho 3 gatos e o cheiro no sofá estava me incomodando. Eles tiraram o odor completamente e deixaram um cheirinho cítrico maravilhoso. Recomendo demais!",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Carlos Eduardo",
      role: "Empresário",
      text: "Profissionalismo raro de se ver hoje em dia. Chegaram no horário, uniformizados e protegeram todo o piso. O sofá ficou novo de novo.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "Patrícia Souza",
      role: "Arquiteta",
      text: "Sempre indico para meus clientes pós-obra. Eles conseguem tirar aquela poeira fina que impregna no tecido como ninguém. O resultado é impecável.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    }
  ];

  // Duplicamos a lista para o efeito de "loop infinito" perfeito
  const infiniteReviews = [...reviews, ...reviews];

  return (
        <>
          <SEO 
            title="Limpeza de Sofás e Rainbow"
            description="Higienização profissional de estofados e assistência técnica autorizada Rainbow em São Paulo. Agende sua visita e elimine ácaros hoje."
            keywords="limpeza de sofá, higienização de estofados, rainbow aspirador, manutenção rainbow sp, matti ácaro"
            url="https://www.grupomattiacaro.com.br/"
          />
    <section id="Depoimentos" className="py-24 bg-blue-900 overflow-hidden relative">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/30 skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* === LADO ESQUERDO: IMAGEM EMOCIONAL + NOTA GOOGLE === */}
          <div className="order-2 lg:order-1 relative">
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 aspect-square lg:aspect-[4/5] group">
              {/* Foto: Família Feliz no Sofá (Representa o benefício final) */}
              <img 
                src={"https://img.freepik.com/fotos-premium/a-familia-feliz-sentada-no-sofa_474601-8890.jpg"}
                alt="Família feliz no sofá limpo" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>

              {/* Card Flutuante: Google Review */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur rounded-xl p-6 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        {/* G do Google (SVG Simples) */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.25 17.21 15.81 18.11V21.09H19.62C21.85 19.09 23.49 16.04 23.49 12.275Z" fill="#4285F4"/>
                            <path d="M12 24C15.24 24 17.97 22.91 19.62 21.09L15.81 18.11C14.73 18.83 13.43 19.23 12 19.23C8.82 19.23 6.13 17.13 5.17 14.33H1.24V17.38C3.15 21.18 7.23 24 12 24Z" fill="#34A853"/>
                            <path d="M5.17 14.33C4.93 13.56 4.8 12.76 4.8 12C4.8 11.24 4.93 10.44 5.17 9.67V6.62H1.24C0.44 8.18 0 9.98 0 12C0 14.02 0.44 15.82 1.24 17.38L5.17 14.33Z" fill="#FBBC05"/>
                            <path d="M12 4.77C13.77 4.77 15.35 5.38 16.6 6.56L20.03 3.12C17.96 1.19 15.24 0 12 0C7.23 0 3.15 2.82 1.24 6.62L5.17 9.67C6.13 6.87 8.82 4.77 12 4.77Z" fill="#EA4335"/>
                        </svg>
                        <span className="font-bold text-gray-800">Google Reviews</span>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Verificado</span>
                </div>
                
                <div className="flex items-center gap-4">
                    <span className="text-4xl font-extrabold text-gray-900">5.0</span>
                    <div>
                        <div className="flex text-yellow-400 mb-1">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-xs text-gray-500">Baseado em +120 avaliações</p>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* === LADO DIREITO: SCROLL INFINITO DE DEPOIMENTOS === */}
          <div className="order-1 lg:order-2">
            <h2 className="text-blue-300 font-bold tracking-widest uppercase text-xs mb-3">
                O Que Dizem Sobre Nós
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                Confiança que se <br/> <span className="text-blue-400">prova em casa.</span>
            </h3>

            {/* Container do Scroll (Máscara de Gradiente) */}
            <div className="relative h-[600px] overflow-hidden mask-gradient-vertical">
                
                {/* Gradientes para suavizar topo e base (Fade Effect) */}
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-900 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-900 to-transparent z-20 pointer-events-none"></div>

                {/* A Lista Animada */}
                <div className="animate-scroll-vertical flex flex-col gap-6">
                    {infiniteReviews.map((review, index) => (
                        <div 
                            key={`${review.id}-${index}`} 
                            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-blue-400 object-cover" />
                                    <div>
                                        <h4 className="font-bold text-white text-lg leading-none">{review.name}</h4>
                                        <p className="text-blue-300 text-xs mt-1">{review.role}</p>
                                    </div>
                                </div>
                                <Quote className="text-blue-400/30" size={32} />
                            </div>
                            
                            <p className="text-gray-200 text-sm leading-relaxed mb-4">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

          </div>

        </div>
      </div>
    </section>
    </>
  );
}