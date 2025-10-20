import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-daniel-campus.jpg";

const HeroSection = () => {
  const scrollToJourney = () => {
    const element = document.getElementById('estudante');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Daniel caminhando pelo campus da URI ao amanhecer" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          A Jornada de Daniel
        </h1>
        <p className="text-xl md:text-3xl font-light mb-4 animate-fade-in [animation-delay:200ms] opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Da Descoberta à Vida Universitária na URI
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto animate-fade-in [animation-delay:400ms] opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Acompanhe a experiência de um estudante ingressante, da escolha do curso até o primeiro dia de aula.
        </p>
        
        <Button 
          size="lg" 
          onClick={scrollToJourney}
          className="bg-white text-primary hover:bg-secondary hover:text-primary font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 animate-fade-in [animation-delay:600ms] opacity-0"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          Iniciar Jornada
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;
