import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import file JSON chứa ngôn ngữ
import vi from "./locales/vi.json";
import en from "./locales/en.json";

i18n.use(initReactI18next).init({
  resources: {
    vi: { translation: vi },
    en: { translation: en },
  },
  lng: "vi", // Ngôn ngữ mặc định
  fallbackLng: "en", // không có nn nào hợp lệ thì chạy này
  interpolation: {
    escapeValue: false, // React đã xử lý XSS rồi nên có thể đặt false
  },
});

export default i18n;
