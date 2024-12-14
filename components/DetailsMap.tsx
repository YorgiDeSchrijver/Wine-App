import { Wine } from "@/types/wine";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function DetailsMap({wine}: {wine: Wine | undefined}) {
  return (
    <View className="relative rounded-2xl py-4">
      <Text className="mt-3 text-2xl text-white-smoke">Location</Text>
      <View className="my-5 h-48 w-full overflow-hidden rounded-2xl">
        <MapView
          style={StyleSheet.absoluteFillObject}
          className="rounded-3xl"
          initialRegion={{
            latitude: wine?.coordinates.latitude ?? 0,
            longitude: wine?.coordinates.longitude ?? 0,
            latitudeDelta: 3,
            longitudeDelta: 3,
          }}
          userInterfaceStyle="dark"
        >
          <Marker
            coordinate={{
              latitude: wine?.coordinates.latitude ?? 0,
              longitude: wine?.coordinates.longitude ?? 0,
            }}
          />
        </MapView>
      </View>
    </View>
  );
}
