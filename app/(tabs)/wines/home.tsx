import { ActivityIndicator, RefreshControl, SafeAreaView, Text, View } from "react-native";
import Categories from "../../../components/categories";
import React, { useCallback, useEffect, useState } from "react";
import SearchField from "@/components/SearchField";
import WineCard from "@/components/WineCard";
import { Wine } from "@/types/wine";
import { FlashList } from "@shopify/flash-list";
import useWines from "@/hooks/useWines";

export default function Index() {
  const [activeCategoryId, setActiveCategoryId] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data: wines, isLoading, isError, refetch } = useWines();
  const [loadingCategory, setLoadingCategory] = useState(false);

  const filteredWines = wines?.filter(
    (wine: Wine) => (activeCategoryId === 0 || wine.type === activeCategoryId) && wine.wine.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const handleCategoryChange = async (id: number) => {
    setActiveCategoryId(id);
    setLoadingCategory(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
    } catch (error) {
      console.error("Failed to filter wines:", error);
    } finally {
      setLoadingCategory(false);
    }
  };

  const onRefresh = async () => {
    try {
      await refetch();
    } catch (error) {
      console.error("Failed to refresh wines:", error);
    }
  };

  return (
    <SafeAreaView className="bg-dark p-4 px-5">
      <View className="my-8 w-[70%]">
        <Text className="font-varela text-4xl font-bold text-white">
          Discover great wines
        </Text>
      </View>
      <SearchField
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        placeholder="Search for wines..."
      />
      <View>
        <Categories onchange={(id) => handleCategoryChange(id)} />
      </View>
      <View className="h-full w-full">
        {loadingCategory || isLoading ? (
          <View className="flex items-center justify-center">
            <ActivityIndicator size="large" color="#D27842" />
          </View>
        ) : (
          <FlashList
            data={filteredWines}
            renderItem={renderItem}
            keyExtractor={(_, index) => `item-${index}`}
            estimatedItemSize={87}
            numColumns={2}
            horizontal={false}
            className="h-full w-full flex-1"
            contentContainerStyle={{ paddingBottom: 550 }}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={onRefresh}
                progressBackgroundColor="#0C0F14"
                colors={["#D27842"]}
              />
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
}
