
import { ActionButtons } from "./action_buttons";
import type { IPerfume } from "../../../shared/interfaces/interfaces";
import { NotesSection } from "./notes_section";
import { formatPrice } from "../../../shared/utils/format_price";

export const PerfumeInfo = ({ perfume }: { perfume: IPerfume }) => {
  return (
    <div className="flex flex-col gap-6 max-w-md">

      {/* BRAND */}
      <span className="text-sm text-gray-500 uppercase tracking-wide">
        {perfume.brand.name}
      </span>

      {/* NAME */}
      <h1 className="text-4xl font-serif">
        {perfume.name}
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600">
        {perfume.short_description}
      </p>

      {/* PRICE */}
      <span className="text-2xl font-semibold">
        ${formatPrice(perfume.price)}
      </span>

      {/* NOTES */}
      <NotesSection perfume={perfume} />

      {/* EXTRA INFO */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-500">Duration</span>
          <p>{perfume.duration_hours}</p>
        </div>

        <div>
          <span className="text-gray-500">Intensity</span>
          <p>{perfume.intensity}</p>
        </div>

        <div>
          <span className="text-gray-500">Season</span>
          <p>{perfume.season}</p>
        </div>

        <div>
          <span className="text-gray-500">Gender</span>
          <p>{perfume.gender_target}</p>
        </div>
      </div>

      {/* BUTTONS */}
      <ActionButtons />
    </div>
  );
};