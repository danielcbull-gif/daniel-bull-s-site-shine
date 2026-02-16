import { Heart } from "lucide-react";
import logoDaniel from "@/assets/logo-daniel.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logoDaniel} alt="Daniel Bull - Psicanálise" className="h-10" />
          
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
