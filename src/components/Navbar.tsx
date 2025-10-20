import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "estudante", label: "Estudante" },
  { id: "mapa", label: "Mapa da Jornada" },
  { id: "resumo", label: "Resumo da Jornada" }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("estudante");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Title */}
          <div className="font-heading font-bold text-xl">
            <span className={cn(
              "transition-colors duration-300",
              isScrolled ? "text-primary" : "text-white"
            )}>
              Jornada URI
            </span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-4 md:px-6 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300",
                  activeSection === item.id
                    ? isScrolled
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-white text-primary shadow-lg"
                    : isScrolled
                      ? "text-foreground hover:bg-secondary"
                      : "text-white hover:bg-white/20"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
