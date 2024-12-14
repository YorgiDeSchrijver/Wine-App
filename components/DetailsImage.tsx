import {
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import BackButton from "./BackButton";
import HeartButton from "./HeartButton";
import { Wine } from "@/types/wine";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

export default function DetailsImage({ wine }: { wine: Wine | undefined }) {
  const { height } = Dimensions.get("window");
  const location = wine?.location.split("\n·\n") || [];
  return (
    <ImageBackground
      source={{
        uri: wine?.image,
      }}
      style={{
        height: height / 2 + 20,
      }}
      imageClassName="rounded-3xl"
      resizeMode={wine?.image.includes(".jpg") ? "cover" : "contain"}
      className={`flex-1 justify-between ${wine?.image.includes(".png") && "bg-white-smoke"} rounded-3xl`}
    >
      <View className="flex flex-row justify-between p-5">
        <BackButton />
        <HeartButton wine={wine} />
      </View>
      <View className="overflow-hidden rounded-3xl">
        <BlurView
          intensity={100}
          tint="dark"
          blurReductionFactor={25}
          className="flex flex-row justify-between p-5"
        >
          <View className="max-w-[65%]">
            <Text
              numberOfLines={2}
              className="flex-wrap text-2xl font-semibold text-white"
            >
              {wine?.wine}
            </Text>
            <Text className="mb-2.5 text-lg font-medium text-white-smoke">
              {wine?.winery}
            </Text>
            <View className="mt-2 flex flex-row items-center">
              <Ionicons name="star" size={15} color="#D27842" />
              <Text className="ml-1.5 color-white">{wine?.rating.average}</Text>
              <Text className="ml-1.5 color-secondary">
                ({wine?.rating.reviews.replace("ratings", "").trim()})
              </Text>
            </View>
          </View>
          <View className="space-between flex max-w-[35%] flex-col gap-2">
            <View className="h-14 w-auto items-center justify-center rounded-2xl bg-dark p-1.5">
              <Ionicons size={20} name="globe-outline" color="#D27842" />
              <Text className="text-ellipsis whitespace-nowrap text-sm color-white-smoke">
                {location[0]}
              </Text>
            </View>
            <View className="h-14 w-auto items-center justify-center rounded-2xl bg-dark p-1.5">
              <Ionicons size={20} name="location" color="#D27842" />
              <Text
                numberOfLines={1}
                className="text-ellipsis whitespace-nowrap text-sm color-white-smoke"
              >
                {location[1]}
              </Text>
            </View>
          </View>
        </BlurView>
      </View>
    </ImageBackground>
  );
}
