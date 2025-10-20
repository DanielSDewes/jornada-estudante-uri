import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-4 text-2xl text-foreground">Página não encontrada</p>
        <p className="mb-8 text-muted-foreground">A página que você procura não existe.</p>
        <a 
          href="/" 
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent transition-all duration-300 hover:scale-105"
        >
          Voltar para a Jornada
        </a>
      </div>
    </div>
  );
};

export default NotFound;
