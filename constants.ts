
import { Category } from './types';

export const LOCAL_ICONS_PATH = 'icons/channels/';

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'Todos', icon: '📺' },
  { id: 'brasil', label: 'Brasil', icon: '🇧🇷' },
  { id: 'News', label: 'Notícias', icon: '📰' },
  { id: 'Sports', label: 'Esportes', icon: '⚽' },
  { id: 'Movies', label: 'Filmes', icon: '🎬' },
  { id: 'Entertainment', label: 'Entretenimento', icon: '🎭' },
  { id: 'Kids', label: 'Infantil', icon: '👶' },
  { id: 'Documentary', label: 'Documentários', icon: '🌿' },
  { id: 'Music', label: 'Música', icon: '🎵' },
  { id: 'Comedy', label: 'Comédia', icon: '😄' },
  { id: 'Series', label: 'Séries', icon: '📺' },
  { id: 'Travel', label: 'Viagem', icon: '🌍' },
  { id: 'Cooking', label: 'Culinária', icon: '🍳' },
  { id: 'Culture', label: 'Cultura', icon: '🏛' },
  { id: 'General', label: 'Geral', icon: '🌐' },
  { id: 'Religious', label: 'Religioso', icon: '✝️' },
  { id: 'Education', label: 'Educação', icon: '📚' },
  { id: 'Auto', label: 'Auto', icon: '🚗' },
  { id: 'Business', label: 'Negócios', icon: '💼' },
  { id: 'Animation', label: 'Animação', icon: '🎨' },
];

