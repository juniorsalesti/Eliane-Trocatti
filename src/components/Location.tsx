import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { WHATSAPP_URL } from "../types";

export default function Location() {
  const addressQuery = encodeURIComponent("Rua Ruy Pupo de Campos Ferreira, 72, Jardim Campos Elíseos, Campinas - SP, 13060-063");
  const embedMapUrl = `https://www.google.com/maps/embed/v1/place?key=&q=${addressQuery}`;
  // Wait, to ensure we render a beautiful, functional maps widget without needing an API key (which could trigger empty screen if key is missing/unconfigured in the preview iframe), we can use the standard free iframe search embed which is robust and never requires keys!
  const freeEmbedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contato" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="max-w-2xl text-center md:text-left space-y-4 mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A88E] block">
            Nossa Localização
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] tracking-wide">
            Visite Nosso Espaço Boutique
          </h2>
          <div className="w-20 h-[1.5px] bg-[#D9A88E]" />
          <p className="font-sans text-sm md:text-base text-[#7A7A7A] font-light leading-relaxed">
            Fácil acesso em Campinas, num ambiente reservado, charmoso e planejado para assegurar privacidade e aconchego.
          </p>
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Card with details */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-[#FAF8F5] border border-[#F1E7DF]/50 rounded-3xl p-8 md:p-10 shadow-sm">
            
            <div className="space-y-8">
              {/* Card Title */}
              <h3 className="font-serif text-xl md:text-2xl text-[#1A1A1A] font-semibold tracking-wide">
                Eliane Trocatti
              </h3>

              {/* Data Items */}
              <div className="space-y-6">
                
                {/* Map Pin item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-[#F1E7DF]/50 text-[#D9A88E] rounded-2xl shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#1A1A1A] leading-tight mb-1">
                      Endereço
                    </h4>
                    <p className="font-sans text-sm text-[#7A7A7A] leading-relaxed">
                      Rua Ruy Pupo de Campos Ferreira, 72<br />
                      Jardim Campos Elíseos<br />
                      Campinas - SP<br />
                      CEP 13060-063
                    </p>
                  </div>
                </div>

                {/* Telephone Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-[#F1E7DF]/50 text-[#D9A88E] rounded-2xl shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#1A1A1A] leading-tight mb-1">
                      WhatsApp
                    </h4>
                    <a 
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-[#7A7A7A] hover:text-[#D9A88E] transition-colors duration-200 block"
                    >
                      (19) 99172-9312
                    </a>
                  </div>
                </div>

                {/* Working Hours Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-[#F1E7DF]/50 text-[#D9A88E] rounded-2xl shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#1A1A1A] leading-tight mb-1">
                      Horário de Atendimento
                    </h4>
                    <p className="font-sans text-sm text-[#7A7A7A] leading-relaxed">
                      Segunda a Sábado<br />
                      Com hora marcada previamente.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Schedule trigger action */}
            <div className="mt-10 pt-6 border-t border-[#F1E7DF]">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FAF8F5] hover:bg-[#D9A88E] hover:text-white text-[#D9A88E] border border-[#D9A88E] rounded-full font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Como Chegar / Reservar
              </a>
            </div>

          </div>

          {/* Embedded google map */}
          <div className="lg:col-span-8 relative overflow-hidden rounded-3xl border border-[#F1E7DF]/50 shadow-md min-h-[350px] lg:min-h-full">
            <iframe
              src={freeEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Eliane Trocatti"
              className="absolute inset-0 w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
