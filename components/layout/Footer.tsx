
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tv, Github, Twitter, Instagram, Mail, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { label: 'Início', path: '/' },
        { label: 'Buscar', path: '/buscar' },
        { label: 'Favoritos', path: '/favoritos' },
        { label: 'Configurações', path: '/configuracoes' },
      ]
    },
    {
      title: 'Customização',
      links: [
        { label: 'Estilos & Temas', path: '/configuracoes/temas' },
        { label: 'Imagens do App', path: '/configuracoes/imagens' },
        { label: 'Adicionar Canal', path: '/configuracoes/adicionar' },
      ]
    },
    {
      title: 'Suporte',
      links: [
        { label: 'Ajuda', path: '#' },
        { label: 'Termos de Uso', path: '#' },
        { label: 'Privacidade', path: '#' },
      ]
    }
  ];

  return (
    <footer className="mt-20 border-t border-white/5 bg-bg-secondary/30 backdrop-blur-sm pt-16 pb-12 px-[clamp(16px,4vw,64px)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        {/* Brand Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-tr from-accent-primary to-accent-secondary rounded-2xl flex items-center justify-center shadow-xl shadow-accent-primary/20">
              <Tv className="text-bg-primary" size={28} strokeWidth={3} />
            </div>
            <h2 className="font-title text-2xl font-black text-white">
              StreamTV <span className="text-accent-primary">Brasil</span>
            </h2>
          </div>
          <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
            A melhor experiência de IPTV e streaming híbrido. Acesse canais globais, conteúdos locais e o poder do YouTube em uma única interface inteligente.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-accent-primary hover:text-bg-primary transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-accent-blue hover:text-white transition-all duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-accent-live hover:text-white transition-all duration-300">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Links Sections */}
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent-primary">{section.title}</h4>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => link.path.startsWith('/') && navigate(link.path)}
                    className="text-text-secondary hover:text-white text-sm font-semibold transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-primary" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom info */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs font-bold text-text-tertiary">
          © {currentYear} StreamTV Brasil — Todos os direitos reservados.
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-accent-primary/5 border border-accent-primary/10 rounded-full">
            <div className="w-1.5 h-1.5 bg-accent-primary rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-accent-primary uppercase tracking-widest">Servidores Online</span>
          </div>
          <div className="text-[10px] font-bold text-text-tertiary uppercase flex items-center gap-2">
            <Mail size={12} className="text-accent-secondary" /> contato@streamtvbrasil.com
          </div>
        </div>
      </div>
    </footer>
  );
};
