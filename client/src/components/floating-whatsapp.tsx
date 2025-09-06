export default function FloatingWhatsapp() {
  return (
    <a 
      href="https://wa.me/5534996670069?text=Olá, gostaria de um site como este!" 
      className="floating-whatsapp" 
      target="_blank" 
      rel="noopener noreferrer"
      data-testid="button-floating-whatsapp"
      aria-label="Entre em contato via WhatsApp"
    >
      <img 
        src="/whatsapp.ico.png" 
        alt="WhatsApp" 
        className="w-8 h-8"
      />
    </a>
  );
}
