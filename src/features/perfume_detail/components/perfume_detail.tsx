import type { IPerfume } from "../../../shared/interfaces/interfaces";
import { PerfumeImages } from "./perfume_images";
import { PerfumeInfo } from "./perfume_info";

export const PerfumeDetail = ({ perfume }: { perfume: IPerfume }) => {
  return (
    <div className="grid grid-cols-2 gap-12">

      <PerfumeImages perfume={perfume} />

      <PerfumeInfo perfume={perfume} />

    </div>
  );
};