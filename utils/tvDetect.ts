
export function detectSmartTV(): boolean {
  const ua = navigator.userAgent.toLowerCase();

  return (
    // Samsung Tizen
    ua.includes('tizen') ||
    // LG webOS
    ua.includes('webos') ||
    ua.includes('web0s') ||
    // Android TV / Google TV
    ua.includes('android tv') ||
    ua.includes('googletv') ||
    ua.includes('chromecast') ||
    // Philips, Sony, Hisense (HbbTV)
    ua.includes('hbbtv') ||
    ua.includes('smart-tv') ||
    ua.includes('smarttv') ||
    // Fire TV
    ua.includes('silk') ||
    // Telas muito grandes sem touch: provável TV
    (window.screen.width >= 1920 && !('ontouchstart' in window) && !navigator.maxTouchPoints)
  );
}

export function getTVPlatform(): 'samsung' | 'lg' | 'android' | 'firetv' | 'hbbtv' | 'unknown' {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('tizen'))      return 'samsung';
  if (ua.includes('webos') || ua.includes('web0s')) return 'lg';
  if (ua.includes('android tv') || ua.includes('googletv')) return 'android';
  if (ua.includes('silk'))       return 'firetv';
  if (ua.includes('hbbtv'))      return 'hbbtv';
  return 'unknown';
}
