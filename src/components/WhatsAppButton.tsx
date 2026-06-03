import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquareCode, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../types";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltips 3 seconds after load to engage users
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Auto-dim the tooltip after 12 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-45 flex items-center gap-3">
      {/* Tooltip bubble helper */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="hidden sm:flex flex-col items-start bg-white border border-[#F1E7DF] p-3 rounded-2xl shadow-xl max-w-xs relative pointer-events-auto"
          >
            {/* Close trigger */}
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1 right-2 text-[#7A7A7A] hover:text-[#1A1A1A] font-sans text-[10px] uppercase font-bold"
            >
              ×
            </button>
            <span className="font-serif text-sm font-semibold text-[#1A1A1A] block pr-3">
              Olá! Tem Alguma Dúvida?
            </span>
            <span className="font-sans text-xs text-[#7A7A7A] mt-0.5 leading-tight block">
              Agende seu horário diretamente no WhatsApp da Eliane.
            </span>
            {/* Little notch arrow bubble decoration */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-[#F1E7DF] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Button with ripple waves */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar via WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-107 active:scale-95 group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Pulsating green ring backing */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 group-hover:bg-[#128C7E]/40 animate-ping" />

        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] group-hover:text-[#128C7E] transition-colors duration-300" />
      </motion.a>
    </div>
  );
}
