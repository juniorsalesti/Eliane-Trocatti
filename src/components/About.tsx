import { motion } from "motion/react";
import { CheckCircle2, Award, Heart } from "lucide-react";
import { WHATSAPP_URL } from "../types";

const elianePortrait = "/images/eliane_portrait.png";

export default function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-[#FAF8F5] overflow-hidden">
      {/* Background soft visual noise / abstract pattern */}
      <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full bg-[#F1E7DF]/50 blur-[100px] pointer-events-none" />
      <div className="absolute left-[-15%] bottom-[-10%] w-[600px] h-[600px] rounded-full bg-[#FAF8F5] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Column 1: Elegant Portrait with backing borders */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant Background Backdrop Shapes */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D9A88E]/20 to-[#F1E7DF]/40 rounded-3xl -rotate-2 transform scale-98" />
            
            {/* The Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white">
              <img
                src={elianePortrait}
                alt="Eliane Trocatti especialista em estética corporal"
                className="w-full object-cover aspect-[3/4] hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Gold floating tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl shadow-lg flex items-center gap-3">
                <div className="p-2 bg-[#D9A88E] text-white rounded-full">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#1A1A1A]">Alta Qualificação</h4>
                  <p className="font-sans text-[10px] text-[#7A7A7A] uppercase tracking-widest leading-none mt-0.5">Procedimentos Seguros</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Rich text and description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A88E] block">
                Propósito & Dedicação
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] tracking-wide leading-tight">
                Cuidado e carinho em <br />
                cada único atendimento
              </h2>
              <div className="w-20 h-[1.5px] bg-[#D9A88E]" />
            </div>

            <div className="space-y-5 text-[#7A7A7A] font-sans text-sm md:text-base leading-relaxed">
              <p>
                A <strong>Eliane Trocatti</strong> é profissional certificada e apaixonada por elevar a autoestima em Campinas - SP. Com vasta experiência em depilação feminina e modelagem de sobrancelhas, ela prioriza o bem-estar absoluto de cada cliente que confia em suas mãos.
              </p>
              <p>
                Acreditamos que a remoção de pelos não precisa ser um momento doloroso ou impessoal. Por isso, redefinimos o conceito de atendimento ao adotar técnicas exclusivas menos dolorosas e produtos com ativos calmantes, tudo cercado por um acolhimento carinhoso digno de um verdadeiro spa boutique.
              </p>
            </div>

            {/* Quick Benefits Bullet grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#F1E7DF]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D9A88E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#1A1A1A]">Pele Macia & Saudável</h4>
                  <p className="font-sans text-[11px] text-[#7A7A7A] mt-0.5">Fórmulas que evitam alergias ou foliculite.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D9A88E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#1A1A1A]">Design Geométrico Premium</h4>
                  <p className="font-sans text-[11px] text-[#7A7A7A] mt-0.5">Sobrancelhas que realçam seu olhar natural.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D9A88E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#1A1A1A]">Bem-Estar em 1º Lugar</h4>
                  <p className="font-sans text-[11px] text-[#7A7A7A] mt-0.5">Ambiente climatizado e aromaterapia inclusa.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D9A88E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#1A1A1A]">Material 100% Descartável</h4>
                  <p className="font-sans text-[11px] text-[#7A7A7A] mt-0.5">Garantia absoluta de higiene e segurança sanitária.</p>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A1A1A] hover:bg-[#D9A88E] text-white rounded-full font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
              >
                Conhecer Atendimento
              </a>
              <div className="hidden sm:flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#D9A88E] fill-[#D9A88E]" />
                <span className="font-sans text-xs text-[#7A7A7A] tracking-wider uppercase">Feito com Amor</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
