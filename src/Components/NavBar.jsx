import React, { useState, useEffect } from "react";
// 1. Adicionei os ícones que faltavam: User (Sobre), Star (Depoimentos), Droplets (Rainbow)
import { MessageCircle, Home, Info, Briefcase, Image, HelpCircle, Instagram, User, Star, Droplets } from "lucide-react"; 

// Substitua pelo caminho real da sua logo
import Logo from '../assets/logo.svg'; 

// Ícones do Menu
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMenuOpen(false); 
    }
  };

  return (
    <div className="w-full h-20 ovwerflow-hidden">
      
      {/* ================= BARRA MOBILE ================= */}
      <div className="w-full bg-white lg:hidden h-20 flex justify-between items-center px-4 shadow-sm fixed top-0 z-50">
        <div className="lg:hidden">
          <button onClick={handleMenuToggle} className="p-2 focus:outline-none">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div className="w-16">
            <img src={Logo} alt="Matti Ácaro Logo" className="w-full object-contain" />
        </div>
        
        {/* Ícone do Instagram no topo do mobile (opcional, para acesso rápido) */}
        <a href="https://www.instagram.com/mattiacaro.higienizacoes/" target="_blank" className="text-pink-600">
            <Instagram size={28} />
        </a> 
      </div>

      {/* ================= NAVBAR DESKTOP ================= */}
      <div className="hidden lg:flex top-0 w-full justify-center z-50 pt-6 gap-x-6 xl:gap-x-10">
        
        {/* Bloco Central (Logo + Links) */}
        <div className="bg-white/90 backdrop-blur-md w-auto px-6 h-20 rounded-full shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-between transition-all duration-300">
            
            {/* Logo Desktop */}
            <div className="w-16 mr-6 cursor-pointer" onClick={() => scrollToSection('inicio')}>
                <img src={Logo} alt="Matti Ácaro" className="w-full object-contain p-1.5" />
            </div>

            {/* Links Centrais */}
            <div className="bg-blue-100/70 flex rounded-full px-2 py-1 gap-1 xl:gap-2">
                {[
                    { id: 'Inicio', label: 'Início' },
                    { id: 'Sobre', label: 'Sobre nós' }, // Já estava aqui, mantive
                    { id: 'Rainbow', label: 'Rainbow' }, // ADICIONADO
                    { id: 'Servicos', label: 'Serviços' },
                    { id: 'Galeria', label: 'Galeria' },
                    { id: 'Depoimentos', label: 'Depoimentos' }, // ADICIONADO
                    { id: 'FAQ', label: 'FAQ' },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`
                            px-4 py-2 rounded-full text-base font-medium transition-all duration-300 whitespace-nowrap
                            ${activeSection === item.id 
                                ? 'bg-blue-900 text-white shadow-md' 
                                : 'text-blue-900 hover:bg-blue-200 cursor-pointer hover:text-blue-700'}
                        `}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>

        {/* === Bloco de Redes Sociais e Contato (Lado Direito) === */}
        <div className="flex items-center gap-4 h-20">
            
            {/* Botão Instagram (Estilo Gradiente) */}
            <a 
                href="https://www.instagram.com/mattiacaro.higienizacoes/" 
                target="_blank" 
                className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                title="Siga-nos no Instagram"
            >
                <Instagram size={24} />
            </a>

            {/* Botão WhatsApp */}
            <a 
                href="https://wa.me/5511921212503" 
                target="_blank" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 h-14 rounded-full font-bold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1 text-lg whitespace-nowrap"
            >
                <MessageCircle size={22} />
                WhatsApp
            </a>

        </div>

      </div>


      {/* ================= SIDEBAR MOBILE ================= */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-blue-900/40 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={handleMenuToggle}
        ></div>
      )}

      <div
        className={`
          lg:hidden fixed top-0 left-0 h-screen w-3/4 max-w-sm bg-white z-50
          transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col justify-between
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div>
            {/* Cabeçalho Menu */}
            <div className="flex flex-col items-center py-8 border-b border-gray-100 bg-white">
                <img src={Logo} alt="Matti Ácaro" className="w-32 mb-2" />
                <p className="text-lg text-blue-400 font-medium">Higienização Profissional</p>
            </div>

            {/* Links Mobile */}
            <div className="flex flex-col mt-6 px-4 space-y-2 cursor-pointer">
                {[
                    { id: 'Inicio', label: 'Início', icon: Home },
                    { id: 'Sobre', label: 'Sobre Nós', icon: User }, // ADICIONADO
                    { id: 'Rainbow', label: 'Rainbow', icon: Droplets }, // ADICIONADO
                    { id: 'Servicos', label: 'Nossos Serviços', icon: Briefcase },
                    { id: 'Galeria', label: 'Antes e Depois', icon: Image },
                    { id: 'Depoimentos', label: 'Depoimentos', icon: Star }, // ADICIONADO
                    { id: 'FAQ', label: 'Dúvidas Comuns', icon: HelpCircle },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="flex items-center w-full p-4 rounded-xl text-blue-900 hover:bg-blue-50 transition-colors duration-200 group cursor-pointer"
                    >
                        <item.icon className="mr-4 text-blue-500 group-hover:text-blue-700" size={24} />
                        <span className="font-medium text-lg">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>

        {/* Rodapé do Menu Mobile (Botões Sociais) */}
        <div className="mb-8 px-6 w-full">
            
            {/* Botão Instagram Mobile (Largo e colorido) */}
            <a 
                href="https://www.instagram.com/mattiacaro.higienizacoes?igsh=N3dheHVtcDZ6NTI0"
                target="_blank"
                className="w-full mb-3 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white py-3 rounded-2xl flex justify-center items-center font-semibold shadow-md"
            >
                <Instagram className="mr-2" size={20} />
                Siga no Instagram
            </a>

            {/* Botão WhatsApp Mobile */}
            <a 
                href="https://wa.me/+5511921212503"
                target="_blank"
                className="w-full bg-green-500 text-white py-4 rounded-2xl flex justify-center items-center font-bold text-lg shadow-lg hover:bg-green-600 transition-colors"
            >
                <MessageCircle className="mr-2" />
                Pedir Orçamento
            </a>
            <p className="text-center text-gray-400 text-xs mt-4">© 2026 Matti Ácaro</p>
        </div>
      </div>

    </div>
  );
};

export default Navbar;