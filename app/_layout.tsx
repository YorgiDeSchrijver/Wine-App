import { Stack } from "expo-router";
import "@/global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, statusBarBackgroundColor: "#0C0F14" }}
      />
    </Stack>
  );
}
