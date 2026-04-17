import BkPortada from "@/assets/img/portada.jpg";
import kitchenImage from "@/assets/img_site/project-kitchen-1.jpg";
import hotelLobbyImage from "@/assets/img_site/project-hotel-lobby.jpg";
import livingImage from "@/assets/img_site/project-living-1.jpg";
import spaImage from "@/assets/img_site/project-spa.jpg";
import bathroomImage from "@/assets/img_site/project-bathroom-1.jpg";
import restaurantImage from "@/assets/img_site/project-restaurant.jpg";
import exteriorImage from "@/assets/img_site/project-exterior.jpg";
import { imagesList, filterImages, getUniqueValues, getImage } from "@/assets/img/index.js";

export type MainCategory = "oficina" | "social" | "vivienda";
//export type MainCategory = "vivienda" | "hotel" | "comercio";

export type SubCategory =
  | "baño" | "cocina" | "comedor" | "dormitorio" | "exterior" | "pasillo" | "sala"
  | "lobby" | "habitaciones" | "spa" | "oficina" | "piscina"
  | "local" | "fachada" | "salon" | "terraza";

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

  { id: "oficina", label: "Oficina", icon: "🏨" },
  { id: "social", label: "Social", icon: "🏪" },
  { id: "vivienda", label: "Vivienda", icon: "🏠" },
];

export const subCategoriesByMain: Record<MainCategory, { id: SubCategory; label: string }[]> = {
  oficina: [
    { id: "fachada", label: "Fachada" },
    { id: "local", label: "Local" },
    { id: "oficina", label: "Oficina" },
    { id: "pasillo", label: "Pasillo" },
  ],
  vivienda: [
    { id: "dormitorio", label: "Dormitorio" },
    { id: "baño", label: "Baño" },
    { id: "cocina", label: "Cocina" },
    { id: "comedor", label: "Comedor" },
    { id: "dormitorio", label: "Dormitorio" },
    { id: "exterior", label: "Exterior" },
    { id: "pasillo", label: "Pasillo" },
    { id: "piscina", label: "Piscina" },
    { id: "sala", label: "Sala" },
  ],
  social: [
    { id: "lobby", label: "Lobby" },
    { id: "local", label: "Local" },
    { id: "pasillo", label: "Pasillo" },
    { id: "piscina", label: "Piscina" },
    { id: "salon", label: "Salon" },
    { id: "terraza", label: "Terraza" },
  ],
};

export const projects: Project[] = [
  {
    // Ini Oficina 1
    id: "1",
    title: "Residencia Vista Mar 1",
    location: "Cucuta",
    country: "Colombia",
    mainCategory: "oficina",
    subCategory: "fachada",
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
    title: "Residencia Vista Mar 1",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "oficina",
    subCategory: "local",
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
    id: "3",
    title: "Residencia Vista Mar 1",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "oficina",
    subCategory: "oficina",
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
    id: "4",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "oficina",
    subCategory: "oficina",
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
    id: "5",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "oficina",
    subCategory: "oficina",
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
    id: "6",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "oficina",
    subCategory: "pasillo",
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
  //  Fin Oficina 6

  // Ini Social 7
  {
    id: "7",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "social",
    subCategory: "lobby",
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
    id: "8",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "social",
    subCategory: "local",
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
    id: "9",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "social",
    subCategory: "pasillo",
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
    id: "10",
    title: "2 Residencia Vista Mar",
    location: "Bucaramanga",
    country: "Colombia",
    mainCategory: "social",
    subCategory: "piscina",
    image: bathroomImage,
    aspectRatio: "landscape",
    products: [
      {
        name: "Barroco",
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
    id: "12",
    title: "1 Residencia Vista Mar",
    location: "Bucaramanga",
    country: "Colombia",
    mainCategory: "social",
    subCategory: "piscina",
    image: bathroomImage,
    aspectRatio: "landscape",
    products: [
      {
        name: "Barroco",
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
    id: "13",
    title: "Residencia Vista Mar",
    location: "Sincelejo",
    country: "Colombia",
    mainCategory: "social",
    subCategory: "piscina",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Sinai",
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
    id: "14",
    title: "Residencia Vista Mar",
    location: "Bogota",
    country: "Colombia",
    mainCategory: "social",
    subCategory: "piscina",
    image: bathroomImage,
    aspectRatio: "landscape",
    products: [
      {
        name: "Tormes",
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
    id: "15",
    title: "Residencia Vista Mar",
    location: "La Guajira",
    country: "Colombia",
    mainCategory: "social",
    subCategory: "salon",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Itria Gris",
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
    id: "16",
    title: "Residencia Vista Mar",
    location: "Bogota",
    country: "Colombia",
    mainCategory: "social",
    subCategory: "terraza",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Madera Agar",
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
    id: "17",
    title: "Residencia Vista Mar",
    location: "Bogota",
    country: "Colombia",
    mainCategory: "social",
    subCategory: "terraza",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Madera Agar",
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
    id: "18",
    title: "Residencia Vista Mar",
    location: "Chinacota",
    country: "Colombia",
    mainCategory: "social",
    subCategory: "terraza",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Sevilla Real",
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
    id: "19",
    title: "Residencia Vista Mar",
    location: "Chinacota",
    country: "Colombia",
    mainCategory: "social",
    subCategory: "terraza",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Sevilla Real",
        format: "60x120 cm",
        finish: "Brillante",
        collection: "Mármoles",
        origin: "Italia",
      },
    ],
    architect: "Arq. María González",
    description: "Diseño inspirado en la pureza del mármol italiano, creando un espacio de relax y sofisticación.",
  },

  // Fin Social 19

  // Ini vivienda 13
  {
    id: "20",
    title: "Residencia Vista Mar",
    location: "Medellin",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Berilo",
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
    id: "21",
    title: "Residencia Vista Mar",
    location: "Barranquila",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Calcita",
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
    id: "23",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Carrara Real",
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
    id: "24",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Carrara Real",
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
    id: "25",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Carrara Real Macerata Almendra",
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
    id: "26",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Carrara Real Madera Tuari",
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
    id: "27",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Gardnos - Itria Plomo",
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
    id: "28",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Jaspe - Madera - Tuari",
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
    id: "29",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Libano Miel - Picasso Morandi Gris",
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
    id: "30",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Listone - Camel Eterna",
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
    id: "31",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Macari",
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
    id: "32",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Madera Tuari",
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
    id: "33",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Madera Tuari - Morandi Gris - Riccardi",
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
    id: "34",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Morandi Gris",
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
    id: "35",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Onice - Itria Gris",
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
    id: "36",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Picasso",
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
    id: "37",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Picasso Allegro - Macerata Marfil",
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
    id: "38",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Picasso Berilo",
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
    id: "39",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Toba",
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
    id: "40",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Valtelina",
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
    id: "41",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "baño",
    image: bathroomImage,
    aspectRatio: "portrait",
    products: [
      {
        name: "Vaticano - Itria Perla",
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
    id: "14",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "cocina",
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
    id: "15",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "sala",
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
    id: "16",
    title: "Residencia Vista Mar",
    location: "Cartagena",
    country: "Colombia",
    mainCategory: "vivienda",
    subCategory: "exterior",
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
  // Fin vivienda
];


export { BkPortada };



/*

*/