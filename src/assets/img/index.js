const images = import.meta.glob('@/assets/**/*.{jpg,jpeg,png,webp}', { eager: true });

// Parsear nombre de archivo a objeto estructurado
const parseImageName = (filename) => {
    const name = filename.split('/').pop().replace(/\.\w+$/, '');
    const [ubicacion, lugar, producto, ciudad] = name.split('_');

    return {
        ubicacion: ubicacion?.toLowerCase() || '',
        lugar: lugar?.toLowerCase() || '',
        producto: producto?.toLowerCase() || '',
        ciudad: ciudad?.toLowerCase() || '',
        originalName: name
    };
};

// Crear array de imágenes con metadata
export const imagesList = Object.entries(images).map(([path, module]) => { return { src: module.default, path, ...parseImageName(path) }; });

// Filtrar por cualquier criterio
export const filterImages = (filters = {}) => {
    return imagesList.filter(img => {
        return Object.entries(filters).every(([key, value]) => {
            if (!value) return true;
            return img[key]?.includes(value.toLowerCase());
        });
    });
};

// Obtener valores únicos para filtros/dropdowns
export const getUniqueValues = (field) => { return [...new Set(imagesList.map(img => img[field]).filter(Boolean))]; };

// Buscar imagen específica por nombre
export const getImage = (name) => { return imagesList.find(img => img.originalName.toLowerCase().includes(name.toLowerCase())); };
