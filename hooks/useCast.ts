
import { useEffect, useCallback, useRef } from 'react';
import { useCastStore, CastDevice } from '../store/castStore';
import { castManager } from '../utils/castManager';
import { Channel } from '../types';

declare const cast: any;
declare const chrome: any;
declare const PresentationRequest: any;

export function useCast() {
  const {
    state, setMethod, setState, setDevice,
    setCurrentChannel, currentChannel, method
  } = useCastStore();

  const presentationRef = useRef<any>(null);

  useEffect(() => {
    async function init() {
      const bestMethod = await castManager.detectBestMethod();
      setMethod(bestMethod);

      if (bestMethod === 'google-cast') {
        setupGoogleCastListeners();
      }
    }
    init();
  }, [setMethod]);

  const setupGoogleCastListeners = useCallback(() => {
    if (typeof cast === 'undefined' || !cast.framework) return;
    const ctx = cast.framework.CastContext.getInstance();

    ctx.addEventListener(
      cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
      (event: any) => {
        switch (event.sessionState) {
          case cast.framework.SessionState.SESSION_STARTED:
            setState('connected');
            break;
          case cast.framework.SessionState.SESSION_ENDED:
            setState('idle');
            setDevice(null);
            break;
          case cast.framework.SessionState.SESSION_START_FAILED:
            setState('error');
            break;
        }
      }
    );
  }, [setState, setDevice]);

  const castChannel = useCallback(async (channel: Channel) => {
    const currentMethod = castManager.getMethod();
    setState('connecting');

    try {
      if (currentMethod === 'google-cast') {
        await castChannelViaGoogleCast(channel);
      } else if (currentMethod === 'presentation-api') {
        await castChannelViaPresentationAPI(channel);
      } else if (currentMethod === 'screen-share') {
        await castViaScreenShare();
      }
      setCurrentChannel(channel);
    } catch (e) {
      console.error('Cast error:', e);
      setState('error');
    }
  }, [setCurrentChannel, setState]);

  const castScreen = useCallback(async () => {
    const currentMethod = castManager.getMethod();
    setState('connecting');

    try {
      if (currentMethod === 'google-cast') {
        await cast.framework.CastContext.getInstance().requestSession();
      } else if (currentMethod === 'presentation-api') {
        await castScreenViaPresentationAPI();
      } else if (currentMethod === 'screen-share') {
        await castViaScreenShare();
      }
    } catch (e) {
      console.error('Cast screen error:', e);
      setState('error');
    }
  }, [setState]);

  const stopCast = useCallback(async () => {
    const currentMethod = castManager.getMethod();

    if (currentMethod === 'google-cast') {
      const session = cast.framework.CastContext.getInstance().getCurrentSession();
      if (session) await session.endSession(true);
    } else if (presentationRef.current) {
      presentationRef.current.terminate();
      presentationRef.current = null;
    }

    setState('idle');
    setDevice(null);
    setCurrentChannel(null);
  }, [setState, setDevice, setCurrentChannel]);

  return {
    castState: state,
    method,
    currentChannel,
    castChannel,
    castScreen,
    stopCast,
  };
}

// Implementações privadas

async function castChannelViaGoogleCast(channel: Channel) {
  let castSession = cast.framework.CastContext.getInstance().getCurrentSession();

  if (!castSession) {
    await cast.framework.CastContext.getInstance().requestSession();
    castSession = cast.framework.CastContext.getInstance().getCurrentSession();
  }

  if (!castSession) return;

  const mediaInfo = new chrome.cast.media.MediaInfo(channel.url, 'application/x-mpegURL');

  mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata();
  mediaInfo.metadata.title = channel.name;
  mediaInfo.metadata.subtitle = channel.groups.join(' • ');
  mediaInfo.metadata.images = [new chrome.cast.Image(channel.logo)];

  mediaInfo.hlsSegmentFormat = chrome.cast.media.HlsSegmentFormat.TS;
  mediaInfo.streamType = chrome.cast.media.StreamType.LIVE;

  const request = new chrome.cast.media.LoadRequest(mediaInfo);
  request.autoplay = true;

  await castSession.loadMedia(request);
}

async function castChannelViaPresentationAPI(channel: Channel): Promise<void> {
  const receiverUrl = new URL('/cast-receiver.html', window.location.origin);
  receiverUrl.searchParams.set('channel', JSON.stringify({
    name: channel.name,
    url: channel.url,
    logo: channel.logo,
    category: channel.groups[0],
  }));

  const request = new PresentationRequest([receiverUrl.toString()]);

  try {
    const connection = await request.start();
    connection.addEventListener('close', () => useCastStore.getState().setState('idle'));
    useCastStore.getState().setState('connected');
  } catch (error: any) {
    if (error.name !== 'AbortError') throw error;
  }
}

async function castScreenViaPresentationAPI(): Promise<void> {
  const request = new PresentationRequest([window.location.href]);
  try {
    const connection = await request.start();
    connection.addEventListener('close', () => useCastStore.getState().setState('idle'));
    useCastStore.getState().setState('connected');
  } catch (error: any) {
    if (error.name !== 'AbortError') throw error;
  }
}

async function castViaScreenShare(): Promise<void> {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: { width: { ideal: 1920 }, height: { ideal: 1080 } },
      audio: true,
    });
    useCastStore.getState().setState('connected');
    stream.getTracks()[0].addEventListener('ended', () => {
      useCastStore.getState().setState('idle');
    });
  } catch (error) {
    throw error;
  }
}
