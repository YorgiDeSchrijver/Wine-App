import { Wine } from "@/types/wine";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, View, Image, Text, Dimensions } from "react-native";

export default function WineCard(wine: Wine) {
  const { width } = Dimensions.get("window");
  return (
    <View key={wine.id} className="mb-4 flex-1 overflow-hidden rounded-3xl">
      <LinearGradient
        colors={["#171D26", "#121419", "#0C0F14"]} // Start and end colors of the gradient
        className="h-full w-full flex-1 p-3"
        end={[1, 1]}
        locations={[0.0, 0.5, 1]}
        start={[0, 0]}
      >
        <TouchableOpacity className="h-[250px] w-full">
          <Image
            src={wine.image}
            className="h-full w-full rounded-2xl object-center object-contain"
            resizeMethod="scale"
          />
          <View className="absolute right-0 overflow-hidden rounded-bl-2xl rounded-tr-2xl">
            <BlurView
              tint="dark"
              intensity={85}
              className="flex flex-row items-center justify-center p-1.5 py-0.5"
            >
              <Ionicons
                color="#D27842"
                name="star"
                className="ml-1.5"
                size={14}
              />
              <Text className="ml-1.5 color-white">{wine.rating.average}</Text>
            </BlurView>
          </View>
        </TouchableOpacity>
        <Text
          numberOfLines={2}
          className="mb-1.5 mt-2.5 text-[17px] font-semibold text-white"
        >
          {wine.wine}
        </Text>
        <Text numberOfLines={1} className="text-xs text-secondary">
          {wine.winery}
        </Text>
      </LinearGradient>
    </View>
  );
}
