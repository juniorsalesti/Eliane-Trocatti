import { motion } from "motion/react";
import { Heart, BadgeCheck, Shield, Award, Smile, Footprints } from "lucide-react";

export default function Differentials() {
  const diffs = [
    {
      id: "fem",
      icon: <Heart className="w-6 h-6 text-[#D9A88E]" />,
      title: "Atendimento Exclusivamente Feminino",
      description: "Um espaço concebido por mulheres, para mulheres. Privacidade, respeito e segurança absoluta em todas as etapas."
    },
    {
      id: "prod",
      icon: <BadgeCheck className="w-6 h-6 text-[#D9A88E]" />,
      title: "Produtos de Primeira Qualidade",
      description: "Trabalhamos apenas com ceras certificadas com componentes hidratantes, calmantes e livres de substâncias irritativas."
    },
    {
      id: "hig",
      icon: <Shield className="w-6 h-6 text-[#D9A88E]" />,
      title: "Higiene Rigorosa",
      description: "Nossos lençóis, espátulas e ceras são estritamente individuais e descartáveis. Esterilização cirúrgica completa."
    },
    {
      id: "tec",
      icon: <Award className="w-6 h-6 text-[#D9A88E]" />,
      title: "Técnica Especializada",
      description: "Métodos modernos de remoção rápida que minimizam a dor e previnem pelos encravados, respeitando seu tipo de pele."
    },
    {
      id: "amb",
      icon: <Smile className="w-6 h-6 text-[#D9A88E]" />,
      title: "Ambiente Confortável",
      description: "Música ambiente suave, climatização ideal e aromas de óleos essenciais para desanuviar a mente e relaxar."
    },
    {
      id: "hum",
      icon: <Footprints className="w-6 h-6 text-[#D9A88E]" />,
      title: "Atendimento Humanizado",
      description: "Nossos encontros são sem pressa. Valorizamos ouvir suas dúvidas e adaptar cada detalhe ao seu limite pessoal."
    }
  ];

  return (
    <section className="bg-[#FAF8F5] py-24 md:py-32 border-b border-[#F1E7DF]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Editorial Sticky intro block */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A88E] block">
              Nossos Diferenciais
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] tracking-wide leading-tight">
              O padrão de cuidado que você merece
            </h2>
            <div className="w-16 h-[1.5px] bg-[#D9A88E]" />
            <p className="font-sans text-sm text-[#7A7A7A] leading-relaxed">
              Diferente de grandes clínicas comerciais apressadas, priorizamos a excelência em cada toque, garantindo que sua visita seja calma e totalmente regeneradora.
            </p>
          </div>

          {/* Column 2: Elegant grid list of benefits */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {diffs.map((diff, index) => (
              <motion.div
                key={diff.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 md:p-8 bg-white border border-[#F1E7DF]/20 rounded-2xl hover:border-[#D9A88E]/30 hover:shadow-xl hover:shadow-[#D9A88E]/2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Subtle Top corner icon */}
                  <div className="p-3 bg-[#FAF8F5] group-hover:bg-[#F1E7DF]/30 rounded-xl w-fit transition-colors duration-300 mb-6">
                    {diff.icon}
                  </div>
                  <h3 className="font-serif text-lg text-[#1A1A1A] font-medium tracking-wide mb-3 group-hover:text-[#D9A88E] transition-colors duration-300">
                    {diff.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#7A7A7A] leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
