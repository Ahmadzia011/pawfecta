import { PRODUCT_MEDIA } from "./media.constants";

export const FEATURED_PRODUCTS = [
  {
    name: "Daily Coat Brush",
    category: "Grooming",
    price: "$24",
    image: PRODUCT_MEDIA.dailyCoatBrush,
    alt: "Natural beechwood pet coat brush with soft bristles",
  },
  {
    name: "Soft Paw Cleanser",
    category: "Care",
    price: "$18",
    image: PRODUCT_MEDIA.softPawCleanser,
    alt: "Amber pump bottle of gentle pet paw cleanser",
  },
  {
    name: "Cloud Comfort Bed",
    category: "Comfort",
    price: "$64",
    image: PRODUCT_MEDIA.cloudComfortBed,
    alt: "Round oatmeal bouclé pet bed with a plush cushion",
  },
] as const;
