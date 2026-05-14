// תמונות מקומיות ב-public/images. כשליאן ישלח תמונות אמיתיות —
// פשוט תחליפו את הקובץ עם אותו השם (hero.jpg, about.jpg, וכו').

export const HERO_IMAGE = {
  src: "/images/hero.jpg",
  alt: "שביל מואר בגינה מעוצבת עם פרחים אדומים",
};

export const ABOUT_IMAGE = {
  src: "/images/about.jpg",
  alt: "פינה בגינה עם צמחיה ירוקה ועירוגות",
};

export const SERVICE_IMAGES: Record<string, string> = {
  maintenance: "/images/service-maintenance.jpg",
  pruning: "/images/service-pruning.jpg",
  planting: "/images/service-planting.jpg",
  design: "/images/service-design.jpg",
};
