import { useEffect, useState } from "react";
import { getPerfume } from "../api/get_perfume";
import type { IPerfume } from "../../../shared/interfaces/interfaces";

export const usePerfume = (id: string) => {
  const [perfume, setPerfume] = useState<IPerfume | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerfume(id)
      .then(setPerfume)
      .finally(() => setLoading(false));
  }, [id]);

  return { perfume, loading };
};