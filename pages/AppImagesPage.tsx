
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { uploadThumbnail } from '../utils/thumbnailUploader';
import { 
  Settings, 
  Image as ImageIcon, 
  Upload, 
  Link as LinkIcon, 
  Check, 
  X, 
  ArrowLeft,
  Layout,
  Star,
  Music,
  Film,
  Trophy,
  Newspaper
} from 'lucide-react';
import { AppImages } from '../types';

export const AppImagesPage: React.FC = () => {
  const navigate = useNavigate();
  const { appImages, setAppImage } = useStore();
  const [activeTab, setActiveTab] = useState<'branding' | 'categories'>('branding');
  const [isSaved, setIsSaved] = useState(false);

  const handleImageInput = async (key: string, value: string | File) => {
    if (typeof value === 'string') {
      setAppImage(key, value);
    } else {
      const res = await uploadThumbnail(value, key);
      if (res.success) {
        setAppImage(key, res.url);
      }
    }
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const ImageSetting = ({ label, id, current, placeholder }: { label: string, id: string, current?: string, placeholder?: string }) => (
    <div className="bg-bg-card border border-white/5 rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-bold uppercase tracking-widest text-text-secondary">{label}</label>
        {isSaved && <Check className="text-accent-primary animate-in zoom-in" size={16} />}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="relative">
            <input 
              type="text"
              value={current || ''}
              onChange={e => handleImageInput(id, e.target.value)}
              placeholder="URL do CDN (https://...)"
              className="w-full bg-bg-secondary border border-white/10 rounded-xl px-4 py-3 pl-11 text-xs focus:outline-none focus:border-accent-primary"
            />
            <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
          </div>
          <div className="relative group">
            <input 
              type="file" 
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={e => e.target.files?.[0] && handleImageInput(id, e.target.files[0])}
            />
            <div className="bg-bg-secondary border border-white/10 border-dashed rounded-xl px-4 py-3 flex items-center justify-center gap-2 group-hover:border-accent-primary/50 transition-colors">
              <Upload size={16} className="text-text-secondary group-hover:text-accent-primary" />
              <span className="text-xs font-bold text-text-secondary">Fazer Upload</span>
            </div>
          </div>
        </div>
        <div className="aspect-video md:aspect-[16/6] bg-bg-secondary rounded-xl border border-white/10 overflow-hidden flex items-center justify-center relative shadow-inner">
          {current ? (
            <img src={current} alt={label} className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center gap-2 opacity-10">
              <ImageIcon size={32} />
              <span className="text-[10px] font-black uppercase">Sem Imagem</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="px-4 md:px-8 py-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-right-4 duration-500 pb-32">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-title font-bold flex items-center gap-3">
            <ImageIcon className="text-accent-primary" size={32} />
            Imagens do App
          </h2>
          <p className="text-text-secondary mt-1">Configure o visual da marca e categorias.</p>
        </div>
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/5 rounded-full text-text-secondary">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveTab('branding')}
          className={`flex-1 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 border transition-all ${activeTab === 'branding' ? 'bg-accent-primary text-bg-primary border-accent-primary shadow-lg shadow-accent-primary/20' : 'bg-bg-card text-text-secondary border-white/5 hover:border-white/20'}`}
        >
          <Layout size={18} /> Branding Geral
        </button>
        <button 
          onClick={() => setActiveTab('categories')}
          className={`flex-1 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 border transition-all ${activeTab === 'categories' ? 'bg-accent-primary text-bg-primary border-accent-primary shadow-lg shadow-accent-primary/20' : 'bg-bg-card text-text-secondary border-white/5 hover:border-white/20'}`}
        >
          <Star size={18} /> Categorias
        </button>
      </div>

      <div className="space-y-6">
        {activeTab === 'branding' ? (
          <>
            <ImageSetting label="Banner Principal (Hero)" id="heroBackground" current={appImages.heroBackground} />
            <ImageSetting label="Logotipo do App" id="logo" current={appImages.logo} />
            <ImageSetting label="Ícone Padrão de Canal" id="defaultChannelIcon" current={appImages.defaultChannelIcon} />
            <ImageSetting label="Placeholder de Carregamento" id="loadingPlaceholder" current={appImages.loadingPlaceholder} />
          </>
        ) : (
          <>
            <ImageSetting label="Ícone: Música" id="categoryIcons.Music" current={appImages.categoryIcons?.Music} />
            <ImageSetting label="Ícone: Filmes" id="categoryIcons.Movies" current={appImages.categoryIcons?.Movies} />
            <ImageSetting label="Ícone: Esportes" id="categoryIcons.Sports" current={appImages.categoryIcons?.Sports} />
            <ImageSetting label="Ícone: Notícias" id="categoryIcons.News" current={appImages.categoryIcons?.News} />
            <ImageSetting label="Ícone: Entretenimento" id="categoryIcons.Entertainment" current={appImages.categoryIcons?.Entertainment} />
          </>
        )}
      </div>

      <div className="mt-12 p-6 bg-accent-primary/5 border border-accent-primary/10 rounded-2xl flex items-start gap-4">
        <Settings className="text-accent-primary shrink-0" />
        <div>
          <h4 className="font-bold text-accent-primary text-sm mb-1">Dica de Performance</h4>
          <p className="text-xs text-text-secondary leading-relaxed">
            Sempre que possível, prefira usar URLs de CDNs confiáveis. Uploads diretos são convertidos para Base64 e podem aumentar o consumo de memória do navegador se as imagens forem muito pesadas.
          </p>
        </div>
      </div>
    </div>
  );
};
