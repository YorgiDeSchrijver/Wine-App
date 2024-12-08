import { SafeAreaView, Text, View } from "react-native";
import Categories from "../../../components/categories";
import React, { useCallback, useEffect, useState } from "react";
import SearchField from "@/components/SearchField";
import useWines from "@/api";
import WineCard from "@/components/WineCard";
import { Wine } from "@/types/wine";
import { FlashList } from "@shopify/flash-list";

export default function Index() {
  const [activeCategoryId, setActiveCategoryId] = useState<number>(0);
  const { data: wines, isPending, isError } = useWines();
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
          Discover great wines
        </Text>
      </View>
      <SearchField />
      <View>
        <Categories onchange={(id) => setActiveCategoryId(id)} />
      </View>
      <View className="h-full w-full">
        <FlashList
          data={wines}
          renderItem={renderItem}
          keyExtractor={(_, index) => `item-${index}`}
          estimatedItemSize={87}
          numColumns={2}
          horizontal={false}
          className="h-full w-full flex-1"
        />
      </View>
    </SafeAreaView>
  );
}
