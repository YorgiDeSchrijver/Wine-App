import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Input, InputField } from "@/components/ui/input";
import Categories from "../../components/categories";
import { useState } from "react";

export default function Index() {
  const [activeCategoryId, setActiveCategoryId] = useState<number>(1);
  return (
    <SafeAreaView className="bg-primary-950">
      <ScrollView className="p-3">
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
        <Categories onchange={(id) => setActiveCategoryId(id)} />
      </ScrollView>
    </SafeAreaView>
  );
}
