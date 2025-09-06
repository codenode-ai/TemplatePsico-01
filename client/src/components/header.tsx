import { useState } from "react";
import { useLocation } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-card/90 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <i className="fas fa-brain text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Dra. Clara Albuquerque</h1>
            <p className="text-sm text-muted-foreground">Psicóloga - CRP 12/12345</p>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('inicio')} 
            className="text-foreground hover:text-primary transition-colors"
            data-testid="nav-inicio"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('sobre')} 
            className="text-foreground hover:text-primary transition-colors"
            data-testid="nav-sobre"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('areas')} 
            className="text-foreground hover:text-primary transition-colors"
            data-testid="nav-areas"
          >
            Áreas de Atuação
          </button>
          <button 
            onClick={() => scrollToSection('online')} 
            className="text-foreground hover:text-primary transition-colors"
            data-testid="nav-online"
          >
            Terapia Online
          </button>
          <button 
            onClick={() => scrollToSection('contato')} 
            className="text-foreground hover:text-primary transition-colors"
            data-testid="nav-contato"
          >
            Contato
          </button>
          <button 
            onClick={() => scrollToSection('contato')} 
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-accent transition-colors"
            data-testid="button-agendar-header"
          >
            Agendar Sessão
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          <i className="fas fa-bars text-xl" />
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="text-foreground hover:text-primary transition-colors text-left"
              data-testid="nav-mobile-inicio"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="text-foreground hover:text-primary transition-colors text-left"
              data-testid="nav-mobile-sobre"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('areas')} 
              className="text-foreground hover:text-primary transition-colors text-left"
              data-testid="nav-mobile-areas"
            >
              Áreas de Atuação
            </button>
            <button 
              onClick={() => scrollToSection('online')} 
              className="text-foreground hover:text-primary transition-colors text-left"
              data-testid="nav-mobile-online"
            >
              Terapia Online
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="text-foreground hover:text-primary transition-colors text-left"
              data-testid="nav-mobile-contato"
            >
              Contato
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-accent transition-colors inline-block"
              data-testid="button-agendar-mobile"
            >
              Agendar Sessão
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
