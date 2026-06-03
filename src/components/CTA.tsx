import { motion } from "motion/react";
import { Sparkles, CalendarCheck } from "lucide-react";
import { WHATSAPP_URL } from "../types";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#1A1A1A] text-white">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-radial-gradient from-[#D9A88E]/15 via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute left-[80%] bottom-[-20%] w-[500px] h-[500px] rounded-full bg-[#D9A88E]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center space-y-8">
        
        {/* Subtle icon separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-4 bg-white/5 border border-white/10 rounded-full text-[#D9A88E]"
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
        </motion.div>

        {/* Header CTA copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-4"
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight max-w-2xl mx-auto">
            Agende seu horário e sinta a diferença de um atendimento feito <br />
            <span className="text-[#D9A88E] italic font-normal">com carinho</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-[#FAF8F5]/70 max-w-lg mx-auto font-light leading-relaxed">
            Clique no botão abaixo para conversar diretamente conosco pelo WhatsApp, tirar dúvidas e reservar seu momento de beleza de forma rápida e prática.
          </p>
        </motion.div>

        {/* Pulsating Booking Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-4"
        >
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#D9A88E] hover:bg-[#C9987E] text-white rounded-full font-serif text-base tracking-[0.15em] uppercase font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-[#D9A88E]/20"
          >
            <CalendarCheck className="w-5 h-5" />
            Agendar Agora
          </motion.a>
        </motion.div>

        {/* Small reassuring helper text */}
        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#FAF8F5]/40 mt-6 block">
          Resposta mansa e acolhedora em poucos minutos
        </p>

      </div>
    </section>
  );
}
