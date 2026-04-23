import { useParams } from "react-router-dom";
import { usePerfume } from "../hooks/use_perfume";
import { PerfumeDetail } from "../components/perfume_detail";

export const PerfumeDetailPage = () => {
  const { id } = useParams();

  const { perfume, loading } = usePerfume(id!);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (!perfume) return <div className="flex justify-center items-center h-screen">Perfume not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 mb-6">
        Home / Catalog / {perfume.name}
      </p>

      <PerfumeDetail perfume={perfume} />
      <div className="h-72"></div>
    </div>
  );
};