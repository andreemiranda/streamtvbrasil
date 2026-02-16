
# 📺 StreamTV Brasil — Premium IPTV & YouTube Player

O **StreamTV Brasil** é um reprodutor de mídia avançado, focado na experiência do usuário brasileiro. Ele combina a versatilidade de listas de canais IPTV (M3U) com a potência de descoberta em tempo real do YouTube, oferecendo uma interface otimizada para Web, Mobile (PWA) e Smart TVs.

## 🚀 Funcionalidades Principais

- **Suporte Híbrido M3U + YouTube**: Carregue suas listas de canais favoritas e complemente-as com conteúdo dinâmico do YouTube.
- **Feeds Dinâmicos de YouTube**: 
  - **Música e Vaquejada**: Busca automática por lives de Sertanejo, Forró e Vaquejada a cada acesso.
  - **Cine YouTube**: Filmes completos dublados integrados diretamente na interface.
  - **Canal Especial**: Destaque fixo para a **TV Câmara Pedro Afonso**.
- **Otimização para Smart TV**:
  - Navegação espacial (Spatial Navigation) compatível com controles remotos (Tizen, webOS, Android TV).
  - Teclado numérico para troca rápida de canais.
  - Interface OSD (On-Screen Display) rica em informações.
- **Experiência Mobile Premium**:
  - Modo **Forced Landscape** (Paisagem Forçada) automático ao abrir o player.
  - Progressive Web App (PWA) instalável com ícones customizados.
- **Transmissão (Cast)**:
  - Suporte nativo a Google Cast (Chromecast).
  - Fallback para Presentation API e Screen Sharing.
- **Gestão de Conteúdo**:
  - Favoritos e Histórico persistentes localmente.
  - Suporte a upload de arquivos `.m3u` locais ou URLs remotas.

## 🛠️ Tecnologias Utilizadas

- **Core**: React 19 + TypeScript.
- **Estado**: Zustand (Gerenciamento de estado global e persistência).
- **Estilização**: Tailwind CSS + Animações customizadas.
- **Animações**: Framer Motion (Transições fluidas e intro cinematográfica).
- **Player de Vídeo**: Hls.js para streams adaptativos e Iframe oficial para YouTube.
- **API**: YouTube Data API v3 para conteúdos dinâmicos.
- **Fontes**: Syne (Display) e Plus Jakarta Sans (UI).

## 📦 Estrutura do Projeto

- `/components`: Componentes modulares (Player, Cards, Layout, Cast).
- `/pages`: Telas principais (Home, Busca, Player, Configurações).
- `/store`: Estados do Zustand (Playlist, Smart TV, Cast).
- `/hooks`: Lógica reutilizável (Controle remoto, Orientação de tela).
- `/utils`: Utilitários para parsing de M3U, detecção de TV e chamadas de API.

## 🔑 Configuração da API do YouTube

Para que as funcionalidades de busca e feeds automáticos funcionem, o aplicativo utiliza a **YouTube Data API v3**. 
- A chave de API deve ser configurada na variável de ambiente `process.env.API_KEY`.
- O aplicativo prioriza vídeos de longa duração e transmissões ao vivo com código de região `BR`.

## 🖥️ Como usar o Modo TV

O aplicativo detecta automaticamente se você está em uma Smart TV. Ao detectar:
- Use as **Setas** do controle para navegar.
- **OK (Enter)** para selecionar/abrir.
- **Back (Voltar)** para retornar à tela anterior.
- **Teclas Numéricas**: Digite o número da ordem do canal na lista para trocar instantaneamente.
- **Botão Vermelho**: Favorita o canal atual no player.

## 📄 Licença

Este projeto foi desenvolvido com foco em acessibilidade e performance. Sinta-se à vontade para expandir as funcionalidades de rede e protocolos de streaming.

---
*StreamTV Brasil — A sua janela para o entretenimento brasileiro.*
