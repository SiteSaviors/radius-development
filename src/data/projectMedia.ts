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
    name: "Maynard Crossing",
    location: "140 Units · Retail + Residential",
    placeholderClass: "ph-1",
    imageSrc: "/projects/maynard-crossing.jpg",
    headline: "MIXED USE",
  },
  {
    tag: "Residential · Durham NC",
    name: "Ninth Street Residences",
    location: "72 Luxury Units · Urban Core",
    placeholderClass: "ph-2",
    imageSrc: "/projects/ninth-street-residences.jpg",
    minHeight: 580,
    accent: "circle",
  },
  {
    tag: "Commercial · RTP",
    name: "Perimeter Park II",
    location: "85,000 SF · Class A Office",
    placeholderClass: "ph-3",
    imageSrc: "/projects/perimeter-park-ii.jpg",
  },
  {
    tag: "Townhomes · Chapel Hill",
    name: "Meadowmont South",
    location: "48 Townhomes · Transit-Oriented",
    placeholderClass: "ph-4",
    imageSrc: "/projects/meadowmont-south.jpg",
  },
  {
    tag: "BTR Community · Morrisville",
    name: "Weston Grove",
    location: "120-Unit Build-to-Rent Community",
    placeholderClass: "ph-5",
    imageSrc: "/projects/weston-grove.jpg",
    accent: "circle",
  },
  {
    tag: "Industrial · RDU Corridor",
    name: "Triangle Commerce Center",
    location: "200,000 SF · Last-Mile Logistics",
    placeholderClass: "ph-6",
    imageSrc: "/projects/triangle-commerce-center.jpg",
  },
];
