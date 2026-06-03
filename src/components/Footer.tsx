import React from "react";
import { WHATSAPP_URL, INSTAGRAM_LINK, INSTAGRAM_USERNAME } from "../types";
import { Instagram, MessageCircle, MapPin, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#FAF8F5]/80 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-12 border-b border-white/5">
          
          {/* Brand block (Cols 1-4) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#inicio" className="flex flex-col group select-none">
              <span className="font-serif text-2xl md:text-3xl tracking-wide text-white group-hover:text-[#D9A88E] transition-colors duration-300">
                Eliane Trocatti
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.3em] font-sans uppercase text-[#7A7A7A] group-hover:text-white transition-colors duration-300">
                Depilação & Estética
              </span>
            </a>
            <p className="font-sans text-xs text-[#7A7A7A] max-w-sm leading-relaxed">
              Atendimento exclusivo, insumos premium e técnicas humanizadas para conceder suavidade e harmonia a cada traço corporal feminino. Sinta a vivência de um spa boutique acolhedor em Campinas.
            </p>
          </div>

          {/* Quick Menu (Cols 5-7) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase">
              Explorar
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <a href="#inicio" className="hover:text-[#D9A88E] transition-colors duration-150">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#D9A88E] transition-colors duration-150">Sobre</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#D9A88E] transition-colors duration-150">Serviços</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#D9A88E] transition-colors duration-150">Avaliações</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#D9A88E] transition-colors duration-150">Contato</a>
              </li>
            </ul>
          </div>

          {/* Contacts info (Cols 8-12) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase">
              Fale Conosco
            </h4>
            <ul className="space-y-3.5 text-xs font-sans">
              
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#D9A88E] shrink-0" />
                <span className="text-[#7A7A7A] leading-relaxed">
                  Rua Ruy Pupo de Campos Ferreira, 72<br />
                  Jardim Campos Elíseos, Campinas - SP<br />
                  CEP 13060-063
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D9A88E]" />
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D9A88E] transition-colors duration-150"
                >
                  (19) 99172-9312
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#D9A88E]" />
                <a 
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D9A88E] transition-colors duration-150"
                >
                  {INSTAGRAM_USERNAME}
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Footer Sub bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-[11px] font-sans text-[#7A7A7A] tracking-wide">
          
          <div>
            &copy; {new Date().getFullYear()} Eliane Trocatti. Todos os direitos reservados.
          </div>

          {/* Social Icons circle lists & scroll to top */}
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Link"
              className="p-2 rounded-full border border-white/10 hover:border-[#D9A88E] hover:text-[#D9A88E] transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Link"
              className="p-2 rounded-full border border-white/10 hover:border-[#D9A88E] hover:text-[#D9A88E] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={handleScrollTop}
              className="ml-2 p-2 rounded-full bg-white/5 hover:bg-[#D9A88E] text-[#FAF8F5]/50 hover:text-white transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
