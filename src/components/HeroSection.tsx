import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const whatsappNumber = "5519991184111";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-warm-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-olive-light rounded-full opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full opacity-40 translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center md:text-left order-2 md:order-1 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Encontre o equilíbrio que você merece
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              A psicanálise oferece um espaço seguro para você se reconectar consigo mesmo, 
              compreender suas emoções e construir uma vida mais plena e significativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium text-lg px-8 py-6 rounded-full transition-all duration-300"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform scale-110" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
                <img 
                  src="https://danielbullpsicanalista.com.br/images/foto.webp" 
                  alt="Daniel Bull - Psicanalista"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-card px-6 py-3 rounded-full shadow-lg border border-border">
                <p className="text-sm font-medium text-foreground">Psicanalista</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
