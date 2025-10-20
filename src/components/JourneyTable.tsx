import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const journeyData = [
  {
    etapa: "Descoberta",
    emocao: "Curioso 🤔",
    acao: "Pesquisa sobre universidades",
    pontoContato: "Redes sociais, Google",
    oportunidade: "Melhorar SEO e anúncios segmentados"
  },
  {
    etapa: "Consideração",
    emocao: "Interessado 🙂",
    acao: "Explora cursos e bolsas",
    pontoContato: "Site e atendimento digital",
    oportunidade: "Mostrar diferenciais do curso"
  },
  {
    etapa: "Decisão",
    emocao: "Ansioso 😬",
    acao: "Faz inscrição no vestibular",
    pontoContato: "Site e e-mail",
    oportunidade: "Simplificar inscrição"
  },
  {
    etapa: "Matrícula",
    emocao: "Animado 😄",
    acao: "Envia documentos",
    pontoContato: "Portal e WhatsApp",
    oportunidade: "Suporte proativo"
  },
  {
    etapa: "Integração",
    emocao: "Entusiasmado 🎉",
    acao: "Participa da recepção",
    pontoContato: "Eventos e portal",
    oportunidade: "Criar comunidade de calouros"
  },
  {
    etapa: "Engajamento",
    emocao: "Conectado 🤝",
    acao: "Inicia aulas e interage",
    pontoContato: "Professores e app da URI",
    oportunidade: "Reforçar pertencimento"
  }
];

const JourneyTable = () => {
  return (
    <section id="resumo" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Resumo da Jornada
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visão completa das etapas, emoções e pontos de contato da jornada do estudante na URI.
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl animate-slide-up">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary hover:bg-primary">
                    <TableHead className="text-primary-foreground font-bold">Etapa</TableHead>
                    <TableHead className="text-primary-foreground font-bold">Emoção</TableHead>
                    <TableHead className="text-primary-foreground font-bold">Ação Principal</TableHead>
                    <TableHead className="text-primary-foreground font-bold">Ponto de Contato</TableHead>
                    <TableHead className="text-primary-foreground font-bold">Oportunidade de Melhoria</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {journeyData.map((row, index) => (
                    <TableRow 
                      key={index}
                      className="hover:bg-secondary/50 transition-colors"
                    >
                      <TableCell className="font-semibold text-primary">{row.etapa}</TableCell>
                      <TableCell className="text-base">{row.emocao}</TableCell>
                      <TableCell>{row.acao}</TableCell>
                      <TableCell className="text-muted-foreground">{row.pontoContato}</TableCell>
                      <TableCell className="font-medium">{row.oportunidade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white shadow-lg hover-lift">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-primary">6 Etapas</h3>
              <p className="text-muted-foreground">
                Do primeiro contato até a integração completa na vida universitária
              </p>
            </Card>

            <Card className="p-6 bg-white shadow-lg hover-lift">
              <div className="text-3xl mb-3">💙</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Experiência Completa</h3>
              <p className="text-muted-foreground">
                Acompanhamento em cada momento da jornada do estudante
              </p>
            </Card>

            <Card className="p-6 bg-white shadow-lg hover-lift">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Melhoria Contínua</h3>
              <p className="text-muted-foreground">
                Identificação de oportunidades para aprimorar a experiência
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTable;
