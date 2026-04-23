import type { IPerfume } from "../../../shared/interfaces/interfaces";
import PerfumePresentation from "../../../shared/constants/perfume/perfume_presentation";
import Pagination from "../../../shared/constants/pagination/pagination";
import { useTranslation } from "react-i18next";

type Props = {
    perfumes: IPerfume[];
    total: number;
    page: number;
    limit: number;
    loading: boolean,
    search: string;
    setPage: (page: number) => void;
    setSearch: (v: string) => void;
};

const ProductGrid = ({ perfumes, search, page, limit, total, setSearch, setPage, loading }: Props) => {
    const { t } = useTranslation()
    const start = (page - 1) * limit + 1;
    const end = Math.min(page * limit, total);
    return (
        <div className="flex-1">
            <div className="flex justify-between items-center mb-8 border-b pb-4 border-gray-200">

                <p className="text-sm text-gray-600">
                    {t("catalog.showing",{
                        start: start,
                        end: end,
                        total: total,
                    })}
                </p>

                <div className="flex items-center gap-4">

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search fragrances..."
                        className="border px-4 py-2 w-64 text-sm outline-none focus:border-black"
                    />

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Sort by:</span>
                        <select className="border px-3 py-2 text-sm">
                            <option>{t("catalog.lowCost")}</option>
                            <option>{t("catalog.highCost")}</option>
                        </select>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {loading ? (
                    <div>loading...</div>
                ) :
                    (perfumes.map((p) => (
                        <PerfumePresentation
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            description={p.short_description}
                            brand_name={p.brand.name}
                            price={p.price}
                            image={p.first_image}
                        />
                    ))
                    )}
            </div>

            {/* PAGINATION */}
            <Pagination
                page={page}
                total={total}
                limit={limit}
                onChange={setPage}
            />
        </div>
    );
};

export default ProductGrid;