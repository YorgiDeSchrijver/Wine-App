import { TextInput, View } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

export default function SearchField() {
  return (
    <View className="my-5 mb-8 overflow-hidden rounded-3xl bg-[#141921]">
      <BlurView intensity={0} className="items-center justify-center">
        <TextInput
          className="w-full p-4 pl-16 text-lg text-white placeholder:text-secondary"
          placeholder="Search Wines..."
        />
        <Ionicons
          className="absolute left-5 stroke-white"
          name="search"
          size={26}
          color={"#474747"}
        />
      </BlurView>
    </View>
  );
}
