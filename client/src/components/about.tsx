export default function About() {
  return (
    <section id="sobre" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Consultório de psicologia profissional e acolhedor" 
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="img-about-office"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">Dra. Clara Albuquerque</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p data-testid="text-about-education">
                Psicóloga formada pela Universidade Federal de Santa Catarina (UFSC), com especialização em 
                Terapia Cognitivo-Comportamental pelo Instituto de Psicologia Cognitiva de São Paulo.
              </p>
              <p data-testid="text-about-experience">
                Com mais de 8 anos de experiência clínica, dedico-me a oferecer um atendimento humanizado 
                e baseado em evidências científicas, ajudando pessoas a desenvolverem estratégias eficazes 
                para lidar com desafios emocionais e comportamentais.
              </p>
              <p data-testid="text-about-philosophy">
                Acredito que cada pessoa possui recursos internos para promover mudanças positivas em sua vida. 
                Meu papel é facilitar esse processo de autodescoberta e crescimento pessoal em um ambiente 
                seguro e acolhedor.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary" data-testid="text-years-experience">8+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-lg">
                <div className="text-2xl font-bold text-secondary" data-testid="text-patients-helped">500+</div>
                <div className="text-sm text-muted-foreground">Pacientes atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
