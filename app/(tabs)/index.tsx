import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Image } from "@/components/ui/image";
import { Input, InputField } from "@/components/ui/input";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView className="p-3">
        <View className="flex flex-row justify-between">
          <TouchableOpacity className="h-10 w-10 overflow-hidden rounded-lg">
            <BlurView className="w-full items-center justify-center">
              <Ionicons name="menu" size={25} color={"#52555A"} />
            </BlurView>
          </TouchableOpacity>
          <View className="h-10 w-10 overflow-hidden rounded-lg">
            <BlurView>
              <Image
                source={{
                  uri: "https://chaumette.com/wp-content/uploads/2020/03/wine-gone-bad.jpg",
                }}
                alt="image"
                className="h-full w-full rounded-lg"
              />
            </BlurView>
          </View>
        </View>
        <View className="my-8 w-[80%]">
          <Text className="text-4xl font-semibold text-neutral-950">
            Discover wines
          </Text>
        </View>
        <Input
          variant="rounded"
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="Zoeken..." />
        </Input>
      </ScrollView>
    </SafeAreaView>
  );
}
