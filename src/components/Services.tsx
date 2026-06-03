import { motion } from "motion/react";
import { Sparkles, Eye, Droplet, Check, Calendar } from "lucide-react";
import { WHATSAPP_URL } from "../types";

export default function Services() {
  const serviceList = [
    {
      id: "depilacao",
      icon: <Sparkles className="w-8 h-8 text-[#D9A88E]" />,
      title: "Depilação Feminina",
      caption: "Resultados suaves e duradouros",
      description: "Técnicas especializadas pensadas para o alívio do desconforto, utilizando ceras de ativos naturais e hidratação calmante pós-procedimento.",
      items: [
        "Depilação íntima completa (segurança e higiene)",
        "Meia perna e perna inteira",
        "Axilas e braços delicadamente tratados",
        "Buço com cera especial hidratante"
      ],
      priceRange: "A partir de R$ 30"
    },
    {
      id: "sobrancelhas",
      icon: <Eye className="w-8 h-8 text-[#D9A88E]" />,
      title: "Design de Sobrancelhas",
      caption: "Naturalidade e harmonia para seu rosto",
      description: "Medição geométrica exclusiva para criar o arco perfeito que valorizando os traços singulares de sua expressão.",
      items: [
        "Design de sobrancelhas personalizado",
        "Aplicação premium de Henna natural",
        "Limpeza de contorno de fios",
        "Spa de sobrancelhas com argiloterapia"
      ],
      priceRange: "A partir de R$ 45"
    },
    {
      id: "skincare",
      icon: <Droplet className="w-8 h-8 text-[#D9A88E]" />,
      title: "Cuidados com a Pele",
      caption: "Atendimento focado no bem-estar e autoestima",
      description: "Tratamentos corporais e faciais nutritivos projetados para revigorar, acalmar, amaciar e perfumar delicadamente sua pele.",
      items: [
        "Argiloterapia purificante e clareadora",
        "Esfoliação corporal com óleos essenciais",
        "Nutrição facial calmante profunda",
        "Hidratação pós-sol regenerativa"
      ],
      priceRange: "Sob consulta"
    }
  ];

  return (
    <section id="servicos" className="bg-white py-24 md:py-32 border-b border-[#F1E7DF]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A88E] block">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] tracking-wide">
            Tratamentos Personalizados
          </h2>
          <div className="w-20 h-[1.5px] bg-[#D9A88E] mx-auto" />
          <p className="font-sans text-sm md:text-base text-[#7A7A7A] font-light leading-relaxed">
            Oferecemos uma carta de rituais de depilação e design facial focada em suavidade, segurança sanitária e profundo acolhimento de spa.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {serviceList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between bg-[#FAF8F5] hover:bg-white rounded-3xl p-8 md:p-10 border border-[#F1E7DF]/40 hover:border-[#D9A88E]/40 hover:shadow-2xl hover:shadow-[#D9A88E]/5 transition-all duration-300"
            >
              <div>
                {/* Header Icon & Pricing Tag */}
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 bg-white rounded-2xl border border-[#F1E7DF]/40 group-hover:bg-[#FAF8F5] transition-colors duration-300 shadow-sm">
                    {service.icon}
                  </div>
                  <span className="font-sans text-xs uppercase tracking-wider text-[#D9A88E] font-semibold py-1 px-3 bg-white border border-[#F1E7DF]/50 rounded-full">
                    {service.priceRange}
                  </span>
                </div>

                {/* Service Details */}
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-[#1A1A1A] font-medium tracking-wide">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-widest font-semibold text-[#D9A88E] leading-tight">
                    {service.caption}
                  </p>
                  <p className="font-sans text-sm text-[#7A7A7A] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Feature bullet list */}
                <ul className="mt-8 space-y-3 pt-6 border-t border-[#F1E7DF]/50">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-sans text-sm text-[#7A7A7A]">
                      <div className="flex items-center justify-center w-4 h-4 rounded-full bg-white border border-[#D9A88E]/40 text-[#D9A88E] shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer scheduling */}
              <div className="mt-10 pt-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1A1A] group-hover:bg-[#D9A88E] text-white rounded-2xl font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm group-hover:shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar Procedimento
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
