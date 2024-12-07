import { Wine } from "@/types/wine";
import { useEffect, useState } from "react";

const wineEndpoints = [
  { url: "https://sampleapis.assimilate.be/wines/reds", type: 1 },
  { url: "https://sampleapis.assimilate.be/wines/whites", type: 2 },
  { url: "https://sampleapis.assimilate.be/wines/port", type: 3 },
  {
    url: "https://sampleapis.assimilate.be/wines/sparkling",
    type: 4,
  },
  { url: "https://sampleapis.assimilate.be/wines/rose", type: 5 },
  { url: "https://sampleapis.assimilate.be/wines/dessert", type: 6 },
  { url: "https://sampleapis.assimilate.be/wines/port", type: 7 },
];

export default function useWines() {
    const [data, setData] = useState<Wine[]>([]);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      const fetchWines = async () => {
        setIsPending(true);
        setIsError(false);
        let globalIndex = 0;
        try {
          const responses = await Promise.all(
            wineEndpoints.map((endpoint) =>
              fetch(endpoint.url)
                .then((res) => res.json())
                .then((data) =>
                  data.map((wine: Omit<Wine, "type" | "id" >) => ({
                    ...wine,
                    type: endpoint.type,
                    id: globalIndex++,
                  })),
                ),
            ),
          );

          const combinedWines = responses.flat(); // Combine all arrays
          setData(combinedWines);
        } catch (error) {
          console.error("Error fetching wine data:", error);
          setIsError(true);
        } finally {
          setIsPending(false);
        }
      };

      fetchWines();
    }, []);

    return { data, isPending, isError };
}
