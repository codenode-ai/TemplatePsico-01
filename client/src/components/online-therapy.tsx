export default function OnlineTherapy() {
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

  const benefits = [
    {
      title: "Flexibilidade de Horários",
      description: "Atendimento adaptado à sua rotina, incluindo horários alternativos."
    },
    {
      title: "Segurança e Privacidade",
      description: "Plataforma segura com criptografia de dados e total confidencialidade."
    },
    {
      title: "Alcance Nacional",
      description: "Atendimento para todo o Brasil, eliminando barreiras geográficas."
    }
  ];

  return (
    <section id="online" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Terapia <span className="text-secondary">Online</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A terapia online oferece a mesma qualidade do atendimento presencial, 
              com a conveniência de poder ser realizada no conforto da sua casa.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`benefit-online-${index}`}>
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-check text-secondary-foreground text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1" data-testid={`title-benefit-${index}`}>
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`description-benefit-${index}`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <button 
                onClick={scrollToContact}
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors inline-flex items-center font-semibold"
                data-testid="button-start-online-therapy"
              >
                <i className="fas fa-calendar-check mr-2" />
                Agendar Sessão
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/Terapia online.jpg" 
              alt="Paisagem serena representando tranquilidade e paz interior" 
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="img-online-therapy"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-card/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border">
              <h4 className="font-semibold text-white mb-2" data-testid="text-regulation-title">Regulamentada pelo CFP</h4>
              <p className="text-sm text-white" data-testid="text-regulation-details">
                Resolução CFP nº 11/2018<br />
                Atendimento profissional e ético
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
