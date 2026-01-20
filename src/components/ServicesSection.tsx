import { Brain, Cloud, Heart, Shield, Smile, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Ansiedade",
      description: "Técnicas para compreender e lidar com pensamentos ansiosos e preocupações excessivas.",
    },
    {
      icon: Cloud,
      title: "Depressão",
      description: "Suporte para superar a tristeza profunda e reencontrar o prazer nas atividades do dia a dia.",
    },
    {
      icon: Shield,
      title: "Fobias e Pânico",
      description: "Trabalho terapêutico para enfrentar medos intensos e crises de pânico.",
    },
    {
      icon: Heart,
      title: "Estresse",
      description: "Estratégias para gerenciar a pressão do cotidiano e recuperar o equilíbrio emocional.",
    },
    {
      icon: Users,
      title: "Conflitos Interpessoais",
      description: "Desenvolvimento de habilidades para melhorar relacionamentos pessoais e profissionais.",
    },
    {
      icon: Smile,
      title: "Autoconhecimento",
      description: "Jornada de descoberta pessoal para uma vida mais autêntica e significativa.",
    },
  ];

  const modalidades = [
    {
      title: "Sessões Presenciais",
      description: "Atendimento em consultório em Campinas/SP, em ambiente acolhedor e sigiloso.",
      highlight: "Campinas/SP",
    },
    {
      title: "Terapia Online",
      description: "Sessões por videochamada com a mesma qualidade do atendimento presencial.",
      highlight: "Todo o Brasil",
    },
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-warm-cream">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Como Posso Ajudar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A psicanálise oferece ferramentas para compreender e transformar 
            padrões emocionais que impactam sua qualidade de vida.
          </p>
        </div>

        {/* Modalidades */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {modalidades.map((modalidade, index) => (
            <Card 
              key={index} 
              className="bg-primary text-primary-foreground border-0 overflow-hidden animate-fade-in hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <div className="inline-block bg-primary-foreground/20 px-3 py-1 rounded-full text-sm font-medium mb-2 w-fit">
                  {modalidade.highlight}
                </div>
                <CardTitle className="font-display text-2xl">{modalidade.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-primary-foreground/80 text-base">
                  {modalidade.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-olive-light rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
