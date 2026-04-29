/**
 * Global Configuration for Diamond Resort Frontend
 */

export const API_BASE_URL = "https://diamond-backend-smoky.vercel.app";

export const API_ENDPOINTS = {
  BOOKINGS: `${API_BASE_URL}/api/bookings`,
  ADMIN_LOGIN: `${API_BASE_URL}/api/admin/login`,
  ADMIN_CHECK_AUTH: `${API_BASE_URL}/api/admin/check-auth`,
};

export const WHATSAPP_NUMBER = "918092719700";
export const WHATSAPP_MESSAGE = "Hello! I'd like to enquire about The Diamond Resort.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const INSTAGRAM_URL = "https://www.instagram.com/diamondresort_official?igsh=MW9jM2wycTVxazhweg==";
