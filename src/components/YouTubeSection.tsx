import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const YouTubeSection = () => {
  const channelUrl = "https://www.youtube.com/@falandodamente";

  const temas = [
    "Funcionamento psíquico e emocional",
    "Padrões inconscientes nos relacionamentos",
    "Autoconhecimento e autonomia emocional",
    "Reflexões sobre ansiedade, luto e conflitos internos",
  ];

  return (
    <section id="canal" className="py-20 px-4 bg-warm-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Canal no YouTube
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Falando da Mente
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Acredito que o conhecimento sobre a mente não deve ficar restrito 
                ao consultório. Por isso, criei o canal <strong className="text-foreground">Falando da Mente</strong> — 
                um espaço para compartilhar reflexões sobre o funcionamento psíquico, 
                as emoções e os padrões que nos movem sem que a gente perceba.
              </p>
              <p>
                Os vídeos não substituem o processo terapêutico, mas podem ser 
                um primeiro passo para quem deseja começar a se olhar com mais 
                curiosidade e menos julgamento.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                O que você vai encontrar:
              </h3>
              <ul className="space-y-3">
                {temas.map((tema, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <Play className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{tema}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium text-lg px-8 py-6 rounded-full transition-all duration-300"
            >
              <a href={channelUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Acessar o Canal
              </a>
            </Button>
          </div>

          {/* Visual element */}
          <div className="animate-fade-in flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl transform scale-105" />
              <div className="relative bg-card rounded-3xl p-8 border border-border shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      Falando da Mente
                    </h4>
                    <p className="text-sm text-muted-foreground">YouTube</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-muted rounded-xl p-4">
                    <p className="text-sm text-muted-foreground italic">
                      "Entender a si mesmo não é um luxo — é uma necessidade 
                      para quem deseja viver com mais consciência."
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Conteúdos semanais sobre psicanálise e autoconhecimento
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
