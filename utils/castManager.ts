
import { CastMethod } from '../store/castStore';

// Declarações globais para TypeScript
declare const chrome: any;
declare const cast: any;

class CastManager {
  private method: CastMethod = 'none';

  async detectBestMethod(): Promise<CastMethod> {
    // 1. Google Cast disponível?
    if (typeof window !== 'undefined' && 'chrome' in window) {
      try {
        await this.initGoogleCast();
        if (typeof cast !== 'undefined' && cast.framework && cast.framework.CastContext) {
          this.method = 'google-cast';
          return 'google-cast';
        }
      } catch (e) {
        console.warn('Google Cast failed initialization:', e);
      }
    }

    // 2. W3C Presentation API disponível?
    if ('presentation' in navigator && (navigator as any).presentation?.defaultRequest) {
      this.method = 'presentation-api';
      return 'presentation-api';
    }

    // 3. Screen Share disponível (fallback)?
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
      this.method = 'screen-share';
      return 'screen-share';
    }

    return 'none';
  }

  async initGoogleCast(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof cast !== 'undefined' && cast.framework) {
        this.setupCastContext();
        resolve();
        return;
      }

      const timeout = setTimeout(() => reject(new Error('Cast SDK timeout')), 5000);

      const onGCastApiAvailable = (isAvailable: boolean) => {
        clearTimeout(timeout);
        if (isAvailable) {
          this.setupCastContext();
          resolve();
        } else {
          reject(new Error('Cast not available'));
        }
      };

      // @ts-ignore
      if (window.__onGCastApiAvailable) {
        // Já definido, apenas aguardando trigger ou chamando manualmente se já estiver disponível
        // No index.html definimos um listener que emite CustomEvent 'castAvailable'
        window.addEventListener('castAvailable', () => {
          onGCastApiAvailable(true);
        }, { once: true });
      } else {
        // @ts-ignore
        window.__onGCastApiAvailable = onGCastApiAvailable;
      }
    });
  }

  private setupCastContext(): void {
    if (typeof cast === 'undefined' || !cast.framework) return;
    const castContext = cast.framework.CastContext.getInstance();
    castContext.setOptions({
      receiverApplicationId: 'CC1AD845', // Default Media Receiver
      autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
      language: 'pt-BR',
    });
  }

  getMethod(): CastMethod { return this.method; }
}

export const castManager = new CastManager();
