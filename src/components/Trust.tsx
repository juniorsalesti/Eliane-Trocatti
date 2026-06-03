import { motion } from "motion/react";
import { Star, Eye, ShieldCheck, Sparkles, Heart } from "lucide-react";

export default function Trust() {
  const trustFactors = [
    {
      id: "reviews",
      icon: <Star className="w-8 h-8 text-[#D9A88E] fill-[#D9A88E]" />,
      value: "+33 Avaliações",
      label: "5 Estrelas",
      description: "Reconhecimento contínuo de clientes fiéis no Google e redes sociais."
    },
    {
      id: "audience",
      icon: <Heart className="w-8 h-8 text-[#D9A88E]" />,
      value: "Exclusivo",
      label: "Espaço Feminino",
      description: "Um refúgio acolhedor desenhado inteiramente para sua total privacidade e conforto."
    },
    {
      id: "products",
      icon: <Sparkles className="w-8 h-8 text-[#D9A88E]" />,
      value: "Alta Classe",
      label: "Fórmulas Premium",
      description: "Ceras hipoalergênicas e finalizadores calmantes de marcas consagradas."
    },
    {
      id: "comfort",
      icon: <ShieldCheck className="w-8 h-8 text-[#D9A88E]" />,
      value: "Privativo",
      label: "Seguro & Higiênico",
      description: "Higiene rigorosa com materiais descartáveis em ambiente 100% esterilizado."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-white py-20 border-b border-[#F1E7DF]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {trustFactors.map((factor) => (
            <motion.div
              key={factor.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-[#FAF8F5] rounded-2xl border border-[#F1E7DF]/30 hover:border-[#D9A88E]/40 hover:bg-white hover:shadow-xl hover:shadow-[#D9A88E]/5 transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="mb-5 p-4 bg-white rounded-full border border-[#F1E7DF]/40 group-hover:bg-[#FAF8F5] transition-colors duration-300">
                {factor.icon}
              </div>

              {/* Text elements */}
              <div className="space-y-1">
                <span className="block font-serif text-2xl font-semibold text-[#1A1A1A] tracking-tight">
                  {factor.value}
                </span>
                <span className="block font-sans text-xs uppercase tracking-widest font-semibold text-[#D9A88E]">
                  {factor.label}
                </span>
              </div>

              {/* Divider */}
              <div className="w-8 h-[1px] bg-[#FAF8F5] my-4 group-hover:bg-[#D9A88E] transition-all duration-300 group-hover:w-16" />

              {/* Description */}
              <p className="font-sans text-xs text-[#7A7A7A] leading-relaxed">
                {factor.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
