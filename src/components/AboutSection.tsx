import { Ear, ShieldCheck, Clock, Compass } from "lucide-react";

const AboutSection = () => {
  const pilares = [
    {
      icon: Ear,
      title: "Escuta Profunda",
      description: "Um espaço onde cada palavra sua é acolhida sem julgamento, com atenção ao que é dito — e ao que ainda não encontrou palavras.",
    },
    {
      icon: Clock,
      title: "Respeito ao Tempo",
      description: "Cada pessoa tem seu próprio ritmo. Aqui, não há pressa nem fórmulas prontas — há presença e compromisso com o seu processo.",
    },
    {
      icon: Compass,
      title: "Autonomia Emocional",
      description: "O objetivo não é criar dependência, mas ajudar você a desenvolver recursos internos para lidar com a vida de forma mais consciente.",
    },
    {
      icon: ShieldCheck,
      title: "Ética e Sigilo",
      description: "Tudo o que é compartilhado em sessão permanece protegido. A confiança é a base de qualquer processo terapêutico verdadeiro.",
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
                Sou psicanalista e o meu trabalho é ajudar pessoas a compreenderem 
                aquilo que, muitas vezes, elas mesmas não conseguem nomear: padrões 
                que se repetem, emoções que transbordam sem aviso, conflitos que 
                parecem não ter saída.
              </p>
              <p>
                Acredito que o sofrimento humano não precisa ser silenciado — precisa 
                ser escutado. E é nessa escuta atenta, respeitosa e comprometida que 
                a transformação acontece. Não como promessa, mas como consequência 
                de um trabalho profundo e honesto consigo mesmo.
              </p>
              <p>
                Realizo atendimentos presenciais em Indaiatuba/SP e sessões online 
                para qualquer lugar do Brasil, oferecendo a mesma qualidade de 
                presença e acolhimento em ambos os formatos.
              </p>
            </div>
          </div>

          {/* Pilares */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {pilares.map((item, index) => (
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
