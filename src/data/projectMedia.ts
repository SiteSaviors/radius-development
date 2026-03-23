export type FeaturedProjectMedia = {
  label: string;
  name: string;
  imageSrc?: string;
  accentImageSrc?: string;
};

export type PortfolioProjectMedia = {
  tag: string;
  name: string;
  location: string;
  placeholderClass: string;
  imageSrc?: string;
  disableImageOverlay?: boolean;
  minHeight?: number;
  accent?: "circle" | "none";
  headline?: string;
};

// Update imageSrc values here after placing files into public/projects/.
export const featuredProjectMedia: FeaturedProjectMedia = {
  label: "Featured Project",
  name: "The Shiloh",
  imageSrc: "/projects/the-shiloh.jpeg",
  accentImageSrc: "/projects/The-Shiloh-3.jpeg",
};

export const portfolioProjectMedia: PortfolioProjectMedia[] = [
  {
    tag: "Mixed-Use · Cary NC",
    name: "The Franklin",
    location: "140 Units · Retail + Residential",
    placeholderClass: "ph-1",
    imageSrc: "/projects/the-franklin.jpeg",
    disableImageOverlay: true,
  },
  {
    tag: "Residential · Durham NC",
    name: "Terraces At West Cary",
    location: "72 Luxury Units · Urban Core",
    placeholderClass: "ph-2",
    imageSrc: "/projects/Terrace.jpg",
    minHeight: 580,
    accent: "circle",
  },
  {
    tag: "Commercial · RTP",
    name: "The Shiloh",
    location: "85,000 SF · Class A Office",
    placeholderClass: "ph-3",
    imageSrc: "/projects/The-Shiloh-main.jpg",
  },
  {
    tag: "Townhomes · Chapel Hill",
    name: "Flats At Quarry Hill",
    location: "48 Townhomes · Transit-Oriented",
    placeholderClass: "ph-4",
    imageSrc: "/projects/flats-at-quarry-hill.jpeg",
  },
  {
    tag: "BTR Community · Morrisville",
    name: "Alta Aria",
    location: "120-Unit Build-to-Rent Community",
    placeholderClass: "ph-5",
    imageSrc: "/projects/alta-aria.jpg",
    accent: "circle",
  },
  {
    tag: "Industrial · RDU Corridor",
    name: "Sunflower Springs",
    location: "200,000 SF · Last-Mile Logistics",
    placeholderClass: "ph-6",
    imageSrc: "/projects/sunflower-springs.jpg",
  },
];
