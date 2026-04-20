export const normalizeText = (value = "") =>
  value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

export const slugify = (value = "") =>
  normalizeText(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const toTitleCase = (value = "") =>
  value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

export const normalizeHeader = (header = "") =>
  normalizeText(header).replace(/\s+/g, " ");

export const buildWhatsAppUrl = (phone, projectName) => {
  const cleanPhone = (phone || "").replace(/\D/g, "");
  const message = encodeURIComponent(`Hola, deseo más información sobre el proyecto: ${projectName}` );

  if (cleanPhone) {
    return `https://wa.me/${cleanPhone}?text=${message}`;
  }

  return `https://wa.me/?text=${message}`;
};
