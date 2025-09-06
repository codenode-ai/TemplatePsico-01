export default function Footer() {
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
  };

  return (
    <footer className="bg-foreground text-background section-padding">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-background/20 rounded-full flex items-center justify-center">
                <i className="fas fa-brain text-background" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dra. Clara Albuquerque</h3>
                <p className="text-background/80 text-sm">Psicóloga - CRP 12/12345</p>
              </div>
            </div>
            <p className="text-background/80 mb-4" data-testid="text-footer-quote">
              Você não está sozinho. Estou aqui para te ouvir.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="block text-background/80 hover:text-background transition-colors text-left"
                data-testid="link-footer-inicio"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="block text-background/80 hover:text-background transition-colors text-left"
                data-testid="link-footer-sobre"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('areas')} 
                className="block text-background/80 hover:text-background transition-colors text-left"
                data-testid="link-footer-areas"
              >
                Áreas de Atuação
              </button>
              <button 
                onClick={() => scrollToSection('online')} 
                className="block text-background/80 hover:text-background transition-colors text-left"
                data-testid="link-footer-online"
              >
                Terapia Online
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="block text-background/80 hover:text-background transition-colors text-left"
                data-testid="link-footer-contato"
              >
                Contato
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 transition-colors"
                data-testid="link-instagram"
              >
                <i className="fab fa-instagram text-background" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 transition-colors"
                data-testid="link-facebook"
              >
                <i className="fab fa-facebook text-background" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 transition-colors"
                data-testid="link-linkedin"
              >
                <i className="fab fa-linkedin text-background" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm" data-testid="text-copyright">
            © 2024 Dra. Clara Albuquerque. Todos os direitos reservados.
          </p>
          <p className="text-background/60 text-sm mt-2" data-testid="text-registration">
            CRP 12/12345 - Psicologia regulamentada pelo Conselho Federal de Psicologia
          </p>
        </div>
      </div>
    </footer>
  );
}
