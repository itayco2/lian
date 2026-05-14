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
  // pruning gets the monstera (closer to leaves/branches) until a real pruning shot arrives
  pruning: "/images/service-planting.jpg",
  // planting gets the hands-with-soil (perfect match: planting = soil)
  planting: "/images/service-pruning.jpg",
  design: "/images/service-design.jpg",
};
