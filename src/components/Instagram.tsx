import { motion } from "motion/react";
import { Instagram as InstaIcon, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { INSTAGRAM_LINK, INSTAGRAM_USERNAME } from "../types";

// Custom generated assets
const productImg = "/images/insta_spa_product.png";
const roomImg = "/images/insta_spa_room.png";

export default function Instagram() {
  const feedPosts = [
    {
      id: "p1",
      image: productImg,
      likes: "148",
      comments: "12",
      phrase: "O segredo para uma depilação menos dolorosa? Ativos calmantes e produtos selecionados com amor."
    },
    {
      id: "p2",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
      likes: "210",
      comments: "19",
      phrase: "Nosso refúgio em Campinas. Preparado com todo carinho para seu momento semanal de autocuidado."
    },
    {
      id: "p3",
      image: roomImg,
      likes: "185",
      comments: "15",
      phrase: "Ambiente higienizado, lençóis individuais descartáveis e aromaterapia que acalma a alma."
    },
    {
      id: "p4",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop",
      likes: "235",
      comments: "25",
      phrase: "Design de sobrancelhas personalizado que harmoniza e realça a beleza de cada traço único de seu olhar."
    }
  ];

  return (
    <section className="bg-[#FAF8F5] py-24 md:py-32 overflow-hidden border-b border-[#F1E7DF]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mb-16">
          <div className="text-center md:text-left space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A88E] block">
              Siga Nossa Experiência
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] tracking-wide">
              No Instagram {INSTAGRAM_USERNAME}
            </h2>
            <p className="font-sans text-sm text-[#7A7A7A] max-w-lg leading-relaxed">
              Acompanhe de pertinho nosso dia a dia, dicas essenciais de cuidados com a pele, novidades e resultados de nossas clientes motivadas.
            </p>
          </div>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-[#1A1A1A] hover:bg-[#D9A88E] hover:text-white border border-[#F1E7DF] rounded-full font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-xs"
          >
            <InstaIcon className="w-4 h-4" />
            Visitar Instagram
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Visual Feed Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {feedPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-white border border-[#F1E7DF]/50 shadow-xs"
            >
              {/* Photo */}
              <img
                src={post.image}
                alt="Instagram @elianetrocatti"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Hover Dark Overlay block with social reactions */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white text-center">
                
                {/* Subtle top decoration */}
                <div className="flex justify-end">
                  <InstaIcon className="w-5 h-5 text-white/30" />
                </div>

                {/* Phrase caption in the center */}
                <p className="font-sans text-[11px] md:text-xs leading-relaxed text-slate-100 line-clamp-3 italic px-2">
                  &ldquo;{post.phrase}&rdquo;
                </p>

                {/* Metrics */}
                <div className="flex items-center justify-center gap-6 text-sm font-semibold">
                  <span className="flex items-center gap-1.5 hover:text-[#D9A88E]">
                    <Heart className="w-4 h-4 fill-white text-white group-hover:fill-[#D9A88E] group-hover:text-[#D9A88E] transition-colors duration-200" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-[#D9A88E]">
                    <MessageCircle className="w-4 h-4 fill-white text-white group-hover:fill-[#D9A88E] group-hover:text-[#D9A88E] transition-colors duration-200" />
                    {post.comments}
                  </span>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
