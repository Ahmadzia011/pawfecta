import ceramicSlowFeederImage from "../../public/products/ceramic-slow-feeder.webp";
import cloudComfortBedImage from "../../public/products/cloud-comfort-bed.webp";
import cozyTravelBlanketImage from "../../public/products/cozy-travel-blanket.webp";
import dailyCoatBrushImage from "../../public/products/daily-coat-brush.webp";
import enrichmentTreatToyImage from "../../public/products/enrichment-treat-toy.webp";
import everydayLeadImage from "../../public/products/everyday-lead.webp";
import naturalPawBalmImage from "../../public/products/natural-paw-balm.webp";
import softPawCleanserImage from "../../public/products/soft-paw-cleanser.webp";
import travelWaterBowlImage from "../../public/products/travel-water-bowl.webp";

export const SHOP_PRODUCTS = [
  {
    name: "Daily Coat Brush",
    category: "Grooming",
    price: "$24",
    image: dailyCoatBrushImage,
    alt: "Natural beechwood pet coat brush with soft bristles",
  },
  {
    name: "Soft Paw Cleanser",
    category: "Care",
    price: "$18",
    image: softPawCleanserImage,
    alt: "Amber pump bottle of gentle pet paw cleanser",
  },
  {
    name: "Cloud Comfort Bed",
    category: "Comfort",
    price: "$64",
    image: cloudComfortBedImage,
    alt: "Round oatmeal bouclé pet bed with a plush cushion",
  },
  {
    name: "Natural Paw Balm",
    category: "Wellness",
    price: "$16",
    image: naturalPawBalmImage,
    alt: "Open amber glass jar of natural pet paw balm",
  },
  {
    name: "Everyday Lead",
    category: "Walk",
    price: "$32",
    image: everydayLeadImage,
    alt: "Coiled taupe rope pet lead with leather and brass details",
  },
  {
    name: "Travel Water Bowl",
    category: "Travel",
    price: "$22",
    image: travelWaterBowlImage,
    alt: "Collapsible terracotta silicone travel water bowl",
  },
  {
    name: "Enrichment Treat Toy",
    category: "Play",
    price: "$28",
    image: enrichmentTreatToyImage,
    alt: "Cocoa natural-rubber enrichment treat toy",
  },
  {
    name: "Ceramic Slow Feeder",
    category: "Feeding",
    price: "$36",
    image: ceramicSlowFeederImage,
    alt: "Warm ivory ceramic slow-feeder bowl with spiral ridges",
  },
  {
    name: "Cozy Travel Blanket",
    category: "Comfort",
    price: "$42",
    image: cozyTravelBlanketImage,
    alt: "Folded oatmeal quilted pet blanket with cocoa piping",
  },
] as const;
