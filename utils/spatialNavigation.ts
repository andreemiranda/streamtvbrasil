
export function navigateSpatial(
  direction: 'up' | 'down' | 'left' | 'right',
  currentElement: Element | null
): Element | null {
  const focusables = Array.from(
    document.querySelectorAll<HTMLElement>(
      '[data-tv-focus]:not([disabled]):not([aria-disabled="true"])'
    )
  );

  if (!currentElement || !focusables.includes(currentElement as HTMLElement)) {
    const first = focusables[0];
    first?.focus();
    return first;
  }

  const currentRect = currentElement.getBoundingClientRect();
  const cx = currentRect.left + currentRect.width  / 2;
  const cy = currentRect.top  + currentRect.height / 2;

  let best: HTMLElement | null = null;
  let bestScore = Infinity;

  for (const el of focusables) {
    if (el === currentElement) continue;
    const rect = el.getBoundingClientRect();
    const ex   = rect.left + rect.width  / 2;
    const ey   = rect.top  + rect.height / 2;
    const dx   = ex - cx;
    const dy   = ey - cy;

    const inDirection =
      (direction === 'up'    && dy < -5) ||
      (direction === 'down'  && dy >  5) ||
      (direction === 'left'  && dx < -5) ||
      (direction === 'right' && dx >  5);

    if (!inDirection) continue;

    const primary   = direction === 'up' || direction === 'down' ? Math.abs(dy) : Math.abs(dx);
    const secondary = direction === 'up' || direction === 'down' ? Math.abs(dx) : Math.abs(dy);
    const score     = primary + secondary * 2.5;

    if (score < bestScore) {
      bestScore = score;
      best = el;
    }
  }

  if (best) {
    best.focus();
    best.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return best;
}
