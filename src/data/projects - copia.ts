import BkPortada from "@/assets/img/Home/portada.jpg";
import kitchenImage from "@/assets/project-kitchen-1.jpg";
import hotelLobbyImage from "@/assets/project-hotel-lobby.jpg";
import livingImage from "@/assets/project-living-1.jpg";
import spaImage from "@/assets/project-spa.jpg";
import bathroomImage from "@/assets/project-bathroom-1.jpg";
import restaurantImage from "@/assets/project-restaurant.jpg";
import exteriorImage from "@/assets/project-exterior.jpg";

export type MainCategory = "oficina" | "social" | "vivienda";
//export type MainCategory = "vivienda" | "hotel" | "comercio";

export type SubCategory = 
  | "baño" | "cocina" | "sala" | "exterior"
  | "lobby" | "habitaciones" | "spa" | "piscina"
  | "local" | "fachada" | "restaurante";

export interface Product {
  name: string;
  format: string;
  finish: string;
  collection: string;
  origin: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  country: string;
  mainCategory: MainCategory;
  subCategory: SubCategory;
  image: string;
  aspectRatio: "portrait" | "landscape" | "square";
  products: Product[];
  architect?: string;
  description: string;
  gallery?: string[];
}

export const mainCategories: { id: MainCategory; label: string; icon: string }[] = [

  { id: "oficina",  label: "Oficina",   icon: "🏨" },
  { id: "social",   label: "Social",    icon: "🏪" },
  { id: "vivienda", label: "Vivienda",  icon: "🏠" },
];

export const subCategoriesByMain: Record<MainCategory, { id: SubCategory; label: string }[]> = {
  vivienda: [
    { id: "dormitorio", label: "Dormitorio" },
    { id: "baño",     label: "Baño" },
    { id: "cocina",   label: "Cocina" },
    { id: "sala",     label: "Sala" },
    { id: "exterior", label: "Exterior" },
  ],
  oficina: [
    { id: "fachada",  label: "Fachada" },
    { id: "local",    label: "Local" },
    { id: "oficina",  label: "Oficina" },
    { id: "pasillo",  label: "Pasillo" }, 
  ],
  social: [
    { id: "lobby",    label: "Lobby" },
    { id: "local",    label: "Local" },
    { id: "pasillo",  label: "Pasillo" },
    { id: "piscina",  label: "Piscina" },
    { id: "salon",    label: "Salon" },
    { id: "terraza",  label: "Terraza" },
  ],
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "D-Statuario Brillante",
        format: "60x120 cm",
        finish: "Brillante",
        collection: "Mármoles",
        origin: "Italia",
      },
    ],
    architect: "Arq. María González",
    description: "Diseño inspirado en la pureza del mármol italiano, creando un espacio de relax y sofisticación.",
  },
  {
    id: "2",
    title: "Cocina Contemporánea",
    location: "Bogotá",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "cocina",
    image: kitchenImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Ceranatto Natural Touch",
        format: "80x80 cm",
        finish: "Mate",
        collection: "Texturas",
        origin: "España",
      },
    ],
    architect: "Estudio Diseño Interior",
    description: "Fusión perfecta entre funcionalidad y estética, con acabados que evocan la calidez de la madera.",
  },
  {
    id: "3",
    title: "Hotel Grand Palacio",
    location: "Ciudad de México",
    country: "México",
    mainCategory: "hotel",
    subCategory: "lobby",
    image: hotelLobbyImage,
    aspectRatio: "landscape",
    products: [
      {
        name: "Porcelanato Emperador",
        format: "120x120 cm",
        finish: "Pulido",
        collection: "Gran Formato",
        origin: "Italia",
      },
    ],
    architect: "Foster + Partners",
    description: "Un lobby que impresiona desde el primer momento, con pisos de gran formato que reflejan elegancia.",
  },
  {
    id: "4",
    title: "Loft Moderno",
    location: "Medellín",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "sala",
    image: livingImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Concrete Style Grey",
        format: "90x90 cm",
        finish: "Mate",
        collection: "Urban",
        origin: "España",
      },
    ],
    architect: "Arquitectura Viva",
    description: "Espacios abiertos que respiran modernidad, con texturas que conectan con la vida urbana.",
  },
  {
    id: "5",
    title: "Spa Wellness Resort",
    location: "Cancún",
    country: "México",
    mainCategory: "hotel",
    subCategory: "spa",
    image: spaImage,
    aspectRatio: "landscape",
    products: [
      {
        name: "Zen Stone Blue",
        format: "60x60 cm",
        finish: "Antideslizante",
        collection: "Wellness",
        origin: "Italia",
      },
    ],
    description: "Ambiente de tranquilidad inspirado en los spas orientales, con cerámicas que evocan serenidad.",
  },
  {
    id: "6",
    title: "Restaurante La Terraza",
    location: "Buenos Aires",
    country: "Argentina",
    mainCategory: "comercio",
    subCategory: "restaurante",
    image: restaurantImage,
    aspectRatio: "landscape",
    products: [
      {
        name: "Artisan Terracotta",
        format: "20x20 cm",
        finish: "Rústico",
        collection: "Heritage",
        origin: "España",
      },
    ],
    architect: "Gastón Acurio Design",
    description: "Un espacio gastronómico que cuenta historias a través de sus paredes de cerámica artesanal.",
  },
  {
    id: "7",
    title: "Villa Mediterránea",
    location: "Barranquilla",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "exterior",
    image: exteriorImage,
    aspectRatio: "landscape",
    products: [
      {
        name: "Outdoor Sand",
        format: "60x60 cm",
        finish: "Antideslizante",
        collection: "Exteriores",
        origin: "Italia",
      },
    ],
    architect: "Casa Design Studio",
    description: "Conexión perfecta entre interior y exterior, con porcelanatos que resisten el clima tropical.",
  },
  {
    id: "8",
    title: "Baño Suite Principal",
    location: "Lima",
    country: "Perú",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: BkPortada,
    aspectRatio: "landscape",
    products: [
      {
        name: "Calacatta Gold",
        format: "120x60 cm",
        finish: "Brillante",
        collection: "Premium",
        origin: "Italia",
      },
    ],
    architect: "Interiorismo Lima",
    description: "Lujo y confort en cada detalle, con acabados que transforman el baño en un santuario personal.",
  },
];


export { BkPortada };