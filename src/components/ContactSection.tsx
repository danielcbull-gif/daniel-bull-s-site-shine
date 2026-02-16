import { Button } from "@/components/ui/button";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "5519991184111";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre o atendimento.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const steps = [
    {
      number: "1",
      title: "Entre em Contato",
      description: "Envie uma mensagem pelo WhatsApp. Sem compromisso, sem pressão — apenas uma conversa inicial.",
    },
    {
      number: "2",
      title: "Primeira Conversa",
      description: "Agendamos um momento para entender o que você busca e como a psicanálise pode fazer sentido no seu caminho.",
    },
    {
      number: "3",
      title: "Início do Processo",
      description: "Começamos juntos. No seu ritmo, no seu tempo, com a profundidade que o seu processo pedir.",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(19) 99118-4111",
    },
    {
      icon: MapPin,
      label: "Atendimento",
      value: "Campinas/SP e Online (todo o Brasil)",
    },
    {
      icon: Clock,
      label: "Horários",
      value: "Segunda a Sexta • Horários flexíveis",
    },
  ];

  return (
    <section id="contato" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Agendamento
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            O Primeiro Passo é Seu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dar início a um processo de autoconhecimento exige coragem. 
            Se você chegou até aqui, talvez algo dentro de você já esteja 
            pedindo esse espaço.
          </p>
        </div>

        {/* How it works */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-display font-bold">
                {step.number}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact card */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact info */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Informações de Contato
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou disponível para esclarecer dúvidas e agendar sua primeira sessão. 
                A conversa é simples, direta e sem compromisso.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-olive-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <MessageCircle className="w-16 h-16 text-primary-foreground/80 mx-auto mb-4" />
              <h4 className="font-display text-2xl font-semibold text-primary-foreground mb-3">
                Vamos Conversar?
              </h4>
              <p className="text-primary-foreground/80 mb-6">
                Você não precisa ter certeza de nada para dar o primeiro passo. 
                Basta sentir que é hora de se escutar.
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Conversar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
