const CLOUDFLARE_R2_IMAGE_BASE_URL =
  "https://pub-fd2fd92e94ea41dc8f1d922b3ba999ce.r2.dev/images";

const homepageImage = (filename: string) =>
  `${CLOUDFLARE_R2_IMAGE_BASE_URL}/homepage/${filename}`;

const productImage = (filename: string) =>
  `${CLOUDFLARE_R2_IMAGE_BASE_URL}/products/${filename}`;

export const HOMEPAGE_MEDIA = {
  heroCompanionsPremium: "/images/hero-companions-premium.webp",
  aboutCat: homepageImage("about-cat.webp"),
  aboutCompanions: homepageImage("about-companions.webp"),
  avatarLuna: homepageImage("avatar-luna.webp"),
  avatarMilo: homepageImage("avatar-milo.webp"),
  avatarTeddy: homepageImage("avatar-teddy.webp"),
  bookingDogPremium: homepageImage("booking-dog-premium.webp"),
  categoryBathGoldenRetriever: homepageImage(
    "category-bath-golden-retriever.webp",
  ),
  categoryGroomingCat: homepageImage("category-grooming-cat.webp"),
  categoryWellnessCat: homepageImage("category-wellness-cat.webp"),
  petCutout: homepageImage("pet-cutout.webp"),
  serviceSensitive: homepageImage("service-sensitive.webp"),
  testimonialsDalmatian: homepageImage("testimonials-dalmatian.webp"),
} as const;

export const PRODUCT_MEDIA = {
  ceramicSlowFeeder: productImage("ceramic-slow-feeder.webp"),
  cloudComfortBed: productImage("cloud-comfort-bed.webp"),
  cozyTravelBlanket: productImage("cozy-travel-blanket.webp"),
  dailyCoatBrush: productImage("daily-coat-brush.webp"),
  enrichmentTreatToy: productImage("enrichment-treat-toy.webp"),
  everydayLead: productImage("everyday-lead.webp"),
  naturalPawBalm: productImage("natural-paw-balm.webp"),
  softPawCleanser: productImage("soft-paw-cleanser.webp"),
  travelWaterBowl: productImage("travel-water-bowl.webp"),
};
