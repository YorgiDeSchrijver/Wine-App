import { Wine } from "@/types/wine";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useLocalSearchParams, useRouter } from "expo-router/build/hooks";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";

export default function Details() {
  const { wine, id } = useLocalSearchParams();
  const { height, width } = Dimensions.get("window");
  const router = useRouter();

  const wineDetails: Wine | null = wine
    ? (JSON.parse(wine as string) as Wine)
    : null;

  const location = wineDetails ? wineDetails.location.split("\n·\n") : [];

  return (
    <ScrollView className="bg-dark p-4">
      <SafeAreaView>
        <ImageBackground
          source={{
            uri: wineDetails?.image,
          }}
          style={{
            height: height / 2 + 20,
          }}
          imageClassName="rounded-3xl"
          resizeMode={wineDetails?.image.includes(".jpg") ? "cover" : "contain"}
          className={`flex-1 justify-between ${wineDetails?.image.includes(".png") && "bg-white-smoke"} rounded-3xl`}
        >
          <View className="flex flex-row justify-between p-5">
            <TouchableOpacity className="rounded-2xl bg-dark p-2.5" onPress={() => router.back()}>
              <Ionicons name="chevron-back" color={"#4D4F52"} size={20} />
            </TouchableOpacity>
            <TouchableOpacity className="rounded-2xl bg-dark p-2.5">
              <Ionicons name="heart" color={"#4D4F52"} size={20} />
            </TouchableOpacity>
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
                  {wineDetails?.wine}
                </Text>
                <Text className="mb-2.5 text-lg font-medium text-white-smoke">
                  {wineDetails?.winery}
                </Text>
                <View className="mt-2 flex flex-row items-center">
                  <Ionicons name="star" size={15} color="#D27842" />
                  <Text className="ml-1.5 color-white">
                    {wineDetails?.rating.average}
                  </Text>
                  <Text className="ml-1.5 color-secondary">
                    ({wineDetails?.rating.reviews.replace("ratings", "").trim()}
                    )
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
        <View className="relative rounded-2xl py-4">
          <Text className="mt-3 text-2xl text-white-smoke">Location</Text>
          <View className="my-5 h-48 w-full overflow-hidden rounded-2xl">
            <MapView
              style={StyleSheet.absoluteFillObject}
              className="rounded-3xl"
              initialRegion={{
                latitude: wineDetails?.coordinates.latitude ?? 0,
                longitude: wineDetails?.coordinates.longitude ?? 0,
                latitudeDelta: 3,
                longitudeDelta: 3,
              }}
              userInterfaceStyle="dark"
            >
              <Marker
                coordinate={{
                  latitude: wineDetails?.coordinates.latitude ?? 0,
                  longitude: wineDetails?.coordinates.longitude ?? 0,
                }}
              />
            </MapView>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
