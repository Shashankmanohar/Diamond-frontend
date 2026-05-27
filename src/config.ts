/**
 * Global Configuration for Diamond Resort Frontend
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const API_ENDPOINTS = {
  BOOKINGS: `${API_BASE_URL}/api/bookings`,
  ADMIN_LOGIN: `${API_BASE_URL}/api/admin/login`,
  ADMIN_CHECK_AUTH: `${API_BASE_URL}/api/admin/check-auth`,
  BLOGS: `${API_BASE_URL}/api/blogs`,
  UPLOAD: `${API_BASE_URL}/api/upload`,
};

export const WHATSAPP_NUMBER = "918092719700";
export const WHATSAPP_MESSAGE = "Hello! I'd like to enquire about The Diamond Resort.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const INSTAGRAM_URL = "https://www.instagram.com/diamondresort_official?igsh=MW9jM2wycTVxazhweg==";
