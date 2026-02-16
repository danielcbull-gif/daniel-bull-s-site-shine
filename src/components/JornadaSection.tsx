import { TreePine, Bird, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const JornadaSection = () => {
  const whatsappNumber = "5519991184111";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre a Jornada Raízes e Asas.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const pilares = [
    {
      icon: TreePine,
      title: "Raízes",
      subtitle: "Compreender de onde você vem",
      description: "Investigar suas origens emocionais, os padrões herdados, as marcas que moldaram quem você é. Não para culpar o passado, mas para deixar de ser governado por ele.",
    },
    {
      icon: Bird,
      title: "Asas",
      subtitle: "Conquistar liberdade psíquica",
      description: "Desenvolver autonomia emocional, a capacidade de fazer escolhas mais conscientes e de se relacionar com a vida de um lugar mais inteiro e verdadeiro.",
    },
    {
      icon: Sparkles,
      title: "A Jornada",
      subtitle: "O caminho entre um e outro",
      description: "Um processo estruturado de aprofundamento, que complementa o trabalho terapêutico e amplia sua compreensão sobre si mesmo. Para quem deseja ir além.",
    },
  ];

  return (
    <section id="jornada" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Programa
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Jornada Raízes e Asas
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Para se mover com liberdade, é preciso primeiro entender o que nos prende. 
            A Jornada Raízes e Asas é um convite para olhar para as suas origens emocionais 
            e, a partir desse entendimento, construir uma relação mais livre e consciente 
            com a própria vida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pilares.map((pilar, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 animate-fade-in text-center"
            >
              <div className="w-16 h-16 bg-olive-light rounded-2xl flex items-center justify-center mx-auto mb-5">
                <pilar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                {pilar.title}
              </h3>
              <p className="text-primary text-sm font-medium mb-4">
                {pilar.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            A Jornada é voltada para pessoas que desejam se conhecer com mais profundidade, 
            como um caminho complementar ao processo psicanalítico.
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Saber Mais sobre a Jornada
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JornadaSection;
