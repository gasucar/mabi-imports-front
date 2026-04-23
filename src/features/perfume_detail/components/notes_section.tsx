import type { IPerfume } from "../../../shared/interfaces/interfaces";

const Tag = ({ text }: { text: string }) => (
  <span className="bg-gray-200 text-black px-3 py-1 rounded-md text-xs capitalize">
    {text}
  </span>
);

export const NotesSection = ({ perfume }: { perfume: IPerfume }) => {
  // ⚠️ Como tu backend actual no trae notes separados
  // usamos fallback visual

  return (
    <div className="flex flex-col gap-3">

      <h3 className="text-sm uppercase text-gray-500 tracking-wide">
        Fragrance Notes
      </h3>

      <div>
        <p className="text-xs text-gray-400 mb-1">Top Notes</p>
        <div className="flex gap-2 flex-wrap">
          {
            perfume.top.map(note => (
              <Tag key={note} text={note} />
            ))
          }
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-1">Heart Notes</p>
        <div className="flex gap-2 flex-wrap">
          {
            perfume.heart.map(note => (
              <Tag key={note} text={note} />
            ))
          }
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-1">Base Notes</p>
        <div className="flex gap-2 flex-wrap">
          {
            perfume.base.map(note => (
              <Tag key={note} text={note} />
            ))
          }
        </div>
      </div>

    </div>
  );
};