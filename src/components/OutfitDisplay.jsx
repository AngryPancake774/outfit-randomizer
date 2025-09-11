import { useState } from "react";

export default function OutfitDisplay({ items }) {
  const [locked, setLocked] = useState({});
  const [disabled, setDisabled] = useState({ hat: false });
  const [outfit, setOutfit] = useState({});

  const generateOutfit = () => {
    const newOutfit = {};
    ["top", "pants", "shoes", "hat"].forEach((cat) => {
      if (disabled[cat]) return;
      if (locked[cat]) {
        newOutfit[cat] = locked[cat];
      } else {
        const choices = items.filter((i) => i.category === cat);
        if (choices.length > 0) {
          newOutfit[cat] = choices[Math.floor(Math.random() * choices.length)];
        }
      }
    });
    setOutfit(newOutfit);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {["top", "pants", "shoes", "hat"].map(
          (cat) =>
            outfit[cat] && (
              <div key={cat} className="relative">
                <img
                  src={outfit[cat].url}
                  alt={cat}
                  className="rounded-xl border"
                />
                <button
                  className="absolute top-2 right-2 bg-white p-1 rounded"
                  onClick={() =>
                    setLocked((prev) =>
                      prev[cat] ? { ...prev, [cat]: null } : { ...prev, [cat]: outfit[cat] }
                    )
                  }
                >
                  {locked[cat] ? "🔒" : "🔓"}
                </button>
              </div>
            )
        )}
      </div>
      <button
        onClick={generateOutfit}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        🎲 Reroll Outfit
      </button>
      <button
        onClick={() => setDisabled((prev) => ({ ...prev, hat: !prev.hat }))}
        className="ml-2 px-4 py-2 bg-gray-500 text-white rounded"
      >
        {disabled.hat ? "Enable Hats" : "Disable Hats"}
      </button>
    </div>
  );
}
