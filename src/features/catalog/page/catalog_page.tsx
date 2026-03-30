import { usePerfumes } from "../../../shared/hooks/usePerfumes";
import CatalogBanner from "../components/catalog_banner";
import FiltersSidebar from "../components/filters_side_bar";
import ProductGrid from "../components/product_grid";


export function CatalogPage() {
    const {
        perfumes,
        total,
        page,
        limit,
        loading,
        setPage,
        updateParams,
        filters,
        maxPrice,
        availableBrands,
    } = usePerfumes();

    return (
        <div className="bg-white min-h-screen">
            <CatalogBanner />
            <section className="container mx-auto px-6 py-10 flex gap-8">
                <FiltersSidebar
                    filters={filters}
                    updateParams={updateParams}
                    brands={availableBrands}
                    maxPrice={maxPrice}
                />
                <ProductGrid
                    perfumes={perfumes}
                    total={total}
                    page={page}
                    limit={limit}
                    setPage={setPage}
                    search={filters.search}
                    setSearch={(v) => updateParams({ search: v })}
                    loading={loading} />
            </section>
        </div>
    );
}