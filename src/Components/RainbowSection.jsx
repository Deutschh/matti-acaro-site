import React from 'react';
import { Wrench, ShoppingBag, HeartHandshake, CheckCircle2, Droplets, ShieldCheck, ArrowRight } from 'lucide-react';
import SEO from './SEO.jsx';

export default function RainbowSection() {
  return (
        <>
          <SEO 
            title="Limpeza de Sofás e Rainbow"
            description="Higienização profissional de estofados e assistência técnica autorizada Rainbow em São Paulo. Agende sua visita e elimine ácaros hoje."
            keywords="limpeza de sofá, higienização de estofados, rainbow aspirador, manutenção rainbow sp, matti ácaro"
            url="https://www.grupomattiacaro.com.br/"
          />
    <section className="py-20 bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Elementos de Fundo (Água/Ar Puro) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 -left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-cyan-200/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck size={14} className="text-blue-600" /> Distribuidor Autorizado
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                Excelência <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Rainbow</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Muito mais que um aspirador: um sistema de saúde e purificação. Cuidamos do seu equipamento com a mesma qualidade que ele cuida da sua família.
            </p>
        </div>

        {/* Grid dos 3 Pilares */}
        <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1: VENDA (Consultoria) */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[4rem] -mr-4 -mt-4 transition-colors group-hover:bg-blue-100"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                        <ShoppingBag className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Venda & Consultoria</h3>
                    <p className="text-slate-500 mb-6 leading-relaxed text-sm">
                        Adquira a tecnologia mais avançada do mundo para limpeza doméstica. Demonstração técnica completa para você entender o investimento na sua saúde.
                    </p>
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <CheckCircle2 size={16} className="text-green-500" /> Equipamentos Novos
                        </li>
                        <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <CheckCircle2 size={16} className="text-green-500" /> Garantia de Fábrica
                        </li>
                    </ul>
                    <a href="https://wa.me/5511921212503" target='_blank'>
                    <button className="w-full cursor-pointer py-3 rounded-xl bg-slate-50 text-blue-900 font-bold text-sm border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                        Solicitar Orçamento
                    </button>
                    </a>
                </div>
            </div>

            {/* CARD 2: PÓS-VENDA (Suporte) */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-50 rounded-bl-[4rem] -mr-4 -mt-4 transition-colors group-hover:bg-cyan-100"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                        <HeartHandshake className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Pós-Venda Premium</h3>
                    <p className="text-slate-500 mb-6 leading-relaxed text-sm">
                        Nosso compromisso não acaba na entrega. Oferecemos treinamento completo para você extrair 100% do potencial da sua Rainbow no dia a dia.
                    </p>
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <CheckCircle2 size={16} className="text-cyan-500" /> Treinamento de Uso
                        </li>
                        <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <CheckCircle2 size={16} className="text-cyan-500" /> Suporte Dedicado
                        </li>
                    </ul>
                    <a href="https://wa.me/5511921212503" target='_blank'>
                    <button className="w-full cursor-pointer py-3 rounded-xl bg-slate-50 text-cyan-700 font-bold text-sm border border-slate-200 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500 transition-all">
                        Falar com Suporte
                    </button>
                    </a>
                </div>
            </div>

            {/* CARD 3: MANUTENÇÃO (Técnica) */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-100 rounded-bl-[4rem] -mr-4 -mt-4 transition-colors group-hover:bg-slate-200"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-800/30">
                        <Wrench className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Assistência Técnica</h3>
                    <p className="text-slate-500 mb-6 leading-relaxed text-sm">
                        Manutenção especializada para garantir a longevidade da sua máquina. Revisão preventiva, limpeza interna e reparos com peças genuínas.
                    </p>
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <CheckCircle2 size={16} className="text-slate-600" /> Peças Originais
                        </li>
                        <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <CheckCircle2 size={16} className="text-slate-600" /> Busca e Entrega (Delivery)
                        </li>
                    </ul>
                    <a href="https://wa.me/5511921212503" target='_blank'>
                    <button className="w-full cursor-pointer py-3 rounded-xl bg-slate-50 text-slate-700 font-bold text-sm border border-slate-200 group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-800 transition-all">
                        Agendar Revisão
                    </button>
                    </a>
                </div>
            </div>

        </div>

        {/* Banner Horizontal Inferior (Chamada Geral) */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Sua Rainbow precisa de cuidados?</h3>
                <p className="text-blue-200 text-sm md:text-base max-w-lg">
                    Não deixe seu equipamento parado. Agende uma visita técnica e deixe ela nova de novo com quem entende do assunto.
                </p>
            </div>
            <a href="https://wa.me/5511921212503" target="_blank">
            <button className="relative z-10 cursor-pointer flex items-center bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap">
                Falar no WhatsApp <ArrowRight className="ml-2" size={20} />
            </button>
            </a>
        </div>

      </div>
    </section>
    </>
  );
}