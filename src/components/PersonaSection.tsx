import danielPortrait from "@/assets/daniel-portrait.jpg";

const PersonaSection = () => {
  return (
    <section id="estudante" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover-lift">
                <img 
                  src={danielPortrait} 
                  alt="Retrato de Daniel com ícones de suas motivações" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div className="animate-slide-up [animation-delay:200ms] opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Conheça o Daniel
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-foreground leading-relaxed mb-6">
                  Daniel tem <strong>18 anos</strong> e está prestes a ingressar na universidade. 
                  Sonha em construir sua carreira, fazer novos amigos e aproveitar ao máximo 
                  essa nova fase na <strong className="text-accent">URI</strong>.
                </p>
                
                <div className="bg-white p-6 rounded-xl shadow-sm mt-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Objetivo</h3>
                  <p className="text-lg text-muted-foreground">
                    Ingressar com segurança e entusiasmo na universidade, adaptar-se ao novo 
                    ambiente e sentir-se parte da comunidade acadêmica.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm hover-lift">
                    <p className="font-semibold text-primary mb-2">🎯 Motivações</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Realizar sonho do ensino superior</li>
                      <li>• Iniciar carreira profissional</li>
                      <li>• Fazer novos amigos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm hover-lift">
                    <p className="font-semibold text-primary mb-2">🤔 Dúvidas</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Curso reconhecido?</li>
                      <li>• Como é o campus?</li>
                      <li>• Valores e bolsas?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;