export const SAMPLE_M3U = `#EXTM3U
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",00s Replay
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/62ba60f059624e000781c436/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=affbdbfa-5fa3-48af-8369-57c005daef42&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=35cdcb46-02bc-4d4f-8688-3f8b1560f45d
#EXTINF:-1 tvg-id="123tv.de@SD" tvg-logo="https://i.imgur.com/slSUDNX.png" group-title="Shop",1-2-3 TV (270p)
https://123tv-mx1.flex-cdn.net/index.m3u8
#EXTINF:-1 tvg-id="1AlmereTV.nl@SD" tvg-logo="https://i.imgur.com/XfkbTrU.png" group-title="General",1Almere TV (720p)
https://d3472rjicrodic.cloudfront.net/nlpo/clr-nlpo/709d5260/index.m3u8
#EXTINF:-1 tvg-id="1KZNTV.za@SD" tvg-logo="https://i.postimg.cc/cCPc5tyk/1kzntv.png" group-title="Entertainment;Family;General",1KZN TV (576p)
https://cdn.freevisiontv.co.za/sttv/smil:1kzn.stream.smil/playlist.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",1S News (576p)
https://mumt03.tangotv.in/1SNEWS/index.m3u8
#EXTINF:-1 tvg-id="1TV.ge@SD" tvg-logo="https://i.imgur.com/FSkYLPK.png" group-title="General",1TV (720p)
https://tv.cdn.xsg.ge/gpb-1tv/index.m3u8
#EXTINF:-1 tvg-id="1TwenteTV.nl@SD" tvg-logo="https://i.imgur.com/ftiuNK3.png" group-title="General",1Twente TV (1080p)
https://ms7.mx-cd.net/dtv-11/198-989148/1Twente_TV.smil/chunklist_w954512639_b4292608_slNLD.m3u8
#EXTINF:-1 tvg-id="2GB.au@SD" tvg-logo="https://i.ibb.co/jwM8DFG/2GB-1.png" group-title="News",2GB Sydney (1080p)
https://2gblive.akamaized.net/hls/live/2033805/2GB/index.m3u8
#EXTINF:-1 tvg-id="2MMonde.ma@SD" tvg-logo="https://i.imgur.com/MvpntzA.png" http-referrer="http://www.radio2m.ma/" http-user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0" group-title="General",2M Monde
#EXTVLCOPT:http-referrer=http://www.radio2m.ma/
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0
https://cdn-globecast.akamaized.net/live/eds/2m_monde/hls_video_ts_tuhawxpiemz257adfc/2m_monde.m3u8
#EXTINF:-1 tvg-id="2MMonde.ma@Plus1" tvg-logo="https://i.imgur.com/MvpntzA.png" group-title="General",2M Monde +1 (1080p)
https://d2qh3gh0k5vp3v.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-n6pess5lwbghr/2M_ES.m3u8
#EXTINF:-1 tvg-id="2STV.sn@SD" tvg-logo="https://i.imgur.com/WByVBZf.png" group-title="Culture",2STV
http://69.64.57.208/2stv/playlist.m3u8
#EXTINF:-1 tvg-id="2TV.ge@SD" tvg-logo="https://i.imgur.com/FJBL6zI.png" group-title="General",2TV (720p)
https://tv.cdn.xsg.ge/gpb-2tv/index.m3u8
#EXTINF:-1 tvg-id="2x2.ru@SD" tvg-logo="https://i.imgur.com/fhQFLEl.png" http-user-agent="WINK/1.40.1 (AndroidTV/9) HlsWinkPlayer" group-title="Entertainment",2х2 [Geo-blocked]
#EXTVLCOPT:http-user-agent=WINK/1.40.1 (AndroidTV/9) HlsWinkPlayer
https://zabava-htlive.cdn.ngenix.net/hls/CH_2X2/variant.m3u8
#EXTINF:-1 tvg-id="3ABNCanada.ca@SD" tvg-logo="https://i.imgur.com/U99CsEc.png" group-title="Religious",3ABN Canada
https://3abn.bozztv.com/3abncanada/3ABN/master.m3u8
#EXTINF:-1 tvg-id="DareToDreamNetwork.us@SD" tvg-logo="https://i.imgur.com/oNUpXA9.png" group-title="Religious",3ABN Dare To Dream Network
https://3abn.bozztv.com/3abn2/d2d_live/smil:d2d_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNEnglish.us@SD" tvg-logo="https://i.imgur.com/bgJQIyW.png" group-title="Religious",3ABN English
https://3abn.bozztv.com/3abn2/3abn_live/smil:3abn_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNFrench.us@SD" tvg-logo="https://i.imgur.com/B5gsM7m.png" group-title="Religious",3ABN French
https://3abn.bozztv.com/3abn2/Fre_live/smil:Fre_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNInternational.us@SD" tvg-logo="https://i.imgur.com/IecOZHR.png" group-title="Religious",3ABN International Network
https://3abn.bozztv.com/3abn2/Int_live/smil:Int_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNKids.us@SD" tvg-logo="https://i.imgur.com/z3npqO1.png" group-title="Animation;Kids;Religious",3ABN Kids Network
https://3abn.bozztv.com/3abn2/Kids_live/smil:Kids_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNLatino.us@SD" tvg-logo="https://i.imgur.com/Ugb4AFo.png" group-title="Religious",3ABN Latino
https://3abn.bozztv.com/3abn2/Lat_live/smil:Lat_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNPraiseHimMusicNetwork.us@SD" tvg-logo="https://i.imgur.com/iBcqT8L.png" group-title="Music;Religious",3ABN Praise Him Music Network
https://3abn.bozztv.com/3abn1/PraiseHim/smil:PraiseHim.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNProclaimNetwork.us@SD" tvg-logo="https://i.imgur.com/zUMUNhe.png" group-title="Religious",3ABN Proclaim! Network
https://3abn.bozztv.com/3abn2/Pro_live/smil:Pro_live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="3ABNTVUganda.ug@SD" tvg-logo="https://i.imgur.com/mml9lI2.png" group-title="Religious",3ABN TV Uganda (720p) [Not 24/7]
https://3abn.bozztv.com/3abn/3abn_uganda_live/index.m3u8
#EXTINF:-1 tvg-id="3AW.au@SD" tvg-logo="https://i.imgur.com/Z4MdB0S.png" group-title="News",3AW Melbourne (1080p)
https://3awlive.akamaized.net/hls/live/2032295/3AW/index.m3u8
#EXTINF:-1 tvg-id="3CatCameresdeltemps.es@SD" tvg-logo="https://i.imgur.com/zXy2kbe.png" group-title="Public;Weather",3Cat Càmeres del temps (1080p)
https://directes-tv-int.3catdirectes.cat/live-content/beauties-hls/master.m3u8
#EXTINF:-1 tvg-id="3CatElbunquer.es@SD" tvg-logo="https://i.imgur.com/wiqdIjd.png" group-title="Comedy;Public",3Cat El búnquer (1080p)
https://fast-tailor.3catdirectes.cat/v1/channel/bunquer/hls.m3u8
#EXTINF:-1 tvg-id="3CatExclusiu1.es@SD" tvg-logo="https://i.imgur.com/YQvLPT1.png" group-title="News;Public",3Cat Exclusiu 1 (1080p) [Geo-blocked]
https://directes-tv-cat.3catdirectes.cat/live-content/oca1-hls/master.m3u8
#EXTINF:-1 tvg-id="3CatExclusiu2.es@SD" tvg-logo="https://i.imgur.com/YQvLPT1.png" group-title="News;Public",3Cat Exclusiu 2 (1080p) [Geo-blocked]
https://directes-tv-cat.3catdirectes.cat/live-content/oca2-hls/master.m3u8
#EXTINF:-1 tvg-id="3CatExclusiu3.es@SD" tvg-logo="https://i.imgur.com/YQvLPT1.png" group-title="News;Public",3Cat Exclusiu 3 (1080p) [Geo-blocked]
https://directes-tv-cat.3catdirectes.cat/live-content/oca3-hls/master.m3u8
#EXTINF:-1 tvg-id="3CatPlatsbruts.es@SD" tvg-logo="https://i.imgur.com/49ZENis.png" group-title="Classic;Comedy;Public;Series",3Cat Plats bruts (1080p)
https://fast-tailor.3catdirectes.cat/v1/channel/ccma-channel2/hls.m3u8
#EXTINF:-1 tvg-id="3CatInfo.es@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/3CatInfo_logo.svg/512px-3CatInfo_logo.svg.png" group-title="News;Public",3CatInfo (1080p)
https://directes-tv-int.3catdirectes.cat/live-origin/canal324-hls/master.m3u8
#EXTINF:-1 tvg-id="3HD.th@SD" tvg-logo="https://i.imgur.com/YRiulCU.png" group-title="General",3HD
https://lb1-live-mv.v2h-cdn.com/hls/ffae/muulk/muulk.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",3point.dk
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/65b915780cb1a1000889b837/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=78b29450-7022-4485-b983-23f30e23925f&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=e34a7705-e6d1-48c5-ad35-bf9b17f7f799
#EXTINF:-1 tvg-id="3sat.de@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/3sat_2019.svg/512px-3sat_2019.svg.png" group-title="General",3sat (720p) [Geo-blocked]
https://zdf-hls-18.akamaized.net/hls/live/2016501/dach/high/master.m3u8
#EXTINF:-1 tvg-id="3sat.de@HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/3sat_2019.svg/512px-3sat_2019.svg.png" group-title="General",3sat HD (1080p)
https://viamotionhsi.netplus.ch/live/eds/3sathd/browser-HLS8/3sathd.m3u8
#EXTINF:-1 tvg-id="3StonesTV.ke@SD" tvg-logo="https://i.imgur.com/im3g7T2.png" group-title="General",3 Stones TV (240p) [Not 24/7]
https://goliveafrica.media:9998/live/64d21e682fd26/index.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",4ACETV
https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/CVA0UNL2K6KH61IL162P/hls3/now,-1m/m.m3u8?ads.vf=kOxDBuxba3m
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",4ACETV CLASSIC HITS
https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/MH8JAMWTLW2AQV5RA55S/hls3/now,-1m/m.m3u8?ads.vf=ey4PLl3ojgy
#EXTINF:-1 tvg-id="4Afghanistan.fr@SD" tvg-logo="https://i.postimg.cc/Pr634RNN/4-Afghanistan.png" group-title="Undefined",4 Afghanistan
https://4afghls.persiana.live/hls/stream.m3u8
#EXTINF:-1 tvg-id="4DmasNoticiasTV.py@SD" tvg-logo="https://i.ibb.co/1fb5BtN/unnamed.png" group-title="News",4DmásNoticias TV (1080p) [Not 24/7]
https://rds3.desdeparaguay.net/4dmasnoticiastv/4dmasnoticiastv/playlist.m3u8
#EXTINF:-1 tvg-id="4E.gr@SD" tvg-logo="https://i.imgur.com/Na0UCV7.png" group-title="Religious",4E (1080p)
http://eu2.tv4e.gr:554/live/smil:myStream.sdp.smil/playlist.m3u8
#EXTINF:-1 tvg-id="4FunKids.pl@SD" tvg-logo="https://i.imgur.com/2JO5Y8c.png" group-title="Kids",4 Fun Kids (576i) [[Not 24/7]]
https://stream.4fun.tv:8889/hls/4fk_high/index.m3u8
#EXTINF:-1 tvg-id="4FunTV.pl@SD" tvg-logo="https://i.imgur.com/rI1wo2l.png" group-title="Music",4 Fun TV (576i) [Not 24/7]
https://stream.4fun.tv:8888/hls/4f_high/index.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",4K TRAVEL TV
https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/4k-travel-tv/manifest.m3u8?ads.vf=-W-Hab4e1BO
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",4K Travel TV
https://streams2.sofast.tv/sofastplayout/33c31ac4-51fa-46ae-afd0-0d1fe5e60a80_0_HLS/master.m3u8
#EXTINF:-1 tvg-id="4Kurd.fr@SD" tvg-logo="https://www.aparatchi.com/images/chanells-logo/4kurd.svg" group-title="Music",4 Kurd
https://4kuhls.persiana.live/hls/stream.m3u8
#EXTINF:-1 tvg-id="4TVNews.in@SD" tvg-logo="https://jiotvimages.cdn.jio.com/dare_images/images/4_TV.png" group-title="News",4TV News (576p)
https://cdn-4.pishow.tv/live/1007/master.m3u8
#EXTINF:-1 tvg-id="4UTV.tr@SD" tvg-logo="https://i.imgur.com/PexhKwp.png" group-title="Entertainment",4U TV (720p)
https://hls.4utv.live/hls/stream.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",5-Minute Craft (1080p)
https://soul-5mincrafteng-rakuten.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-id="5AABTV.ca@SD" tvg-logo="https://i.imgur.com/jrGrfof.png" group-title="Entertainment",5AAB TV (720p) [Not 24/7]
http://158.69.124.9:1935/5aabtv/5aabtv/playlist.m3u8
#EXTINF:-1 tvg-id="5Cops.us@UK" tvg-logo="https://i.imgur.com/QFPRaXK.png" group-title="Series",5 Cops
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5d2c571faeb3e2738ae27933/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=07998d5d-dd4a-4bcc-84be-58dcbcec76b7&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=ea6c5c56-ffd8-4c31-ae69-c0a0173ed5e6
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",5 Emergency Rescue
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/63c1384e829c850007922ca4/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=07998d5d-dd4a-4bcc-84be-58dcbcec76b7&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=22a1478b-fae9-438c-8967-b51676996edd
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",5 Exploring Britain
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5ddf901280e3550009139c86/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=07998d5d-dd4a-4bcc-84be-58dcbcec76b7&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=0b6df978-f289-4515-a028-312276e027dc
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",5 on Pluto TV
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/623c492627cb540007ca55c7/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=07998d5d-dd4a-4bcc-84be-58dcbcec76b7&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=1f5b7179-6a0b-4bf2-aa5b-88f8c82eca61
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",5 Trucking Hell
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/656df2849d5ac400083be647/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=07998d5d-dd4a-4bcc-84be-58dcbcec76b7&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=062df9d1-4d2f-4572-9096-873e52649466
#EXTINF:-1 tvg-id="5tv.ar@SD" tvg-logo="https://i.imgur.com/mSn7ACs.png" group-title="General",5TV Corrientes (480p) [Not 24/7]
http://www.coninfo.net:1935/tvcinco/live1/playlist.m3u8
#EXTINF:-1 tvg-id="Channel5.ru@SD" tvg-logo="https://i.imgur.com/KPXMa3U.png" http-referrer="https://televizor24tochka.ru/" http-user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36" group-title="General",5 Канал
#EXTVLCOPT:http-referrer=https://televizor24tochka.ru/
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
https://streaming.televizor-24-tochka.ru/live/8.m3u8
#EXTINF:-1 tvg-id="6PR.au@SD" tvg-logo="https://i.imgur.com/Q9iCxg1.png" group-title="News",6PR Perth (1080p)
https://6prlive.akamaized.net/hls/live/2033806/6PR/index.m3u8
#EXTINF:-1 tvg-id="6ter.fr@SD" tvg-logo="https://i.imgur.com/2nd5Cox.png" group-title="Entertainment",6ter (1080p) [Geo-blocked]
https://viamotionhsi.netplus.ch/live/eds/6ter/browser-HLS8/6ter.m3u8
#EXTINF:-1 tvg-id="6TVTelugu.in@SD" tvg-logo="https://i.imgur.com/l3EcRnZ.png" group-title="News",6 TV Telugu (576p)
https://cdn-1.pishow.tv/live/232/master.m3u8
#EXTINF:-1 tvg-id="6WiseTv.us@SD" tvg-logo="https://jrlist70.pages.dev/list/wise.png" group-title="Family",6 Wise Tv (720p)
https://live.enhdtv.com:8081/8150/index.m3u8
#EXTINF:-1 tvg-id="7RadioVisione.it@HD" tvg-logo="https://radio7note.com/img/favicon/android-icon-192x192.png" group-title="Music",7 RadioVisione (720p)
https://stream10.xdevel.com/video1s976543-1932/stream/playlist.m3u8
#EXTINF:-1 tvg-id="7SMusic.in@SD" tvg-logo="https://i.imgur.com/zDiIhdN.png" group-title="Music",7S Music (576p)
https://mumt03.tangotv.in/7SMUSIC/index.m3u8
#EXTINF:-1 tvg-id="Canal7TeleValencia.es@SD" tvg-logo="https://i.imgur.com/ILfXDRs.png" group-title="General",7 TeleValencia (576p)
https://play.cdn.enetres.net/9E9557EFCEBB43A89CEC8FBD3C500247022/028/playlist.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",7th Heaven
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6728c9c85534bb0008b320a4/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=78b29450-7022-4485-b983-23f30e23925f&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=fe3baade-fa57-4fe5-b10d-fd88ce33d233
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",7th Heaven
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6728ca75529ac9000830ab14/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=ed502ec4-ffd0-49d1-b7de-1c00fad2906c&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=8e9d6b18-cc5b-4832-9afa-88fa1d0e7c8c
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",7th Heaven
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6728cab6e482950008b76d8c/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=ef438a77-24b9-40a1-9b9b-e24ca3052bea&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=38179bc9-e3ff-489c-90d4-63963aa6a249
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",7th Heaven
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/68503cfda1e091e16f000625/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=07998d5d-dd4a-4bcc-84be-58dcbcec76b7&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=24ae81a9-77b0-4357-a6ed-f6a2ca3d23cb
#EXTINF:-1 tvg-id="7YOUME.it@HD" tvg-logo="https://i.imgur.com/Rte2K3x.png" group-title="Music",7 YOU & ME (720p)
https://stream10.xdevel.com/video0s977798-2239/stream/playlist.m3u8
#EXTINF:-1 tvg-id="8LaMarinaTV.es@SD" tvg-logo="https://i.imgur.com/BTJvvBK.png" group-title="General",8 La Marina TV (576p)
https://streaming005.gestec-video.com/hls/canal24.m3u8
#EXTINF:-1 tvg-id="8NTV.mx@SD" tvg-logo="https://i.imgur.com/7ecgGIG.png" group-title="General",8NTV (1080p)
https://60417ddeaf0d9.streamlock.net/ntv/videontv/playlist.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",8 Out of 10 Cats (1080p) [Geo-blocked]
https://amg00627-amg00627c37-samsung-au-4294.playouts.now.amagi.tv/playlist/amg00627-banijayfast-8outof10cats-samsungau/playlist.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",8 Out of 10 Cats (1080p) [Geo-blocked]
https://amg00627-amg00627c37-samsung-nz-4295.playouts.now.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-id="8TV.my@SD" tvg-logo="https://i.imgur.com/Jkx9W88.png" group-title="Entertainment",8TV
http://cdn6.163189.xyz/163189/8tv
#EXTINF:-1 tvg-id="9Gem.au@Sydney" tvg-logo="https://i.imgur.com/cwLzqaw.png" group-title="Entertainment",9Gem (720p) [Geo-blocked]
https://9now-livestreams.akamaized.net/hls/live/2008311/gem-syd/master.m3u8
#EXTINF:-1 tvg-id="9Go.au@Sydney" tvg-logo="https://i.imgur.com/RLijQI8.png" group-title="Entertainment;Kids",9Go! (720p) [Geo-blocked]
https://9now-livestreams.akamaized.net/hls/live/2008312/go-syd/master.m3u8
#EXTINF:-1 tvg-id="9laLomaTV.es@SD" tvg-logo="https://i.imgur.com/WQP3el2.png" group-title="General",9 la Loma TV (1080p) [Geo-blocked]
https://9laloma.tv/live.m3u8
#EXTINF:-1 tvg-id="9Life.au@Sydney" tvg-logo="https://i.imgur.com/HlJOrGI.png" group-title="Lifestyle",9Life (720p) [Geo-blocked]
https://9now-livestreams.akamaized.net/hls/live/2008313/life-syd/master.m3u8
#EXTINF:-1 tvg-id="9XJalwa.in@SD" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_JALWA/images/LOGO_HD/image.png" group-title="Music",9X Jalwa (1080p)
https://b.jsrdn.com/strm/channels/9xjalwa/master.m3u8
#EXTINF:-1 tvg-id="9XJhakaas.in@SD" tvg-logo="https://jiotvimages.cdn.jio.com/dare_images/images/9xjhakaas.png" group-title="Music",9X Jhakaas
https://9xjio.wiseplayout.com/9X_Jhakaas/master.m3u8
#EXTINF:-1 tvg-id="9XTashan.in@SD" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9X_TASHAN/images/LOGO_HD/image.png" group-title="Music",9X Tashan
https://9xjio.wiseplayout.com/9X_Tashan/master.m3u8
#EXTINF:-1 tvg-id="9XM.in@SD" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_9XM/images/LOGO_HD/image.png" group-title="Music",9XM (576p)
https://b.jsrdn.com/strm/channels/9xm/master.m3u8
#EXTINF:-1 tvg-id="10Bold.au@Sydney" tvg-logo="https://i.imgur.com/2xglh33.png" group-title="Lifestyle;Relax",10 Bold Adelaide (1080p)
https://dce3793146fef017.mediapackage.us-west-2.amazonaws.com/out/v1/55cdf73af7894775ba6de8f57482b66a/CMAF_HLS/index.m3u8
#EXTINF:-1 tvg-id="10TV.in@SD" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_10TV/images/LOGO_HD/image.png" group-title="News",10 TV (576p)
https://cdn-1.pishow.tv/live/391/master.m3u8
#EXTINF:-1 tvg-id="Channel11.ua@SD" tvg-logo="https://i.imgur.com/y78saaG.png" http-user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0" group-title="General",11 Kanal (720p)
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0
https://11tv-dp.cdn-04.cosmonova.net.ua/hls/11tv-dp_ua_hi/index.m3u8
#EXTINF:-1 tvg-id="12tv.es@SD" tvg-logo="https://i.imgur.com/VSTgXsh.png" http-referrer="https://www.12tv.es/" group-title="General",12tv
#EXTVLCOPT:http-referrer=https://www.12tv.es/
https://cloud.streamingconnect.tv/hls/12tv/12tv2.m3u8
#EXTINF:-1 tvg-id="12TVParma.it@SD" tvg-logo="https://i.imgur.com/mBYxWOg.png" group-title="General",12 TV Parma (540p) [Not 24/7]
https://5929b138b139d.streamlock.net/12TVParma/livestream/playlist.m3u8
#EXTINF:-1 tvg-id="Channel12.ru@SD" tvg-logo="https://i.imgur.com/OA9hm6e.png" group-title="General",12 канал (1080p)
https://12channel.bonus-tv.ru/cdn/12channel/playlist.m3u8
#EXTINF:-1 tvg-id="13C.cl@SD" tvg-logo="https://i.imgur.com/Zfe2f5j.png" group-title="Culture",13C (1080p)
https://origin.dpsgo.com/ssai/event/GI-9cp_bT8KcerLpZwkuhw/master.m3u8
#EXTINF:-1 tvg-id="13E.cl@SD" tvg-logo="https://i.imgur.com/utI1tJV.png" group-title="Entertainment",13 Entretención (720p)
https://origin.dpsgo.com/ssai/event/BBp0VeP6QtOOlH8nu3bWTg/master.m3u8
#EXTINF:-1 tvg-id="13Festival.cl@SD" tvg-logo="https://i.imgur.com/Ymk6j5o.png" group-title="Music",13 Festival (1080p)
https://origin.dpsgo.com/ssai/event/Nftd0fM2SXasfDlRphvUsg/master.m3u8
#EXTINF:-1 tvg-id="13Humor.cl@SD" tvg-logo="https://i.imgur.com/KvMuTzN.png" group-title="Comedy",13 Humor (1080p)
https://origin.dpsgo.com/ssai/event/cKWySXKgSK-SzlJmESkOWw/master.m3u8
#EXTINF:-1 tvg-id="13Kids.cl@SD" tvg-logo="https://i.imgur.com/8WJUbSD.png" group-title="Kids",13 Kids (1080p)
https://origin.dpsgo.com/ssai/event/LhHrVtyeQkKZ-Ye_xEU75g/master.m3u8
#EXTINF:-1 tvg-id="13P.cl@SD" tvg-logo="https://i.imgur.com/R6D228s.png" group-title="Lifestyle",13 Prime (720p)
https://origin.dpsgo.com/ssai/event/p4mmBxEzSmKAxY1GusOHrw/master.m3u8
#EXTINF:-1 tvg-id="13Realities.cl@SD" tvg-logo="https://i.imgur.com/m0SuwMU.png" group-title="Entertainment",13 Realities (1080p)
https://origin.dpsgo.com/ssai/event/g7_JOM0ORki9SR5RKHe-Kw/master.m3u8
#EXTINF:-1 tvg-id="13SiamThai.th@SD" tvg-logo="https://i.imgur.com/FvEp1S2.png" group-title="News",13 Siam Thai (1080p)
https://live.x2.co.th/live/13livetv-th.m3u8
#EXTINF:-1 tvg-id="13T.cl@SD" tvg-logo="https://i.imgur.com/csBNi2L.png" group-title="Series",13 Teleseries (720p)
https://origin.dpsgo.com/ssai/event/f4TrySe8SoiGF8Lu3EIq1g/master.m3u8
#EXTINF:-1 tvg-id="15PlusMusic.ru@HD" tvg-logo="https://i.imgur.com/kj21hwd.png" group-title="Music",15+ Music (1080p)
https://live.15plusmg.ru/memfs/ce3366b1-bf25-4e24-96bb-1adf0d44bd3d.m3u8
#EXTINF:-1 tvg-id="15TV.mx@SD" tvg-logo="https://i.imgur.com/CZ8LKmA.png" group-title="General",15TV (720p) [Not 24/7]
https://cdn.fastocloud.com/leonel.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",16 Anni e Incinta
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/60940a07d88ba90007b9cb71/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=3730278c-5efe-42f9-9d31-0f7a0c5d906d&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=b67e2467-d279-45f1-a55e-db8260b2581f
#EXTINF:-1 tvg-id="16tvBudapest.hu@SD" tvg-logo="https://i.imgur.com/04fCzHl.png" group-title="General",16tv Budapest (360p)
https://cloudfront44.lexanetwork.com:1344/freerelay/16tv.sdp/playlist.m3u8
#EXTINF:-1 tvg-id="20.it@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/20_Mediaset_2018.svg/512px-20_Mediaset_2018.svg.png" group-title="Entertainment",20 Mediaset [Geo-blocked]
https://live3-mediaset-it.akamaized.net/Content/hls_h0_clr_vos/live/channel(lb)/index.m3u8
#EXTINF:-1 tvg-id="20MinutesTV.fr@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/20_Minutes_TV_IDF_logo_%282023%29.png/320px-20_Minutes_TV_IDF_logo_%282023%29.png" group-title="General",20 Minutes TV (1080p)
https://live-20minutestv.digiteka.com/1961167769/index.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",21 Jump Street
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/686cffbf3ffa5e0c91cdcfb3/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=62b227dc-b436-4646-95c2-26345773df69&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=4300877c-dd64-4f89-b35d-2e05114efc00
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",21 Jump Street (1080p)
https://cb562753.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1XzIxSnVtcFN0cmVldF9ITFM/playlist.m3u8
#EXTINF:-1 tvg-id="22ScopeNews.in@SD" tvg-logo="https://jiotvimages.cdn.jio.com/dare_images/images/22Scope_News.png" group-title="News",22Scope News (1080p)
https://thelegitpro.in/HDlive/22scope/index.fmp4.m3u8
#EXTINF:-1 tvg-id="KERODT1.us@SD" tvg-logo="https://i.imgur.com/CMANZWk.png" group-title="General",23 ABC Bakersfield CA (KERO) (720p)
https://content.uplynk.com/channel/ff809e6d9ec34109abfb333f0d4444b5.m3u8
#EXTINF:-1 tvg-id="247CanaldeNoticias.ar@SD" tvg-logo="https://i.imgur.com/4hDCB1M.png" group-title="News",24/7 Canal de Noticias
https://panel.host-live.com:19360/cn247tv/cn247tv.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",24/7 Gameshows
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/65eed5670d4561000836ade8/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=c01994e4-e1a1-4951-a355-2a30aa511907&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=dd4f1f4a-57dc-46d2-8bc9-2f89f87abab1
#EXTINF:-1 tvg-id="24Horas.es@SD" tvg-logo="https://i.ibb.co/21sXZ3GT/24h.png" group-title="News;Public",24 Horas (1080p)
https://d32rw80ytx9uxs.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-vlldndmow4yre/24HES.m3u8
#EXTINF:-1 tvg-id="24HorasInternacional.es@SD" tvg-logo="https://i.ibb.co/21sXZ3GT/24h.png" group-title="News;Public",24 Horas Internacional
https://viamotionhsi.netplus.ch/live/eds/canal24horas/browser-HLS8/canal24horas.m3u8
#EXTINF:-1 tvg-id="24HourFreeMovies.us@SD" tvg-logo="https://i.imgur.com/iSVnzR1.png" group-title="Movies",24 Hour Free Movies (720p)
https://d1j2u714xk898n.cloudfront.net/scheduler/scheduleMaster/145.m3u8
#EXTINF:-1 tvg-id="24Kitchen.us@Serbia" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/24Kitchen.png/512px-24Kitchen.png" group-title="Cooking",24Kitchen Serbia (720p)
http://91.132.74.5:8000/play/a00a
#EXTINF:-1 tvg-id="24KZ.kz@SD" tvg-logo="https://24.kz/templates/khabar24/img/logo-new.png" group-title="News",24KZ
https://tvcdn01.oktv.kz/tv/24kz/index.m3u8
#EXTINF:-1 tvg-id="24TV.tr@SD" tvg-logo="https://i.imgur.com/8FO41es.png" http-user-agent="Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/76.0.3809.25 Safari/537.36" group-title="News",24 TV (1080p)
#EXTVLCOPT:http-user-agent=Mozilla/5.0 Macintosh; Intel Mac OS X 10_14_5 AppleWebKit/537.36 KHTML, like Gecko Chrome/76.0.3809.25 Safari/537.36
https://mn-nl.mncdn.com/kanal24/smil:kanal24.smil/playlist.m3u8
#EXTINF:-1 tvg-id="Channel24.ua@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/24_Group_Ukraine_04.png/512px-24_Group_Ukraine_04.png" group-title="News",24 Канал (1080p)
https://streamvideol1.luxnet.ua/news24/smil:news24.stream.smil/playlist.m3u8
#EXTINF:-1 tvg-id="Twentyseven.it@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twentyseven_logo.svg/512px-Twentyseven_logo.svg.png" group-title="Movies;Series",27 TwentySeven [Geo-blocked]
https://live2.msf.cdn.mediaset.net/content/hls_h0_cls_vos/live/channel(ts)/index.m3u8
#EXTINF:-1 tvg-id="28kanala.es@SD" tvg-logo="https://i.imgur.com/DyvK28q.png" group-title="General",28 kanala
https://streaming.28kanala.eus/hls/z.m3u8
#EXTINF:-1 tvg-id="30ADarcizzleOffshore.us@SD" tvg-logo="https://i.imgur.com/Q4l2uao.png" group-title="Outdoor",30A Darcizzle Offshore (720p)
https://30a-tv.com/darcizzle.m3u8
#EXTINF:-1 tvg-id="30AGeorgiaHollywoodReview.us@SD" tvg-logo="https://images.axios.com/JiG3RuYBwpU_WZFeU6HHjt03FAU=/111x0:1191x1080/320x320/2023/11/09/1699558891265.jpg" group-title="Entertainment;News",30A Georgia Hollywood Review TV
https://30a-tv.com/gh.m3u8
#EXTINF:-1 tvg-id="30AGolfKingdom.us@SD" tvg-logo="https://golfkingdom.net/wp-content/uploads/2022/04/golf-kingdom-st.jpg" group-title="Sports",30A Golf Kingdom
https://30a-tv.com/feeds/vidaa/golf.m3u8
#EXTINF:-1 tvg-id="30AInvestmentPitch.us@SD" tvg-logo="https://i.imgur.com/CKCtZo7.png" group-title="Business",30A Investment Pitch (720p)
https://30a-tv.com/feeds/xodglobal/30atv.m3u8
#EXTINF:-1 tvg-id="30ALionelNation.us@SD" tvg-logo="https://m.media-amazon.com/images/I/71dgsQwVcNL.png" group-title="News",30A Lionel Nation TV
https://30a-tv.com/ln.m3u8
#EXTINF:-1 tvg-id="30ALoomeredTV.us@SD" tvg-logo="https://cbs12.com/resources/media/0c1ecad8-fb09-4bb2-beaa-fc561dfe624a-small21x9_LoomerStill.jpg?1603419052801" group-title="Documentary;News",30A Loomered TV
https://30a-tv.com/loomer.m3u8
#EXTINF:-1 tvg-id="30ALuxeLifeDiscovered.us@SD" tvg-logo="https://m.media-amazon.com/images/I/51FJ5A0mEyL.jpg" group-title="Lifestyle",30A Luxe Life Discovered
https://30a-tv.com/feeds/vidaa/luxelife.m3u8
#EXTINF:-1 tvg-id="30AMusic.us@SD" tvg-logo="https://i.imgur.com/gNWg9tl.png" group-title="Music",30A Music (720p)
https://30a-tv.com/music.m3u8
#EXTINF:-1 tvg-id="30ARidiculousTV.us@SD" tvg-logo="https://30a.media/wp-content/uploads/2023/08/pzaz-30atv-2-230x366-ridiculous.jpg" group-title="Comedy",30A Ridiculous TV (720p)
https://30a-tv.com/feeds/720p/63.m3u8
#EXTINF:-1 tvg-id="30ASidewalks.us@SD" tvg-logo="https://i.imgur.com/HSdwqZN.png" group-title="Entertainment",30A Sidewalks (720p)
https://30a-tv.com/sidewalks.m3u8
#EXTINF:-1 tvg-id="30ATelevisionChannel.us@SD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHiYfIB01K44LIBG81aEGAmDuIWw8MA0f2w&s" group-title="Entertainment",30A Television Channel
https://30a-tv.com/feeds/masters/30atv.m3u8
#EXTINF:-1 tvg-id="30ATheBeachShow.us@SD" tvg-logo="https://i.imgur.com/0j5Aget.png" group-title="Shop",30A The Beach Show (720p)
https://30a-tv.com/beachy.m3u8
#EXTINF:-1 tvg-id="30ATVClassicMovies.us@SD" tvg-logo="https://babaktv.com/wp-content/uploads/2023/09/30A-Classi-Movies.jpeg" group-title="Movies",30A TV Classic Movies
https://30a-tv.com/feeds/pzaz/30atvmovies.m3u8
#EXTINF:-1 tvg-id="30AWeLoveCars.us@SD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxroqfE_hvEApKMQx03sSYXPeEh4ClaF5QSa8XfRwJW_So3vfSN0CjqzxN30H-qEBswqU&usqp=CAU" group-title="Auto",30A We Love Cars
https://30a-tv.com/feeds/vidaa/cars.m3u8
#EXTINF:-1 tvg-id="31Kanal.kz@SD" tvg-logo="https://www.ikegami.co.jp/files/co/news/20250903_kazakhstanChannel31/Channel31_Logo.jpg" http-referrer="https://31.kz/" group-title="General",31 Kanal
#EXTVLCOPT:http-referrer=https://31.kz/
https://streams.adapto.kz/hls/live/31kz/main_stream.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",35MM
https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/35mm/index.m3u8?ads.vf=O8CA3y6lvfe
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",48 Hours
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6493f6d24c014a00083d2ecd/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=c01994e4-e1a1-4951-a355-2a30aa511907&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=be10b3ab-9ff1-4fa4-99d9-6b700b728601
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",48 Hours
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/62e925bc68d18a00077bb990/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=32de4823-7501-4845-ba26-8699462954dd&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=99135251-810e-44f7-858e-31e034068ea3
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",48 Hours
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6346937a46f9a2000889073d/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=78b29450-7022-4485-b983-23f30e23925f&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=1d417327-517f-493c-a4cb-fb72b46ebd28
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",48 Hours
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/634690323ce5fa0007c621f2/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=ed502ec4-ffd0-49d1-b7de-1c00fad2906c&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=24e7d787-6daf-41d7-89de-99cb3d26539b
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",48 Hours
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6346935b94aa8c0007c5b7a2/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=ef438a77-24b9-40a1-9b9b-e24ca3052bea&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=0c2ffc17-a65a-455a-870a-87c4a78b0b6b
#EXTINF:-1 tvg-id="48Hours.us@SD" tvg-logo="https://i.imgur.com/Q7THHhX.png" group-title="Series",48 Hours
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6299e5afdd5833000727e795/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=07998d5d-dd4a-4bcc-84be-58dcbcec76b7&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=40768868-334d-4f8a-b1d0-e28cc2aa0ed5
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",50 Cent Action
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/68487fb3f212bedacf5a53e3/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=affbdbfa-5fa3-48af-8369-57c005daef42&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=dd138080-85b5-41a9-92e0-d07a09d26485
#EXTINF:-1 tvg-id="51RadioTV.it@SD" tvg-logo="https://www.51news.it/images/loghi/logo_tv_radio_51news.png" group-title="Music",51 Radio TV (480p) [Geo-blocked]
http://wms.shared.streamshow.it/canale51/canale51/playlist.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",60 Minutes
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/66b646f9cd0d3100086af83c/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=affbdbfa-5fa3-48af-8369-57c005daef42&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=47a974e6-4f31-440b-bdd3-9c7e86b9da59
#EXTINF:-1 tvg-id="7080TV.it@SD" tvg-logo="https://i.imgur.com/y4kNV3Q.png" group-title="Music",70-80 TV (1080P)
https://585b674743bbb.streamlock.net/9050/9050/playlist.m3u8
#EXTINF:-1 tvg-id="70sCinema.us@SD" tvg-logo="https://i.imgur.com/mgXeEE4.png" group-title="Movies",70s Cinema
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5f4d878d3d19b30007d2e782/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=affbdbfa-5fa3-48af-8369-57c005daef42&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=1f931dfb-f60b-46aa-8297-e1c279f59aa8
#EXTINF:-1 tvg-id="80sRewind.us@SD" tvg-logo="https://i.imgur.com/nkEeYfI.png" group-title="Movies",80s Rewind
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5ca525b650be2571e3943c63/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=affbdbfa-5fa3-48af-8369-57c005daef42&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=99ee1a8c-ba00-4f77-aa48-ae7722ed2d8f
#EXTINF:-1 tvg-id="88Stereo.cr@SD" tvg-logo="https://i.imgur.com/i3YwORV.png" group-title="Music",88 Stereo (720p) [Not 24/7]
http://k3.usastreams.com/CableLatino/88stereo/playlist.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",90's Kids
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6452c814939a590008567a3b/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=affbdbfa-5fa3-48af-8369-57c005daef42&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=b9f83115-babc-4078-adf3-ed6c338f53a5
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",90s Kids TV 2
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6452c77ed3fdde00080eb3a8/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=affbdbfa-5fa3-48af-8369-57c005daef42&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=75f462cb-9486-4ac8-9c6b-c7ca7ee6f7ab
#EXTINF:-1 tvg-id="90sThrowback.us@SD" tvg-logo="https://i.imgur.com/KoGko6M.png" group-title="Movies",90s Throwback
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5f4d86f519358a00072b978e/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=affbdbfa-5fa3-48af-8369-57c005daef42&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=d4a499ac-ee55-4e42-b831-928a3c8a4b7b
#EXTINF:-1 tvg-id="92NewsHD.pk@SD" tvg-logo="https://i.imgur.com/gp1Ao4s.jpeg" group-title="News",92 News HD (720p)
http://92news.vdn.dstreamone.net/92newshd/92hd/playlist.m3u8
#EXTINF:-1 tvg-id="981PearlFM.sx@SD" tvg-logo="https://i.imgur.com/GY750xh.jpg" group-title="Music",98.1 Pearl FM (720p)
https://live2.tensila.com/pearl-v-1.pearlfm/hls/live/mystream.m3u8
#EXTINF:-1 tvg-id="99TV.in@SD" tvg-logo="https://i.imgur.com/dZA4gel.png" group-title="News",99TV (720p)
https://cdn-1.pishow.tv/live/1211/master.m3u8
#EXTINF:-1 tvg-id="100AutoMotoTV.bg@SD" tvg-logo="https://i.imgur.com/SZtJfOG.png" group-title="Auto",100% Auto Moto TV (406p) [Not 24/7]
http://100automoto.tv:1935/bgtv1/autotv/playlist.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",100% Docs
https://amg02162-newenconnect-amg02162c2-rakuten-us-1981.playouts.now.amagi.tv/playlist/amg02162-newenconnect-100pour100docs-rakutenus/playlist.m3u8
#EXTINF:-1 tvg-id="100NEWS.ua@SD" tvg-logo="https://i.imgur.com/bSXKdK5.png" group-title="Business;News",100% News (576p)
http://85.238.112.40:8810/hls_sec/239.33.16.32-.m3u8
#EXTINF:-1 tvg-id="101tvAxarquia.es@SD" tvg-logo="https://i.imgur.com/GzI3RC4.png" group-title="General",101tv Axarquia (480p)
https://www.streaming101tv.es:19360/axarquia/axarquia.m3u8
#EXTINF:-1 tvg-id="101tvCadiz.es@SD" tvg-logo="https://i.imgur.com/GzI3RC4.png" group-title="General",101tv Cádiz (1080p)
https://streaming101tv.es:19360/cadiz/cadiz.m3u8
#EXTINF:-1 tvg-id="101tvMalaga.es@SD" tvg-logo="https://i.imgur.com/GzI3RC4.png" http-referrer="https://player.instantvideocloud.net/" group-title="News",101tv Malaga
#EXTVLCOPT:http-referrer=https://player.instantvideocloud.net/
https://liveingesta318.cdnmedia.tv/101weblive/smil:malaga.smil/playlist.m3u8
#EXTINF:-1 tvg-id="101tvSevilla.es@SD" tvg-logo="https://i.imgur.com/GzI3RC4.png" http-referrer="https://player.instantvideocloud.net/" group-title="General",101tv Sevilla
#EXTVLCOPT:http-referrer=https://player.instantvideocloud.net/
https://liveingesta318.cdnmedia.tv/101weblive/smil:sevilla.smil/playlist.m3u8
#EXTINF:-1 tvg-id="111TV.it@SD" tvg-logo="https://i.imgur.com/kVREx1Q.png" group-title="General",111 TV (720p)
https://5db313b643fd8.streamlock.net/111/111/playlist.m3u8
#EXTINF:-1 tvg-id="247BoxTV.ir@SD" tvg-logo="https://i.imgur.com/t5AUthL.png" group-title="Entertainment",247 Box TV
https://hls.247box.live/hls/stream.m3u8
#EXTINF:-1 tvg-id="312Kino.kg@SD" tvg-logo="https://i.ibb.co/3m9LrLj/k7gIibH.png" group-title="Movies",312 Кино (406p)
http://176.126.166.43:1935/live/312kino/playlist.m3u8
#EXTINF:-1 tvg-id="312TV.kg@SD" tvg-logo="https://i.ibb.co/S6sZvqk/iLSGi6c.png" group-title="Entertainment",312 ТВ (406p)
http://176.126.166.43:1935/live/312musik/playlist.m3u8
#EXTINF:-1 tvg-id="360.ru@SD" tvg-logo="https://i.imgur.com/VTJqdoX.png" group-title="General",360° (1080p)
https://cdn-evacoder-tv.facecast.io/evacoder_hls_hi/CkxfR1xNUAJwTgtXTBZTAJli/index.m3u8
#EXTINF:-1 tvg-id="360News.ru@SD" tvg-logo="https://i.imgur.com/YXDeX8q.png" group-title="News",360° Новости
https://live-vgtrksmotrim.cdnvideo.ru/vgtrksmotrim/smotrim-live-03-srt.smil/playlist.m3u8
#EXTINF:-1 tvg-id="360RFTV.cr@SD" tvg-logo="https://i.imgur.com/EBtgnxR.png" group-title="General",360 RFTV (576p) [Geo-blocked]
https://acceso.mediosdecostarica.com:3638/live/360rftvcrlive.m3u8
#EXTINF:-1 tvg-id="360.tr@SD" tvg-logo="https://i.imgur.com/agn47sQ.png" group-title="News",360 TV (720p) [Not 24/7]
https://turkmedya-live.ercdn.net/tv360/tv360.m3u8
#EXTINF:-1 tvg-id="1001Noites.br@SD" tvg-logo="https://i.imgur.com/dWA9y2J.png" group-title="Shop",1001 Noites (720p) [Not 24/7]
https://cdn.jmvstream.com/w/LVW-8155/ngrp:LVW8155_41E1ciuCvO_all/playlist.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",2900 Happiness
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6720bc6cdaad7f000872a6e2/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=78b29450-7022-4485-b983-23f30e23925f&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=2c75757c-25f4-42a9-a4e3-89edbe2e7a26
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",90210
http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/65a67dd13af63d0008257f17/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=bc8293f0-4b91-11ef-8a44-83c5e90e038f&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=6b751f03-945e-4e30-a909-d3e4de858fa8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",90210
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/65a67dd13af63d0008257f17/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=62b227dc-b436-4646-95c2-26345773df69&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=e8ba6507-b72a-429e-bd1c-feb575a81a37
#EXTINF:-1 tvg-id="90210.us@SD" tvg-logo="https://i.imgur.com/xqo5PxO.png" group-title="Series",90210
http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/65a67dd13af63d0008257f17/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=1b1c5240-4b81-11ef-a8ac-e146e4e7be02&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=6e62cae5-9404-4e52-8b20-c5fc2b453e9d
#EXTINF:-1 tvg-id="AndTV.in@International" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_SYMANDTV/images/LOGO_HD/LOGO_HD_image.png" group-title="Movies",&TV International (1080p)
https://amg01117-amg01117c1-amgplt0029.playout.now3.amagi.tv/playlist/amg01117-amg01117c1-amgplt0029/playlist.m3u8
#EXTINF:-1 tvg-id="24.sk@SD" tvg-logo="https://i.imgur.com/tTCuczU.png" group-title="News",:24 (1080p)
http://88.212.15.27/live/test_trojka_25p/playlist.m3u8
#EXTINF:-1 tvg-id="Sport.sk@SD" tvg-logo="https://i.imgur.com/oAtcxNZ.png" group-title="Sports",:Šport (1080p)
http://88.212.15.27/live/test_rtvs_sport_hevc/playlist.m3u8
#EXTINF:-1 tvg-id="OPA.cr@SD" tvg-logo="https://i.imgur.com/300c1ZH.png" group-title="Entertainment",¡OPA! (1080i) [Geo-blocked]
https://5fc584f3f19c9.streamlock.net/genteopa/videogenteopa/playlist.m3u8
#EXTINF:-1 tvg-id="AtTV.th@SD" tvg-logo="https://files.catbox.moe/6rj9aw.jpg" group-title="Movies;Series",@TV (720p)
http://49.0.87.24:1936/HDAttv/Attv/playlist.m3u8
#EXTINF:-1 tvg-id="A1TV.nl@SD" tvg-logo="https://i.imgur.com/JZ1oTM2.png" group-title="General",A1 TV (1080p) [Not 24/7]
https://stream.a1mediagroep.nl/hls/a1tv.m3u8
#EXTINF:-1 tvg-id="A2iMusic.sn@SD" tvg-logo="https://i.imgur.com/Fykhzxh.jpg" group-title="Music",A2i Music (720p) [Not 24/7]
https://stream.sen-gt.com/A2iMusic/myStream/playlist.m3u8
#EXTINF:-1 tvg-id="A2iNaija.sn@SD" tvg-logo="https://i.imgur.com/yq7ghPE.jpg" group-title="Education",A2i Naija (720p) [Not 24/7]
https://stream.sen-gt.com/A2iNaija/myStream/playlist.m3u8
#EXTINF:-1 tvg-id="A2iReligion.sn@SD" tvg-logo="https://i.imgur.com/54WrwyN.jpg" group-title="Religious",A2i Religion (720p) [Not 24/7]
https://stream.sen-gt.com/A2iReligion/myStream/playlist.m3u8
#EXTINF:-1 tvg-id="A2iTV.it@SD" tvg-logo="https://i.imgur.com/YlDFir7.jpg" group-title="General",A2i TV (1080p)
https://stream.sen-gt.com/A2itv/myStream/playlist.m3u8
#EXTINF:-1 tvg-id="A7TV.ro@SD" tvg-logo="https://i.imgur.com/RmFg8BN.png" group-title="General",A7TV (1080p)
https://a7tvlive.ro/A7TV/A7TV/playlist.m3u8
#EXTINF:-1 tvg-id="A12TV.ci@SD" tvg-logo="https://i.imgur.com/JgnjgvF.png" group-title="General",A12 TV
https://video1.getstreamhosting.com:1936/8250/8250/manifest.m3u8
#EXTINF:-1 tvg-id="A24.ar@SD" tvg-logo="https://i.imgur.com/LnXQkIU.png" http-user-agent="Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, como Gecko) Chrome/112.0.0.0 Mobile Safari/537.36" group-title="News",A24 (720p)
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, como Gecko) Chrome/112.0.0.0 Mobile Safari/537.36
https://g5.vxral-slo.transport.edge-access.net/a12/ngrp:a24-100056_all/playlist.m3u8?sense=true
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",A Caçadora de Relíquias
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/67e59a6557487a8b7fe73e23/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=8ee99fa9-8924-42ef-bf8b-617216b5b280&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=f739f7cc-7a4f-4da9-9134-c843facb292c
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",A Feiticeira
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/631fa8dd7f25240007099a40/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=8ee99fa9-8924-42ef-bf8b-617216b5b280&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=eb5ff8de-8381-4585-946b-ec18d07c8a3b
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",A Haunting
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/64ff1d92d545e9000877fba4/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=07998d5d-dd4a-4bcc-84be-58dcbcec76b7&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=e5dc30d9-58e0-4679-b83b-44331d957fec
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",A New Life in the Sun
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6852854bce36f0644f37d765/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=07998d5d-dd4a-4bcc-84be-58dcbcec76b7&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=0c73da2a-4dcc-4dda-a8af-487f12619b6b
#EXTINF:-1 tvg-id="APunt.es@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Logotip_d%27%C3%80_Punt_%282017-%29.svg/512px-Logotip_d%27%C3%80_Punt_%282017-%29.svg.png" group-title="General;Public",A Punt
https://bcovlive-a.akamaihd.net/8499d938ef904e39b58a4adec2ddeada/eu-west-1/6057955885001/playlist_dvr.m3u8
#EXTINF:-1 tvg-id="ATurk.tr@SD" tvg-logo="https://i.imgur.com/je5wQ3G.png" group-title="News",A Türk Izmir (360p)
https://vdo.digitalbox.xyz:3807/stream/play.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",A&E Crime 360
https://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/6000a5a9e767980007b497ca/master.m3u8?appName=web&appVersion=9.19.0&deviceDNT=0&deviceId=affbdbfa-5fa3-48af-8369-57c005daef42&deviceMake=firefox&deviceModel=web&deviceType=web&deviceVersion=147.0.0&serverSideAds=false&sid=b4584867-4b85-4499-94f2-24d49adabde7
#EXTINF:-1 tvg-id="AE.us@East" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/A%26E_Network_logo.svg/512px-A%26E_Network_logo.svg.png" group-title="Entertainment",A&E East (720p) [Not 24/7]
https://tvpass.org/live/AEEast/hd
#EXTINF:-1 tvg-id="ARCanal.pa@SD" tvg-logo="https://i.imgur.com/ejRJqSI.png" group-title="Religious",A&R Canal Adventista (720p)
http://51.222.9.192:3589/stream/play.m3u8
#EXTINF:-1 tvg-id="APlusIvoire.ci@SD" tvg-logo="https://i.imgur.com/yOW0vyP.png" group-title="Culture",A+ Ivoire (720p)
http://69.64.57.208/atv/playlist.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",a-z Best Classic TV
https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/CUXB534IAMTJM7Z4BKKS/hls3/now,-1m/m.m3u8?ads.vf=38x-VxSIwki
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",a-z Classic Flix
https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/8WOSAE6HHWJY8KP8BW2C/hls3/now,-1m/m.m3u8?ads.vf=it6K3bRNpTi
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",a-z Western Grit
https://d3s7x6kmqcnb6b.cloudfront.net/d/distro001a/P6T1SCG4XU9MM36TQSB5/hls3/now,-1m/m.m3u8?ads.vf=Jc3VwF98eyC
#EXTINF:-1 tvg-id="AnadoluAgency.tr@SD" tvg-logo="https://i.imgur.com/dWElJll.png" group-title="News",AA Live (720p) [Not 24/7]
https://mtulqxgomrllive.mediatriple.net/mtulqxgomrllive/broadcast_59f9c0c785b88.smil/playlist.m3u8
#EXTINF:-1 tvg-id="KIIOLD4.us@SD" tvg-logo="https://i.imgur.com/Spu4s89.png" group-title="Culture",AABC TV (480p)
https://streamer1.connectto.com/AABC_WEB_1201/index.m3u8
#EXTINF:-1 tvg-id="AadinathTV.in@SD" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_AADINATH_TV/images/LOGO_HD/image.png" http-referrer="https://keralive.com/" group-title="Religious",Aadinath TV (396p)
#EXTVLCOPT:http-referrer=https://keralive.com/
https://keralive.com/yupp/tv.php?c=aadinath-tv&e=.m3u8
#EXTINF:-1 tvg-id="" tvg-logo="" group-title="Undefined",Aaj Ki Khabar
https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/aaj-ki-khabar/index.m3u8?ads.vf=1lMbqABqc6G
#EXTINF:-1 tvg-id="AajTak.in@SD" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_AAJ_TAK/images/LOGO_HD/image.png" group-title="News",Aaj Tak (720p)
https://feeds.intoday.in/aajtak/api/master.m3u8
#EXTINF:-1 tvg-id="AajTak.in@HD" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_AAJ_TAK/images/LOGO_HD/image.png" group-title="News",Aaj Tak HD (1080p)
https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8
#EXTINF:-1 tvg-id="AakaashAath.in@SD" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_AAKASH_AATH/images/LOGO_HD/image.png" group-title="Entertainment",Aakaash Aath (720p)
https://cdn-4.pishow.tv/live/969/master.m3u8
#EXTINF:-1 tvg-id="AaseervathamTV.in@SD" tvg-logo="https://i.imgur.com/GlfrYs7.png" group-title="Religious",Aaseervatham TV (576p)
https://mumt04.tangotv.in/AASEERVATHAMTV/index.m3u8
#EXTINF:-1 tvg-id="Aastha.in@SD" tvg-logo="https://i.imgur.com/IqgrV92.png" group-title="Religious",Aastha (720p)
https://aasthaott.akamaized.net/110923/smil:aasthatv.smil/index.m3u8
#EXTINF:-1 tvg-id="AasthaBhajan.in@SD" tvg-logo="https://jiotvimages.cdn.jio.com/dare_images/images/Aastha_Bhajan.png" group-title="Religious",Aastha Bhajan (480p)
https://aasthaott.akamaized.net/110923/smil:bhajan.smil/playlist.m3u8
#EXTINF:-1 tvg-id="AasthaGujarati.in@SD" tvg-logo="https://jiotvimages.cdn.jio.com/dare_images/images/Aastha_Tamil.png" group-title="Religious",Aastha Gujarati (480p)
https://aasthaott.akamaized.net/110923/smil:aasthagujrati.smil/playlist.m3u8
#EXTINF:-1 tvg-id="AasthaKannada.in@SD" tvg-logo="https://jiotvimages.cdn.jio.com/dare_images/images/Aastha_Kannada.png" group-title="Religious",Aastha Kannada (480p)
https://aasthaott.akamaized.net/110923/smil:aasthakannada.smil/playlist.m3u8
#EXTINF:-1 tvg-id="AasthaPrime1.in@SD" tvg-logo="https://i.imgur.com/LyWSMJS.png" group-title="Religious",Aastha Prime 1 (720p)
https://aasthaott.akamaized.net/110923/smil:aasthaprime1.smil/master.m3u8
#EXTINF:-1 tvg-id="AasthaTamil.in@SD" tvg-logo="https://i.imgur.com/YQK9ewf.png" group-title="Religious",Aastha Tamil (480p)
https://aasthaott.akamaized.net/110923/smil:aasthatamil.smil/playlist.m3u8
#EXTINF:-1 tvg-id="AasthaTelugu.in@SD" tvg-logo="https://jiotvimages.cdn.jio.com/dare_images/images/Aastha_Telugu.png" group-title="Religious",Aastha Telugu (480p)
https://aasthaott.akamaized.net/110923/smil:aasthatelugu.smil/playlist.m3u8
#EXTINF:-1 tvg-id="AathavanTV.uk@SD" tvg-logo="https://i.imgur.com/LEVEhTH.png" group-title="Entertainment",Aathavan TV (720p) [Not 24/7]
http://45.77.66.224:1935/athavantv/live/playlist.m3u8
#EXTINF:-1 tvg-id="AB1.fr@SD" tvg-logo="https://i.imgur.com/9C7UsOe.png" group-title="Entertainment",AB1
https://viamotionhsi.netplus.ch/live/eds/ab1/browser-dash/ab1.mpd
#EXTINF:-1 tvg-id="AB3.be@HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/AB3_2025.svg/512px-AB3_2025.svg.png" group-title="Entertainment",AB3 HD
https://viamotionhsi.netplus.ch/live/eds/ab3/browser-HLS8/ab3.m3u8
#EXTINF:-1 tvg-id="AbadanTV.ir@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/fa/3/39/Abadan_tv.png" group-title="General",Abadan
https://lenz.splus.ir/PLTV/88888888/224/3221227000/index.m3u8
#EXTINF:-1 tvg-id="AbaiTV.kz@SD" tvg-logo="https://i.imgur.com/Nw2R7Dq.png" group-title="Culture",Abai TV (720p)
https://abaitv-stream.qazcdn.com/abaitv/abaitv/playlist.m3u8
#EXTINF:-1 tvg-id="AbalfadhlTV.ir@SD" tvg-logo="https://i.ibb.co/cCmjqtQ/logo-2.png" group-title="Religious",Abalfadhl TV
https://t.northtelecom.org/ABALFADHLTV.m3u8
#EXTINF:-1 tvg-id="AbanteTV.ph@HD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/d/d9/Abante_masthead.svg" group-title="News",Abante TV (1080p)
https://amg19223-amg19223c12-amgplt0352.playout.now3.amagi.tv/playlist/amg19223-amg19223c12-amgplt0352/playlist.m3u8
#EXTINF:-1 tvg-id="ABC.us@East" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/27/WWAY_logo.png" group-title="General",ABC
http://41.205.93.154/ABC/index.m3u8
#EXTINF:-1 tvg-id="WMARDT1.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/en/d/db/2_ABC_WMAR_Baltimore.png" group-title="News",ABC 2 Baltimore MD (WMAR) (720p)
https://aegis-cloudfront-1.tubi.video/c28d1ca8-9467-4798-81dc-09c1d6e90be1/playlist.m3u8
#EXTINF:-1 tvg-id="KRGVDT1.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/27/WWAY_logo.png" group-title="General",ABC 5
https://d3svnrf3rmq619.cloudfront.net/krgv-live/smil:krgv-live.smil/playlist.m3u8
#EXTINF:-1 tvg-id="WCVBDT1.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/WCVB-TV_%282021%29.svg/512px-WCVB-TV_%282021%29.svg.png" group-title="General",ABC 5 Boston MA (WCVB) (720p)
https://aegis-cloudfront-1.tubi.video/c2e3094d-ad56-4c5f-9655-cd80df71fbab/playlist.m3u8
#EXTINF:-1 tvg-id="WRTVDT1.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/27/WWAY_logo.png" group-title="News",ABC 6 Indianapolis IN (WRTV) (720p)
https://aegis-cloudfront-1.tubi.video/bc9ff1c7-4dc1-4e36-9ef0-25b28c595ada/playlist.m3u8
#EXTINF:-1 tvg-id="KOATDT1.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/27/WWAY_logo.png" group-title="General",ABC 7 Albuquerque NM (KOAT) (720p)
https://aegis-cloudfront-1.tubi.video/2dba5dd9-4097-45e3-b169-56735cc48476/playlist.m3u8
#EXTINF:-1 tvg-id="KGODT1247News.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/27/WWAY_logo.png" group-title="News",ABC 7 Bay Area and San Francisco News (KGO-DT1) (720p)
https://content.uplynk.com/channel/ext/4413701bf5a1488db55b767f8ae9d4fa/kgo_24x7_news.m3u8
#EXTINF:-1 tvg-id="KMGHDT1.us@SD" tvg-logo="https://i.imgur.com/MWvoICD.png" group-title="General",ABC 7 Denver CO (KMGH) (720p)
https://content.uplynk.com/channel/64ca339f04964a5e961c3207a7771bf1.m3u8
#EXTINF:-1 tvg-id="KABCDT1247News.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/KABC-TV-Logo-2021.png/512px-KABC-TV-Logo-2021.png" group-title="News",ABC 7 Los Angeles CA (KABC-TV) (720p)
https://content.uplynk.com/channel/ext/2118d9222a87420ab69223af9cfa0a0f/kabc_24x7_news.m3u8
#EXTINF:-1 tvg-id="WMURDT1.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/en/7/72/WMURCurrentLogo.png" group-title="News;Weather",ABC 9 Manchester NH (WMUR-TV) (720p)
https://aegis-cloudfront-1.tubi.video/b77ffe96-c5d1-43a7-8687-306ff244d725/playlist.m3u8
#EXTINF:-1 tvg-id="WFTVDT1.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/27/WWAY_logo.png" group-title="News",ABC 9 Orlando FL (WFTV) (720p)
https://amg00327-coxmediagroup-wftvbreaking-ono-hec7b.amagi.tv/playlist/amg00327-coxmediagroup-wftvbreaking-ono/playlist.m3u8
#EXTINF:-1 tvg-id="KGUNDT1.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/27/WWAY_logo.png" group-title="General",ABC 9 Tucson AZ (KGUN) (720p)
https://aegis-cloudfront-1.tubi.video/a53514a7-f2aa-4d34-802e-c2b5594fc0d7/playlist.m3u8
#EXTINF:-1 tvg-id="KGTVDT1.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/27/WWAY_logo.png" group-title="General",ABC 10 San Diego CA (KGTV) (720p)
https://aegis-cloudfront-1.tubi.video/1a352414-3a30-4f42-b14b-c091d02a5e45/playlist.m3u8
#EXTINF:-1 tvg-id="WISNDT1.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/27/WWAY_logo.png" group-title="General",ABC 12 Milwaukee WI (WISN) (720p)
https://aegis-cloudfront-1.tubi.video/ec903a48-3638-4d0b-ac89-813e147bca58/playlist.m3u8
#EXTINF:-1 tvg-id="KTNVDT1.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/KTNV_2023.svg/512px-KTNV_2023.svg.png" group-title="General",ABC 13 Las Vegas NV (KTNV) (720p)
https://content.uplynk.com/channel/39919d3f7a074eefa8bf579214e952f9.m3u8
#EXTINF:-1 tvg-id="KNXVDT1.us@SD" tvg-logo="https://i.imgur.com/43s7KXt.png" group-title="General",ABC 15 Phoenix AZ (KNXV-TV) (720p)
https://content.uplynk.com/channel/9deaf22aaa33461f9cac22e030ed00ec.m3u8
#EXTINF:-1 tvg-id="KXXVDT1.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/27/WWAY_logo.png" group-title="General",ABC 25 News Central Texas
https://content.uplynk.com/channel/9d4e02c9c3544c269d32e6b316792c8f.m3u8
#EXTINF:-1 tvg-id="KFSNDT1247News.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/2/27/WWAY_logo.png" group-title="News",ABC 30 Fresno and Central Valley News (KFSN-DT1) (720p)
https://content.uplynk.com/channel/ext/96195dc445894d079a91958abba8d3af/kfsn_24x7_news.m3u8
#EXTINF:-1 tvg-id="WPLGDT1.us@SD" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/WPLG_Local_10_%282014%2C_without_ABC_logo%29.svg/884px-WPLG_Local_10_%282014%2C_without_ABC_logo%29.svg.png" group-title="News",ABC (WPLG-DT1) Miami FL (720p)
https://pubads.g.doubleclick.net/ssai/event/tQD6w9OJQVOobcyV3Dammw/master.m3u8
#EXTINF:-1 tvg-id="ABCEntertains.au@Sydney" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/ABC_Entertains_logo.svg/512px-ABC_Entertains_logo.svg.png" group-title="Education;Kids",ABC Entertains (720p)
https://c.mjh.nz/abc-me.m3u8
#EXTINF:-1 tvg-id="ABCKids.au@Sydney" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/2/29/ABC_Kids_%282020%29.svg/revision/latest/scale-to-width-down/512" group-title="Kids",ABC Kids
https://c.mjh.nz/abc-kids.m3u8
#EXTINF:-1 tvg-id="ABCNews.au@Sydney" tvg-logo="https://i.imgur.com/BrW7gk8.png" group-title="News",ABC News
https://abc-news-dmd-streams-1.akamaized.net/out/v1/701126012d044971b3fa89406a440133/index.m3u8
`;
