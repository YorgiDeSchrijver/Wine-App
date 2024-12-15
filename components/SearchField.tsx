import { TextInput, View } from "react-native";
import { BlurView } from "expo-blur";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function SearchField({ value, onChangeText, placeholder }: any) {
  return (
    <View className="mb-5 overflow-hidden rounded-3xl bg-[#141921]">
      <BlurView intensity={0} className="items-center justify-center">
        <TextInput
          className="w-full p-4 pl-16 text-lg text-white placeholder:text-secondary"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
        <FontAwesome
          className="absolute left-5 stroke-white"
          name="search"
          size={26}
          color={"#474747"}
        />
      </BlurView>
    </View>
  );
}
