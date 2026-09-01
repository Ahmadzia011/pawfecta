import { PackageCheck, ShoppingBag, Truck } from "lucide-react";
import aboutCat from "../../public/images/pawfecta/about-cat.webp";
import aboutCompanions from "../../public/images/pawfecta/about-companions.webp";
import lunaImage from "../../public/images/pawfecta/avatar-luna.webp";
import miloImage from "../../public/images/pawfecta/avatar-milo.webp";
import teddyImage from "../../public/images/pawfecta/avatar-teddy.webp";
import groomingCatImage from "../../public/images/pawfecta/category-grooming-cat.webp";
import wellnessCatImage from "../../public/images/pawfecta/category-wellness-cat.webp";
import bookingDogPremium from "../../public/images/pawfecta/booking-dog-premium.webp";
import heroCatCutout from "../../public/images/pawfecta/hero-cat-cutout.webp";
import petCutout from "../../public/images/pawfecta/pet-cutout.webp";
import bathImage from "../../public/images/pawfecta/category-bath-golden-retriever.webp";
import sensitiveImage from "../../public/images/pawfecta/service-sensitive.webp";
import dalmatianImage from "../../public/images/pawfecta/testimonials-dalmatian.webp";
import cloudComfortBedImage from "../../public/products/cloud-comfort-bed.webp";
import dailyCoatBrushImage from "../../public/products/daily-coat-brush.webp";
import softPawCleanserImage from "../../public/products/soft-paw-cleanser.webp";

export const HOMEPAGE_IMAGES = {
  booking: {
    src: bookingDogPremium,
    alt: "Happy apricot cockapoo sitting attentively",
  },
  hero: {
    src: heroCatCutout,
    alt: "Calm cream-and-ginger cat sitting attentively",
  },
  aboutCat: {
    src: aboutCat,
    alt: "Calm cream-and-ginger cat in a warm pet wellness room",
  },
  aboutCompanions: {
    src: aboutCompanions,
    alt: "Golden retriever and grey cat relaxing together",
  },
  petCutout: {
    src: petCutout,
    alt: "Cheerful freshly groomed apricot cockapoo",
  },
  testimonials: {
    src: dalmatianImage,
    alt: "Calm Dalmatian resting in a warm pet wellness studio",
  },
} as const;

export const HOMEPAGE_NAV_LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Products", "#products"],
  ["Bundles", "#bundles"],
  ["FAQ", "#faq"],
] as const;

export const HOMEPAGE_TRUSTED_STARS = [1, 2, 3, 4, 5] as const;

export const HOMEPAGE_TRUSTED_BRANDS = [
  "PetCare",
  "Happy Paws",
  "VetLife",
  "PetHome",
  "GoodCare",
] as const;

export const HOMEPAGE_METRICS = [
  [
    "8+",
    "Years Curating",
    "Years spent finding smarter, more thoughtful essentials for everyday pet life.",
  ],
  [
    "2K+",
    "Happy Pets",
    "Pets enjoying Pawfecta products in happy homes and daily routines.",
  ],
  [
    "98%",
    "Repeat Customers",
    "Pet parents who return to Pawfecta for dependable everyday essentials.",
  ],
] as const;

export const HOMEPAGE_PRODUCT_CATEGORIES = [
  {
    title: "Bath & Coat Care",
    copy: "Gentle grooming essentials designed to keep coats clean, soft, comfortable, and beautifully cared for.",
    items: ["Shampoos", "Brushes", "Coat Care"],
    image: wellnessCatImage,
    alt: "Freshly bathed golden retriever in a warm pet-care room",
  },
  {
    title: "Grooming Essentials",
    copy: "Comfortable, easy-to-use tools for keeping paws, faces, and coats neat between professional grooms.",
    items: ["Trimmers", "Combs", "Paw Care"],
    image: bathImage,
    alt: "Happy cream cat relaxing beside wooden grooming tools",
  },
  {
    title: "Everyday Wellness",
    copy: "Useful favorites for feeding, play, enrichment, and the little rituals that support a joyful daily routine.",
    items: ["Smart Toys", "Feeding", "Daily Care"],
    image: groomingCatImage,
    alt: "Playful silver tabby cat enjoying enrichment toys",
  },
  {
    title: "Comfort for Every Age",
    copy: "Cozy, calming essentials made to support restful moments, sensitive pets, and senior companions.",
    items: ["Cozy Beds", "Calming Care", "Senior Support"],
    image: sensitiveImage,
    alt: "Senior golden retriever resting on a comfortable pet bed",
  },
] as const;

