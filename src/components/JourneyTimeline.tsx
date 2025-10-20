import JourneyStage from "./JourneyStage";
import descobertaImg from "@/assets/stage-descoberta.jpg";
import consideracaoImg from "@/assets/stage-consideracao.jpg";
import decisaoImg from "@/assets/stage-decisao.jpg";
import matriculaImg from "@/assets/stage-matricula.jpg";
import integracaoImg from "@/assets/stage-integracao.jpg";
import engajamentoImg from "@/assets/stage-engajamento.jpg";

const journeyStages = [
  {
    stage: "Etapa 1",
    emotion: "Curioso",
    title: "Descoberta",
    description: "Daniel conhece a URI nas redes sociais e começa a pesquisar universidades. Ele busca informações sobre cursos, estrutura e reconhecimento.",
    action: "Pesquisa sobre universidades e cursos",
    touchpoint: "Redes sociais, Google, site institucional",
    image: descobertaImg,
    imageAlt: "Daniel pesquisando sobre a URI em seu quarto"
  },
  {
    stage: "Etapa 2",
    emotion: "Interessado",
    title: "Consideração",
    description: "Acessa o site da URI, compara cursos e valores. Conversa com amigos e familiares, participa da feira de profissões e lê depoimentos de ex-alunos.",
    action: "Explora cursos, valores e bolsas disponíveis",
    touchpoint: "Site institucional, atendimento digital, eventos",
    image: consideracaoImg,
    imageAlt: "Daniel e amigos comparando opções de cursos em uma cafeteria"
  },
  {
    stage: "Etapa 3",
    emotion: "Ansioso",
    title: "Decisão",
    description: "Inscreve-se no vestibular da URI. Preenche o formulário, realiza a prova e aguarda ansiosamente o resultado da aprovação.",
    action: "Faz inscrição no vestibular",
    touchpoint: "Site de inscrição, e-mails de confirmação",
    image: decisaoImg,
    imageAlt: "Daniel preenchendo formulário de inscrição online"
  },
  {
    stage: "Etapa 4",
    emotion: "Animado",
    title: "Matrícula",
    description: "Após ser aprovado, Daniel realiza o pagamento e entrega os documentos necessários. Recebe orientações de boas-vindas e acesso ao portal do aluno.",
    action: "Envia documentos e confirma matrícula",
    touchpoint: "Portal do aluno, WhatsApp institucional",
    image: matriculaImg,
    imageAlt: "Daniel celebrando aprovação na URI"
  },
  {
    stage: "Etapa 5",
    emotion: "Entusiasmado",
    title: "Integração",
    description: "Participa da recepção de calouros e conhece o campus. Realiza treinamento inicial, conhece colegas e professores durante a semana de acolhida.",
    action: "Participa da recepção e orientação inicial",
    touchpoint: "Eventos presenciais, visitas guiadas, portal do aluno",
    image: integracaoImg,
    imageAlt: "Recepção de calouros no auditório da URI"
  },
  {
    stage: "Etapa 6",
    emotion: "Conectado",
    title: "Engajamento",
    description: "Começa as aulas, faz amizades e utiliza os serviços da universidade. Envolve-se em projetos acadêmicos e sente-se parte da comunidade URI.",
    action: "Inicia aulas, interage com colegas e professores",
    touchpoint: "Salas de aula, app da URI, professores, serviços acadêmicos",
    image: engajamentoImg,
    imageAlt: "Daniel participando de aula moderna com colegas"
  }
];

const JourneyTimeline = () => {
  return (
    <section id="mapa" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Mapa da Jornada
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Acompanhe cada etapa da jornada de Daniel, desde o primeiro contato com a URI até o início da vida acadêmica.
            </p>
          </div>

          {/* Journey Stages */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />
            
            {journeyStages.map((stage, index) => (
              <JourneyStage
                key={index}
                {...stage}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
