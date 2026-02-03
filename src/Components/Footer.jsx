import React from 'react';
import { Facebook, Instagram, MessageCircle, MapPin, Mail, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === GRID PRINCIPAL === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Sobre a Marca */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-white">
              <ShieldCheck className="text-blue-500" size={32} />
              <span className="text-2xl font-bold tracking-tight">Matti Ácaro</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Especialistas em higienização profunda e blindagem de estofados. Tecnologia americana para devolver a saúde e o conforto para o seu lar.
            </p>
            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/mattiacaro.higienizacoes/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/grupomattiacaro/" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/+5511921212503" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm">
              {['Inicio', 'Sobre', 'Servicos', 'Galeria', 'Depoimentos', 'FAQ'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollTo(item)}
                    className="hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0" size={18} />
                <span>Atendemos em toda região de <br/> <span className="text-white font-medium">São Paulo - SP</span></span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-green-500 shrink-0" size={18} />
                <a href="https://wa.me/+5511921212503" target="_blank" className="hover:text-green-400 transition-colors">
                  (11) 92121-2503
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <a href="mailto:contato@mattiacaro.com" className="hover:text-blue-400 transition-colors">
                  mattiacarohigienizacoes@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Horários */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Horário de Atendimento</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2"><Clock size={14} className="text-blue-500"/> Seg - Sex</span>
                <span className="text-white">08:00 - 20:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2"><Clock size={14} className="text-blue-500"/> Sábado</span>
                <span className="text-white">09:00 - 14:00</span>
              </li>
              <li className="flex justify-between items-center pb-2 opacity-50">
                <span className="flex items-center gap-2"><Clock size={14}/> Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>

        </div>

        {/* === RODAPÉ INFERIOR (COPYRIGHT) === */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          
          <p>© {currentYear} Matti Ácaro Higienização. Todos os direitos reservados.</p>
          
          {/* SUA ASSINATURA - ISSO É IMPORTANTE! */}
          <div className="flex items-center gap-1">
            <span>Desenvolvido por</span>
            <a 
              href="https://seusite.com.br" // Coloque seu LinkedIn ou GitHub aqui
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 font-bold hover:text-blue-300 transition-colors hover:underline"
            >
              Guilherme Deutsch Andrade
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}