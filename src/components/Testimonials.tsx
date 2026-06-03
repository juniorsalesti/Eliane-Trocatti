import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquare, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: "r1",
      name: "Mariana Silva",
      text: "Cuidado, higiene, qualidade de produto e qualificação técnica! Sem dúvidas a melhor depilação que já fiz na vida. A Eliane é de um profissionalismo ímpar.",
      stars: 5,
      date: "Campinas - SP",
      avatarLetter: "M"
    },
    {
      id: "r2",
      name: "Camila Camargo",
      text: "Usa produtos de primeira qualidade que fez toda diferença ao me depilar. Não tive alergias, nem foliculite, a pele ficou extremamente aveludada.",
      stars: 5,
      date: "Campinas - SP",
      avatarLetter: "C"
    },
    {
      id: "r3",
      name: "Amanda Costa",
      text: "Um amor de pessoa, espaço maravilhoso, aconchegante e incrível. Super recomendo o atendimento dela, nos deixa super à vontade do início ao fim.",
      stars: 5,
      date: "Campinas - SP",
      avatarLetter: "A"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      resetAutoplay();
      slideNext();
    } else if (isRightSwipe) {
      resetAutoplay();
      slidePrev();
    }
  };

  const slideNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Autoplay hook
  useEffect(() => {
    timerRef.current = setInterval(slideNext, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const resetAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" }
    })
  };

  return (
    <section id="avaliacoes" className="relative py-20 md:py-32 bg-white overflow-hidden border-b border-[#F1E7DF]/30">
      {/* Absolute background decoration element */}
      <div className="absolute inset-0 bg-rose-gold-gradient opacity-40 z-0 pointer-events-none" />
      <div className="absolute left-[5%] top-[10%] w-[400px] h-[400px] rounded-full bg-[#D9A88E]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A88E] block">
            Feedbacks de Amor
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] tracking-wide">
            O que dizem nossas clientes
          </h2>
          <div className="w-16 h-[1.5px] bg-[#D9A88E] mx-auto" />
        </div>

        {/* The Slider Container */}
        <div 
          className="relative w-full min-h-[380px] sm:min-h-[300px] flex items-center justify-center touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full max-w-2xl glass p-7 md:p-12 rounded-3xl shadow-xl shadow-[#D9A88E]/5 border border-white flex flex-col items-center text-center"
            >
              {/* Quote Icon */}
              <div className="absolute top-[-24px] bg-white text-[#D9A88E] p-3 rounded-full shadow-md border border-[#F1E7DF]/30">
                <Quote className="w-5 h-5 fill-[#D9A88E]/15 rotate-180" />
              </div>

              {/* Stars block */}
              <div className="flex items-center gap-1 mb-6 mt-2">
                {[...Array(reviews[activeIndex].stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#D9A88E] fill-[#D9A88E]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-sans text-sm md:text-lg text-[#1A1A1A] italic leading-relaxed font-light mb-8 max-w-xl">
                &ldquo;{reviews[activeIndex].text}&rdquo;
              </p>

              {/* Name Subtitle block */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D9A88E] text-white rounded-full flex items-center justify-center font-serif text-base font-semibold shadow-inner shrink-0">
                  {reviews[activeIndex].avatarLetter}
                </div>
                <div className="text-left">
                  <h4 className="font-serif text-sm font-semibold text-[#1A1A1A]">
                    {reviews[activeIndex].name}
                  </h4>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#7A7A7A] block">
                    {reviews[activeIndex].date}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Right Arrows for slide controller - Absolute on desktop, hidden on tiny screens to avoid viewport overflow */}
          <button
            onClick={() => { resetAutoplay(); slidePrev(); }}
            className="absolute left-[-10px] md:left-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-[#D9A88E] hover:text-white text-[#7A7A7A] shadow-md border border-[#F1E7DF]/30 transition-all duration-300 pointer-events-auto h-11 w-11 flex items-center justify-center xl:left-[-80px]"
            aria-label="Avaliação Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => { resetAutoplay(); slideNext(); }}
            className="absolute right-[-10px] md:right-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-[#D9A88E] hover:text-white text-[#7A7A7A] shadow-md border border-[#F1E7DF]/30 transition-all duration-300 pointer-events-auto h-11 w-11 flex items-center justify-center xl:right-[-80px]"
            aria-label="Próxima Avaliação"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel indicator dots - enlarged clickable bounding box for mobile */}
        <div className="flex justify-center items-center gap-1 mt-8 relative z-20">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                resetAutoplay();
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className="p-3 focus:outline-none"
              aria-label={`Ir para depoimento ${index + 1}`}
            >
              <div
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#D9A88E] w-6"
                    : "bg-[#7A7A7A]/30 w-2.5"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Google validation badge */}
        <div className="mt-8 flex items-center justify-center gap-2 py-2 px-4 rounded-full border border-[#F1E7DF]/50 bg-white/50 text-[#7A7A7A] text-[11px] md:text-sm font-sans tracking-wide">
          <MessageSquare className="w-4 h-4 text-[#D9A88E]" />
          <span>Avaliado com nota máxima <b>5.0/5.0</b> no Google</span>
        </div>

      </div>
    </section>
  );
}
