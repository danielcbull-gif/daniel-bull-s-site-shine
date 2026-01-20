import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-semibold text-foreground">
            Daniel Bull
          </div>
          
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} • Feito com <Heart className="w-4 h-4 text-terracotta fill-current" /> para seu bem-estar
          </p>
          
          <div className="text-sm text-muted-foreground">
            Psicanalista
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
