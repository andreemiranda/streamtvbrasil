
export interface ThumbnailUploadResult {
  success: boolean;
  url: string;
  error?: string;
}

export async function uploadThumbnail(
  file: File, 
  id: string // Pode ser channelId ou uma chave de appImage
): Promise<ThumbnailUploadResult> {
  try {
    // Validação
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return {
        success: false,
        url: '',
        error: 'Arquivo muito grande. Máximo: 5MB'
      };
    }
    
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      return {
        success: false,
        url: '',
        error: 'Formato inválido. Use JPG, PNG ou WEBP'
      };
    }
    
    const base64 = await fileToBase64(file);
    
    // Opcionalmente salvar no localStorage se for persistente
    // No nosso store, vamos salvar no estado global que persiste no localStorage
    
    return {
      success: true,
      url: base64
    };
  } catch (error) {
    return {
      success: false,
      url: '',
      error: 'Erro ao processar imagem'
    };
  }
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
