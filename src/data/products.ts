export interface Product {
  id: string;
  name: string;
  price?: number;
  salePrice?: number;
  image: string;
  category?: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Aura Seamless Leggings",
    price: 950,
    salePrice: 750,
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Leggings",
    description: "High-waisted seamless leggings designed for ultimate comfort and flexibility."
  },
  {
    id: "2",
    name: "Elevate Sports Bra",
    price: 650,
    salePrice: 450,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports Bras",
    description: "Medium-impact sports bra with moisture-wicking technology."
  },
  {
    id: "3",
    name: "Core Training Top",
    price: 550,
    salePrice: 400,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tops",
    description: "Lightweight and breathable top perfect for intense workouts."
  },
  {
    id: "4",
    name: "Flex V-Neck Tee",
    price: 500,
    salePrice: 350,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tops",
    description: "Soft, stretchy v-neck tee for yoga and pilates."
  },
  {
    id: "5",
    name: "Velocity Running Shorts",
    price: 600,
    salePrice: 450,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Shorts",
    description: "Breathable running shorts with an inner lining and hidden pocket."
  },
  {
    id: "6",
    name: "Zenith Yoga Pants",
    price: 850,
    image: "https://images.unsplash.com/photo-1552822184-e8d98d1eec70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Pants",
    description: "Ultra-soft flared yoga pants for casual wear or light stretching."
  },
  {
    id: "7",
    name: "Impact Zip Jacket",
    price: 1200,
    salePrice: 950,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Jackets",
    description: "Sleek zip-up jacket perfect for outdoor running or gym warm-ups."
  },
  {
    id: "8",
    name: "Lumina Tank Top",
    price: 450,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tops",
    description: "Relaxed fit tank top with dropped armholes for extra ventilation."
  },
  {
    id: "9",
    name: "Sculpt Biker Shorts",
    price: 550,
    salePrice: 400,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Shorts",
    description: "Form-fitting biker shorts with maximum support and coverage."
  },
  {
    id: "10",
    name: "Pulse Crop Top",
    price: 500,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tops",
    description: "Long-sleeve crop top with thumbholes and breathable panels."
  },
  {
    id: "11",
    name: "Dynamic Track Pants",
    price: 900,
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Pants",
    description: "Lightweight track pants with a tapered fit and adjustable waist."
  },
  {
    id: "12",
    name: "Aero Windbreaker",
    price: 1100,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Jackets",
    description: "Water-resistant windbreaker designed for all-weather protection."
  },
  {
    id: "13",
    name: "Motion Longline Bra",
    price: 600,
    salePrice: 500,
    image: "https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports Bras",
    description: "Extended coverage sports bra offering light-to-medium support."
  },
  {
    id: "14",
    name: "Flow Ribbed Leggings",
    price: 850,
    image: "https://images.unsplash.com/photo-1555529733-0e67056058e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Leggings",
    description: "Textured ribbed leggings that move perfectly with your body."
  },
  {
    id: "15",
    name: "Vitality Muscle Tank",
    price: 450,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tops",
    description: "Classic muscle tank with a raw hem and soft cotton blend."
  },
  {
    id: "16",
    name: "Stamina Compression Tights",
    price: 950,
    salePrice: 800,
    image: "https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Leggings",
    description: "Targeted compression tights designed for intense leg days and recovery."
  },
  {
    id: "17",
    name: "Eclipse Hoodie",
    price: 1300,
    salePrice: 1100,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Hoodies",
    description: "Oversized cozy hoodie perfect for throwing on after a workout."
  },
  {
    id: "18",
    name: "Breeze Mesh Top",
    price: 550,
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tops",
    description: "Short-sleeve top featuring mesh paneling for superior airflow."
  },
  {
    id: "19",
    name: "Form Knit Shorts",
    price: 450,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Shorts",
    description: "Soft knit shorts that offer comfort for rest days or casual wear."
  },
  {
    id: "20",
    name: "Quantum Half-Zip",
    price: 850,
    salePrice: 700,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Jackets",
    description: "Form-fitting half-zip layer ideal for cool morning runs."
  }
];
