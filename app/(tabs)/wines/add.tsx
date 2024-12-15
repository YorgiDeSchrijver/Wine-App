import BackButton from "@/components/BackButton";
import FormInput from "@/components/FormInput";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import RNPickerSelect from "react-native-picker-select";
import categories from "@/config/categories";
import { addWine } from "@/api/wines";
import { useRouter } from "expo-router";

export default function Add() {
  const [image, setImage] = useState<string | null>(null);
  const [wine, setWine] = useState({
    winery: "",
    wine: "",
    category: 0,
    coordinates: { latitude: 0, longitude: 0 },
  });
  const router = useRouter();
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleInputChange = (name: string, value: string) => {
    setWine((prevWine) => ({
      ...prevWine,
      [name]: value,
    }));
  };

  const handleSelectLocation = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setWine((prevWine) => ({
      ...prevWine,
      coordinates: { latitude, longitude },
    }));
    setRegion({
      ...region,
      latitude,
      longitude,
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    try {
      const result = await addWine({
        winery: wine.winery,
        wine: wine.wine,
        category: wine.category,
        longitude: region.longitude,
        latitude: region.latitude,
      });
      if(result) {
        router.back();
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "An error occurred while adding the wine.");
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-dark">
      <ScrollView className="flex-grow p-4">
        <View className="flex flex-row items-center justify-center p-5">
          <BackButton />
          <Text className="font-varela text-4xl font-bold text-white">
            Add a Wine
          </Text>
        </View>
        <View className="mb-10 flex gap-4">
          <FormInput
            label="Name"
            placeholder="Enter wine name"
            value={wine.winery}
            onChangeText={(text) => handleInputChange("winery", text)}
          />
          <FormInput
            label="Brewery"
            placeholder="Enter brewery"
            value={wine.wine}
            onChangeText={(text) => handleInputChange("wine", text)}
          />
          <Text className="font-varela text-xl font-semibold text-white">
            Category
          </Text>
          <RNPickerSelect
            onValueChange={(value) => handleInputChange("category", value)}
            items={categories
              .filter((category) => category.name.toLowerCase() !== "all")
              .map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            placeholder={{ label: "Select a category", value: null }}
            value={wine.category}
            style={{
              inputIOS: {
                backgroundColor: "#141921",
                color: "white",
                borderRadius: 20,
                fontSize: 18,
              },
              inputAndroid: {
                backgroundColor: "#141921",
                color: "white",
                borderRadius: 20,
                fontSize: 18,
              },
            }}
          />
          <Text className="font-varela text-xl font-semibold text-white">
            Location
          </Text>
          <View className="w-full overflow-hidden rounded-3xl">
            <MapView
              style={{ height: 200, width: "100%" }}
              initialRegion={region}
              onPress={handleSelectLocation}
            >
              <Marker coordinate={wine.coordinates} />
            </MapView>
          </View>
          <Text className="font-varela text-xl font-semibold text-white">
            Image
          </Text>

          <TouchableOpacity
            className="flex w-full flex-row items-center justify-start rounded-3xl bg-[#141921] py-2.5 pl-8 text-lg"
            onPress={pickImage}
          >
            <Ionicons
              name="cloud-upload-outline"
              size={24}
              color="#474747"
              className="mr-5"
            />
            <Text className="text-lg text-secondary">Upload an image</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} className="h-20 w-20" />}
          <TouchableOpacity
            className="mt-4 w-full items-center justify-center rounded-3xl bg-primary p-3"
            onPress={handleSubmit}
          >
            <Text className="text-xl font-bold text-white">Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
