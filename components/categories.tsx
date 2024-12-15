import { Component, useRef, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import categories from "../config/categories";
import { FlashList } from "@shopify/flash-list";

interface CategoriesProps {
  onchange: (id: number) => void;
}

export default function Categories({ onchange }: CategoriesProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<number>(0);
  const listRef = useRef<FlatList>(null);

  const handlePress = (id: number, index: number) => {
    setActiveCategoryId(id);
    onchange(id);

    if (listRef.current) {
      listRef.current.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0,
      });
    }
  };

  return (
    <FlatList
      ref={listRef}
      horizontal={true}
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      className="my-3 mb-5"
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id, index)}
          className="mr-10 items-center"
        >
          <Text
            className={`font-varela text-xl font-extrabold tracking-wide ${activeCategoryId === item.id ? "text-primary" : "text-secondary"}`}
          >
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View className="mt-2 h-2 w-2 rounded-md bg-primary" />
          )}
        </TouchableOpacity>
      )}
    />
  );
}
