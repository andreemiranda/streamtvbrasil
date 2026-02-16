
import { create } from 'zustand';
import { Channel } from '../types';

interface TVState {
  isTV: boolean;
  dialBuffer: string;
  isDialVisible: boolean;
  activeOSDChannel: Channel | null;
  isOSDVisible: boolean;
  
  setTVMode: (isTV: boolean) => void;
  setDialBuffer: (val: string) => void;
  clearDial: () => void;
  showOSD: (channel: Channel) => void;
  hideOSD: () => void;
}

export const useTVStore = create<TVState>((set) => ({
  isTV: false,
  dialBuffer: '',
  isDialVisible: false,
  activeOSDChannel: null,
  isOSDVisible: false,

  setTVMode: (isTV) => set({ isTV }),
  
  setDialBuffer: (val) => set({ 
    dialBuffer: val, 
    isDialVisible: true 
  }),
  
  clearDial: () => set({ 
    dialBuffer: '', 
    isDialVisible: false 
  }),

  showOSD: (channel) => {
    set({ activeOSDChannel: channel, isOSDVisible: true });
  },

  hideOSD: () => set({ isOSDVisible: false }),
}));
