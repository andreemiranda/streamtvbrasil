
import { create } from 'zustand';
import { Channel } from '../types';

export type CastMethod = 'google-cast' | 'presentation-api' | 'screen-share' | 'none';
export type CastState = 'idle' | 'connecting' | 'connected' | 'error';

export interface CastDevice {
  id: string;
  name: string;
  type: 'chromecast' | 'presentation' | 'screen';
  friendlyName: string;
}

interface CastStore {
  state: CastState;
  method: CastMethod;
  device: CastDevice | null;
  currentChannel: Channel | null;

  setState: (s: CastState) => void;
  setMethod: (m: CastMethod) => void;
  setDevice: (d: CastDevice | null) => void;
  setCurrentChannel: (c: Channel | null) => void;
}

export const useCastStore = create<CastStore>((set) => ({
  state: 'idle',
  method: 'none',
  device: null,
  currentChannel: null,

  setState: (state) => set({ state }),
  setMethod: (method) => set({ method }),
  setDevice: (device) => set({ device }),
  setCurrentChannel: (currentChannel) => set({ currentChannel }),
}));
