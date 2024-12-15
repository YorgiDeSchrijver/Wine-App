import { getAllFavorites } from "@/api/favourites";
import SearchField from "@/components/SearchField";
import WineCard from "@/components/WineCard";
import { Wine } from "@/types/wine";
import { FlashList } from "@shopify/flash-list";
import { useCallback, useEffect, useState } from "react";
import { RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Favourites() {
  const [favourites, setFavourites] = useState<Wine[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchFavourites = async () => {
    try {
      const data = await getAllFavorites();
      setFavourites(data);
    } catch (error) {
      console.error("Failed to fetch favourites:", error);
    }
  };
  useEffect(() => {
    fetchFavourites();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchFavourites();
    setRefreshing(false);
  };

  const renderItem = useCallback(
    ({ item, index }: { item: Wine; index: number }) => (
      <View
        style={{
          flexGrow: 1,
          paddingLeft: index % 2 === 0 ? 0 : 8,
          paddingRight: index % 2 === 0 ? 8 : 0,
        }}
      >
        <WineCard {...item} />
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView className="bg-dark p-4 px-5">
      <View className="my-8 w-[70%]">
        <Text className="font-varela text-4xl font-bold text-white">
          Your favourites
        </Text>
      </View>
      <View className="h-full w-full">
        <FlashList
          data={favourites}
          renderItem={renderItem}
          keyExtractor={(_, index) => `item-${index}`}
          estimatedItemSize={87}
          numColumns={2}
          horizontal={false}
          className="h-full w-full flex-1"
          contentContainerStyle={{ paddingBottom: 200 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressBackgroundColor="#0C0F14"
              colors={["#D27842"]}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
}
