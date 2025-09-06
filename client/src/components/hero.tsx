export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
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

  const scrollToAbout = () => {
    const element = document.getElementById('sobre');
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
    <section id="inicio" className="bg-gradient-to-br from-primary/20 to-secondary/20 section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Psicoterapia acolhedora para transformar sua 
              <span className="text-primary"> jornada emocional</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Atendimento online e presencial em Florianópolis. Especializada em Terapia Cognitivo-Comportamental (TCC), 
              oferecendo um espaço seguro para seu crescimento pessoal e bem-estar emocional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-accent transition-colors text-center font-semibold"
                data-testid="button-agendar-hero"
              >
                <i className="fas fa-calendar-check mr-2" />
                Agendar Sessão
              </button>
              <button 
                onClick={scrollToAbout}
                className="bg-card text-foreground border-2 border-border px-8 py-4 rounded-lg hover:bg-muted transition-colors text-center font-semibold"
                data-testid="button-conheca-mais"
              >
                <i className="fas fa-user-md mr-2" />
                Conheça Mais
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Sessão de terapia em ambiente acolhedor" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero-therapy"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary/90 backdrop-blur-sm text-secondary-foreground p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center">
                  <i className="fas fa-heart text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold" data-testid="text-stats-number">Mais de 500</p>
                  <p className="text-sm" data-testid="text-stats-label">vidas transformadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
