import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { IPerfume } from "../interfaces/interfaces";

type Response = {
  data: IPerfume[];
  total: number;
  page: number;
  limit: number;
  max_price: number;
  brands: string[];
};

export const usePerfumes = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") || 1);
  const search = searchParams.get("search") || "";
  const brands = searchParams.get("brands") || "";
  const gender = searchParams.get("gender") || "";
  const season = searchParams.get("season") || "";
  const intensity = searchParams.get("intensity") || "";
  const price_min = searchParams.get("price_min") || "0";
  const price_max = searchParams.get("price_max") || "300000";

  const [perfumes, setPerfumes] = useState<IPerfume[]>([]);
  const [total, setTotal] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300000);
  const [availableBrands, setAvailableBrands] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const limit = 9;

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        setLoading(true);

        const query = new URLSearchParams({
          page: String(page),
          limit: String(limit),
          search,
          brands,
          gender,
          season,
          intensity,
          price_min,
          price_max,
        });

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/perfumes?${query}`
        );

        const data: Response = await res.json();

        setPerfumes(data.data);
        setTotal(data.total);
        setMaxPrice(data.max_price);
        setAvailableBrands(data.brands);

      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfumes();
  }, [brands, gender, intensity, page, price_max, price_min, search, searchParams, season]);

  const updateParams = (newParams: Record<string, string>) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);

      Object.entries(newParams).forEach(([key, value]) => {
        if (!value) params.delete(key);
        else params.set(key, value);
      });

      params.set("page", "1");

      return params;
    });
  };

  return {
    perfumes,
    total,
    page,
    limit,
    loading,
    maxPrice,
    availableBrands,
    filters: {
      search,
      brands,
      gender,
      season,
      intensity,
      price_min,
      price_max,
    },
    setPage: (p: number) =>
      setSearchParams({ ...Object.fromEntries(searchParams), page: String(p) }),

    updateParams,
  };
};