/**
 * Shared Application Shared Configuration and Types
 */

export const WHATSAPP_NUMBER = "5519991729312";
export const INSTAGRAM_USERNAME = "@elianetrocatti";
export const INSTAGRAM_LINK = "https://instagram.com/elianetrocatti";

// Pre-filled message URL-encoded
export const WHATSAPP_MESSAGE = "Olá Eliane, encontrei seu site e gostaria de agendar um horário.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export interface Service {
  id: string;
  title: string;
  caption: string;
  description: string;
  duration?: string;
  price?: string;
}

export interface Testimony {
  id: string;
  name: string;
  role: string;
  stars: number;
  text: string;
  date: string;
}

export interface TrustFactor {
  id: string;
  value: string;
  label: string;
  description: string;
}
