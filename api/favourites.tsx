import { Wine } from "@/types/wine";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "favorites";

export async function isFavorite(id: number): Promise<boolean> {
  try {
    const favoritesJson = await AsyncStorage.getItem(FAVORITES_KEY);
    const favorites: Wine[] = favoritesJson ? JSON.parse(favoritesJson) : [];
    return favorites.some((fav) => fav.id === id);
  } catch (error) {
    console.error("Failed to check favorite status:", error);
    return false;
  }
}

export async function getAllFavorites(): Promise<Wine[]> {
  try {
    const favoritesJson = await AsyncStorage.getItem(FAVORITES_KEY);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  } catch (error) {
    console.error("Failed to fetch all favorites:", error);
    return [];
  }
}

export async function changeFavoritesStatus(wine: Wine): Promise<void> {
  try {
    const favoritesJson = await AsyncStorage.getItem(FAVORITES_KEY);
    let favorites: Wine[] = favoritesJson ? JSON.parse(favoritesJson) : [];

    // Check if the wine is already in the favorites
    const isFavorite = favorites.some((fav) => fav.id === wine.id);

    if (isFavorite) {
      // Remove from favorites
      favorites = favorites.filter((fav) => fav.id !== wine.id);
    } else {
      // Add to favorites
      favorites.push(wine);
    }

    // Save the updated favorites list
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Failed to update favorite status:", error);
    throw error;
  }
}
