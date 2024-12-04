import { Component, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import categories from "../config/categories";

interface CategoriesProps {
  onchange: (id: number) => void;
}

export default function Categories({ onchange }: CategoriesProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<number>(1);

  const handlePress = (id: number) => {
    setActiveCategoryId(id);
    onchange(id);
  };

  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      className="my-3"
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          className="mr-5 items-center"
        >
          <Text
            className={`text-[20px]  ${activeCategoryId === item.id ? "text-primary": "text-secondary"}`}
          >
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View className="mt-1 h-3 w-3 rounded-md bg-primary" />
          )}
        </TouchableOpacity>
      )}
    />
  );
}
