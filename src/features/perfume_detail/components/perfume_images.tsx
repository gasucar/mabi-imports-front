import { useState } from "react";
import type { IPerfume } from "../../../shared/interfaces/interfaces";

export const PerfumeImages = ({ perfume }: { perfume: IPerfume }) => {
  const [selected, setSelected] = useState(perfume.first_image);

  return (
    <div className="flex flex-col gap-4">
      {/* MAIN IMAGE */}
      <img
        src={selected}
        className="w-full max-w-125 object-cover rounded-lg"
      />

      {/* THUMBNAILS (más chicas 👇) */}
      <div className="flex gap-3">
        {[perfume.first_image, ...perfume.images].map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setSelected(img)}
            className="w-20 h-20 object-cover rounded-md cursor-pointer hover:opacity-70 transition"
          />
        ))}
      </div>
    </div>
  );
};