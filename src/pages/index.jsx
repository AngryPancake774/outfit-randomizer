import { useState } from "react";
import UploadForm from "../components/UploadForm";
import OutfitDisplay from "../components/OutfitDisplay";

export default function Home() {
  const [items, setItems] = useState([]);

  const handleUpload = (item) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">👗 Outfit Randomizer</h1>
      <UploadForm onUpload={handleUpload} />
      <OutfitDisplay items={items} />
    </div>
  );
}
