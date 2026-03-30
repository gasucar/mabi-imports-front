import { useEffect, useState } from "react";
import { GENDERS, INTENSITY, SEASONS } from "../../../shared/constants/perfumeFilters";
import type { IPerfumeFilters } from "../../../shared/interfaces/interfaces";

type Props = {
  filters: IPerfumeFilters;
  updateParams: (params: Record<string, string>) => void;
  brands: string[];
  maxPrice: number;
};

const FiltersSidebar = ({ filters, updateParams, brands = [], maxPrice }: Props) => {

  const [localPrice, setLocalPrice] = useState(Number(filters.price_max) || maxPrice);

  useEffect(() => {
    const newValue = Number(filters.price_max) || maxPrice;

    if (newValue !== localPrice) {
      setLocalPrice(newValue);
    }
  }, [filters.price_max, localPrice, maxPrice]);

  const toggleMulti = (key: keyof IPerfumeFilters, value: string) => {

    const normalized = value.toLowerCase()

    const normalizeToArray = (value: string | string[] | undefined): string[] => {
      if (!value) return [];
      if (Array.isArray(value)) return value;
      return value.split(",").filter(Boolean);
    };

    const current = normalizeToArray(filters[key]);

    const exists = current.includes(normalized);

    const updated = exists
      ? current.filter((v) => v !== normalized)
      : [...current, normalized];

    updateParams({
      [key]: updated.join(","),
    });
  };

  return (
    <aside className="sticky w-72 top-18 bg-gray-50 p-6 rounded-lg h-[calc(100vh-120px)] overflow-y-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
        <h3 className="font-serif text-lg">Filters</h3>
        <button className="text-xs uppercase text-gray-500 hover:text-black"
          onClick={
            () =>
              updateParams({
                brands: "",
                gender: "",
                season: "",
                intensity: "",
                price_min: "0",
                price_max: String(maxPrice),
              })
          }>
          Clear All
        </button>
      </div>

      {/* BRAND */}
      <FilterGroup title="Brand" items={brands} onChange={(v) => toggleMulti("brands", v)} />

      {/* GENDER */}
      <FilterGroup title="Gender" items={GENDERS} onChange={(v) => toggleMulti("gender", v)} />

      {/* SEASON */}
      <FilterGroup title="Season" items={SEASONS} onChange={(v) => toggleMulti("season", v)} />

      {/* INTENSITY */}
      <FilterGroup title="Intensity" items={INTENSITY} onChange={(v) => toggleMulti("intensity", v)} />

      {/* PRICE RANGE */}
      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-wider mb-4">Price Range</h4>

        <input
          type="range"
          min="0"
          max={maxPrice}
          value={localPrice}
          onMouseUp={() =>
            updateParams({ price_max: String(localPrice) })
          }
          onTouchEnd={() =>
            updateParams({ price_max: String(localPrice) })
          }
          className="w-full accent-black"
        />

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>$0</span>
          <span>${filters.price_max}</span>
        </div>
      </div>

    </aside>
  );
};

const FilterGroup = ({ title, items, onChange }: { title: string; items: string[], onChange: (v: string) => void }) => (
  <div className="mb-8">
    <h4 className="text-xs uppercase tracking-wider mb-4">{title}</h4>

    <div className="space-y-3">
      {items?.map((item) => (
        <label key={item} className="flex items-center gap-3 text-sm text-gray-700">
          <input type="checkbox" className="w-4 h-4" onChange={() => onChange(item)} />
          {item}
        </label>
      ))}
    </div>
  </div>
);

export default FiltersSidebar;