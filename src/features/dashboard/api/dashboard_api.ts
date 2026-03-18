import type { IPerfume } from "../../../shared/interfaces/interfaces";

export const fetchDashboardData = async (): Promise<IPerfume[]> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/perfumes`);
  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data");
  }
  return res.json();
};