export const HOMEPAGE_FEATURED_PRODUCTS = [
  {
    name: "Daily Coat Brush",
    category: "Grooming",
    price: "$24",
    image: dailyCoatBrushImage,
    alt: "Natural beechwood pet coat brush with dense soft bristles",
  },
  {
    name: "Soft Paw Cleanser",
    category: "Daily care",
    price: "$18",
    image: softPawCleanserImage,
    alt: "Ivory paw cleanser bottle with a warm brown pump",
  },
  {
    name: "Cloud Comfort Bed",
    category: "Comfort",
    price: "$64",
    image: cloudComfortBedImage,
    alt: "Plush oatmeal boucle pet bed with a cushioned center",
  },
] as const;

export const HOMEPAGE_PRODUCT_BUNDLES = [
  {
    name: "Everyday Starter",
    price: "$39",
    copy: "The daily essentials every pet parent will be glad to have close at hand.",
    features: [
      "Gentle everyday shampoo",
      "Soft grooming brush",
      "Paw and nose balm",
      "Collapsible travel bowl",
      "Waste bag roll",
      "Everyday care guide",
    ],
  },
  {
    name: "Comfort & Care",
    price: "$59",
    copy: "A calming collection for pets who appreciate softer textures and gentler routines.",
    features: [
      "Plush comfort throw",
      "Gentle grooming glove",
      "Sensitive pet wipes",
      "Calming enrichment toy",
      "Paw care balm",
      "Comfort routine guide",
    ],
  },
  {
    name: "Complete Pet Box",
    price: "$79",
    copy: "A generous mix of grooming, play, travel, and comfort favorites in one joyful box.",
    features: [
      "Premium coat-care duo",
      "Ergonomic grooming brush",
      "Interactive enrichment toy",
      "Travel water bottle",
      "Paw and nose balm",
      "Free standard shipping",
    ],
  },
] as const;

export const HOMEPAGE_HOW_IT_WORKS_STEPS = [
  {
    title: "Choose Favorites",
    copy: "Find the right essentials for your pet.",
    Icon: ShoppingBag,
  },
  {
    title: "Packed with Care",
    copy: "Every order is checked thoughtfully.",
    Icon: PackageCheck,
  },
  {
    title: "Delivered to You",
    copy: "Unbox happier moments together.",
    Icon: Truck,
  },
] as const;

export const HOMEPAGE_SHOPPING_NEEDS = [
  "Bath & Coat Care",
  "Grooming Essentials",
  "Everyday Wellness",
  "Comfort & Senior Care",
] as const;

export const HOMEPAGE_TESTIMONIALS = [
  {
    quote:
      "The coat-care set feels genuinely well made, and Milo was comfortable with every product from day one.",
    name: "Daniel Carter",
    pet: "Pet parent to Milo",
    petName: "Milo",
    image: miloImage,
  },
  {
    quote:
      "Everything arrived beautifully packed, and Teddy immediately claimed the enrichment toy as his favorite.",
    name: "Olivia Harris",
    pet: "Pet parent to Teddy",
    petName: "Teddy",
    image: teddyImage,
  },
  {
    quote:
      "Pawfecta made it easy to find gentle essentials for Luna. The quality feels thoughtful in every detail.",
    name: "Sophie Miller",
    pet: "Pet parent to Luna",
    petName: "Luna",
    image: lunaImage,
  },
] as const;

export const HOMEPAGE_FAQS = [
  [
    "How long does delivery take?",
    "Standard orders usually arrive within two to five business days. You’ll receive tracking details as soon as your order is on its way.",
  ],
  [
    "How do I choose the right products?",
    "Shop by category for a specific need, choose one of our curated bundles, or tell us about your pet and we’ll help narrow down the best options.",
  ],
  [
    "Are there options for sensitive or older pets?",
    "Yes. Look for our comfort and senior-care selections, and always review the product label or ask your veterinarian when your pet has a specific health need.",
  ],
  [
    "What is your return policy?",
    "Unused items in their original packaging can be returned within 30 days. For hygiene reasons, opened grooming and care products cannot be returned.",
  ],
  [
    "How can I track my order?",
    "We’ll email a tracking link once your order leaves our hands, so you can follow it all the way to your door.",
  ],
] as const;
