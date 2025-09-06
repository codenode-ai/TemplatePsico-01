export default function FloatingWhatsapp() {
  return (
    <a 
      href="https://wa.me/5548999999999?text=Olá! Gostaria de agendar uma consulta." 
      className="floating-whatsapp" 
      target="_blank" 
      rel="noopener noreferrer"
      data-testid="button-floating-whatsapp"
      aria-label="Agendar consulta via WhatsApp"
    >
      <i className="fab fa-whatsapp text-white text-2xl" />
    </a>
  );
}
