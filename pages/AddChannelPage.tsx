
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { detectUrlType, DetectedUrlInfo } from '../utils/urlDetector';
import { uploadThumbnail } from '../utils/thumbnailUploader';
import { IconPicker } from '../components/icons/IconPicker';
import { IconDefinition } from '../types/icons';
import { Badge } from '../components/ui/Badge';
import { 
  PlusCircle, 
  Link as LinkIcon, 
  Upload, 
  Youtube, 
  Video, 
  Check, 
  X, 
  AlertCircle,
  FileVideo,
  Layers,
  Star,
  Info
} from 'lucide-react';
import { CATEGORIES } from '../constants';
import { Channel } from '../types';

export const AddChannelPage: React.FC = () => {
  const navigate = useNavigate();
  const { addManualChannel } = useStore();
  
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    category: 'General',
    quality: 'HD',
    isBrazilian: true,
    description: '',
  });

  const [urlInfo, setUrlInfo] = useState<DetectedUrlInfo | null>(null);
  
  // THUMBNAIL STATE
  const [thumbnailMethod, setThumbnailMethod] = useState<'url' | 'upload' | 'youtube-auto'>('url');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  
  // ICON STATE
  const [iconMethod, setIconMethod] = useState<'url' | 'upload' | 'library' | 'default'>('default');
  const [iconUrl, setIconUrl] = useState('');
  const [iconPreview, setIconPreview] = useState<string | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<IconDefinition | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const thumbInputRef = useRef<HTMLInputElement>(null);
  const iconInputRef = useRef<HTMLInputElement>(null);

  // Detectar tipo de URL ao mudar
  useEffect(() => {
    if (formData.url) {
      const info = detectUrlType(formData.url);
      setUrlInfo(info);
      
      if (info.type === 'youtube') {
        setThumbnailMethod('youtube-auto');
        if (info.suggestedThumbnail) {
          setThumbnailUrl(info.suggestedThumbnail);
          setThumbnailPreview(info.suggestedThumbnail);
        }
      } else if (thumbnailMethod === 'youtube-auto') {
        setThumbnailMethod('url');
      }
    } else {
      setUrlInfo(null);
    }
  }, [formData.url]);

  const handleThumbUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const result = await uploadThumbnail(file, 'thumb-temp');
    if (result.success) {
      setThumbnailPreview(result.url);
      setThumbnailUrl(result.url);
    } else {
      setError(result.error || 'Erro no upload');
    }
  };

  const handleIconUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const result = await uploadThumbnail(file, 'icon-temp');
    if (result.success) {
      setIconPreview(result.url);
      setIconUrl(result.url);
    } else {
      setError(result.error || 'Erro no upload');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.url) {
      setError('Nome e URL são obrigatórios');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Determinar o logo final
      let finalLogo = '';
      if (iconMethod === 'url') finalLogo = iconUrl;
      else if (iconMethod === 'upload') finalLogo = iconPreview || '';
      else if (iconMethod === 'library' && selectedIcon) {
        // Se for ícone da biblioteca, podemos usar o unicode ou uma URL/Base64 simulada
        // Para simplificar, vamos salvar o ID e usar um helper na renderização ou salvar o svg/unicode
        finalLogo = selectedIcon.unicode || ''; 
      }
      
      const newChannel: Channel = {
        id: `manual-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: formData.name,
        url: formData.url,
        logo: finalLogo || thumbnailUrl || thumbnailPreview || '',
        thumbnailUrl: thumbnailUrl || thumbnailPreview || '',
        iconUrl: finalLogo,
        groups: [formData.category],
        quality: formData.quality,
        isBrazilian: formData.isBrazilian,
        isPortuguese: formData.isBrazilian,
        geoBlocked: false,
        notAlwaysOn: false,
        tvgId: '',
        source: 'manual',
        ytId: urlInfo?.type === 'youtube' ? urlInfo.videoId : undefined,
        isPlaylist: urlInfo?.isPlaylist,
        description: formData.description,
      };

      addManualChannel(newChannel);
      navigate('/');
    } catch (err) {
      setError('Erro ao salvar canal');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-4 md:px-8 py-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-title font-bold flex items-center gap-3">
            <PlusCircle className="text-accent-primary" size={32} />
            Adicionar Conteúdo Manual
          </h2>
          <p className="text-text-secondary mt-1 font-medium">Insira vídeos do YouTube, links de streaming ou áudios.</p>
        </div>
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/5 rounded-full text-text-secondary transition-colors">
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Informações Básicas */}
          <div className="bg-bg-card border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-accent-primary/10 rounded-xl flex items-center justify-center text-accent-primary">
                <Layers size={22} />
              </div>
              <h3 className="text-lg font-bold">Informações do Conteúdo</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-text-tertiary">Nome do Canal/Vídeo</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="Ex: Minha Live Favorita"
                  className="w-full bg-bg-secondary border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary transition-all text-sm font-bold"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-text-tertiary">URL do Conteúdo</label>
                <div className="relative">
                  <input 
                    required
                    type="url" 
                    value={formData.url}
                    onChange={e => setFormData({...formData, url: e.target.value})}
                    placeholder="YouTube, .mp4, .m3u8, .mp3..."
                    className="w-full bg-bg-secondary border border-white/10 rounded-2xl px-5 py-4 pl-12 focus:outline-none focus:border-accent-primary transition-all text-sm font-bold"
                  />
                  <LinkIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
                </div>
                
                {urlInfo && (
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant={urlInfo.type === 'youtube' ? 'red' : 'green'} className="flex items-center gap-1.5 py-1 px-3">
                      {urlInfo.type === 'youtube' ? <Youtube size={12}/> : <Video size={12}/>}
                      {urlInfo.type.toUpperCase()} {urlInfo.isPlaylist ? '(PLAYLIST)' : ''}
                    </Badge>
                  </div>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-text-tertiary">Categoria</label>
                <select 
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-bg-secondary border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary transition-all text-sm font-bold appearance-none cursor-pointer"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-text-tertiary">Qualidade</label>
                <select 
                  value={formData.quality}
                  onChange={e => setFormData({...formData, quality: e.target.value})}
                  className="w-full bg-bg-secondary border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary transition-all text-sm font-bold appearance-none cursor-pointer"
                >
                  <option value="4K">4K Ultra HD</option>
                  <option value="1080p">FHD 1080p</option>
                  <option value="720p">HD 720p</option>
                  <option value="SD">SD Standard</option>
                </select>
              </div>

              <div className="flex items-center pt-6 px-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      checked={formData.isBrazilian}
                      onChange={e => setFormData({...formData, isBrazilian: e.target.checked})}
                      className="peer sr-only"
                    />
                    <div className="w-11 h-6 bg-bg-secondary rounded-full border border-white/10 peer-checked:bg-accent-primary transition-colors" />
                    <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-text-secondary group-hover:text-white transition-colors">Conteúdo Brasileiro 🇧🇷</span>
                </label>
              </div>
            </div>
          </div>

          {/* Thumbnail Section */}
          <div className="bg-bg-card border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-blue/10 rounded-xl flex items-center justify-center text-accent-blue">
                  <FileVideo size={22} />
                </div>
                <h3 className="text-lg font-bold">Thumbnail (Capa do Vídeo)</h3>
              </div>
              <div className="flex bg-bg-secondary p-1 rounded-2xl border border-white/5 self-start">
                {[
                  { id: 'url', label: 'LINK', icon: LinkIcon },
                  { id: 'upload', label: 'UPLOAD', icon: Upload },
                  { id: 'youtube-auto', label: 'AUTO', icon: Youtube, disabled: urlInfo?.type !== 'youtube' }
                ].map(m => (
                  <button
                    key={m.id}
                    type="button"
                    disabled={m.disabled}
                    onClick={() => setThumbnailMethod(m.id as any)}
                    className={`flex items-center gap-2 px-5 py-2 rounded-xl text-[10px] font-black tracking-widest transition-all ${thumbnailMethod === m.id ? 'bg-accent-primary text-bg-primary shadow-lg' : 'text-text-tertiary hover:text-white disabled:opacity-20 disabled:cursor-not-allowed'}`}
                  >
                    <m.icon size={12} strokeWidth={3} /> {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {thumbnailMethod === 'url' && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-left-2">
                    <label className="text-[10px] font-black text-text-tertiary uppercase tracking-widest">Link da Imagem</label>
                    <input 
                      type="url" 
                      value={thumbnailUrl}
                      onChange={e => {
                        setThumbnailUrl(e.target.value);
                        setThumbnailPreview(e.target.value);
                      }}
                      placeholder="https://suaimagem.com/capa.jpg"
                      className="w-full bg-bg-secondary border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary transition-all text-xs font-bold"
                    />
                  </div>
                )}

                {thumbnailMethod === 'upload' && (
                  <div 
                    onClick={() => thumbInputRef.current?.click()}
                    className="border-2 border-dashed border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center hover:border-accent-primary/50 hover:bg-accent-primary/5 transition-all cursor-pointer group animate-in fade-in slide-in-from-left-2"
                  >
                    <input ref={thumbInputRef} type="file" className="hidden" accept="image/*" onChange={handleThumbUpload} />
                    <div className="w-14 h-14 bg-bg-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Upload className="text-text-tertiary group-hover:text-accent-primary" size={28} />
                    </div>
                    <p className="text-sm font-bold">Arraste ou clique aqui</p>
                    <p className="text-[10px] text-text-tertiary mt-1 font-black uppercase tracking-tighter">JPG, PNG, WEBP • Max 5MB</p>
                  </div>
                )}

                {thumbnailMethod === 'youtube-auto' && (
                  <div className="bg-bg-secondary border border-white/5 rounded-2xl p-6 flex items-center gap-5 animate-in fade-in slide-in-from-left-2">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-500">
                      <Youtube size={32} />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Thumbnail Inteligente</p>
                      <p className="text-[11px] text-text-secondary leading-relaxed">Capturamos automaticamente a capa em alta definição direto do servidor do YouTube.</p>
                    </div>
                  </div>
                )}
                
                <div className="p-4 bg-accent-primary/5 border border-accent-primary/10 rounded-2xl flex gap-3">
                  <Info className="text-accent-primary shrink-0" size={16} />
                  <p className="text-[11px] text-text-secondary leading-relaxed">Dica: Use imagens na proporção <b>16:9</b> (ex: 1280x720px) para garantir que fiquem perfeitas na Home.</p>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-text-tertiary uppercase tracking-widest">Visualização da Capa</label>
                <div className="aspect-video bg-bg-secondary rounded-3xl overflow-hidden border-4 border-white/5 flex items-center justify-center shadow-2xl relative group">
                  {thumbnailPreview ? (
                    <img src={thumbnailPreview} alt="Preview" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" />
                  ) : (
                    <Video className="text-white/5" size={80} />
                  )}
                  {thumbnailPreview && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="text-[10px] font-black bg-white text-black px-4 py-2 rounded-full">PREVIEW HOME</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Controls - Icon Selection */}
        <div className="space-y-8">
           <div className="bg-bg-card border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-secondary/10 rounded-xl flex items-center justify-center text-accent-secondary">
                  <Star size={22} />
                </div>
                <h3 className="text-lg font-bold">Ícone do Canal</h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { id: 'library', label: 'BIBLIOTECA' },
                  { id: 'url', label: 'LINK' },
                  { id: 'upload', label: 'UPLOAD' },
                  { id: 'default', label: 'PADRÃO' }
                ].map(m => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setIconMethod(m.id as any)}
                    className={`flex-1 px-3 py-2 rounded-xl text-[9px] font-black tracking-widest transition-all border ${iconMethod === m.id ? 'bg-accent-secondary text-bg-primary border-accent-secondary' : 'bg-bg-secondary text-text-tertiary border-white/5 hover:text-white'}`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {iconMethod === 'library' ? (
                <div className="h-[420px] -mx-2">
                  <IconPicker 
                    size="sm"
                    selectedIconId={selectedIcon?.id}
                    onSelect={(icon) => {
                      setSelectedIcon(icon);
                      setIconPreview(null);
                    }}
                  />
                </div>
              ) : (
                <div className="space-y-6">
                   {iconMethod === 'url' && (
                     <div className="space-y-2 animate-in fade-in slide-in-from-right-2">
                        <label className="text-[10px] font-black text-text-tertiary uppercase">URL do Ícone</label>
                        <input 
                          type="url" 
                          value={iconUrl}
                          onChange={e => {
                            setIconUrl(e.target.value);
                            setIconPreview(e.target.value);
                          }}
                          placeholder="https://..."
                          className="w-full bg-bg-secondary border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-secondary transition-all text-xs font-bold"
                        />
                     </div>
                   )}

                   {iconMethod === 'upload' && (
                     <div 
                        onClick={() => iconInputRef.current?.click()}
                        className="border-2 border-dashed border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:border-accent-secondary/50 hover:bg-accent-secondary/5 transition-all cursor-pointer group animate-in fade-in slide-in-from-right-2"
                      >
                        <input ref={iconInputRef} type="file" className="hidden" accept="image/*" onChange={handleIconUpload} />
                        <Upload className="text-text-tertiary group-hover:text-accent-secondary mb-3" size={32} />
                        <p className="text-xs font-bold">Subir PNG 512x512</p>
                      </div>
                   )}

                   {iconMethod === 'default' && (
                     <div className="p-8 bg-bg-secondary rounded-3xl flex flex-col items-center justify-center border border-white/5 text-center space-y-3">
                        <div className="w-20 h-20 bg-bg-card rounded-full flex items-center justify-center text-accent-primary text-2xl font-black border-2 border-white/10">
                          {formData.name ? formData.name[0].toUpperCase() : '?'}
                        </div>
                        <p className="text-[10px] text-text-tertiary font-bold leading-relaxed">Usaremos as iniciais do nome do canal com as cores do tema ativo.</p>
                     </div>
                   )}

                   <div className="flex flex-col items-center pt-4">
                      <p className="text-[10px] font-black text-text-tertiary uppercase mb-3">Preview do Ícone</p>
                      <div className="w-24 h-24 rounded-full bg-bg-secondary border-4 border-white/5 flex items-center justify-center overflow-hidden shadow-xl">
                        {iconMethod === 'library' && selectedIcon ? (
                          selectedIcon.unicode ? (
                            <span className="text-4xl">{selectedIcon.unicode}</span>
                          ) : (
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-accent-secondary">
                              <path d={selectedIcon.svgPath} />
                            </svg>
                          )
                        ) : iconPreview ? (
                          <img src={iconPreview} alt="Icon Preview" className="w-full h-full object-contain p-2" />
                        ) : (
                          <span className="text-3xl font-black text-white/10">{formData.name ? formData.name[0].toUpperCase() : 'T'}</span>
                        )}
                      </div>
                   </div>
                </div>
              )}
           </div>

           {/* Submit Card */}
           <div className="bg-gradient-to-br from-bg-card to-bg-secondary border border-white/5 rounded-3xl p-6 shadow-2xl space-y-4 sticky top-24">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl flex items-center gap-3 text-red-500 animate-bounce">
                  <AlertCircle size={20} className="shrink-0" />
                  <span className="text-[11px] font-bold leading-tight">{error}</span>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-5 bg-accent-primary text-bg-primary rounded-2xl font-black text-lg hover:scale-[1.03] active:scale-[0.97] transition-all shadow-xl shadow-accent-primary/20 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? 'Salvando...' : <><Check size={24} strokeWidth={4}/> FINALIZAR</>}
                </button>
                <button 
                  type="button"
                  onClick={() => navigate(-1)}
                  className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-text-secondary hover:bg-white/10 transition-all text-sm"
                >
                  Cancelar
                </button>
              </div>
              
              <div className="pt-2">
                 <p className="text-[9px] text-text-tertiary text-center font-bold px-4">Ao clicar em finalizar, o conteúdo será adicionado instantaneamente à sua grade de programação na página inicial.</p>
              </div>
           </div>
        </div>
      </form>
    </div>
  );
};
