
export interface IconDefinition {
  id: string;
  name: string;
  category: IconCategory;
  tags: string[];
  svgPath: string;  // Caminho SVG
  unicode?: string;  // Unicode do emoji (opcional)
  isPremium?: boolean;
  author?: string;
  license?: string;
}

export type IconCategory = 
  | 'channels'        // Ícones de canais de TV
  | 'categories'      // Categorias de conteúdo
  | 'entertainment'   // Entretenimento
  | 'music'          // Música
  | 'sports'         // Esportes
  | 'news'           // Notícias
  | 'movies'         // Filmes
  | 'social'         // Redes sociais
  | 'tech'           // Tecnologia
  | 'nature'         // Natureza
  | 'food'           // Comida
  | 'brands'         // Marcas/Logos
  | 'symbols'        // Símbolos gerais
  | 'emojis';        // Emojis

export interface IconLibrary {
  version: string;
  icons: IconDefinition[];
  categories: {
    id: IconCategory;
    name: string;
    description: string;
    count: number;
  }[];
}
