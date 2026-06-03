import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Calendar } from "lucide-react";
import { WHATSAPP_URL } from "../types";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Contato", href: "#contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-[#F1E7DF]/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col select-none group">
          <span className="font-serif text-2xl md:text-3xl tracking-wide text-[#1A1A1A] group-hover:text-[#D9A88E] transition-colors duration-300">
            Eliane Trocatti
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.3em] font-sans uppercase text-[#7A7A7A] group-hover:text-[#1A1A1A] transition-colors duration-300">
            Depilação & Estética
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-sans tracking-wide text-[#7A7A7A] hover:text-[#1A1A1A] transition-colors duration-300 relative py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D9A88E] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1A1A1A] hover:bg-[#D9A88E] text-[#FFFFFF] hover:text-white rounded-full font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            <Calendar className="w-4.5 h-4.5" />
            Agendar Horário
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1A1A1A] hover:text-[#D9A88E] transition-colors duration-200"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sliding Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-[#F1E7DF] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base font-sans font-medium text-[#7A7A7A] hover:text-[#1A1A1A] py-2 border-b border-[#FAF8F5] transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D9A88E] text-white rounded-full font-sans text-sm uppercase tracking-widest font-medium transition-all duration-300"
              >
                <Calendar className="w-4.5 h-4.5" />
                Agendar Horário
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
