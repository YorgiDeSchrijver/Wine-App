import { Wine } from "@/types/wine";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  Dimensions,
  Pressable,
} from "react-native";

export default function WineCard(wine: Wine) {
  const { width } = Dimensions.get("window");
  return (
    <Link href={{
        pathname: "/(tabs)/wines/[id]",
        params: { wine: JSON.stringify(wine), id: wine.id},
    }} asChild>
      <Pressable
        key={wine.id}
        className="mb-4 flex-1 overflow-hidden rounded-3xl"
      >
        <LinearGradient
          colors={["#171D26", "#121419", "#0C0F14"]} // Start and end colors of the gradient
          className="h-full w-full flex-1 p-3"
          end={[1, 1]}
          locations={[0.0, 0.5, 1]}
          start={[0, 0]}
        >
          <View className="h-[150px] w-full rounded-2xl">
            <Image
              src={wine.image}
              defaultSource={{
                uri: "https://t3.ftcdn.net/jpg/01/36/94/94/360_F_136949476_f5Oym8XHFXTaFmBsXVwPaGvMBwT29rbf.jpg",
              }}
              className="h-full w-full rounded-2xl bg-[#171D26]"
              resizeMode={wine.image.includes(".jpg") ? "cover" : "contain"}
              resizeMethod="scale"
            />
            <View className="absolute right-0 overflow-hidden rounded-bl-2xl rounded-tr-2xl">
              <BlurView
                tint="systemThickMaterialDark"
                intensity={100}
                className="flex flex-row items-center justify-center p-1.5 py-0.5"
              >
                <Ionicons
                  color="#D27842"
                  name="star"
                  className="ml-1.5"
                  size={14}
                />
                <Text className="ml-1.5 color-white">
                  {wine.rating.average}
                </Text>
              </BlurView>
            </View>
          </View>
          <Text
            numberOfLines={2}
            className="mb-1.5 mt-2.5 text-[16px] font-semibold text-white"
          >
            {wine.wine}
          </Text>
          <Text numberOfLines={1} className="text-sm text-secondary">
            {wine.winery}
          </Text>
        </LinearGradient>
      </Pressable>
    </Link>
  );
}
