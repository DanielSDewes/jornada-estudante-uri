import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface JourneyStageProps {
  stage: string;
  emotion: string;
  title: string;
  description: string;
  action: string;
  touchpoint: string;
  image: string;
  imageAlt: string;
  index: number;
}

const emotionEmojis: Record<string, string> = {
  "Curioso": "🤔",
  "Interessado": "🙂",
  "Ansioso": "😬",
  "Animado": "😄",
  "Entusiasmado": "🎉",
  "Conectado": "🤝"
};

const emotionColors: Record<string, string> = {
  "Curioso": "bg-blue-50 text-blue-700 border-blue-200",
  "Interessado": "bg-green-50 text-green-700 border-green-200",
  "Ansioso": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Animado": "bg-orange-50 text-orange-700 border-orange-200",
  "Entusiasmado": "bg-purple-50 text-purple-700 border-purple-200",
  "Conectado": "bg-pink-50 text-pink-700 border-pink-200"
};

const JourneyStage = ({
  stage,
  emotion,
  title,
  description,
  action,
  touchpoint,
  image,
  imageAlt,
  index
}: JourneyStageProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-8 items-center mb-16 last:mb-0",
      !isEven && "md:flex-row-reverse"
    )}>
      {/* Image */}
      <div className="w-full md:w-1/2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
        <div className="relative rounded-2xl overflow-hidden shadow-xl hover-lift">
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-80 object-cover"
          />
          <div className="absolute top-4 left-4">
            <div className={cn(
              "px-4 py-2 rounded-full font-semibold text-sm border-2",
              emotionColors[emotion]
            )}>
              {emotionEmojis[emotion]} {emotion}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 animate-slide-up" style={{ animationDelay: `${index * 0.1 + 0.2}s`, animationFillMode: 'forwards' }}>
        <Card className="p-8 shadow-lg hover-lift bg-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
              {index + 1}
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stage}
              </p>
              <h3 className="text-2xl font-bold text-primary">
                {title}
              </h3>
            </div>
          </div>

          <p className="text-lg text-foreground mb-6 leading-relaxed">
            {description}
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent text-sm">✓</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Ação Principal</p>
                <p className="text-sm text-muted-foreground">{action}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent text-sm">⚡</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Ponto de Contato</p>
                <p className="text-sm text-muted-foreground">{touchpoint}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default JourneyStage;
