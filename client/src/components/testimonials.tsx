export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "A Dra. Clara me ajudou a superar minha ansiedade de forma muito acolhedora. Suas técnicas da TCC foram fundamentais para eu reconhecer meus padrões de pensamento e desenvolver estratégias práticas. Hoje me sinto muito mais confiante.",
      name: "Maria S.",
      location: "Florianópolis, SC"
    },
    {
      rating: 5,
      text: "O atendimento online foi perfeito para mim. A Dra. Clara conseguiu criar um ambiente muito seguro mesmo à distância. Através da terapia, consegui trabalhar questões profundas e melhorar significativamente minha autoestima.",
      name: "João R.",
      location: "São Paulo, SP"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que dizem meus <span className="text-primary">pacientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de pessoas que encontraram o caminho para o bem-estar emocional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl shadow-sm" data-testid={`testimonial-${index}`}>
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <i key={starIndex} className="fas fa-star text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-testimonial-${index}`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 ${index === 0 ? 'bg-primary' : 'bg-secondary'} rounded-full flex items-center justify-center`}>
                  <i className="fas fa-user text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground" data-testid={`name-testimonial-${index}`}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`location-testimonial-${index}`}>
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
