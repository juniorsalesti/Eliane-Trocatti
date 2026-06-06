import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

// Import modules
import Header from "./components/Header";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import About from "./components/About";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Location from "./components/Location";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief elegant spa intro loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const originalTitle = "Eliane Trocatti | Especialista em Epilação e Cuidados com a Pele";
    document.title = originalTitle;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Sua pele merece esse carinho... 🌸";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#FAF8F5]"
          >
            {/* Elegant Floral/Sparkle Animation */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center space-y-6"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 rounded-full border-t border-b border-[#D9A88E]/40"
                />
                <Sparkles className="w-6 h-6 text-[#D9A88E] absolute inset-0 m-auto animate-pulse" />
              </div>

              {/* Title brand reveal */}
              <div className="text-center">
                <h1 className="font-serif text-2xl tracking-widest text-[#1A1A1A] uppercase">
                  Eliane Trocatti
                </h1>
                <p className="font-sans text-[8px] md:text-[9px] tracking-[0.25em] text-[#7A7A7A] uppercase mt-1.5 px-4 leading-relaxed">
                  Especialista em Epilação & Cuidados com a Pele
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col selection:bg-[#D9A88E]/20"
          >
            {/* Header fixed navigation */}
            <Header />

            {/* Main Sections */}
            <main className="flex-grow">
              <Hero />
              <Trust />
              <About />
              <Services />
              <Differentials />
              <Testimonials />
              <CTA />
              <Location />
              <Instagram />
            </main>

            {/* Footer and contact map */}
            <Footer />

            {/* Floating Quick Action trigger widgets */}
            <WhatsAppButton />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
