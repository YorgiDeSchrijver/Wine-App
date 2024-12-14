import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function BackButton() {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="rounded-2xl bg-dark p-2.5"
      onPress={() => router.back()}
    >
      <Ionicons name="chevron-back" color={"#4D4F52"} size={20} />
    </TouchableOpacity>
  );
}
