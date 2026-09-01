import { PRODUCT_MEDIA } from "./media.constants";

export const SHOP_PRODUCTS = [
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
  {
    name: "Natural Paw Balm",
    category: "Wellness",
    price: "$16",
    image: PRODUCT_MEDIA.naturalPawBalm,
    alt: "Open amber glass jar of natural pet paw balm",
  },
  {
    name: "Everyday Lead",
    category: "Walk",
    price: "$32",
    image: PRODUCT_MEDIA.everydayLead,
    alt: "Coiled taupe rope pet lead with leather and brass details",
  },
  {
    name: "Travel Water Bowl",
    category: "Travel",
    price: "$22",
    image: PRODUCT_MEDIA.travelWaterBowl,
    alt: "Collapsible terracotta silicone travel water bowl",
  },
  {
    name: "Enrichment Treat Toy",
    category: "Play",
    price: "$28",
    image: PRODUCT_MEDIA.enrichmentTreatToy,
    alt: "Cocoa natural-rubber enrichment treat toy",
  },
  {
    name: "Ceramic Slow Feeder",
    category: "Feeding",
    price: "$36",
    image: PRODUCT_MEDIA.ceramicSlowFeeder,
    alt: "Warm ivory ceramic slow-feeder bowl with spiral ridges",
  },
  {
    name: "Cozy Travel Blanket",
    category: "Comfort",
    price: "$42",
    image: PRODUCT_MEDIA.cozyTravelBlanket,
    alt: "Folded oatmeal quilted pet blanket with cocoa piping",
  },
] as const;

export const FEATURED_PRODUCTS = SHOP_PRODUCTS.slice(0, 3);
