import { Component, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import categories from "../app/config/categories";

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
      className="mx-3"
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          className="mr-3 items-center"
        >
          <Text
            className={`text-xl text-secondary-950 ${activeCategoryId === item.id && "text-primary-950"}`}
          >
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View className="mt-1 h-3 w-3 rounded-md bg-primary-950" />
          )}
        </TouchableOpacity>
      )}
    />
  );
}
