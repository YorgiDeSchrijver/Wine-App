import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Categories from "../../components/categories";
import { useState } from "react";
import SearchField from "@/components/SearchField";

export default function Index() {
  const [activeCategoryId, setActiveCategoryId] = useState<number>(1);
  return (
    <SafeAreaView className="bg-dark">
      <ScrollView className="p-4 px-5">
        <View className="my-8 w-[70%]">
          <Text className="font-varela text-4xl font-bold text-white">
            Discover great wines
          </Text>
        </View>
        <SearchField />
        <Categories onchange={(id) => setActiveCategoryId(id)} />
      </ScrollView>
    </SafeAreaView>
  );
}
