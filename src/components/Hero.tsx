import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Star } from "lucide-react";
import { WHATSAPP_URL } from "../types";

const heroImg = "/images/depilation_studio_bg.png";

export default function Hero() {
  const scrollToReviews = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector("#avaliacoes");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF8F5] pt-24"
    >
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Clínica Eliane Trocatti Estética e Depilação"
          className="w-full h-full object-cover scale-102 filter brightness-[0.88]"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-black/50 md:hidden" /> {/* darker for mobile readability */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAF8F5] to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32 flex flex-col items-start text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-2xl space-y-8"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A88E]" />
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-[#FAF8F5]">
              Bem-vindo ao seu momento de autocuidado
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.15] tracking-wide text-white drop-shadow-sm">
            Sua pele merece <br />
            <span className="text-[#D9A88E] italic font-normal">cuidado</span>, suavidade <br />e confiança.
          </h1>

          {/* Subheading */}
          <p className="font-sans text-base md:text-lg text-[#F1E7DF] max-w-lg font-light leading-relaxed">
            Especialista em depilação feminina e design de sobrancelhas em Campinas. Sinta a incrível experiência de um spa boutique focado no seu bem-estar.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D9A88E] hover:bg-[#C9987E] text-white rounded-full font-serif text-sm tracking-widest uppercase font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl hover:shadow-[#D9A88E]/20"
            >
              Agendar pelo WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToReviews}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300"
            >
              <Star className="w-4 h-4 text-[#D9A88E] fill-[#D9A88E]" />
              Ver Avaliações
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating subtle decorator */}
      <div className="absolute right-10 bottom-16 z-10 hidden lg:flex flex-col items-end gap-1.5 font-sans text-[11px] uppercase tracking-[0.3em] text-[#7A7A7A]/75">
        <span>Campinas, SP</span>
        <div className="w-16 h-[1px] bg-[#D9A88E]" />
      </div>
    </section>
  );
}
