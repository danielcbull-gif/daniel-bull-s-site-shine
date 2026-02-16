import { Brain, Cloud, Heart, Shield, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const comoFunciona = [
    {
      title: "Um espaço de fala livre",
      description: "Na psicanálise, você é convidado a falar livremente — sem roteiros, sem julgamentos. É nesse espaço de liberdade que o inconsciente se manifesta e revela aquilo que precisa ser olhado.",
    },
    {
      title: "Escuta que transforma",
      description: "O psicanalista não oferece conselhos ou soluções prontas. Ele escuta de um modo único — atento ao que está além das palavras —, ajudando você a construir sentidos para a sua própria experiência.",
    },
    {
      title: "Um processo, não uma receita",
      description: "Diferente de abordagens focadas em resultados rápidos, a psicanálise respeita a complexidade do ser humano. As mudanças são profundas, duradouras e acontecem no tempo certo — o seu.",
    },
  ];

  const paraQuem = [
    {
      icon: Brain,
      title: "Ansiedade e Angústia",
      description: "Para quem sente uma inquietação constante, pensamentos acelerados ou uma angústia que não encontra explicação lógica.",
    },
    {
      icon: Cloud,
      title: "Tristeza Profunda",
      description: "Para quem percebe que a vida perdeu o brilho, que o prazer se tornou raro ou que há um vazio difícil de preencher.",
    },
    {
      icon: Shield,
      title: "Medos e Bloqueios",
      description: "Para quem se vê paralisado diante de situações, evitando aquilo que deseja viver por medo do que pode sentir.",
    },
    {
      icon: Heart,
      title: "Conflitos nos Relacionamentos",
      description: "Para quem repete padrões que geram sofrimento nos vínculos amorosos, familiares ou profissionais.",
    },
    {
      icon: Users,
      title: "Crises e Transições",
      description: "Para quem atravessa momentos de perda, mudança ou questionamento existencial e precisa de um espaço seguro para elaborar.",
    },
    {
      icon: Lightbulb,
      title: "Desejo de Autoconhecimento",
      description: "Para quem, mesmo sem uma queixa específica, sente o chamado de se compreender mais profundamente e viver com mais consciência.",
    },
  ];

  const modalidades = [
    {
      title: "Atendimento Presencial",
      description: "Sessões em consultório na R. Pedro de Toledo, 665 - Sala 16, Indaiatuba/SP, em um ambiente preparado para acolher você com conforto e privacidade.",
      highlight: "Indaiatuba/SP",
    },
    {
      title: "Atendimento Online",
      description: "Sessões por videochamada com a mesma qualidade de escuta e presença, para que a distância não seja um impedimento.",
      highlight: "Todo o Brasil",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 px-4 bg-warm-cream">
      <div className="container mx-auto max-w-6xl">
        {/* Como Funciona */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            O Processo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Como Funciona a Psicanálise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais do que uma técnica, a psicanálise é uma experiência de encontro 
            consigo mesmo — mediada por uma escuta que acolhe e que questiona.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {comoFunciona.map((item, index) => (
            <div key={index} className="animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display font-bold text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block last:hidden" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Para Quem */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block" id="para-quem">
            Para Quem
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            A Psicanálise Pode Ajudar Você
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Se algo dentro de você pede para ser ouvido, talvez este seja 
            o momento de dar espaço a essa voz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {paraQuem.map((item, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-olive-light rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modalidades */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block" id="atendimento">
            Modalidades
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Atendimento Presencial e Online
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
};

export default ServicesSection;
