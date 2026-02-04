import React from 'react';
import { CheckCircle, Shield, Zap } from 'lucide-react';
import EquipmentImg from "../assets/Nasa.svg"; 
import SEO from './SEO.jsx';
export default function About() {
  return (
    <>
      <SEO 
        title="Limpeza de Sofás e Rainbow"
        description="Higienização profissional de estofados e assistência técnica autorizada Rainbow em São Paulo. Agende sua visita e elimine ácaros hoje."
        keywords="limpeza de sofá, higienização de estofados, rainbow aspirador, manutenção rainbow sp, matti ácaro"
        url="https://www.grupomattiacaro.com.br/"
      />
      

    
    <section id="Sobre" className="py-20 overflow-hidden flex">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-22 items-center">
          
          {/* === LADO ESQUERDO: A IMAGEM (Genérica de Equipamento) === */}
          <div className="relative" data-aos="fade-right">
            {/* Elemento decorativo de fundo */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-b-10 border-blue-900 sm:mx-20 md:mx-28 md:aspect-auto lg:mx-0 mx-4 md:h-[600px] mt-24 lg:mt-0">
              {/* IMAGEM NOVA: Foco no bico da extratora limpando sofá bege (clean e profissional) */}
              <img 
                src={EquipmentImg}
                alt="Equipamento de alta tecnologia Matti Ácaro" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 "
              />
              
              {/* Selo de Tecnologia */}
              <div className="absolute top-4 right-4  bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-10">
                <Shield className="text-blue-600" size={20} />
                <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Tecnologia</p>
                    <p className="text-sm font-bold text-blue-900 leading-none">Norte-Americana</p>
                </div>
              </div>
            </div>
          </div>

          {/* === LADO DIREITO: O TEXTO (A Autoridade) === */}
          <div className="lg:pl-8">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
              Sobre a Matti Ácaro
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Não é apenas limpeza. <br />
              É <span className="text-blue-600">descontaminação profunda.</span>
            </h3>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Diferente da limpeza comum que apenas "espalha" a sujeira, nós utilizamos um processo científico de higienização. Somos especialistas em restaurar a saúde do seu estofado, eliminando o que os olhos não veem.
            </p>

            {/* === O GRANDE DIFERENCIAL (EQUIPAMENTO) === */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8 shadow-sm">
                <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-2 rounded-full mt-1">
                        <Zap className="text-white" size={20} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-blue-900 mb-2">Equipamento Americano com Filtro HEPA</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Utilizamos higienizadores importados com a mesma tecnologia de filtragem desenvolvida pela <b>NASA</b>. O filtro HEPA retém <b>99,97%</b> das impurezas, garantindo que ácaros, fungos e bactérias sejam removidos do seu lar, e não devolvidos ao ar.
                        </p>
                    </div>
                </div>
            </div>

            {/* Lista de Checkpoints */}
            <ul className="space-y-4 mb-8">
                {[
                    "Eliminação de odores desagradáveis",
                    "Produtos biodegradáveis (seguro para pets e crianças)",
                    "Revitalização da cor e textura do tecido"
                ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 font-medium">
                        <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                        {item}
                    </li>
                ))}
            </ul>

            <button 
                onClick={() => document.getElementById('Servicos').scrollIntoView({ behavior: 'smooth' })}
                className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-2 group cursor-pointer"
            >
                Conheça nossos serviços
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}