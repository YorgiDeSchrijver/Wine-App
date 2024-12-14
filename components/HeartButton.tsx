import { changeFavoritesStatus, isFavorite } from "@/api/favourites";
import { Wine } from "@/types/wine";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

export default function HeartButton({ wine }: { wine: Wine | undefined }) {
  const [isFavoriteState, setIsFavoriteState] = useState<boolean>(false);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      if (wine) {
        try {
          const favoriteStatus = await isFavorite(wine.id);
          setIsFavoriteState(favoriteStatus);
        } catch (error) {
          console.error("Error fetching favorite status:", error);
        }
      }
    };

    fetchFavoriteStatus();
  }, [wine]);

  const toggleFavoriteStatus = async () => {
    if (!wine) return;

    try {
      setIsFavoriteState((prevState) => !prevState);
      await changeFavoritesStatus(wine);
    } catch (error) {
      console.error("Error changing favorite status:", error);
      setIsFavoriteState((prevState) => !prevState);
    }
  };

  return (
    <TouchableOpacity
      className="rounded-2xl bg-dark p-2.5"
      onPress={toggleFavoriteStatus}
    >
      <Ionicons
        name="heart"
        color={isFavoriteState ? "#D27842" : "#4D4F52"}
        size={20}
      />
    </TouchableOpacity>
  );
}
