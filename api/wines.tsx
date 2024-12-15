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

export async function fetchWines(): Promise<Wine[]> {
  let globalIndex = 0;
  try {
    const responses = await Promise.all(
      wineEndpoints.map(async (endpoint) => {
        const res = await fetch(endpoint.url);

        // Check if the response is valid JSON
        const contentType = res.headers.get("Content-Type");
        if (!res.ok || !contentType?.includes("application/json")) {
          throw new Error(
            `Invalid response from ${endpoint.url}: ${await res.text()}`,
          );
        }

        const data = await res.json();
        return data.map((wine: Omit<Wine, "type" | "id">) => ({
          ...wine,
          type: endpoint.type,
          id: globalIndex++,
        }));
      }),
    );

    return responses.flat();
  } catch (error) {
    console.error("Error fetching wine data:", error);
    throw error;
  }
}

interface AddWineProps {
  winery: string;
  wine: string;
  category: number;
  longitude: number;
  latitude: number;
}

export async function addWine({
  winery,
  wine,
  category,
  longitude,
  latitude,
}: AddWineProps) {
  const endpoint = wineEndpoints.find((ep) => ep.type === category);
  if (!endpoint) {
    throw new Error("Invalid category");
  }
  const payload = {
    winery,
    wine,
    rating: {
      average: "",
      revviews: "",
    },
    location: "",
    coordinates: {
      latitude: latitude,
      longitude: longitude,
    },
    image: "",
  };
  const headers = {
    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlvcmdpLmRlc2NocmlqdmVyQHN0dWRlbnQuYXAuYmUiLCJpYXQiOjE3MzQyOTYwNjN9.ys6wZKKqvu8PWekU0A-YTq0DvBFH2cwTiVtPaGgQKC4",
  };

  const response = await fetch(endpoint.url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    console.log(payload);
    console.log(response);
    throw new Error("Failed to add wine");
  }
  return await response.json();
}
