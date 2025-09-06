export default function ServiceAreas() {
  const serviceAreas = [
    {
      icon: "fas fa-brain",
      bgColor: "bg-primary",
      title: "Ansiedade e Pânico",
      description: "Tratamento especializado para transtornos de ansiedade, ataques de pânico e fobias específicas através de técnicas da TCC."
    },
    {
      icon: "fas fa-leaf",
      bgColor: "bg-secondary",
      title: "Depressão",
      description: "Acompanhamento terapêutico para episódios depressivos, ajudando na reestruturação de pensamentos e comportamentos."
    },
    {
      icon: "fas fa-heart",
      bgColor: "bg-accent",
      title: "Relacionamentos",
      description: "Terapia individual focada em relacionamentos interpessoais, comunicação e resolução de conflitos."
    },
    {
      icon: "fas fa-balance-scale",
      bgColor: "bg-primary",
      title: "Estresse e Burnout",
      description: "Manejo do estresse ocupacional e prevenção da síndrome de burnout através de estratégias práticas."
    },
    {
      icon: "fas fa-star",
      bgColor: "bg-secondary",
      title: "Autoestima",
      description: "Desenvolvimento da autoconfiança e autoaceitação, trabalhando crenças limitantes e padrões negativos."
    },
    {
      icon: "fas fa-seedling",
      bgColor: "bg-accent",
      title: "Crescimento Pessoal",
      description: "Processo terapêutico voltado para o autoconhecimento e desenvolvimento de habilidades socioemocionais."
    }
  ];

  return (
    <section id="areas" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Áreas de <span className="text-primary">Atuação</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Especializada em diversas áreas da saúde mental, oferecendo suporte individualizado 
            para suas necessidades específicas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" data-testid={`card-service-${index}`}>
              <div className={`w-12 h-12 ${area.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <i className={`${area.icon} text-primary-foreground text-xl`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`title-service-${index}`}>
                {area.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`description-service-${index}`}>
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
