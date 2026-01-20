import { Award, BookOpen, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Formação Sólida",
      description: "Especialização em Psicanálise com abordagem humanizada",
    },
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Escuta empática e ambiente seguro para sua jornada",
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Anos de prática clínica atendendo adultos",
    },
    {
      icon: Award,
      title: "Ética Profissional",
      description: "Compromisso com o sigilo e bem-estar do paciente",
    },
  ];

  return (
    <section id="sobre" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Sobre Mim
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Daniel Bull
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou psicanalista dedicado a ajudar pessoas a encontrarem clareza 
                em momentos de confusão emocional e a desenvolverem uma relação 
                mais saudável consigo mesmas.
              </p>
              <p>
                Minha abordagem é baseada na escuta atenta e no acolhimento genuíno. 
                Acredito que cada pessoa carrega em si a capacidade de transformação, 
                e meu papel é facilitar esse processo de autodescoberta.
              </p>
              <p>
                Atendo presencialmente em Campinas/SP e também realizo sessões online, 
                oferecendo flexibilidade para que você possa cuidar da sua saúde mental 
                onde quer que esteja.
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-olive-light rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
