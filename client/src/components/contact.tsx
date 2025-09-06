import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      const result = await response.json();
      
      toast({
        title: "Mensagem enviada!",
        description: result.message,
      });
      reset();
    } catch (error: any) {
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dê o primeiro passo em direção ao seu bem-estar. Estou aqui para ajudá-lo 
            nesta jornada de autoconhecimento e transformação.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-muted p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Envie sua mensagem</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome completo
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Seu nome completo"
                  className="w-full"
                  data-testid="input-name"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-name">
                    {errors.name.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="seu@email.com"
                  className="w-full"
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-email">
                    {errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  placeholder="Descreva como posso ajudá-lo..."
                  className="w-full resize-none"
                  data-testid="input-message"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1" data-testid="error-message">
                    {errors.message.message}
                  </p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-accent transition-colors"
                disabled={isSubmitting}
                data-testid="button-submit-contact"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="contact-address">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Consultório - Florianópolis</h4>
                    <p className="text-muted-foreground">
                      Rua das Flores, 123, Sala 456<br />
                      Centro, Florianópolis - SC<br />
                      CEP: 88010-000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-whatsapp">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-whatsapp text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">
                      (48) 99999-9999<br />
                      <span className="text-sm">Agendamento de consultas</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-hours">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horários de Atendimento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 08h às 18h<br />
                      Sábado: 08h às 12h<br />
                      <span className="text-sm">Horários flexíveis para terapia online</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick WhatsApp Action */}
            <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 p-6 rounded-2xl border border-[#25D366]/20">
              <div className="text-center">
                <i className="fab fa-whatsapp text-[#25D366] text-3xl mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Agende agora pelo WhatsApp</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Resposta rápida e atendimento personalizado
                </p>
                <a 
                  href="https://wa.me/5548999999999?text=Olá! Gostaria de agendar uma consulta." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#128C7E] transition-colors inline-flex items-center font-semibold"
                  data-testid="link-whatsapp-contact"
                >
                  <i className="fab fa-whatsapp mr-2" />
                  Conversar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
