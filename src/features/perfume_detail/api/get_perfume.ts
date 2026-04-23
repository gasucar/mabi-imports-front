import type { IPerfume } from "../../../shared/interfaces/interfaces";

export const getPerfume = async (id: string): Promise<IPerfume> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/perfumes/${id}`);

  if (!res.ok) {
    throw new Error("Error fetching perfume");
  }

  return res.json();
};