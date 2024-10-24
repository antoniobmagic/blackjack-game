import { create } from 'zustand';

interface GameState {
  chips: number;
  bet: number;
  playerHand: string[];
  dealerHand: string[];
  gameStatus: 'betting' | 'playing' | 'finished';
  setBet: (amount: number) => void;
  setChips: (amount: number) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  chips: 1000,
  bet: 0,
  playerHand: [],
  dealerHand: [],
  gameStatus: 'betting',
  setBet: (amount) => set({ bet: amount }),
  setChips: (amount) => set({ chips: amount }),
  resetGame: () => set({
    bet: 0,
    playerHand: [],
    dealerHand: [],
    gameStatus: 'betting'
  })
}));