import { Wine } from "@/types/wine";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
} from "react-native";
import DetailsImage from "@/components/DetailsImage";
import DetailsMap from "@/components/DetailsMap";

export default function Details() {
  const { wine } = useLocalSearchParams();
  const [wineDetails, setWineDetails] = useState<Wine>();

  useEffect(() => {
    if (wine) {
      const parsedWine = JSON.parse(wine as string) as Wine;
      setWineDetails(parsedWine);
    }
  }, [wine]);

  return (
    <ScrollView className="bg-dark p-4">
      <SafeAreaView>
        {wineDetails && <DetailsImage wine={wineDetails} />}
        {wineDetails && <DetailsMap wine={wineDetails} />}
      </SafeAreaView>
    </ScrollView>
  );
}
