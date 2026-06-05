import { Instagram as InstaIcon, ExternalLink } from "lucide-react";
import { INSTAGRAM_LINK, INSTAGRAM_USERNAME } from "../types";

export default function Instagram() {
  return (
    <section className="bg-[#FAF8F5] py-20 md:py-28 text-center border-b border-[#F1E7DF]/30">
      <div className="max-w-3xl mx-auto px-6">
        
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A88E] block mb-4">
          Dicas & Bastidores
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] tracking-wide mb-6">
          Acompanhe no Instagram
        </h2>
        <p className="font-sans text-sm md:text-base text-[#7A7A7A] leading-relaxed max-w-xl mx-auto mb-10 font-light">
          Quer ver de pertinho nosso espaço, conferir dicas de cuidados pós-procedimento e acompanhar nossa rotina com todo o carinho que você merece? Siga <span className="font-semibold text-[#1A1A1A]">{INSTAGRAM_USERNAME}</span>.
        </p>

        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-[#1A1A1A] hover:bg-[#D9A88E] hover:text-white border border-[#F1E7DF] rounded-full font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
        >
          <InstaIcon className="w-4 h-4 text-[#D9A88E]" />
          Ver perfil {INSTAGRAM_USERNAME}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

      </div>
    </section>
  );
}
