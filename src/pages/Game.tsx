import React, { useState } from 'react';
import { useGameStore } from '../store/gameStore';

export function Game() {
  const { chips, bet, gameStatus, setBet, setChips } = useGameStore();
  const [betAmount, setBetAmount] = useState(10);

  const placeBet = () => {
    if (betAmount <= chips) {
      setBet(betAmount);
      setChips(chips - betAmount);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Blackjack Table</h2>
            <p className="text-gray-400">Chips: {chips}</p>
          </div>
          {gameStatus === 'betting' && (
            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(Number(e.target.value))}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg w-24"
                min="10"
                max={chips}
              />
              <button
                onClick={placeBet}
                className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2 rounded-lg transition"
              >
                Place Bet
              </button>
            </div>
          )}
        </div>

        <div className="h-96 flex items-center justify-center border-2 border-gray-700 rounded-xl">
          {gameStatus === 'betting' ? (
            <p className="text-gray-400 text-xl">Place your bet to start the game</p>
          ) : (
            <div className="w-full h-full relative">
              {/* Game table will be implemented here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}