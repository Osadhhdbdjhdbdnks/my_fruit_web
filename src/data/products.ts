export interface Product {
  id: string;
  name: string;
  variety: string;
  origin: string;
  description: string;
  weight: string;
  price: number;
  image: string;
  gallery: string[];
  category: string;
  seasonal: boolean;
  available: boolean;
  delivery: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  products: string[];
}

// Image URLs
const IMAGES = {
  hero: "https://image.qwenlm.ai/generated-images/b260ae8c-2ef8-40ed-b2e4-2f86e4583c6d/_result.png",
  citrusCollection: "https://image.qwenlm.ai/generated-images/0486f903-804c-4ddf-8f13-4973e6ab16d2/_result.png",
  orchardCollection: "https://image.qwenlm.ai/generated-images/bd3dcc55-f807-48b0-8910-75aa44400ab3/_result.png",
  giftCollection: "https://image.qwenlm.ai/generated-images/9a824ad5-b532-4b6f-abc6-7cb66ff299c5/_result.png",
  fig: "https://image.qwenlm.ai/generated-images/0b3204de-c949-4c70-b720-2fc9cc11e3d3/_result.png",
  pomegranate: "https://image.qwenlm.ai/generated-images/0670480e-b412-4211-a5ab-b9e56ac9f6a3/_result.png",
  brandStory: "https://image.qwenlm.ai/generated-images/059bf1d4-1513-48c7-bb45-a2567dd91908/_result.png",
  storyHero: "https://image.qwenlm.ai/generated-images/dc7dfd9c-b54b-4a5b-9f83-e87bd1f4d6d1/_result.png",
  seasonalBanner: "https://image.qwenlm.ai/generated-images/3141decb-803f-44fa-aa42-ffe68686ef83/_result.png",
  bloodOrange: "https://image.qwenlm.ai/generated-images/3d0ecece-e290-4fce-bb51-735b20e0b662/_result.png",
};

export { IMAGES };

export const products: Product[] = [
  {
    id: "blood-orange",
    name: "Blood Oranges",
    variety: "Tarocco",
    origin: "Sicily, Italy",
    description: "Deep crimson flesh with a sweet, berry-like complexity. These exceptional citrus fruits carry the warmth of Mediterranean sunshine in every segment.",
    weight: "1 kg",
    price: 28.90,
    image: IMAGES.bloodOrange,
    gallery: [IMAGES.bloodOrange, IMAGES.citrusCollection],
    category: "citrus",
    seasonal: true,
    available: true,
    delivery: "Available for next-day delivery within Klang Valley"
  },
  {
    id: "black-fig",
    name: "Black Mission Figs",
    variety: "Black Mission",
    origin: "Turkey",
    description: "Honeyed and delicate, with a jammy sweetness that unfolds with each bite. Perfect for pairing with aged cheese or simply enjoyed on their own.",
    weight: "500 g",
    price: 34.90,
    image: IMAGES.fig,
    gallery: [IMAGES.fig, IMAGES.orchardCollection],
    category: "orchard",
    seasonal: true,
    available: true,
    delivery: "Available for next-day delivery within Klang Valley"
  },
  {
    id: "pomegranate",
    name: "Pomegranate",
    variety: "Wonderful",
    origin: "Afghanistan",
    description: "Jewel-like arils bursting with tart-sweet flavour. A fruit of ancient heritage, prized for its complexity and vibrant colour.",
    weight: "2 pieces",
    price: 22.90,
    image: IMAGES.pomegranate,
    gallery: [IMAGES.pomegranate, IMAGES.orchardCollection],
    category: "orchard",
    seasonal: true,
    available: true,
    delivery: "Available for next-day delivery within Klang Valley"
  },
  {
    id: "red-grapes",
    name: "Red Globe Grapes",
    variety: "Red Globe",
    origin: "Peru",
    description: "Large, crisp berries with a satisfying snap and balanced sweetness. Nature's candy, elevated to an everyday luxury.",
    weight: "750 g",
    price: 26.90,
    image: IMAGES.orchardCollection,
    gallery: [IMAGES.orchardCollection, IMAGES.citrusCollection],
    category: "orchard",
    seasonal: true,
    available: true,
    delivery: "Available for next-day delivery within Klang Valley"
  },
  {
    id: "asian-pear",
    name: "Nashi Pear",
    variety: "Kosui",
    origin: "Japan",
    description: "Exceptionally crisp with a refreshing, clean sweetness. The texture is almost like a fine apple, while the flavour is distinctly pear.",
    weight: "3 pieces",
    price: 32.90,
    image: IMAGES.orchardCollection,
    gallery: [IMAGES.orchardCollection, IMAGES.brandStory],
    category: "orchard",
    seasonal: true,
    available: true,
    delivery: "Available for next-day delivery within Klang Valley"
  },
  {
    id: "yuzu",
    name: "Yuzu",
    variety: "Yuzu",
    origin: "Kochi, Japan",
    description: "An aromatic citrus of extraordinary complexity. Its fragrance combines notes of lemon, mandarin, and grapefruit with floral undertones.",
    weight: "4 pieces",
    price: 38.90,
    image: IMAGES.citrusCollection,
    gallery: [IMAGES.citrusCollection, IMAGES.hero],
    category: "citrus",
    seasonal: true,
    available: true,
    delivery: "Available for next-day delivery within Klang Valley"
  },
  {
    id: "persimmon",
    name: "Persimmon",
    variety: "Fuyu",
    origin: "Spain",
    description: "Firm, sweet, and honeyed with notes of brown sugar and cinnamon. A winter treasure that brings warmth to the season.",
    weight: "4 pieces",
    price: 24.90,
    image: IMAGES.brandStory,
    gallery: [IMAGES.brandStory, IMAGES.orchardCollection],
    category: "orchard",
    seasonal: true,
    available: true,
    delivery: "Available for next-day delivery within Klang Valley"
  },
  {
    id: "gift-citrus",
    name: "Citrus Gift Box",
    variety: "Mixed Selection",
    origin: "Multi-origin",
    description: "A curated arrangement of our finest citrus selection, beautifully presented in a hand-tied natural linen box. An expression of care and taste.",
    weight: "2.5 kg",
    price: 128.00,
    image: IMAGES.giftCollection,
    gallery: [IMAGES.giftCollection, IMAGES.citrusCollection],
    category: "gift",
    seasonal: true,
    available: true,
    delivery: "Available for next-day delivery within Klang Valley. Gift wrapping included."
  }
];

export const collections: Collection[] = [
  {
    id: "citrus",
    name: "Citrus & Sunshine",
    description: "Bright citrus, fresh aromas, and a little sunshine in every selection.",
    image: IMAGES.citrusCollection,
    products: ["blood-orange", "yuzu"]
  },
  {
    id: "orchard",
    name: "Orchard Fruits",
    description: "Discover the character and natural variety of carefully selected orchard fruits.",
    image: IMAGES.orchardCollection,
    products: ["black-fig", "pomegranate", "red-grapes", "asian-pear", "persimmon"]
  },
  {
    id: "gift",
    name: "Gift Atelier",
    description: "Thoughtfully arranged fruit selections for meaningful moments.",
    image: IMAGES.giftCollection,
    products: ["gift-citrus"]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getCollectionById(id: string): Collection | undefined {
  return collections.find(c => c.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}
