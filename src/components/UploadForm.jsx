import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function UploadForm({ onUpload }) {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("top");

  const handleUpload = async () => {
    if (!file) return;

    const filePath = `${category}/${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("clothes")
      .upload(filePath, file);

    if (error) {
      console.error(error);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("clothes")
      .getPublicUrl(filePath);

    const item = { category, url: urlData.publicUrl };

    onUpload(item); // Pass new item back to parent
    setFile(null);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-xl">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="top">Top</option>
        <option value="pants">Pants</option>
        <option value="shoes">Shoes</option>
        <option value="hat">Hat</option>
      </select>
      <button
        onClick={handleUpload}
        className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Upload
      </button>
    </div>
  );
}
