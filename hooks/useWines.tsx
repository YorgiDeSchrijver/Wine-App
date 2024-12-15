import { fetchWines } from "@/api/wines";
import { useQuery } from "@tanstack/react-query";

export default function useWines() {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["wines"],
    queryFn: fetchWines,
    enabled: true,
    initialData: [],
  });

  return { data, isError, isLoading, refetch };
}
