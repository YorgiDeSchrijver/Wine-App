export interface Wine {
  type: number;
  winery: string;
  wine: string;
  rating: Rating;
  location: string;
  coordinates: Coordinates;
  image: string;
  id: number;
}

export interface Rating {
  average: string;
  reviews: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
